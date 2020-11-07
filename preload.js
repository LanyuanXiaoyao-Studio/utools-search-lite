const Nanobar = require('nanobar')
const MouseTrap = require('mousetrap')
const squirrel = require('./utils/squirrel')
const cssList = require('./css')
const sites = require('./sites')
    // 插件依赖两组模板, 没有模板的规则都被过滤掉
    .filter(s => s.properties.SEARCH_LITE_TITLE_TEMPLATE !== null && s.properties.SEARCH_LITE_TITLE_TEMPLATE !== '')
    .filter(s => s.properties.SEARCH_LITE_DESC_TEMPLATE !== null && s.properties.SEARCH_LITE_DESC_TEMPLATE !== '')
const settings = require('./settings')

let loadingBar, input

utools.onPluginReady(() => {
  // 初始化松鼠集
  squirrel.initial()
  // 初始化进度条
  loadingBar = new Nanobar({
    classname: 'loading-bar'
  })
  // 初始化设置对话框
  settings.initial(squirrel)
  // 初始化样式
  let head = document.head || document.getElementsByTagName('head')[0]
  cssList.forEach(css => {
    let style = document.createElement('style')
    head.appendChild(style)
    style.appendChild(css)
  })
})

utools.onPluginEnter(({
                        code,
                        type,
                        payload,
                        optional
                      }) => {
  utools.subInputFocus()
})

const labelUtils = require('./utils/label')

let observe
// 监听节点变化
const initialObserver = () => {
  observe = new MutationObserver((mutations, observer) => {
    mutations.forEach(m => {
      console.log(m)
      if (m.addedNodes && m.addedNodes.length > 0) {
        let node = m.addedNodes[0]
        let html = node.innerHTML
        html = labelUtils.handle(html)
        node.innerHTML = html
      }
    })
  })
  let el = document.querySelector('#root .list div:nth-child(1)')
  observe.observe(el, {
    'childList': true
  })
}

const initialKeyBinding = () => {
  // 初始化按键绑定
  MouseTrap.bind('enter', async () => {
    if (document.hasFocus()) {
      let link = document.querySelector('#root .list .list-item-selected span.link').innerHTML
      if (link !== '') {
        utools.shellOpenExternal(link)
        // utools.ubrowser.goto(link).run({ width: 1000, height: 600 })
      }
    }
    else {
      if (input) {
        let {
          code,
          text,
          callback
        } = input
        let site = sites.find(s => s.code === code)
        if (site && text !== '') {
          callback([])
          loadingBar.go(45)
          let result = await squirrel.page({
            code: code,
            search: text
          })
          // console.log(JSON.stringify(result))
          loadingBar.go(100)
          if (result.code === 0) {
            let data = result.data
            if (data && data.list && data.list.length > 0) {
              callback(data.list)
              utools.subInputBlur()
            }
            else {
              utools.showNotification('资源获取成功, 但没有找到更多内容, 请更换搜索词')
            }
          }
          else {
            utools.showNotification('资源获取失败, 可能是网络问题, 尝试设置代理使用')
            callback([])
          }
        }
      }
    }
  })
  MouseTrap.bind('esc', () => {
    if (settings.isOpen()) {
      settings.close()
      utools.subInputFocus()
    }
    else {
      utools.subInputSelect()
    }
    return false
  })
  MouseTrap.bind('ctrl+t', () => {
    settings.open()
    utools.subInputBlur()
  })
}

const placeholder = 'Enter(回车): 搜索/选择  Ctrl + T: 打开设置'

let exportList = {}

const filterSites = text => sites
    .filter(site => {
      if (text && text !== '') {
        return site.name.toLowerCase()
                   .indexOf(text.toLowerCase()) > -1
      }
      return true
    })
    .map(site => {
      return {
        site: site,
        title: `#title{${site.name}}#other{${site.category}}`,
        description: site.description,
        icon: site.icon,
      }
    })

exportList['list'] = {
  mode: 'list',
  args: {
    enter: (action, callbackSetList) => {
      0
      initialObserver()
      callbackSetList(filterSites(''))
    },
    select: (action, itemData, callbackSetList) => {
      utools.redirect(itemData.site.name)
    }
  }
}

sites
    .forEach(s => {
      exportList[s.code] = {
        mode: 'list',
        args: {
          enter: () => {
            initialObserver()
            initialKeyBinding()
          },
          search: async (action, text, callbackSetList) => {
            input = {
              code: s.code,
              text: text,
              callback: list => callbackSetList(list.map(i => {
                let item = {
                  title: eval('`' + s.properties.SEARCH_LITE_TITLE_TEMPLATE + '`'),
                  description: eval('`' + s.properties.SEARCH_LITE_DESC_TEMPLATE + '`'),
                }
                if (s.properties.SEARCH_LITE_IMAGE_TEMPLATE !== null && s.properties.SEARCH_LITE_IMAGE_TEMPLATE !== '') {
                  item.icon = i.image
                }
                return item
              }))
            }
          },
          placeholder: placeholder
        }
      }
    })

window.exports = exportList

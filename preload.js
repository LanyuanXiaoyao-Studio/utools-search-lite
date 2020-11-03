const Nanobar = require('nanobar')
const MouseTrap = require('mousetrap')
const squirrel = require('./utils/squirrel')
const cssList = require('./css')
const sites = require('./sites')
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
          loadingBar.go(100)
          if (result.code === 0) {
            let data = result.data
            if (data && data.list && data.list.length > 0) {
              callback(data.list)
              utools.subInputBlur()
            }
          }
          else {
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
})

utools.onPluginEnter(({
                        code,
                        type,
                        payload,
                        optional
                      }) => {
  utools.subInputFocus()
})

const icons = require('./icon/icons')

let observe
// 监听节点变化
const initialObserver = () => {
  observe = new MutationObserver((mutations, observer) => {
    mutations.forEach(m => {
      if (m.addedNodes && m.addedNodes.length > 0) {
        let node = m.addedNodes[0]
        let html = node.innerHTML
        html = html.replace(/#link{(\n*.*?\n*)}/m, '<span class="link">$1</span>')
        html = html.replace(/#title{(\n*.*?\n*)}/m, '<span class="title">$1</span>')
        html = html.replace(/#description{(\n*.*?\n*)}/m, `<span class="description">$1</span>`)

        html = html.replace(/#star{(\n*.*?\n*)}/m, `<span class="label-tag star"><img class="label-logo" src="${icons.like}" alt=""/>$1</span>`)
        html = html.replace(/#author{(\n*.*?\n*)}/m, `<span class="label-tag author"><img class="label-logo" src="${icons.author}" alt=""/>$1</span>`)
        html = html.replace(/#version{(\n*.*?\n*)}/m, `<span class="label-tag version"><img class="label-logo" src="${icons.version}" alt=""/>$1</span>`)
        html = html.replace(/#license{(\n*.*?\n*)}/m, `<span class="label-tag license"><img class="label-logo" src="${icons.license}" alt=""/>$1</span>`)
        html = html.replace(/#datetime{(\n*.*?\n*)}/m, `<span class="label-tag datetime"><img class="label-logo" src="${icons.time}" alt=""/>$1</span>`)
        html = html.replace(/#language{(\n*.*?\n*)}/m, `<span class="label-tag language"><img class="label-logo" src="${icons.language}" alt=""/>$1</span>`)
        html = html.replace(/#download{(\n*.*?\n*)}/m, `<span class="label-tag download"><img class="label-logo" src="${icons.download}" alt=""/>$1</span>`)
        node.innerHTML = html
      }
    })
  })
  let el = document.querySelector('#root .list div:nth-child(1)')
  observe.observe(el, {
    'childList': true
  })
}

const placeholder = 'Enter(回车): 搜索/选择  Ctrl + T: 打开设置'

let exportList = {}
sites
    .filter(s => s.properties !== null)
    .filter(s => s.properties.SEARCH_LITE_SUPPORT !== null && s.properties.SEARCH_LITE_SUPPORT === 'true')
    .filter(s => s.properties.SEARCH_LITE_TITLE_TEMPLATE !== null && s.properties.SEARCH_LITE_TITLE_TEMPLATE !== '')
    .filter(s => s.properties.SEARCH_LITE_DESC_TEMPLATE !== null && s.properties.SEARCH_LITE_DESC_TEMPLATE !== '')
    .forEach(s => {
      exportList[s.code] = {
        mode: 'list',
        args: {
          enter: () => initialObserver(),
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

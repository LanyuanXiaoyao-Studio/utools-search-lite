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

/**
 * 行模板
 {
    title: `#title{${i.title}}#version{${i.version}}#author{${i.author}}#star{${i.star}}#language{${i.language}}#license{${i.license}}#download{${i.download}}#datetime{${i.datetime}}`,
    description: `#description{${i.description}}#link{${i.link}}`,
    icon: i.image
 }
 */
window.exports = {
  'npm': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '21288140-5491-4aac-a827-e084bfa70ae2',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#author{${i.author}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`,
              icon: i.image
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'maven': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '1f5443c7-9b0a-43e8-9420-83b7d49e16eb',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`,
              icon: i.image
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'maven-sonatype': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: 'a2387be5-1b9d-41df-b28a-246c972e492f',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#author{${i.author}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'github': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '3a3d7617-80ef-44f7-a369-9032f13aa9a0',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#star{${i.star}}#language{${i.language}}#license{${i.license}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'gitee': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '19880471-f92d-4d14-9705-45c9e8ded084',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#star{${i.star}}#language{${i.language}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'dockerhub': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: 'de83842d-4d2f-485c-be5a-02ad2a443664',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#author{${i.author}}#star{${i.star}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`,
              icon: i.image
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'pypi': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '651c444e-1c66-457c-895d-2eea27c9a306',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'rubygem': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '2ebf794a-fb1c-4f55-9737-0db9da3878fe',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#star{${i.star}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    }
  },
  'pub': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '9b429345-b2a3-4530-b726-d3395b2221a4',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#star{${i.star}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    },
  },
  'pub-cn': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '3e0cc26f-a96a-4f23-ac1c-48b9b87d825b',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#star{${i.star}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    },
  },
  'nuget': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '055ae385-097a-4598-8c7b-e3d43e1f404e',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#author{${i.author}}#download{${i.download}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`,
              icon: i.image
            }
          }))
        }
      },
      placeholder: placeholder
    },
  },
  'cargo': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: 'e0c9c31c-14c6-4c0d-a66f-b2a06e8b1a82',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#version{${i.version}}#download{${i.download}}#datetime{${i.datetime}}`,
              description: `#description{${i.description}}#link{${i.link}}`
            }
          }))
        }
      },
      placeholder: placeholder
    },
  },
  'lua': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '23934197-14c3-4ad9-879f-ca27527711b2',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#author{${i.author}}#download{${i.download}}`,
              description: `#description{${i.description}}#link{${i.link}}`,
            }
          }))
        }
      },
      placeholder: placeholder
    },
  },
  'packagist': {
    mode: 'list',
    args: {
      enter: () => initialObserver(),
      search: async (action, text, callbackSetList) => {
        input = {
          code: '97081e97-54e1-49ad-8558-4adce0f99f9f',
          text: text,
          callback: list => callbackSetList(list.map(i => {
            return {
              title: `#title{${i.title}}#star{${i.star}}#download{${i.download}}`,
              description: `#description{${i.description}}#link{${i.link}}`,
            }
          }))
        }
      },
      placeholder: placeholder
    },
  },
}

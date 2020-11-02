const A11yDialog = require('a11y-dialog')
const phin = require('phin').unpromisified

let dialog

const createElement = (parent, name, inner, attributes) => {
  let el = document.createElement(name)
  if (inner) {
    el.innerHTML = inner
  }
  if (attributes) {
    Object.keys(attributes)
          .forEach(key => el.setAttribute(key, attributes[key]))
  }
  parent.appendChild(el)
  return el
}

let squirrel, lastHeight, isOpen = false

// language=HTML
let contentHtml = `
<div tabindex="-1" data-a11y-dialog-hide></div>
<dialog aria-labelledby="setting-dialog-title">
  <button type="button" data-a11y-dialog-hide class="setting-dialog-close-button">&times;</button>
  <h3 id="setting-dialog-title" class="setting-dialog-title">设置</h3>
  <div class="setting-dialog-container">
    <h4 class"item-title">代理设置</h4>
    <input class="proxy-input" placeholder="IP:PORT 无需协议名(代理仅支持 HTTP)" />
    <button class="proxy-save-button">保存</button>
    <button class="proxy-resets-button">清空代理</button>
    <h4 class"item-title">关于</h4>
    <div class="about-content"></div>
    <a class="publish-url" href="#">插件发布页</a>
    <h4 class"item-title">捐赠</h4>
    <div class="lines donate-lines"></div>
    <div class="donate-content">
      <div class="donate-left">
        <img class="donate-code">
      </div>
      <div class="donate-right">
        <img class="avatar" src="https://gitee.com/lanyuanxiaoyao/utools-data/raw/master/avatar.png">
        <div class="name">lanyuanxiaoyao</div>
        <div class="slogan">落魄码农&nbsp;|&nbsp;靠爱发电</div>
      </div>
    </div>
    <h4 class"item-title">更多</h4>
    <div class="lines extra-lines"></div>
    <div class="extra-content"></div>
  </div>
</dialog>
`

module.exports = {
  initial(squirrelInput) {
    squirrel = squirrelInput

    let root = document.getElementById('root')
    let droot = createElement(root, 'div', contentHtml, {
      id: 'setting-dialog'
    })
    let proxyInput = document.querySelector('#setting-dialog .setting-dialog-container .proxy-input')
    document.querySelector('#setting-dialog .setting-dialog-container .proxy-save-button').onclick = () => {
      let proxyText = proxyInput.value
      try {
        let valueSplit = proxyText.split(':')
        let hostname = valueSplit[0]
        let port = parseInt(valueSplit[1])
        if (hostname && port && hostname !== '' && port > 0) {
          let result = squirrel.fetch()
          if (result.code === 0) {
            let information = result.data
            information.proxy.hostname = hostname
            information.proxy.port = port
            squirrel.save(information)
            alert('设置成功')
          }
          else {
            alert('设置失败')
          }
        }
        else {
          alert('设置失败')
        }
      } catch (e) {
        alert('设置失败')
      }
    }
    document.querySelector('#setting-dialog .setting-dialog-container .proxy-resets-button').onclick = () => {
      try {
        let result = squirrel.fetch()
        if (result.code === 0) {
          let information = squirrel.fetch()
          information.proxy.hostname = ''
          information.proxy.port = -1
          squirrel.save(information)
          alert('设置成功')
          proxyInput.value = ''
        }
        else {
          alert('设置失败')
        }
      } catch (e) {
        alert('设置失败')
      }
    }
    let aboutContent = document.querySelector('#setting-dialog .setting-dialog-container .about-content')
    let aboutPublishUrl = document.querySelector('#setting-dialog .setting-dialog-container .about-content .publish-url')
    let donateLines = document.querySelector('#setting-dialog .setting-dialog-container .donate-lines')
    let donateCode = document.querySelector('#setting-dialog .setting-dialog-container .donate-content .donate-code')
    let avatar = document.querySelector('#setting-dialog .setting-dialog-container .donate-content .avatar')
    let name = document.querySelector('#setting-dialog .setting-dialog-container .donate-content .name')
    let slogan = document.querySelector('#setting-dialog .setting-dialog-container .donate-content .slogan')
    let extraContent = document.querySelector('#setting-dialog .setting-dialog-container .extra-content')
    let extraLines = document.querySelector('#setting-dialog .setting-dialog-container .extra-lines')

    dialog = new A11yDialog(droot)
    dialog.proxyInput = proxyInput
    dialog.on('hide', () => {
      utools.setExpendHeight(lastHeight)
    })

    phin('https://gitee.com/lanyuanxiaoyao/utools-data/raw/master/common.json', (error, response) => {
      if (!error) {
        let data = JSON.parse(response.body.toString())
        aboutContent.innerHTML = data.disclaimer
        donateLines.innerHTML = data.author.lines
        donateCode.setAttribute('src', data.author.donateCode)
        avatar.setAttribute('src', data.author.avatar)
        name.innerHTML = data.author.name
        name.onclick = () => utools.shellOpenExternal(data.author.utoolsHome)
        slogan.innerHTML = data.author.slogan
      }
    })
    phin('https://gitee.com/lanyuanxiaoyao/utools-data/raw/master/utools-developer-search/common.json', (error, response) => {
      if (!error) {
        let data = JSON.parse(response.body.toString())
        aboutPublishUrl.onclick = () => utools.shellOpenExternal(data.publish)
      }
    })
    phin('https://gitee.com/lanyuanxiaoyao/utools-data/raw/master/plugins.json', (error, response) => {
      if (!error) {
        let data = JSON.parse(response.body.toString())
        extraLines.innerHTML = data.lines
        data.plugins.forEach(p => {
          let node = createElement(extraContent, 'div', null, {
            class: 'extra-row'
          })
          node.innerHTML = `
          <div class="icon">
            <img src="${p.icon}">
          </div>
          <div class="info">
            <div class="plugin-name">
              ${p.name}
              <a href="#">试一试→</a>
            </div>
            <div class="plugin-description">${p.description}</div>
          </div>
          `
          node.onclick = () => utools.redirect(p.key)
        })
      }
    })
  },
  open() {
    let result = squirrel.fetch()
    if (result.code !== 0) {
      dialog.proxyInput.value = ''
    }
    else {
      let information = result.data
      let proxy = information.proxy
      if (proxy.hostname !== '' && proxy.port !== -1) {
        dialog.proxyInput.value = `${proxy.hostname}:${proxy.port}`
      }
      else {
        dialog.proxyInput.value = ''
      }
    }
    let height = document.documentElement.clientHeight
    lastHeight = height
    if (height < 480)
      utools.setExpendHeight(480)
    dialog.show()
    document.location = '#'
    isOpen = true
  },
  close() {
    dialog.hide()
    isOpen = false
  },
  isOpen() {
    return isOpen
  }
}

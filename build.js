const fs = require('fs')
const child_process = require('child_process')

const getGitCommitCount = () => parseInt(child_process.execSync('git rev-list HEAD --first-parent --count', {encoding: 'utf8'})
                                                      .trim())

// 构建版本号
let version = `0.2.${getGitCommitCount() + 1}`

// 版本号写入到 package.json 里面
let packageConfigPath = './package.json'
let packageConfig = JSON.parse(fs.readFileSync(packageConfigPath, {encoding: 'utf8'}))
packageConfig['version'] = version
let description = packageConfig['description']
let author = packageConfig['author']
fs.writeFileSync(packageConfigPath, JSON.stringify(packageConfig, null, 2))

// plugin.json 模板
let pluginConfigTemplate = {
  'pluginName': '资源搜索 Lite',
  'version': version,
  'description': description,
  'author': author,
  'homepage': 'http://lanyuanxiaoyao.com',
  'logo': 'logo.png',
  'preload': 'preload.js',
  'pluginSetting': {
    'single': true
  },
  'features': [
    {
      code: 'list',
      explain: '展示所有支持的站点',
      cmds: ['All Site', '所有站点', '全部站点']
    }
  ]
}

const isNil = require('licia/isNil')
const isEmpty = require('licia/isEmpty')
const startWith = require('licia/startWith')


// 规则文件所在位置, 在这里我是通过其他工具生成的规则文件
let sitesJsonPath = '/Users/lanyuanxiaoyao/Project/utools-plugin/utools-data/utools-torrent/sites/ALL.json'

let sitesSource = JSON.parse(fs.readFileSync(sitesJsonPath, {encoding: 'utf8'}))
let sitesJsText = `module.exports = ${JSON.stringify(sitesSource, null, 2)}`
// 往当前目录复制一份, 保持稳定, 避免源文件删了影响这里重新打包
fs.writeFileSync('./sites.js', sitesJsText)

const defaultIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEUAAAA/RFFESlM6P0g5P0c5PUU9Qkk5QEg7QkpARlFBRk48P0ZES1X///9xxP9mvv9AR09KU13R7P90zv+x3/+Z1f+K0P9ko9Fduv/l9f/d8f/Iys1OaYHp6uvf4OLNz9FXXWXs9//G5/+kp6tvdX32+/+p2/+Byf+ws7dekbd4fYO+5P9ksOhhi6u+x82CuOK007hMAAAADXRSTlMAaBnQ7bqumok9DtoolNF8hgAAAYRJREFUOMuVUwmSgjAQ3Mgt5gQCAooCouCx///dTghodK2y7KI4qic9TWfy8w2WAfI9z0fB8i29QI7N+G7Hme2gxX8eWaxtiu1msy2aloXodbnLhgLPEGnJ3CeRlcVP+AERkZ5bK2O9xStsoKMkSrn10HBNfn1OCAAq3Ls/ZugLQikhcEU9Q1ODcDDkkwyWHyUBlOFiEqjMArVerImyoSWWTosN1JRQifGZAkpHZRrYjab2dQ73A/RQT9F1ydUOxg46ofxIiVB1Z+A1bmMPn//KWLvLOvyELfehwOOXTII0CND6uWCz83SBkhZgPsbvCnx+kfr3TF7EYm6BWBrFeQz57aes61wkJIPPYjQZ2NeIjJDafpypqGmCcWMHY1Al0aBkPSrIDPgjvLcQ1NRD8XeX+wTCBL5iaNqsu8RsU9QHuA9qs7REryWowAZODD0GZmxC5cHgK+4aIwcVLwKVGjlzaHsSmUmd9NCaY1+mVM50MeixN4FCVl5v88Gx0Kej9+nwfoE/h9gtUp11ZxUAAAAASUVORK5CYII='

const sites = require('./sites')
sites
    // 不支持 search-lite 的, 没有写 key 的都被过滤掉
    .filter(s => !isNil(s.properties))
    .filter(s => !isNil(s.properties.SEARCH_LITE_SUPPORT) && s.properties.SEARCH_LITE_SUPPORT === 'true')
    .filter(s => !isNil(s.properties.SEARCH_LITE_KEYS) && !isEmpty(s.properties.SEARCH_LITE_KEYS))
    .forEach(s => {
      // 没有图标的就用默认图标
      if (isEmpty(s.icon)) s.icon = defaultIcon
      if (startWith(s.icon, 'data:image/png;base64,')) {
        let data = s.icon.replace(/^data:image\/png;base64,/, '')
        fs.writeFileSync(`./icon/${s.code}.png`, data, 'base64')
      }
      pluginConfigTemplate.features.push({
        code: s.code,
        icon: `icon/${s.code}.png`,
        explain: s.description,
        cmds: [
          ...s.properties.SEARCH_LITE_KEYS.split(',')
        ]
      })
    })

let pluginConfig = JSON.stringify(pluginConfigTemplate, null, 2)

fs.writeFileSync('./plugin.json', pluginConfig)

const fs = require('fs')
const child_process = require('child_process')

const getGitCommitCount = () => child_process.execSync('git rev-list HEAD --first-parent --count', {encoding: 'utf8'}).trim()

let version = `0.1.${getGitCommitCount()}`

let packageConfigPath = './package.json'
let packageConfig = JSON.parse(fs.readFileSync(packageConfigPath))
packageConfig['version'] = version
let description = packageConfig['description']
let author = packageConfig['author']
fs.writeFileSync(packageConfigPath, JSON.stringify(packageConfig, null, 2))

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
  'features': []
}

const isNil = require('licia/isNil')
const isEmpty = require('licia/isEmpty')
const startWith = require('licia/startWith')

const defaultIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEUAAAA/RFFESlM6P0g5P0c5PUU9Qkk5QEg7QkpARlFBRk48P0ZES1X///9xxP9mvv9AR09KU13R7P90zv+x3/+Z1f+K0P9ko9Fduv/l9f/d8f/Iys1OaYHp6uvf4OLNz9FXXWXs9//G5/+kp6tvdX32+/+p2/+Byf+ws7dekbd4fYO+5P9ksOhhi6u+x82CuOK007hMAAAADXRSTlMAaBnQ7bqumok9DtoolNF8hgAAAYRJREFUOMuVUwmSgjAQ3Mgt5gQCAooCouCx///dTghodK2y7KI4qic9TWfy8w2WAfI9z0fB8i29QI7N+G7Hme2gxX8eWaxtiu1msy2aloXodbnLhgLPEGnJ3CeRlcVP+AERkZ5bK2O9xStsoKMkSrn10HBNfn1OCAAq3Ls/ZugLQikhcEU9Q1ODcDDkkwyWHyUBlOFiEqjMArVerImyoSWWTosN1JRQifGZAkpHZRrYjab2dQ73A/RQT9F1ydUOxg46ofxIiVB1Z+A1bmMPn//KWLvLOvyELfehwOOXTII0CND6uWCz83SBkhZgPsbvCnx+kfr3TF7EYm6BWBrFeQz57aes61wkJIPPYjQZ2NeIjJDafpypqGmCcWMHY1Al0aBkPSrIDPgjvLcQ1NRD8XeX+wTCBL5iaNqsu8RsU9QHuA9qs7REryWowAZODD0GZmxC5cHgK+4aIwcVLwKVGjlzaHsSmUmd9NCaY1+mVM50MeixN4FCVl5v88Gx0Kej9+nwfoE/h9gtUp11ZxUAAAAASUVORK5CYII='

const sites = require('./sites')
sites
    .filter(s => !isNil(s.properties))
    .filter(s => !isNil(s.properties.SEARCH_LITE_SUPPORT) && s.properties.SEARCH_LITE_SUPPORT === 'true')
    .filter(s => !isNil(s.properties.SEARCH_LITE_KEYS) && !isEmpty(s.properties.SEARCH_LITE_KEYS))
    .forEach(s => {
      let icon = defaultIcon
      if (startWith(s.icon, 'data:image/png;base64,')) {
        icon = s.icon
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

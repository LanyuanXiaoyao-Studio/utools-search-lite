const icons = require('../icon/icons')

const emptyLabelRegex = name => new RegExp('#' + name + '{\\s*}', 'm')
const replaceLabelRegex = name => new RegExp('#' + name + '{(\\s*.*?\\s*)}', 'm')

const labels = [
  'star',
  'size',
  'view',
  'score',
  'author',
  'number',
  'license',
  'version',
  'datetime',
  'language',
  'location',
  'download'
]

const handleMeta = (name, html) => {
  if (!emptyLabelRegex(name)
      .test(html)) {
    return html.replace(replaceLabelRegex(name), `<span class="${name}">$1</span>`)
  }
  return html
}

const handleLabel = (name, html) => {
  if (!emptyLabelRegex(name)
      .test(html)) {
    return html.replace(replaceLabelRegex(name), `<span class="label-tag ${name}">${icons[name]}$1</span>`)
  }
  return html
}

module.exports = {
  handle(html) {
    html = handleMeta('link', html)
    html = handleMeta('title', html)
    html = handleMeta('description', html)

    labels.forEach(name => html = handleLabel(name, html))

    return html
  }
}

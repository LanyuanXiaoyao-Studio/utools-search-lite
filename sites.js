module.exports = [{
  'code': '21288140-5491-4aac-a827-e084bfa70ae2',
  'name': 'npm',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAARVBMVEUAAADVAADVAADVAADVAADVAADVAADVAADVAAD////64uLqgIDaHR3kWVn3yMj+9vbeNzfxpqbdLS351dXnamriSkrvnJyHDnpAAAAACHRSTlMAgFkJyOMcp6/4QBsAAAEwSURBVHja7drNjoIwFIBRxp9RQUUFff9HndVkSmJjhQm56jlLmtvy7bpoBQAAAAAAAAAAAAAA8L++3kS1fRNCohESjZBohEQjJJphyL7UjFN5+ZC+LtRdkqlrXeqaTF26eqo+G9LsCrWnZOqwK3VIpk7tbqpGiBAhQoQIEfK5Iefmz60tDTk2ibY0pGsSdXZhVMjw9OKQ9JB9XRpy3iaO2QUhQoQIESJEiBAhQoQIESJEyOiQ7pxoXzhkSIgQIUKECBEiZHxIf7xj8BLm9+PlUUhdvFVq8Gu3Rwv9MGSa/O13BkLuETKJkDwhkwjJEzKJkLwwIYtR1skW+8Md6a1yvZhBNcpytX3C+ruKSkg0QqIREo2QaIREs9ysnrCJG1Itn1IBAAAAAAAAAAAA8Fp+APyx9PaBxSQ3AAAAAElFTkSuQmCC',
  'target': 'SEARCH',
  'home': 'https://www.npmjs.com',
  'author': 'lanyuanxiaoyao',
  'description': 'npm is the world’s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage development as well.',
  'parser': 'CSS',
  'rules': {
    'https://www\\.npmjs\\.com/search\\?q=.+': {
      'list': {
        'expression': 'main .center aside + div > section',
        'title': {'expression': 'div.w-80 div:nth-child(1) h3'},
        'description': {'expression': 'div.w-80 h4:contains(Description) + p'},
        'image': {
          'expression': 'div.w-80 h4:contains(Publisher) + div div:nth-child(1) > div > a > img',
          'attribute': 'src'
        },
        'author': {'expression': 'div.w-80 h4:contains(Publisher) + div div:nth-child(1) > a[href]'},
        'dateTime': {
          'expression': 'div.w-80 h4:contains(Publisher) + div span[title]',
          'script': 'let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[2]\n}\nreturn \'\''
        },
        'link': {'expression': 'div.w-80 div:nth-child(1) > a', 'attribute': 'href', 'prefix': '{home}'},
        'extra': {
          'version': {
            'expression': 'div.w-80 h4:contains(Publisher) + div span[title]',
            'script': 'let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn \'\''
          }
        }
      }, 'next': {'expression': 'main .center aside + div > section + div > a:contains(»)', 'prefix': '{home}'}
    },
    'https://www\\.npmjs\\.com/package/.+': {
      'text': {
        'expression': 'html',
        'title': {'expression': '#top span[title]', 'attribute': 'title'},
        'description': {'expression': 'head meta[name=description]', 'attribute': 'content'},
        'dateTime': {
          'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Last publish) + p time',
          'attribute': 'title'
        },
        'extra': {
          'version': {'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Version) + p'},
          'size': {'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Unpacked) + p'},
          'number': {'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Total Files) + p'},
          'license': {'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(License) + p'}
        }
      },
      'list': {
        'expression': '#top > div > h3:contains(Install) + p:has(code)',
        'content': {'expression': 'svg + code[title]'}
      }
    }
  },
  'search': '{home}/search?q={query}'
}, {
  'code': '1f5443c7-9b0a-43e8-9420-83b7d49e16eb',
  'name': 'Maven',
  'category': '开发',
  'icon': 'data:image/png;base64,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',
  'target': 'SEARCH',
  'home': 'https://mvnrepository.com',
  'author': 'lanyuanxiaoyao',
  'description': 'Apache Maven is a software project management and comprehension tool',
  'parser': 'CSS',
  'rules': {
    'https://mvnrepository\\.com/search\\?q=.+': {
      'list': {
        'expression': '#maincontent > .im',
        'title': {'expression': 'h2.im-title > a:nth-child(2)'},
        'description': {
          'expression': '.im-description',
          'script': 'let regex = /(.*?)\\s*Last Release on\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn \'\''
        },
        'image': {'expression': 'img.im-logo', 'attribute': 'src', 'prefix': '{home}'},
        'author': {
          'expression': 'p.im-subtitle',
          'script': 'let regex = /(.*?)\\s*»\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn \'\''
        },
        'dateTime': {
          'expression': '.im-description',
          'script': 'let regex = /(.*?)\\s*Last Release on\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[2]\n}\nreturn \'\''
        },
        'link': {'expression': 'h2.im-title > a:nth-child(2)', 'attribute': 'href', 'prefix': '{home}'}
      }
    }
  },
  'search': '{home}/search?q={query}'
}, {
  'code': 'a2387be5-1b9d-41df-b28a-246c972e492f',
  'name': 'Maven (Sonatype)',
  'category': '开发',
  'icon': 'data:image/png;base64,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',
  'target': 'SEARCH',
  'home': 'https://search.maven.org',
  'author': 'lanyuanxiaoyao',
  'description': 'Official search of Maven Central Repository.',
  'parser': 'JSON',
  'rules': {
    'https://search\\.maven.org/solrsearch/select\\?q=.+&start=0&rows=20': {
      'list': {
        'expression': '$.response.docs',
        'title': {'expression': '$.a'},
        'description': {'expression': '$.repositoryId', 'prefix': 'From: '},
        'author': {'expression': '$.g'},
        'dateTime': {
          'expression': '$.timestamp',
          'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
        },
        'link': {
          'expression': '$',
          'script': 'let data = JSON.parse(text)\nreturn \'https://ossindex.sonatype.org/component/pkg:maven/\' + data.g + \'/\' + data.a + \'@\' + data.latestVersion'
        },
        'extra': {'version': {'expression': '$.latestVersion'}}
      }
    }
  },
  'search': '{home}/solrsearch/select?q={query}&start=0&rows=20'
}, {
  'code': '3a3d7617-80ef-44f7-a369-9032f13aa9a0',
  'name': 'Github',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAsVBMVEUAAABBQUFISEhAQEBFRUVAQEA9PT1JSUk3Nzc3Nzc2NjY2NjY9PT1JSUk/Pz82NjZHR0c2NjZFRUVISEg2NjY1NTVAQED9/f36+vo3Nzf09PRJSUns7Oz39/dKSkrx8fHl5eX///84ODhHR0dAQECWlpbS0tLl5eV4eHhnZ2f4+Pj09PTDw8Pa2tqOjo6CgoJvb29fX19YWFjt7e28vLyGhobf39+srKyjo6OdnZ2zs7MIQUHGAAAAIXRSTlMAFeJNlEEg127o3tVV79efafHCtbSQ7+3bxJ11S72hfxPkkvamAAAD/ElEQVRo3u2Zx2LiMBCGY1pgKQkJ6WQTacYNTO+8/4Ot1wEPyIqKzZH/kHKZz9M08vjmqquuMpZTrVceOp1nxOdO56FSrzqXtF6udDCjTqV8GevVyrNgmiOPf8TCu+KM+xIAYFb8oE69kPmP2HwsqQdHNfIjyrF5AogMnoASRCuX+dojxNJ6kPzRq+V4/DbEUnvA8YjoWjtRAVLGA8oyIe7s2uoBFIBj8JHMx3pzLOzfAhh7kJKaNeP0xtVj4AHl4KA/hgSnBBpA1oNDvdYM46MG8GwOUh9M8kD51XiAQg6STBvXJ5mVekDWBT3p7LdO7K9W08S2KgcxJZwEnNTSFFCbACFjbLAMpG2chiiIWCwgQFed6EcgwI4lWk9SwxlNfJZoxUk95QEEJPTYQaMZj43DdOJuN/v9ZutOwuSRwzU7aHlKVQ2h0mnlDFmqrRsN2ZkW0XhP//mngD+K+QIknDML8VPV1Q5Qji0Ep4DGr/MXTgEzGwAauVA6A4BliPRZqArnw4IZy+PnqkoBfwXA3hywEwDy8dYWAFtzgCsAuromi4VTZqGZQCjrxjwgLGwAvsGhSnOGTqLcQWpKBpngwNAOMBRccDRFimNmqZWuUO/PAZEtYHkOqGtyTBHKGaMn1aihky5/pfbURYSBPSDQlFEpX45JY8151z4DuPYAl6tnAhQAkAckBYBCVKQRNCGaFE1yV53k4mXakJcpyR6AmjJ9PE+Cz0h5DuyebhxsbAEb3dD8yDXPSKHusKtCoRj52nuFIwBWhbqAO9qRiSNmoRHPjEzdQMDZgBlrMDcY+mUQCIFlF2vfESBDMPRhkLHfNbk6AmK4NiqgGRd1p778Yqyf3+AOtY+/41lV1dd3dzcBQii98F3gJN1L1D01cbSHAwH53PWkfgw891g8mGljlQs4HrDlYg2YxovzeSBclKIgrUwUCQ3dSyDOfDaceoiUksxdeAFk3tQB6maE/228QUyzzpeSmxySeVRmINtsOB+yyFuRD3OW0fw3D8rKVQJNfd8bhMdNCN9KX5tQ5kFPvY1qHwDox1HwAn5YUnhZgCf3oOHo1jl0Mxp5zBtPwzDYyXphIc9By2QhRW8g05gxYluXSSRtgSejlRpdjRYDttmz9UgKSHJgu1KjpSBONIcpJ+NHNR2btSbORhoABQitFqe19KvBdLv0fH8UbeQAJBds7FOUaI8mA4iL2WYtx3IcfyQFCBX65hRY78sBJKQhZqxWWw9Iv7Tk+sriPJp70HPyfSS61QIwqf5yga9o6hDRZ678iNtk9P+6aWzeX+JTI0QyQATdu+rNRdR/f2UZvb73by6o7/7X++frywtjLy+vn+9f/e+bq666ylT/AMNpnFbsP/6hAAAAAElFTkSuQmCC',
  'target': 'SEARCH',
  'home': 'https://github.com',
  'author': 'lanyuanxiaoyao',
  'description': 'GitHub is where people build software. More than 50 million people use GitHub to discover, fork, and contribute to over 100 million projects.',
  'parser': 'JSON',
  'tags': {
    'Trending Today': '{home}/trending?since=daily',
    'Trending This Week': '{home}/trending?since=weekly',
    'Trending This Month': '{home}/trending?since=monthly'
  },
  'rules': {
    'https://api\\.github\\.com/search/repositories\\?q=.+': {
      'list': {
        'expression': '$.items',
        'title': {'expression': '$.full_name'},
        'description': {'expression': '$.description'},
        'dateTime': {
          'expression': '$.updated_at',
          'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
        },
        'link': {'expression': '$.html_url'},
        'extra': {
          'star': {'expression': '$.stargazers_count'},
          'language': {'expression': '$.language'},
          'license': {'expression': '$.license.name'}
        }
      }
    }
  },
  'search': 'https://api.github.com/search/repositories?q={query}'
}, {
  'code': '19880471-f92d-4d14-9705-45c9e8ded084',
  'name': 'Gitee',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAe1BMVEUAAADHHCLHHSPHHCLHHCPHHSPHHSLIHCLHHSHHHSPHHSPHHCTHHSPHHCLHHSLGHCTHHCPHHSLHHSLHHSP////FEBfKKC300tPNMzn54uP88PD66OjRRUrQP0X22NjaZmrxx8jvvsDnmp3gf4P99fbzzM7edXnqp6nVVluEAD+GAAAAE3RSTlMAOuAgCtbCYVXprIrOlZ59RrkqkApUigAAAm5JREFUWMOtmOt2gjAMgAu23BG32II6YXjd+z/hztnYYmuvwvfb8520SaQJsUCjtCySisUxq5KiTCNKXmCVritQYOt0FajZ1DFoieuNv4Vmb2DhLfM8YpaAgyQjbt5L8KB8d3maHLzIG3uqCvCmsCQwYhAAi4yeHILII4MnhkDiaK4HTfM8SL55yheDl4jV3Onyzi1gw1C5DnUWAGEC0NRIB3vWiOE0XlsT49e/KV8RpFY13bnfWvnEmEr0ZKrnfNg66AUeLiMTtFI8p62T9kFUUQwoxIMiNaREFp1dEvVokEw1LXu6vY+oBQ5IhCnTBnTYmehvjx6of2oolzyi/8/w0BnBg2EtpXJAw5/n7m4RJCWErGXRSao4X9aEUCZ5YJxEQ4gHGFVzBtfpnrsgEUTqFYn2V7QLFKWkdInsl42dWzhEXFjSjxQksYv4rT9o6NVcJKSyirjYbbVcQTZVhNlF3cHWtAgj8WuiVhHFy4nYMiLmvmw/UeWR/v0DF5MocRdkd3zkbhAVoS1yvOhFZWDT8uNeL0pJFCb6MEQUEcqCRIO+RRglZK0XCa7zwOckGjlX/mpJqhUdBNcA9+3ESbki/ByhaPrl8eOJYYoH/9Klp02tiCYue5WLsflr/GRLIjdnNWc/JMGivZzTBJ81gaKbHFCGD60w0Rlzjw8tDAnfEHZ2A9cGhInDirPQ3jrFU2qfx/xrbI1cx/sgUIM1hDRoAmFkesbLNKYRgtvQzNx06aEGx8c5Y9b8wW/JUXT54RjZxEHxbCz7jJAFgnWrQZvYM5yGEjsrvyXLavG1z/xF1PzVWPiyjoUs6xZbH34Dl8k6vQz2o2AAAAAASUVORK5CYII=',
  'target': 'SEARCH',
  'home': 'https://gitee.com',
  'author': 'lanyuanxiaoyao',
  'description': 'Gitee.com 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 500 万的开发者选择 Gitee。',
  'parser': 'JSON',
  'rules': {
    'https://gitee\\.com/api/v5/search/repositories\\?q=.+': {
      'list': {
        'expression': '$',
        'title': {'expression': '$.human_name'},
        'description': {'expression': '$.description'},
        'dateTime': {
          'expression': '$.updated_at',
          'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
        },
        'link': {'expression': '$.html_url'},
        'extra': {
          'star': {'expression': '$.stargazers_count'},
          'language': {'expression': '$.language'},
          'license': {'expression': '$.license'}
        }
      }
    }
  },
  'search': '{home}/api/v5/search/repositories?q={query}'
}, {
  'code': 'de83842d-4d2f-485c-be5a-02ad2a443664',
  'name': 'Docker Hub',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA8FBMVEUAAAAMoO8ApvEHp/EDqfQNqvUDqfQCktsPoOoDqvQDqfUCkNsDqfQ2R084se0CqvQCqfQAl+ELj9cCktwEqPFdwPECj9k3R04DqvQDld8El+AUktQDpPAxSE5Puu5Cte0Dk94Dk90DqfQEqfQEld03Rk86hqw5i7Erqeg2SE41R00CiNEDqfQBV5s3R0+B1Po1S1b////x+f1vy/YtWW5MW2MxTl6t2fEHoOUFpu4eltcVeq0iaowoYHsQjsgedJshcJMlZ4Y5quXHy809VmF5zvRkxPInm9oHgcMWhbgWcqRUfpJAaoBzutsRl9lknrmxrhiiAAAAK3RSTlMABhoO9DTo0y6xUt3cvad+bTz7vmT46uLGmXhiRQ/uzsmsoouKTcKtfHUrC+CuDQAAAnpJREFUaN7s0bsOgzAMhWEnkIhEkcLAwMBEx56+/+sVoRKu6lDZUiX8jx7ON5g0TdM07W49SzSngAIKEP038Cqts+uNLstZFshAlgQipqIcYGtM1VYMCJgLUoDDJycEjAswygCmXgAvAzQoWREgArsnmOqH2W9UtwFMFzyAFFrLB0SUWo+lxAcMuCrzARWucnwA9TjXEyPQ4dzACRiPY4E4AYo45C0v0B73HXEBlXXxkbAvNbTJvNupt920gSAMwGOgxZJlq4YmKKFJGjXpaa3FZww+EwiB0PT93yZGwmS9itcO3kt/d3Mzvzw7Y42z3o8ukDr8On/u9bJ/RBeKuhovX4DCO4DcHPoNZknqaUde4GukWRzMNFK80Qr8wCNu916+AlLPi2IXYz2IvH2zl02qY2z7Xp4WJVntxlGe4fk2xmFW5vGbrNaT6CvsXd3LGI/+/CUy8BvddYnCDsPQdsk6CNLQPZZpEsdJauv4YCTL8ggfUQH8Qa6PuFChzAXioQ+lviEeRCiHOPgODBIqN5+a5nSNKnWA4Y7R3zQy5hxVuASWLio1NR4c58GYIjYJGJiLahoOxo5hVg6ITW0YMIYqUqMRXUAlEVGetrul6yO0rvHIQ6hheOj75PvbIDz8v9x8TefsE65D2OkZXOSiGvoC1DLWMW25bXTBtF96ofnz/3+TAap0C/X9zBL0pbN7znqvJnsL1OyAacqEYiG2cxE+5rdFJSyarj9NPKMS5ozt6cApFKs4pLJ3llQ4UffGKiS8vHu7KjQgKOSgVgtEkS4FaEpUrt++43FN7M1wLAAnn5Sb67NHy1plEYvB4Lx/e6cK0Gq1Wq3WKV4B3BwaNbofG20AAAAASUVORK5CYII=',
  'target': 'SEARCH',
  'home': 'https://hub.docker.com',
  'author': 'lanyuanxiaoyao',
  'description': 'Docker Hub is the world\'s easiest way to create, manage, and deliver your teams\' container applications.',
  'parser': 'JSON',
  'rules': {
    'https://hub\\.docker\\.com/api/content/v1/products/search\\?q=.+': {
      'list': {
        'expression': '$.summaries',
        'title': {'expression': '$.name'},
        'description': {'expression': '$.short_description'},
        'image': {'expression': '$.logo_url.small', 'script': 'return text === \'\' ? \'icon/docker.png\' : text'},
        'author': {'expression': '$.publisher.name'},
        'dateTime': {
          'expression': '$.updated_at',
          'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
        },
        'link': {'expression': '$.slug', 'prefix': 'https://hub.docker.com/_/'},
        'extra': {'star': {'expression': '$.star_count'}}
      }
    }
  },
  'search': '{home}/api/content/v1/products/search?q={query}&type=image&page_size=50'
}, {
  'code': '651c444e-1c66-457c-895d-2eea27c9a306',
  'name': 'PyPI',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAAbFBMVEUAAADl4+Dr6+vh4d7h4d/e3dvk5OTv7+7i4uHc29rf397d3dzZ2djPz8/r6+fm5ePj4+Pa2trS0tLFxcXp6eXr6+nm5ubh4d729vbp6ejc29rZ2djW1tbV1dXT09LR0dHv7uv////39/T7+/ue4yJnAAAAIHRSTlMA8uLi7Ons88eUtKSGGvz0vHsxC/jt1tH53t1qYE5GJxgpHkQAAAC9SURBVCjP7ZNJEoMgFAXVMKkIzlMSw3D/OwYrhQQK1tmkt91Vf/Nf5tFQspR9lmC4V0gZMCmbiH7Ws7qY2m7wbF8uQvls1ePrMFYx5vowmraTSoJJnUEIRcozgFB2E4JDELECICFlYYITFDYIYGmwgYEByK3lYNJSusAyQsiUGgFSxniBg0O0OusCR67lP/hVQMmYDnDbfV6axYJ1Ll9uFHsQ6K0+wlmBK9CFHYVH01X5GWB/VsHCdkL9Yb4BFDxZEFKRVEkAAAAASUVORK5CYII=',
  'target': 'SEARCH',
  'home': 'https://pypi.org',
  'author': 'lanyuanxiaoyao',
  'description': 'The Python Package Index (PyPI) is a repository of software for the Python programming language.',
  'parser': 'CSS',
  'rules': {
    'https://pypi\\.org/search/\\?q=.+': {
      'list': {
        'expression': '#content ul.unstyled[aria-label] > li',
        'title': {'expression': 'a.package-snippet h3 span.package-snippet__name'},
        'description': {'expression': 'a.package-snippet p.package-snippet__description'},
        'dateTime': {
          'expression': 'a.package-snippet h3 span.package-snippet__released time',
          'attribute': 'datetime',
          'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
        },
        'link': {'expression': 'a.package-snippet', 'attribute': 'href', 'prefix': '{home}'},
        'extra': {'version': {'expression': 'a.package-snippet h3 span.package-snippet__version'}}
      }
    }
  },
  'search': '{home}/search/?q={query}'
}, {
  'code': '2ebf794a-fb1c-4f55-9737-0db9da3878fe',
  'name': 'Ruby Gems',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAADuPSzkOR7uPSzuPizvPCvuPCjtPCrsOirpOSbuPSvuPSzuPSzuPSvuPSrvPCvrOy3vPSzuPCztPizvPSz1QC78QjBy1i9HAAAAFHRSTlMA9hDg8Y0mQy8a582lsG1ON7txYmlpP/UAAAFOSURBVEjHpZbRkoMgDEVBoSLaVm3C/3/qiqt7nQbEHfJWeg5JOiWg0uHm2an70VsKgWx/l198IK0p+OUW/h4Cr/TqcBjeRdw9eUPnedP46YrFR7z9KPVpo3LdystvjLZN/NRYvdn+dV08j+6vvpHRSq74oTuvdgNaSRcv0r9EK3vxhNXUXnS0gryMvLJaPlfb+ECEznK/B61Jml+hZWK/lP4uK9RC0JMqxKTPApv+aLH7isfxheFzBrOvTzHzKYjN3unDUEKYDNNXMHV5Abw0pABeGmkBvDRSQm+CppzhlJMZbMjwOoxNIkPO0BTGZA85I/JJAYbYPy9II/JXAgzsnxekAT4twABfFmBo8FcCDPAQxAGCAR4HKHFEYYDHEZVDAAZ4MQSSY8aOuTHz/0F2f1RWDOM7477mQilfWRWXYvW1Ky/22qdD/eOk/Pz5AXSyPM/mCAGFAAAAAElFTkSuQmCC',
  'target': 'SEARCH',
  'home': 'https://rubygems.org',
  'author': 'lanyuanxiaoyao',
  'description': 'RubyGems.org 是 Ruby 社区的 Gem 托管服务。让你能便捷、快速的发布、管理你的 Gem 以及安装它们。提供 API 查阅可用 Gem 的详细资料。',
  'parser': 'XPATH',
  'rules': {
    'https://rubygems\\.org/search\\?query=.+': {
      'list': {
        'expression': '//main[@class=\'main--interior\']//a[@class=\'gems__gem\']',
        'title': {'expression': '//h2[@class=\'gems__gem__name\']/text()', 'replace': [{'regex': '\\s', 'text': ''}]},
        'description': {'expression': '//p[@class=\'gems__gem__desc t-text\']'},
        'link': {'expression': './@href'},
        'extra': {
          'version': {
            'expression': '//span[@class=\'gems__gem__version\']',
            'replace': [{'regex': '\\s', 'text': ''}]
          },
          'star': {
            'expression': '//p[@class=\'gems__gem__downloads__count\']',
            'replace': [{'regex': '\\s', 'text': ''}, {'regex': 'Downloads', 'text': ''}]
          }
        }
      }
    }
  },
  'search': '{home}/search?query={query}'
}, {
  'code': '9b429345-b2a3-4530-b726-d3395b2221a4',
  'name': 'pub',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAAADU5BAxP8DU5M/w/9Bw/4BVZgBVpo+xP8AVZo/xP8/xP9AxP8/x/8NYqoCVZcrtfQBVpoAV5oqks4BVpsBVpsBVpsttfMmisgAVZpAw/8dhME0peAPaalAxP8fhcBFxf8CWJsqt/g/xP8VhMYvmNQhjcuAr6UKAAAAIXRSTlMAfIct7ybxy2hof9zLLQwc8dNJ3cCwkGhmWVPxy8uqUhaUSF9hAAABAElEQVRIx5XN23KCQBCE4V1kUUwCURPPpwX1/R/RsZTqiy7o5b+d+apdT2GWZfvKpRbmX23b5ueQ/v7u+2fUO4R+Z6HfIfQ7C/2uxXZ17+sYHFevbrG304SBfzQDYkqiXjyaUcJHAwkCAwbGiDIaGCGqaQeUwICBdFH9ASSJXQSQohsA0GIZAaTwNvAPoIWBZQGghX8NAGjhbQBACwPrCEBCAhYMSoAhAVAvALQw4HYFgBYGXFkAkGDQCQASBEwAkCDwEQAsGJgAYMHAxKHRAsDa/g4KBm6jBYAWxScDaJa3feWXybvapYk8OKQFgBYAQmgAoYEWAFow4PYZNb92xycX8cggeMNssAAAAABJRU5ErkJggg==',
  'target': 'SEARCH',
  'home': 'https://pub.dev',
  'author': 'lanyuanxiaoyao',
  'description': 'Pub is the package manager for the Dart programming language, containing reusable libraries & packages for Flutter, AngularDart, and general Dart programs.',
  'parser': 'CSS',
  'rules': {
    'https://pub\\.dev/packages\\?q=.+': {
      'list': {
        'expression': 'main > .container > .packages > .packages-item',
        'title': {'expression': 'h3.packages-title', 'replace': [{'regex': '(^\\s+)|\\n+', 'text': ''}]},
        'description': {'expression': 'p.packages-description'},
        'dateTime': {'expression': 'p.packages-metadata > span.packages-metadata-block span'},
        'link': {'expression': 'h3.packages-title > a', 'attribute': 'href', 'prefix': '{home}'},
        'extra': {
          'star': {'expression': '.packages-scores > .packages-score-like span.packages-score-value-number'},
          'version': {'expression': 'p.packages-metadata > span.packages-metadata-block a'}
        }
      }
    }
  },
  'search': '{home}/packages?q={query}'
}, {
  'code': '3e0cc26f-a96a-4f23-ac1c-48b9b87d825b',
  'name': 'pub (CN)',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAAADU5BAxP8DU5M/w/9Bw/4BVZgBVpo+xP8AVZo/xP8/xP9AxP8/x/8NYqoCVZcrtfQBVpoAV5oqks4BVpsBVpsBVpsttfMmisgAVZpAw/8dhME0peAPaalAxP8fhcBFxf8CWJsqt/g/xP8VhMYvmNQhjcuAr6UKAAAAIXRSTlMAfIct7ybxy2hof9zLLQwc8dNJ3cCwkGhmWVPxy8uqUhaUSF9hAAABAElEQVRIx5XN23KCQBCE4V1kUUwCURPPpwX1/R/RsZTqiy7o5b+d+apdT2GWZfvKpRbmX23b5ueQ/v7u+2fUO4R+Z6HfIfQ7C/2uxXZ17+sYHFevbrG304SBfzQDYkqiXjyaUcJHAwkCAwbGiDIaGCGqaQeUwICBdFH9ASSJXQSQohsA0GIZAaTwNvAPoIWBZQGghX8NAGjhbQBACwPrCEBCAhYMSoAhAVAvALQw4HYFgBYGXFkAkGDQCQASBEwAkCDwEQAsGJgAYMHAxKHRAsDa/g4KBm6jBYAWxScDaJa3feWXybvapYk8OKQFgBYAQmgAoYEWAFow4PYZNb92xycX8cggeMNssAAAAABJRU5ErkJggg==',
  'target': 'SEARCH',
  'home': 'https://pub.flutter-io.cn',
  'author': 'lanyuanxiaoyao',
  'description': 'Pub is the package manager for the Dart programming language, containing reusable libraries & packages for Flutter, AngularDart, and general Dart programs.',
  'parser': 'CSS',
  'rules': {
    'https://pub\\.flutter-io\\.cn/packages\\?q=.+': {
      'list': {
        'expression': 'main > .container > .packages > .packages-item',
        'title': {'expression': 'h3.packages-title', 'replace': [{'regex': '(^\\s+)|(\\s+$)|\\n+', 'text': ''}]},
        'description': {'expression': 'p.packages-description'},
        'dateTime': {'expression': 'p.packages-metadata > span.packages-metadata-block span'},
        'link': {'expression': 'h3.packages-title > a', 'attribute': 'href', 'prefix': '{home}'},
        'extra': {
          'star': {'expression': '.packages-scores > .packages-score-like span.packages-score-value-number'},
          'version': {'expression': 'p.packages-metadata > span.packages-metadata-block a'}
        }
      }
    }
  },
  'search': '{home}/packages?q={query}'
}, {
  'code': '055ae385-097a-4598-8c7b-e3d43e1f404e',
  'name': 'nuget',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAAAR4MASIAASIAASIAASIAASIAARIUASIEASIAASIAASIEASIEASIAASIEAR4AASIAAR4EASIAASIAKSuXmAAAAE3RSTlMAGteg4e5mCnEokzhUr3m7hUnH8njkCgAAAVVJREFUSMellVmShCAMQEOAIAhuuf9dp2xqhqWhzVS/X3lkMVEA8DF6kOMImZHkAlm+iWIB+cXupAJnUEkF+18hZOEAKSrd55MCuUFak4IvUOcWdEPYzvmN/kAegIefvvcJSG5wPvAHgpuclxsb31hjZ8YGDat9peqVXyaV2LVJKN1D6LM7MZJrA5Qr4iTEWQkHM+u/cNek7iqjvalKjwUsgkKJYCvB1Cmpi8e0QimaWCbwldt6GqnAuK1+DZZlQhkNoTBHLmCgSAGlApLKDxcjEq6ylycKBPRQiPZZWKAmPAqouv16EnS38fuTcECLfhK2TgidgE8RUrsPkOYbX268oLB8/qgA9VH9e5tyiGoHjW+L6qGqqTp/NGo8viW1/cZQusxKMy49e1QOnCd8+XH0l+/BPe0mxyN4gwxPMQQD1sQT0gpDXNQ4yEtHB1P8SUsDnaU7Pz+QTUrlb5A6AAAAAElFTkSuQmCC',
  'target': 'SEARCH',
  'home': 'https://www.nuget.org',
  'author': 'lanyuanxiaoyao',
  'description': 'The NuGet Gallery is the central package repository for NuGet, the package manager for .NET.',
  'parser': 'CSS',
  'rules': {
    'https://www\\.nuget\\.org/packages\\?q=.+': {
      'list': {
        'expression': 'section[role=main] > .list-packages > article.package',
        'title': {'expression': 'a.package-title'},
        'description': {'expression': '.package-details', 'replace': [{'regex': '(^\\s+)|(\\s+$)|\\n+', 'text': ''}]},
        'image': {'expression': '.col-package-icon > img', 'attribute': 'src'},
        'author': {
          'expression': '.package-header > span.package-by',
          'replace': [{'regex': '(^\\s+)|(\\s+$)|\\n+', 'text': ''}, {
            'regex': '^by: ',
            'text': ''
          }, {'regex': '[\\n\\s]+', 'text': ','}]
        },
        'dateTime': {'expression': 'ul.package-list > li span[data-datetime]'},
        'link': {'expression': 'a.package-title', 'attribute': 'href', 'prefix': '{home}'},
        'extra': {
          'version': {'expression': 'ul.package-list > li > span.icon-text:has(.ms-Icon--Flag) > span'},
          'download': {
            'expression': 'ul.package-list > li > span.icon-text:has(.ms-Icon--Download)',
            'replace': [{'regex': '(^\\s+)|(\\s+$)|\\n+', 'text': ''}, {'regex': ' total downloads$', 'text': ''}]
          }
        }
      }
    }
  },
  'search': '{home}/packages?q={query}'
}, {
  'code': 'e0c9c31c-14c6-4c0d-a66f-b2a06e8b1a82',
  'name': 'crates.io',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABHVBMVEUAAAAPDQYXEAePc0CuhzwEBAJhSjAQCwd5XD3x1Zt6XSUAAAAgGxESDgmphl5zVTTTnDDRnzzbpDvoul/Po05CMiBsVDogGBCSdUGffkEcFg7JqW+6rmh6WDLbtm/erEzLli6BYz/jsVRpTS2egF3lumXJn03sxXpINiGxkVJGNyV7ZDTluWWlh1VQPSphTSfvz5PtzozmqzjotlXmsk3prjnhpzfosELOkh/Eihe/hBDWnzLIlC7RlybIjh3pv2y+jSzoumTirUeudxC4fg7qxHzKmkPjrEC1ewnpx4XnwHR4VS6gbg7juGPis1ekgVSXc0iBYD3NmTLdoi6Pai3XnCindA/RqFvdqUSJZ0GWbSa9hx+/mW6kfkm7k0byhpSwAAAAMnRSTlMADRYUei/iaf54d1A/Iv3v7+rq2dC2m5OLeVxEC/Ts7Orczsq+uKqWioB0ZmJgXEJAKo34IgoAAAGdSURBVDjLvdPZVtswEAbgJjRLGwJtWQt0X9lhJI0sWXES27Edsi+Enfd/DMZccGyS3HGY2//T+D/W0ZtXn+2/Pw925qY7h6ucVxtfdxfmgBXOqo0654z9O50JPmGzQ3E9Rn+2Z4ERQ8445/VGlfGVkynw4Rw5feWMEWlWw3dT4CN/LMFoqAfOAk06TZmUCADT4PvozKXDlEmg+fw8P6YOIzsEtEEKEOJ9Ks3sr/JKPACmhlKIZ2DzG/UzFg3YtRhIlgIL2KV+jnIcAsYIKVjn8m0SVOyOy5R2lAI0KKTrAqSAZdnntrm50JragcsBh2mglGNZlUpwozHsdjGEmrFTQOuYkDGXyFyQ1DQFsr5PxPE8x0IEIGCGyR+VWfT8mq/VpO07CDGAIcJmAmwVx/eRr9rtiUJBIwUEvd9PMW3IX+XHno4mbf0IwqDf6q8nNmRzhVKhOPaiiABjQe+q9WuRgoQo50rLg8G1F6G46LVufxxN3XU2t7W2sZG/Du4GreW9TCJJkFJhrbjU//I/O/dllAv5pfXyjCC55sVf6wP5S1natkaF9AAAAABJRU5ErkJggg==',
  'target': 'SEARCH',
  'home': 'https://crates.io',
  'author': 'lanyuanxiaoyao',
  'description': 'cargo is the package manager and crate host for rust',
  'parser': 'JSON',
  'rules': {
    'https://crates\\.io/api/v1/crates\\?.*q=.+': {
      'list': {
        'expression': '$.crates',
        'title': {'expression': '$.name'},
        'description': {'expression': '$.description'},
        'dateTime': {
          'expression': '$.updated_at',
          'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
        },
        'link': {
          'expression': '$.id',
          'attribute': 'href',
          'replace': [{'regex': '^', 'text': 'https://crates.io/crates/'}]
        },
        'extra': {'version': {'expression': '$.newest_version'}, 'download': {'expression': '$.downloads'}}
      }
    }
  },
  'search': '{home}/api/v1/crates?page=1&per_page=10&q={query}'
}, {
  'code': '23934197-14c3-4ad9-879f-ca27527711b2',
  'name': 'LuaRocks',
  'category': '开发',
  'icon': 'data:image/png;base64,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',
  'target': 'SEARCH',
  'home': 'https://luarocks.org',
  'author': 'lanyuanxiaoyao',
  'description': 'A website for submitting and distributing Lua rocks',
  'parser': 'CSS',
  'rules': {
    'https://luarocks\\.org/search\\?q=.+': {
      'list': {
        'expression': 'main.search_page ul.module_list_widget > li.module_row',
        'title': {'expression': '.main > a.title'},
        'description': {'expression': '.summary'},
        'author': {'expression': '.main > span.author > a'},
        'link': {
          'expression': '.main > a.title',
          'attribute': 'href',
          'replace': [{'regex': '^', 'text': 'https://luarocks.org'}]
        },
        'extra': {'download': {'expression': '.main > span.downloads > span.value'}}
      }
    }
  },
  'search': '{home}/search?q={query}'
}, {
  'code': '97081e97-54e1-49ad-8558-4adce0f99f9f',
  'name': 'Packagist',
  'category': '开发',
  'icon': 'data:image/png;base64,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',
  'target': 'SEARCH',
  'home': 'https://packagist.org',
  'author': 'lanyuanxiaoyao',
  'description': 'The PHP Package Repository.',
  'parser': 'JSON',
  'rules': {
    'https://packagist\\.org/search\\.json\\?q=.+': {
      'list': {
        'expression': '$.results',
        'title': {'expression': '$.name'},
        'description': {'expression': '$.description'},
        'link': {'expression': '$.url'},
        'extra': {'download': {'expression': '$.downloads'}, 'star': {'expression': '$.favers'}}
      }
    }
  },
  'search': '{home}/search.json?q={query}'
}, {
  'code': '407e4687-094e-4ce4-86ef-bb30e2cf6612',
  'name': 'Gradle Plugins',
  'category': '开发',
  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAASFBMVEUAAAACMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDqoZOy0AAAAF3RSTlMA7sd1Dbkj47GY9YUuG9alOY9NaWJWRG3ajrUAAADoSURBVDjLzZJbEoMgDEWFGJ4igtrsf6flObRO+e/5AXJvwkyS5Z95BeWvda5rynAxNXgWAJNjWmN1tQyM0HYFhUqfxwg5SXtPAG6owWHtUU7Ubjt9wqyrRU03vOiBtCL9wNNlVHhgOLJ0hKLbM1IFDSX81hPYVnQyQpVnjMXAD6SKzfqZLnrL6eJm9EHrkyjBGP0tND10N7rO4AD5UxeSJvjar2um2z62ia6Wxj4xbN1gZgU69Jvz26DA1q+YBl36MrYiPyHPC7Oe44ckkmMZ04vX4RdnBpLBLR1AvNsio6p5QmFYlz/iDSAlI7hmtjKTAAAAAElFTkSuQmCC',
  'target': 'SEARCH',
  'home': 'https://plugins.gradle.org',
  'author': 'lanyuanxiaoyao',
  'description': 'Search Gradle plugins.',
  'parser': 'CSS',
  'rules': {
    'https://plugins\\.gradle\\.org/search\\?term=.+': {
      'list': {
        'expression': '#search-results > tbody > tr',
        'title': {'expression': '.name > h3.plugin-id > a'},
        'description': {'expression': '.name > h3.plugin-id + p'},
        'dateTime': {'expression': '.version > .date'},
        'link': {'expression': '.name > h3.plugin-id > a', 'attribute': 'href', 'prefix': '{home}'},
        'extra': {'version': {'expression': '.version > .latest-version'}}
      }
    }
  },
  'search': '{home}/search?term={query}'
}]

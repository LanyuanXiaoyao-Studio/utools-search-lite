module.exports = [
  {
    'code': '21288140-5491-4aac-a827-e084bfa70ae2',
    'name': 'npm',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/Bs9taT.png',
    'target': 'SEARCH',
    'home': 'https://www.npmjs.com',
    'author': 'lanyuanxiaoyao',
    'description': 'npm is the world’s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage development as well.',
    'parser': 'CSS',
    'rules': {
      'https://www\\.npmjs\\.com/search\\?q=.+': {
        'list': {
          'expression': 'main .center aside + div > section',
          'title': {
            'expression': 'div.w-80 div:nth-child(1) h3'
          },
          'description': {
            'expression': 'div.w-80 h4:contains(Description) + p'
          },
          'image': {
            'expression': 'div.w-80 h4:contains(Publisher) + div div:nth-child(1) > div > a > img',
            'attribute': 'src'
          },
          'author': {
            'expression': 'div.w-80 h4:contains(Publisher) + div div:nth-child(1) > a[href]'
          },
          'dateTime': {
            'expression': 'div.w-80 h4:contains(Publisher) + div span[title]',
            'script': 'let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[2]\n}\nreturn \'\''
          },
          'link': {
            'expression': 'div.w-80 div:nth-child(1) > a',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'version': {
              'expression': 'div.w-80 h4:contains(Publisher) + div span[title]',
              'script': 'let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn \'\''
            }
          }
        },
        'next': {
          'expression': 'main .center aside + div > section + div > a:contains(»)',
          'prefix': '{home}'
        }
      },
      'https://www\\.npmjs\\.com/package/.+': {
        'text': {
          'expression': 'html',
          'title': {
            'expression': '#top span[title]',
            'attribute': 'title'
          },
          'description': {
            'expression': 'head meta[name=description]',
            'attribute': 'content'
          },
          'dateTime': {
            'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Last publish) + p time',
            'attribute': 'title'
          },
          'extra': {
            'version': {
              'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Version) + p'
            },
            'size': {
              'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Unpacked) + p'
            },
            'number': {
              'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(Total Files) + p'
            },
            'license': {
              'expression': '#top div:has(h3:contains(Install)) > div > h3:contains(License) + p'
            }
          }
        },
        'list': {
          'expression': '#top > div > h3:contains(Install) + p:has(code)',
          'content': {
            'expression': 'svg + code[title]'
          }
        }
      }
    },
    'search': '{home}/search?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#author{${i.author}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_IMAGE_TEMPLATE': 'true'
    }
  },
  {
    'code': '1f5443c7-9b0a-43e8-9420-83b7d49e16eb',
    'name': 'Maven',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/Bs9rs1.png',
    'target': 'SEARCH',
    'home': 'https://mvnrepository.com',
    'author': 'lanyuanxiaoyao',
    'description': 'Apache Maven is a software project management and comprehension tool',
    'parser': 'CSS',
    'rules': {
      'https://mvnrepository\\.com/search\\?q=.+': {
        'list': {
          'expression': '#maincontent > .im',
          'title': {
            'expression': 'h2.im-title > a:nth-child(2)'
          },
          'description': {
            'expression': '.im-description',
            'script': 'let regex = /(.*?)\\s*Last Release on\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn \'\''
          },
          'image': {
            'expression': 'img.im-logo',
            'attribute': 'src',
            'prefix': '{home}'
          },
          'author': {
            'expression': 'p.im-subtitle',
            'script': 'let regex = /(.*?)\\s*»\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn \'\''
          },
          'dateTime': {
            'expression': '.im-description',
            'script': 'let regex = /(.*?)\\s*Last Release on\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[2]\n}\nreturn \'\''
          },
          'link': {
            'expression': 'h2.im-title > a:nth-child(2)',
            'attribute': 'href',
            'prefix': '{home}'
          }
        }
      }
    },
    'search': '{home}/search?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': 'a2387be5-1b9d-41df-b28a-246c972e492f',
    'name': 'Maven (Sonatype)',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/Bs9rs1.png',
    'target': 'SEARCH',
    'home': 'https://search.maven.org',
    'author': 'lanyuanxiaoyao',
    'description': 'Official search of Maven Central Repository.',
    'parser': 'JSON',
    'rules': {
      'https://search\\.maven.org/solrsearch/select\\?q=.+&start=0&rows=20': {
        'list': {
          'expression': '$.response.docs',
          'title': {
            'expression': '$.a'
          },
          'description': {
            'expression': '$.repositoryId',
            'prefix': 'From: '
          },
          'author': {
            'expression': '$.g'
          },
          'dateTime': {
            'expression': '$.timestamp',
            'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
          },
          'link': {
            'expression': '$',
            'script': 'let data = JSON.parse(text)\nreturn \'https://ossindex.sonatype.org/component/pkg:maven/\' + data.g + \'/\' + data.a + \'@\' + data.latestVersion'
          },
          'extra': {
            'version': {
              'expression': '$.latestVersion'
            }
          }
        }
      }
    },
    'search': '{home}/solrsearch/select?q={query}&start=0&rows=20',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#author{${i.author}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '3a3d7617-80ef-44f7-a369-9032f13aa9a0',
    'name': 'Github',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsCAW4.png',
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
          'title': {
            'expression': '$.full_name'
          },
          'description': {
            'expression': '$.description'
          },
          'dateTime': {
            'expression': '$.updated_at',
            'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
          },
          'link': {
            'expression': '$.html_url'
          },
          'extra': {
            'star': {
              'expression': '$.stargazers_count'
            },
            'language': {
              'expression': '$.language'
            },
            'license': {
              'expression': '$.license.name'
            }
          }
        }
      }
    },
    'search': 'https://api.github.com/search/repositories?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#star{${i.star}}#language{${i.language}}#license{${i.license}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '19880471-f92d-4d14-9705-45c9e8ded084',
    'name': 'Gitee',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsC3fe.png',
    'target': 'SEARCH',
    'home': 'https://gitee.com',
    'author': 'lanyuanxiaoyao',
    'description': 'Gitee.com 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 500 万的开发者选择 Gitee。',
    'parser': 'JSON',
    'rules': {
      'https://gitee\\.com/api/v5/search/repositories\\?q=.+': {
        'list': {
          'expression': '$',
          'title': {
            'expression': '$.human_name'
          },
          'description': {
            'expression': '$.description'
          },
          'dateTime': {
            'expression': '$.updated_at',
            'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
          },
          'link': {
            'expression': '$.html_url'
          },
          'extra': {
            'star': {
              'expression': '$.stargazers_count'
            },
            'language': {
              'expression': '$.language'
            },
            'license': {
              'expression': '$.license'
            }
          }
        }
      }
    },
    'search': '{home}/api/v5/search/repositories?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#star{${i.star}}#language{${i.language}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': 'de83842d-4d2f-485c-be5a-02ad2a443664',
    'name': 'Docker Hub',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsCY6A.png',
    'target': 'SEARCH',
    'home': 'https://hub.docker.com',
    'author': 'lanyuanxiaoyao',
    'description': 'Docker Hub is the world\'s easiest way to create, manage, and deliver your teams\' container applications.',
    'parser': 'JSON',
    'rules': {
      'https://hub\\.docker\\.com/api/content/v1/products/search\\?q=.+': {
        'list': {
          'expression': '$.summaries',
          'title': {
            'expression': '$.name'
          },
          'description': {
            'expression': '$.short_description'
          },
          'image': {
            'expression': '$.logo_url.small',
            'script': 'return text === \'\' ? \'icon/docker.png\' : text'
          },
          'author': {
            'expression': '$.publisher.name'
          },
          'dateTime': {
            'expression': '$.updated_at',
            'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
          },
          'link': {
            'expression': '$.slug',
            'prefix': 'https://hub.docker.com/_/'
          },
          'extra': {
            'star': {
              'expression': '$.star_count'
            }
          }
        }
      }
    },
    'search': '{home}/api/content/v1/products/search?q={query}&type=image&page_size=50',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#author{${i.author}}#star{${i.star}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_IMAGE_TEMPLATE': 'true'
    }
  },
  {
    'code': '651c444e-1c66-457c-895d-2eea27c9a306',
    'name': 'PyPI',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsCDfg.png',
    'target': 'SEARCH',
    'home': 'https://pypi.org',
    'author': 'lanyuanxiaoyao',
    'description': 'The Python Package Index (PyPI) is a repository of software for the Python programming language.',
    'parser': 'CSS',
    'rules': {
      'https://pypi\\.org/search/\\?q=.+': {
        'list': {
          'expression': '#content ul.unstyled[aria-label] > li',
          'title': {
            'expression': 'a.package-snippet h3 span.package-snippet__name'
          },
          'description': {
            'expression': 'a.package-snippet p.package-snippet__description'
          },
          'dateTime': {
            'expression': 'a.package-snippet h3 span.package-snippet__released time',
            'attribute': 'datetime',
            'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
          },
          'link': {
            'expression': 'a.package-snippet',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'version': {
              'expression': 'a.package-snippet h3 span.package-snippet__version'
            }
          }
        }
      }
    },
    'search': '{home}/search/?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '2ebf794a-fb1c-4f55-9737-0db9da3878fe',
    'name': 'Ruby Gems',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsC2mq.png',
    'target': 'SEARCH',
    'home': 'https://rubygems.org',
    'author': 'lanyuanxiaoyao',
    'description': 'RubyGems.org 是 Ruby 社区的 Gem 托管服务。让你能便捷、快速的发布、管理你的 Gem 以及安装它们。提供 API 查阅可用 Gem 的详细资料。',
    'parser': 'XPATH',
    'rules': {
      'https://rubygems\\.org/search\\?query=.+': {
        'list': {
          'expression': '//main[@class=\'main--interior\']//a[@class=\'gems__gem\']',
          'title': {
            'expression': '//h2[@class=\'gems__gem__name\']/text()',
            'replace': [
              {
                'regex': '\\s',
                'text': ''
              }
            ]
          },
          'description': {
            'expression': '//p[@class=\'gems__gem__desc t-text\']'
          },
          'link': {
            'expression': './@href'
          },
          'extra': {
            'version': {
              'expression': '//span[@class=\'gems__gem__version\']',
              'replace': [
                {
                  'regex': '\\s',
                  'text': ''
                }
              ]
            },
            'star': {
              'expression': '//p[@class=\'gems__gem__downloads__count\']',
              'replace': [
                {
                  'regex': '\\s',
                  'text': ''
                },
                {
                  'regex': 'Downloads',
                  'text': ''
                }
              ]
            }
          }
        }
      }
    },
    'search': '{home}/search?query={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#star{${i.star}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '9b429345-b2a3-4530-b726-d3395b2221a4',
    'name': 'pub',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsPRvd.png',
    'target': 'SEARCH',
    'home': 'https://pub.dev',
    'author': 'lanyuanxiaoyao',
    'description': 'Pub is the package manager for the Dart programming language, containing reusable libraries & packages for Flutter, AngularDart, and general Dart programs.',
    'parser': 'CSS',
    'rules': {
      'https://pub\\.dev/packages\\?q=.+': {
        'list': {
          'expression': 'main > .container > .packages > .packages-item',
          'title': {
            'expression': 'h3.packages-title',
            'replace': [
              {
                'regex': '(^\\s+)|\\n+',
                'text': ''
              }
            ]
          },
          'description': {
            'expression': 'p.packages-description'
          },
          'dateTime': {
            'expression': 'p.packages-metadata > span.packages-metadata-block span'
          },
          'link': {
            'expression': 'h3.packages-title > a',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'star': {
              'expression': '.packages-scores > .packages-score-like span.packages-score-value-number'
            },
            'version': {
              'expression': 'p.packages-metadata > span.packages-metadata-block a'
            }
          }
        }
      }
    },
    'search': '{home}/packages?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#star{${i.star}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '3e0cc26f-a96a-4f23-ac1c-48b9b87d825b',
    'name': 'pub (CN)',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsPRvd.png',
    'target': 'SEARCH',
    'home': 'https://pub.flutter-io.cn',
    'author': 'lanyuanxiaoyao',
    'description': 'Pub is the package manager for the Dart programming language, containing reusable libraries & packages for Flutter, AngularDart, and general Dart programs.',
    'parser': 'CSS',
    'rules': {
      'https://pub\\.flutter-io\\.cn/packages\\?q=.+': {
        'list': {
          'expression': 'main > .container > .packages > .packages-item',
          'title': {
            'expression': 'h3.packages-title',
            'replace': [
              {
                'regex': '(^\\s+)|(\\s+$)|\\n+',
                'text': ''
              }
            ]
          },
          'description': {
            'expression': 'p.packages-description'
          },
          'dateTime': {
            'expression': 'p.packages-metadata > span.packages-metadata-block span'
          },
          'link': {
            'expression': 'h3.packages-title > a',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'star': {
              'expression': '.packages-scores > .packages-score-like span.packages-score-value-number'
            },
            'version': {
              'expression': 'p.packages-metadata > span.packages-metadata-block a'
            }
          }
        }
      }
    },
    'search': '{home}/packages?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#star{${i.star}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '055ae385-097a-4598-8c7b-e3d43e1f404e',
    'name': 'nuget',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsPb8g.png',
    'target': 'SEARCH',
    'home': 'https://www.nuget.org',
    'author': 'lanyuanxiaoyao',
    'description': 'The NuGet Gallery is the central package repository for NuGet, the package manager for .NET.',
    'parser': 'CSS',
    'rules': {
      'https://www\\.nuget\\.org/packages\\?q=.+': {
        'list': {
          'expression': 'section[role=main] > .list-packages > article.package',
          'title': {
            'expression': 'a.package-title'
          },
          'description': {
            'expression': '.package-details',
            'replace': [
              {
                'regex': '(^\\s+)|(\\s+$)|\\n+',
                'text': ''
              }
            ]
          },
          'image': {
            'expression': '.col-package-icon > img',
            'attribute': 'src'
          },
          'author': {
            'expression': '.package-header > span.package-by',
            'replace': [
              {
                'regex': '(^\\s+)|(\\s+$)|\\n+',
                'text': ''
              },
              {
                'regex': '^by: ',
                'text': ''
              },
              {
                'regex': '[\\n\\s]+',
                'text': ','
              }
            ]
          },
          'dateTime': {
            'expression': 'ul.package-list > li span[data-datetime]'
          },
          'link': {
            'expression': 'a.package-title',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'version': {
              'expression': 'ul.package-list > li > span.icon-text:has(.ms-Icon--Flag) > span'
            },
            'download': {
              'expression': 'ul.package-list > li > span.icon-text:has(.ms-Icon--Download)',
              'replace': [
                {
                  'regex': '(^\\s+)|(\\s+$)|\\n+',
                  'text': ''
                },
                {
                  'regex': ' total downloads$',
                  'text': ''
                }
              ]
            }
          }
        }
      }
    },
    'search': '{home}/packages?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#author{${i.author}}#download{${i.download}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_IMAGE_TEMPLATE': 'true'
    }
  },
  {
    'code': 'e0c9c31c-14c6-4c0d-a66f-b2a06e8b1a82',
    'name': 'crates.io',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsPXKs.png',
    'target': 'SEARCH',
    'home': 'https://crates.io',
    'author': 'lanyuanxiaoyao',
    'description': 'cargo is the package manager and crate host for rust',
    'parser': 'JSON',
    'rules': {
      'https://crates\\.io/api/v1/crates\\?.*q=.+': {
        'list': {
          'expression': '$.crates',
          'title': {
            'expression': '$.name'
          },
          'description': {
            'expression': '$.description'
          },
          'dateTime': {
            'expression': '$.updated_at',
            'script': 'let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds()\n}\nreturn text'
          },
          'link': {
            'expression': '$.id',
            'attribute': 'href',
            'replace': [
              {
                'regex': '^',
                'text': 'https://crates.io/crates/'
              }
            ]
          },
          'extra': {
            'version': {
              'expression': '$.newest_version'
            },
            'download': {
              'expression': '$.downloads'
            }
          }
        }
      }
    },
    'search': '{home}/api/v1/crates?page=1&per_page=10&q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}#download{${i.download}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '23934197-14c3-4ad9-879f-ca27527711b2',
    'name': 'LuaRocks',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsiCPU.png',
    'target': 'SEARCH',
    'home': 'https://luarocks.org',
    'author': 'lanyuanxiaoyao',
    'description': 'A website for submitting and distributing Lua rocks',
    'parser': 'CSS',
    'rules': {
      'https://luarocks\\.org/search\\?q=.+': {
        'list': {
          'expression': 'main.search_page ul.module_list_widget > li.module_row',
          'title': {
            'expression': '.main > a.title'
          },
          'description': {
            'expression': '.summary'
          },
          'author': {
            'expression': '.main > span.author > a'
          },
          'link': {
            'expression': '.main > a.title',
            'attribute': 'href',
            'replace': [
              {
                'regex': '^',
                'text': 'https://luarocks.org'
              }
            ]
          },
          'extra': {
            'download': {
              'expression': '.main > span.downloads > span.value'
            }
          }
        }
      }
    },
    'search': '{home}/search?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#author{${i.author}}#download{${i.download}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '97081e97-54e1-49ad-8558-4adce0f99f9f',
    'name': 'Packagist',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsinIK.png',
    'target': 'SEARCH',
    'home': 'https://packagist.org',
    'author': 'lanyuanxiaoyao',
    'description': 'The PHP Package Repository.',
    'parser': 'JSON',
    'rules': {
      'https://packagist\\.org/search\\.json\\?q=.+': {
        'list': {
          'expression': '$.results',
          'title': {
            'expression': '$.name'
          },
          'description': {
            'expression': '$.description'
          },
          'link': {
            'expression': '$.url'
          },
          'extra': {
            'download': {
              'expression': '$.downloads'
            },
            'star': {
              'expression': '$.favers'
            }
          }
        }
      }
    },
    'search': '{home}/search.json?q={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#star{${i.star}}#download{${i.download}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  },
  {
    'code': '407e4687-094e-4ce4-86ef-bb30e2cf6612',
    'name': 'Gradle Plugins',
    'category': '开发',
    'icon': 'https://s1.ax1x.com/2020/11/03/BsiMGD.png',
    'target': 'SEARCH',
    'home': 'https://plugins.gradle.org',
    'author': 'lanyuanxiaoyao',
    'description': 'Search Gradle plugins.',
    'parser': 'CSS',
    'rules': {
      'https://plugins\\.gradle\\.org/search\\?term=.+': {
        'list': {
          'expression': '#search-results > tbody > tr',
          'title': {
            'expression': '.name > h3.plugin-id > a'
          },
          'description': {
            'expression': '.name > h3.plugin-id + p'
          },
          'dateTime': {
            'expression': '.version > .date'
          },
          'link': {
            'expression': '.name > h3.plugin-id > a',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'version': {
              'expression': '.version > .latest-version'
            }
          }
        }
      }
    },
    'search': '{home}/search?term={query}',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#version{${i.version}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}'
    }
  }
]

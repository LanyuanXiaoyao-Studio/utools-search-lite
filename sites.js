module.exports = [
  {
    "code": "21288140-5491-4aac-a827-e084bfa70ae2",
    "enabled": true,
    "version": 0,
    "name": "npm",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://www.npmjs.com",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {},
    "tags": {},
    "rules": {
      "https://www\\.npmjs\\.com/search\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "main .center aside + div > section",
          "title": {
            "expression": "div.w-80 div:nth-child(1) h3"
          },
          "description": {
            "expression": "div.w-80 h4:contains(Description) + p"
          },
          "image": {
            "expression": "div.w-80 h4:contains(Publisher) + div div:nth-child(1) > div > a > img",
            "attribute": "src"
          },
          "author": {
            "expression": "div.w-80 h4:contains(Publisher) + div div:nth-child(1) > a[href]"
          },
          "dateTime": {
            "expression": "div.w-80 h4:contains(Publisher) + div span[title]",
            "script": "let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[2]\n}\nreturn ''"
          },
          "link": {
            "expression": "div.w-80 div:nth-child(1) > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "version": {
              "expression": "div.w-80 h4:contains(Publisher) + div span[title]",
              "script": "let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn ''"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/search?q={query}",
    "properties": {}
  },
  {
    "code": "1f5443c7-9b0a-43e8-9420-83b7d49e16eb",
    "enabled": true,
    "version": 0,
    "name": "Maven",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://mvnrepository.com",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://mvnrepository\\.com/search\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "#maincontent > .im",
          "title": {
            "expression": "h2.im-title > a:nth-child(2)"
          },
          "description": {
            "expression": ".im-description",
            "script": "let regex = /(.*?)\\s*Last Release on\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn ''"
          },
          "image": {
            "expression": "img.im-logo",
            "attribute": "src",
            "prefix": "{home}"
          },
          "author": {
            "expression": "p.im-subtitle",
            "script": "let regex = /(.*?)\\s*»\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn ''"
          },
          "dateTime": {
            "expression": ".im-description",
            "script": "let regex = /(.*?)\\s*Last Release on\\s*(.*?)$/m\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[2]\n}\nreturn ''"
          },
          "link": {
            "expression": "h2.im-title > a:nth-child(2)",
            "attribute": "href",
            "prefix": "{home}"
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/search?q={query}",
    "properties": {}
  },
  {
    "code": "a2387be5-1b9d-41df-b28a-246c972e492f",
    "enabled": true,
    "version": 0,
    "name": "Maven (Sonatype)",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://search.maven.org",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "JSON",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://search\\.maven.org/solrsearch/select\\?q=.+&start=0&rows=20": {
        "headers": {},
        "list": {
          "expression": "$.response.docs",
          "title": {
            "expression": "$.a"
          },
          "description": {
            "expression": "$.repositoryId",
            "prefix": "From: "
          },
          "author": {
            "expression": "$.g"
          },
          "dateTime": {
            "expression": "$.timestamp",
            "script": "let date = new Date(parseInt(text))\nif (date.getFullYear()) {\n    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())\n}\nreturn text"
          },
          "link": {
            "expression": "$",
            "script": "let data = JSON.parse(text)\nreturn 'https://ossindex.sonatype.org/component/pkg:maven/' + data.g + '/' + data.a + '@' + data.latestVersion"
          },
          "extra": {
            "version": {
              "expression": "$.latestVersion"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/solrsearch/select?q={query}&start=0&rows=20",
    "properties": {}
  },
  {
    "code": "3a3d7617-80ef-44f7-a369-9032f13aa9a0",
    "enabled": true,
    "version": 0,
    "name": "Github",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://github.com",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {
      "Trending Today": "{home}/trending?since=daily",
      "Trending This Week": "{home}/trending?since=weekly",
      "Trending This Month": "{home}/trending?since=monthly"
    },
    "rules": {
      "https://github\\.com/search\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "main .repo-list .repo-list-item",
          "title": {
            "expression": ".mt-n1 a.v-align-middle"
          },
          "description": {
            "expression": "p.mb-1",
            "script": "return text.trim()"
          },
          "dateTime": {
            "expression": ".mr-3:contains(Updated) relative-time",
            "attribute": "datetime",
            "script": "let date = new Date(text)\nif (date) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": ".mt-n1 a.v-align-middle",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "star": {
              "expression": ".mr-3:has(svg[aria-label=star])",
              "script": "return text.trim()"
            },
            "language": {
              "expression": ".mr-3:has(span[itemprop=programmingLanguage])",
              "script": "return text.trim()"
            }
          }
        },
        "options": [],
        "properties": {}
      },
      "https://github\\.com/trending\\?since=.+": {
        "headers": {},
        "list": {
          "expression": "main .Box article.Box-row",
          "title": {
            "expression": "h1.h3 > a"
          },
          "description": {
            "expression": "h1.h3 + p"
          },
          "link": {
            "expression": "h1.h3 > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "star": {
              "expression": "a.mr-3:has(svg[aria-label=star])",
              "script": "return text.trim()"
            },
            "language": {
              "expression": ".mr-3 span[itemprop=programmingLanguage]",
              "script": "return text.trim()"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/search?q={query}",
    "properties": {}
  },
  {
    "code": "19880471-f92d-4d14-9705-45c9e8ded084",
    "enabled": true,
    "version": 0,
    "name": "Gitee",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://gitee.com",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://search\\.gitee\\.com\\?type=repository&q=.+": {
        "headers": {},
        "list": {
          "expression": "#hits-list .item",
          "title": {
            "expression": ".header .title a"
          },
          "description": {
            "expression": ".desc"
          },
          "dateTime": {
            "expression": ".attr span.tag:contains(更新)",
            "replace": [
              {
                "regex": "更新于 ",
                "text": ""
              }
            ]
          },
          "link": {
            "expression": ".header .title a",
            "attribute": "href"
          },
          "extra": {
            "star": {
              "expression": ".attr span.icon-star + em"
            },
            "language": {
              "expression": ".attr span.lang"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "https://search.gitee.com?type=repository&q={query}",
    "properties": {}
  },
  {
    "code": "de83842d-4d2f-485c-be5a-02ad2a443664",
    "enabled": true,
    "version": 0,
    "name": "Docker Hub",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://hub.docker.com",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "JSON",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://hub\\.docker\\.com/api/content/v1/products/search\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "$.summaries",
          "title": {
            "expression": "$.name"
          },
          "description": {
            "expression": "$.short_description"
          },
          "image": {
            "expression": "$.logo_url.small",
            "script": "return text === '' ? 'icon/docker.png' : text"
          },
          "author": {
            "expression": "$.publisher.name"
          },
          "dateTime": {
            "expression": "$.updated_at",
            "script": "let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "$.slug",
            "prefix": "https://hub.docker.com/_/"
          },
          "extra": {
            "star": {
              "expression": "$.star_count"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/api/content/v1/products/search?q={query}&type=image&page_size=50",
    "properties": {}
  },
  {
    "code": "651c444e-1c66-457c-895d-2eea27c9a306",
    "enabled": true,
    "version": 0,
    "name": "PyPI",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://pypi.org",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://pypi\\.org/search/\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "#content ul[aria-label~=Search.*] > li",
          "title": {
            "expression": "a.package-snippet h3 span.package-snippet__name"
          },
          "description": {
            "expression": "a.package-snippet p.package-snippet__description"
          },
          "dateTime": {
            "expression": "a.package-snippet h3 span.package-snippet__released time",
            "attribute": "datetime",
            "script": "let date = new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "a.package-snippet",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "version": {
              "expression": "a.package-snippet h3 span.package-snippet__version"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/search/?q={query}",
    "properties": {}
  },
  {
    "code": "2ebf794a-fb1c-4f55-9737-0db9da3878fe",
    "enabled": true,
    "version": 0,
    "name": "Ruby Gems",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://rubygems.org",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "XPATH",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://rubygems\\.org/search\\?query=.+": {
        "headers": {},
        "list": {
          "expression": "//main[@class='main--interior']//a[@class='gems__gem']",
          "title": {
            "expression": "//h2[@class='gems__gem__name']/text()",
            "replace": [
              {
                "regex": "\\s",
                "text": ""
              }
            ]
          },
          "description": {
            "expression": "//p[@class='gems__gem__desc t-text']"
          },
          "link": {
            "expression": "./@href"
          },
          "extra": {
            "version": {
              "expression": "//span[@class='gems__gem__version']",
              "replace": [
                {
                  "regex": "\\s",
                  "text": ""
                }
              ]
            },
            "star": {
              "expression": "//p[@class='gems__gem__downloads__count']",
              "replace": [
                {
                  "regex": "\\s",
                  "text": ""
                },
                {
                  "regex": "Downloads",
                  "text": ""
                }
              ]
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/search?query={query}",
    "properties": {}
  },
  {
    "code": "9b429345-b2a3-4530-b726-d3395b2221a4",
    "enabled": true,
    "version": 0,
    "name": "pub",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://pub.dev",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://pub\\.dev/packages\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "main > .container > .packages > .packages-item",
          "title": {
            "expression": "h3.packages-title",
            "replace": [
              {
                "regex": "(^\\s+)|\\n+",
                "text": ""
              }
            ]
          },
          "description": {
            "expression": "p.packages-description"
          },
          "dateTime": {
            "expression": "p.packages-metadata > span.packages-metadata-block span"
          },
          "link": {
            "expression": "h3.packages-title > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "star": {
              "expression": ".packages-scores > .packages-score-like span.packages-score-value-number"
            },
            "version": {
              "expression": "p.packages-metadata > span.packages-metadata-block a"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/packages?q={query}",
    "properties": {}
  },
  {
    "code": "3e0cc26f-a96a-4f23-ac1c-48b9b87d825b",
    "enabled": true,
    "version": 0,
    "name": "pub (CN)",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://pub.flutter-io.cn",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://pub\\.flutter-io\\.cn/packages\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "main > .container > .packages > .packages-item",
          "title": {
            "expression": "h3.packages-title",
            "replace": [
              {
                "regex": "(^\\s+)|(\\s+$)|\\n+",
                "text": ""
              }
            ]
          },
          "description": {
            "expression": "p.packages-description"
          },
          "dateTime": {
            "expression": "p.packages-metadata > span.packages-metadata-block span"
          },
          "link": {
            "expression": "h3.packages-title > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "star": {
              "expression": ".packages-scores > .packages-score-like span.packages-score-value-number"
            },
            "version": {
              "expression": "p.packages-metadata > span.packages-metadata-block a"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/packages?q={query}",
    "properties": {}
  },
  {
    "code": "055ae385-097a-4598-8c7b-e3d43e1f404e",
    "enabled": true,
    "version": 0,
    "name": "nuget",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://www.nuget.org",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://www\\.nuget\\.org/packages\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "section[role=main] > .list-packages > article.package",
          "title": {
            "expression": "a.package-title"
          },
          "description": {
            "expression": ".package-details",
            "replace": [
              {
                "regex": "(^\\s+)|(\\s+$)|\\n+",
                "text": ""
              }
            ]
          },
          "image": {
            "expression": ".col-package-icon > img",
            "attribute": "src"
          },
          "author": {
            "expression": ".package-header > span.package-by",
            "replace": [
              {
                "regex": "(^\\s+)|(\\s+$)|\\n+",
                "text": ""
              },
              {
                "regex": "^by: ",
                "text": ""
              },
              {
                "regex": "[\\n\\s]+",
                "text": ","
              }
            ]
          },
          "dateTime": {
            "expression": "ul.package-list > li span[data-datetime]"
          },
          "link": {
            "expression": "a.package-title",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "version": {
              "expression": "ul.package-list > li > span.icon-text:has(.ms-Icon--Flag) > span"
            },
            "download": {
              "expression": "ul.package-list > li > span.icon-text:has(.ms-Icon--Download)",
              "replace": [
                {
                  "regex": "(^\\s+)|(\\s+$)|\\n+",
                  "text": ""
                },
                {
                  "regex": " total downloads$",
                  "text": ""
                }
              ]
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/packages?q={query}",
    "properties": {}
  },
  {
    "code": "e0c9c31c-14c6-4c0d-a66f-b2a06e8b1a82",
    "enabled": true,
    "version": 0,
    "name": "crates.io",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://crates.io",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "JSON",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://crates\\.io/api/v1/crates\\?.*q=.+": {
        "headers": {},
        "list": {
          "expression": "$.crates",
          "title": {
            "expression": "$.name"
          },
          "description": {
            "expression": "$.description"
          },
          "dateTime": {
            "expression": "$.updated_at"
          },
          "link": {
            "expression": "$.id",
            "attribute": "href",
            "replace": [
              {
                "regex": "^",
                "text": "https://crates.io/crates/"
              }
            ]
          },
          "extra": {
            "version": {
              "expression": "$.newest_version"
            },
            "download": {
              "expression": "$.downloads"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/api/v1/crates?page=1&per_page=10&q={query}",
    "properties": {}
  },
  {
    "code": "23934197-14c3-4ad9-879f-ca27527711b2",
    "enabled": true,
    "version": 0,
    "name": "LuaRocks",
    "category": "",
    "icon": "",
    "target": "SEARCH",
    "home": "https://luarocks.org",
    "author": "lanyuanxiaoyao",
    "description": "",
    "banner": "",
    "parser": "CSS",
    "downloader": "HTTP",
    "charset": "UTF-8",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
    "tags": {},
    "rules": {
      "https://luarocks\\.org/search\\?q=.+": {
        "headers": {},
        "list": {
          "expression": "main.search_page ul.module_list_widget > li.module_row",
          "title": {
            "expression": ".main > a.title"
          },
          "description": {
            "expression": ".summary"
          },
          "author": {
            "expression": ".main > span.author > a"
          },
          "link": {
            "expression": ".main > a.title",
            "attribute": "href",
            "replace": [
              {
                "regex": "^",
                "text": "https://luarocks.org"
              }
            ]
          },
          "extra": {
            "download": {
              "expression": ".main > span.downloads > span.value"
            }
          }
        },
        "options": [],
        "properties": {}
      }
    },
    "platform": [
      "JVM",
      "JS"
    ],
    "options": [],
    "search": "{home}/search?q={query}",
    "properties": {}
  }
]

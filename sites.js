module.exports = [
  {
    'code': '97542cba-e5d3-41fd-b990-46e9a4a5c5d4',
    'name': '東京 図書館',
    'category': 'ACG',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAABVwtN+AAAAGElEQVQI12P4/x+KmBtgaB8DcwcqaoAjAIyGDQgPcy/ZAAAAAElFTkSuQmCC',
    'target': 'SEARCH',
    'home': 'https://www.tokyotosho.info',
    'author': 'lanyuanxiaoyao',
    'description': 'A BitTorrent Library for Japanese Media',
    'parser': 'CSS',
    'rules': {
      'https:\\/\\/www\\.tokyotosho\\.info\\/search\\.php\\?searchName=true&terms=.+&page=\\d+': {
        'parser': 'REGEX',
        'list': {
          'expression': '<tr class=".*?category_0">.+?</tr><tr class=".*?category_0">.+?</tr>',
          'title': {
            'expression': '<a rel="nofollow".*?bittorrent.*?>(.+?)</a>',
            'attribute': '1',
            'replace': [
              {
                'regex': '<span.*?span>',
                'text': ''
              }
            ]
          },
          'description': {
            'expression': '\\s*Comment: (.+?)<',
            'attribute': '1'
          },
          'author': {
            'expression': 'Submitter.*?<a.*?>(.+?)</a>',
            'attribute': '1'
          },
          'dateTime': {
            'expression': '\\s*Date: (.+?)\\s+UTC',
            'attribute': '1'
          },
          'link': {
            'expression': '<a rel="nofollow" href="(.+?)">Details</a>',
            'attribute': '1',
            'prefix': 'https://www.tokyotosho.info/'
          },
          'extra': {
            'size': {
              'expression': '\\s*Size: (.+?)\\s+',
              'attribute': '1'
            }
          }
        },
        'next': {
          'script': 'var regex = /(.*)(\\d+)$/\nvar result = params.url.match(regex)\nif (result) {\n    return result[1] + (parseInt(result[2]) + 1)\n}\nreturn \'\''
        }
      },
      'https:\\/\\/www\\.tokyotosho\\.info\\/details\\.php\\?id=\\d+': {
        'text': {
          'expression': '#main > .details > ul',
          'title': {
            'expression': 'li.detailsleft:contains(Torrent Name) + li'
          },
          'author': {
            'expression': 'li.detailsleft:contains(Submitter) + li:has(a)',
            'replace': [
              {
                'regex': 'Search.+',
                'text': ''
              }
            ]
          },
          'dateTime': {
            'expression': 'li.detailsleft:contains(Date Submitted) + li'
          },
          'extra': {
            'size': {
              'expression': 'li.detailsleft:contains(Filesize) + li'
            }
          }
        },
        'list': {
          'expression': '#main > .details > ul',
          'title': {
            'expression': 'li.detailsleft:contains(Torrent Name) + li'
          },
          'content': {
            'expression': 'li:contains(Magnet Link) > a',
            'attribute': 'href'
          }
        }
      }
    },
    'search': '{home}/search.php?searchName=true&terms={query}&page=1',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': '東京 図書館,tokyotosho'
    }
  },
  {
    'code': '43e259b9-abd3-465f-bd22-7bdc8ad907a2',
    'name': 'Nyaa',
    'category': 'ACG',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABAlBMVEURbeMIN2////8hd+Xn9P4ofeYBefoAcfXX6/0op/84jOz4/P898v8dov845P8vg+cwq/8Chf9C//0AavJvxP7d7Pyw1vo3hegSmf/w+P4zu/87ovQ/+f856v8MkP9q4v4Zivgysv/O7P40zv7J5fy42vsqoPqgyvkYc+s4xP/C4PsqmvgPePIujfE43P821f8+qv2K3/yAyfzQ5fskf+4Fi/+76v2b3f1auv1ouf1Ls/2OzfuDwPqsz/l8vfmTvvVsrfWDtPE1lvFio+4/iOcq1/8kw/+Y8f5K3f563/1a1/xmy/xF7Pue1ft11PlRq/lcsPhL0PZDmfIysPAAS95YlOoND8hKAAACLElEQVQ4y4WR53LiQBCE5d2VWSSExKEEAiQTRTqTjpzBOdt37/8qNyMZkP3HDaXaqv6qe3ZWOPtBwhmlwheJolpyu8ERHADUr7b07tQ/3GeBUvHj8c0BQIz6UtXRLrLZO7eUzCd+gQCwThVqU1HicS173XWTyUQiFwJQiggV1bZtIwAR3fvfkAAEAtg2aJ2nUn8K9oGoly6RyOUQiMVi5yAECgW7ua1W4xdZIDAiAoREmwq0qmhTLVu/DEsASB8JzxJA1bg+hgwseTwCYYmEPnUmejjGlXuTTyDwGeGBj3KmMGdcf3i7k2+SAQDEYNBSDwvbdhRF0XV9SGQ3mcdr+mKr1Tpta6d3FE3vsWKm694mEaB+Om0dbKrOXzV73JuZfDS8v0KA+qq/P/pUNDv2mC01bcaH17dFBARLjD7nslA1ydTWy0/Z5wwLKk79FJ7lpfDCCHuqsN6IMBYknHy8qZfSCarICZE5JkQA6NqmUg30ZRm/owgQDiJ5nlckB8kPEYDin7altjcjR7HvCZIFv3loZiCpHAFUjJBUSdibZcIZAwI6ohUWpKgipTs26TcqZpnhVUJgZ272sENftUTaXi7IvMF5owKA3AsAy4BjbeDDs76vzQVjGcYZ57JcXjsBsAoHXlVWa0IMzgzCZG6UJx1JQoAKjASqNGoZAAwDF5Dh5qtKmwoAf/+RULUN+ISbeO7XWM0UhKaDwOIT2BiBhZRR6xsVTsWmBcAP+g8dajvM1EuD+QAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://nyaa.si',
    'author': 'lanyuanxiaoyao',
    'description': 'A BitTorrent community focused on Eastern Asian media including anime, manga, music, and more',
    'parser': 'CSS',
    'rules': {
      'https:\\/\\/nyaa\\.si\\/\\?q=.+&p=\\d+': {
        'list': {
          'expression': '.container table.torrent-list tbody > tr',
          'title': {
            'expression': 'td[colspan] > a[title]:not(.comments)',
            'attribute': 'title'
          },
          'dateTime': {
            'expression': 'td:nth-child(5)'
          },
          'link': {
            'expression': 'td[colspan] > a[title]:not(.comments)',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'size': {
              'expression': 'td:nth-child(4)'
            },
            'view': {
              'expression': 'td:nth-child(8)'
            }
          }
        },
        'next': {
          'expression': 'ul.pagination > li.next > a',
          'attribute': 'href',
          'prefix': '{home}'
        }
      },
      'https:\\/\\/nyaa\\.si\\/view\\/\\d+': {
        'text': {
          'expression': '.container > .panel:contains(Magnet)',
          'title': {
            'expression': 'h3.panel-title'
          },
          'author': {
            'expression': 'a[title=User]'
          },
          'dateTime': {
            'expression': 'div[data-timestamp]'
          },
          'extra': {
            'size': {
              'expression': 'div.col-md-1:contains(File size) + div'
            }
          }
        },
        'list': {
          'expression': '.container > .panel:contains(Magnet)',
          'title': {
            'expression': 'h3.panel-title'
          },
          'content': {
            'expression': '.panel-footer a:contains(Magnet)',
            'attribute': 'href'
          }
        }
      }
    },
    'search': '{home}/?q={query}&p=1',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.link}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Nyaa'
    }
  },
  {
    'code': 'afee8741-8deb-4a34-8827-7ec0cc4fd651',
    'name': '罗马盘',
    'category': '网盘',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAVFBMVEUAAAAAT7MAT7MAULQAT7QAULMAT7QAT7MAT7QAT7MAT7MAULQAT7MAULMAT7MAT7QAULQAULQAT7MAT7MAT7MAT7MAT7QAULMAULQAULQAULQAULT7gVfUAAAAHHRSTlMA3tKXcYVOsyXwwWHnjHxqV0Gi/sn2DrmqOhkyHHVTJAAAAZhJREFUOMt1k9mS6zAIRA1oMaDd8pb5//+8Se44GccVnlD1EerqQsOrnA8oW/MCQHW41L6y2JyTNdkQMI0fumEphRAeJbGkAO6k28nWxj0aVU0EwTqZyx89TdlBV6UOAGu6D5C6ze5tb0plpr0xbNZEzyE5hCrh8LGgr0wVQ749z2OcfMXuuL0MVll36G/jhb3jmKb9dwBlris8rr8ftYkdtP8HLkI6n7OJdznG8Lxk0UFZ/TmXkSP1zO7R+81gCfqRnBcDGsyj7TGKwv4BJFDISI8WLfkMl+yDQurtAMwFSHfAIH0HCDMo2K/Ags2CBv0KlEllSzx+A26w6pxFhi/ATdh10UnPgDugilyIneByBlqIbhx/1M/dxSnbyQ1n4CdigMChG+dnk6c4fADJupJTUqWAxXAbPoGM0P0mEDC5NvnhAtSiiYislhgAZbkALQjZSBvOAcRxugBjboIAQiguZMvjAURazbHiy3KfvM85QoXDZfnZ3ajL3yTbXY75WFON0UZzAkYmM7+SJLyXv533CetK7vmB/wGb0hXjWHPZKAAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://www.luomapan.com',
    'author': 'lanyuanxiaoyao',
    'description': '网盘资源搜索，就用罗马盘 - 最好用的百度网盘搜索引擎',
    'parser': 'CSS',
    'rules': {
      'https:\\/\\/www\\.luomapan\\.com\\/search\\?keyword=.+&page=\\d+': {
        'list': {
          'expression': '.main .search-result .result-inner .result-wrapper .roma-item-wrapper',
          'title': {
            'expression': '.roma-info > h1.roma-title > a'
          },
          'description': {
            'expression': '.roma-info > .roma-detail-wrap'
          },
          'dateTime': {
            'expression': '.roma-info > .roma-meta > .meta-it:contains(时间)',
            'replace': [
              {
                'regex': '时间：\\s*',
                'text': ''
              }
            ]
          },
          'link': {
            'expression': '.roma-info > h1.roma-title > a',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'size': {
              'expression': '.roma-info > .roma-meta > .meta-it:contains(大小)',
              'replace': [
                {
                  'regex': '大小：\\s*',
                  'text': ''
                }
              ]
            }
          }
        },
        'next': {
          'expression': '.pager-wrapper > .pc-pager-wrapper > a:contains(下一页)',
          'attribute': 'href',
          'prefix': '{home}'
        }
      },
      'https:\\/\\/www\\.luomapan\\.com\\/detail\\/.+': {
        'text': {
          'expression': '#info',
          'title': {
            'expression': 'h1.filename'
          },
          'dateTime': {
            'expression': '.roma-meta > .meta-item:contains(时间)',
            'replace': [
              {
                'regex': '分享时间\\s*',
                'text': ''
              }
            ]
          },
          'extra': {
            'size': {
              'expression': '.roma-meta > .meta-item:contains(大小)',
              'replace': [
                {
                  'regex': '资源大小\\s*',
                  'text': ''
                }
              ]
            },
            'password': {
              'expression': '.roma-meta > .meta-item:contains(密码)',
              'replace': [
                {
                  'regex': '提取密码\\s*',
                  'text': ''
                }
              ]
            }
          }
        },
        'list': {
          'expression': '.detail-content',
          'title': {
            'expression': '#info h1.filename'
          },
          'content': {
            'expression': '#statement > .button-wrap > .button-inner > a',
            'attribute': 'href'
          }
        }
      }
    },
    'search': '{home}/search?keyword={query}&page=1',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': '罗马盘'
    }
  },
  {
    'code': '52e8bdc3-84bc-495c-a406-b053a94fc825',
    'name': '56网盘',
    'category': '网盘',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAASFBMVEUAt2D////x+/f5/vwmwngOvGpa0Zl12apIzI7d9uq169GY47+N37gdwHLT8+M7yIXl+O/G79yr58qi5cVm1KCE3LMxxX/N8N+lV1mkAAAA/UlEQVQ4y5VTWRaCMAyE0H2xgID3v6lpRdO06HvOXzLT7B3+gFTrDOC2eE1HD+ML0youeAUjAXTH6+l8fUp8+37KpFNCRnMvop3xIse36W0tWW1qgUPPTVI7xa74A4OCqBu2qFBkBzQ1rwk9jswbBpC8alu7JGZYBg6PIT5JxUXfGn2mFoRGsNWCiMb9VwQJuWuOlWpALDi4t0VvZh7P8ww8awSaPe0mNV1DIt7SIKvZg5bV7QAvKpV7mr0yKqCYL7fAwNhgJZKuhCF0Z/s4D9LqUM5zG1oItYd9O/KJFUX68YceI+ukR5xLMvldcUBXaPdV+D566GZBPZTL/BPwuga5nuwrlQAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://www.56wangpan.com',
    'author': 'lanyuanxiaoyao',
    'description': '专业网盘搜索引擎-56网盘搜索为您带来最佳网盘搜索体验',
    'parser': 'CSS',
    'rules': {
      'https:\\/\\/www\\.56wangpan\\.com\\/search\\/kw.+pg\\d+': {
        'list': {
          'expression': '.content .sellListContent > li',
          'title': {
            'expression': 'div.info > .title > a'
          },
          'description': {
            'expression': 'div.info > .address'
          },
          'author': {
            'expression': 'div.info > .rInfo > .sharer'
          },
          'dateTime': {
            'expression': 'div.info > .rInfo > .feed_time'
          },
          'link': {
            'expression': 'div.info > .title > a',
            'attribute': 'href',
            'prefix': '{home}'
          }
        },
        'next': {
          'expression': '.content .contentBottom .list-page-box > a:contains(下一页)',
          'attribute': 'href',
          'prefix': '{home}'
        },
        'options': [
          'OPEN_DIRECTLY'
        ]
      }
    },
    'search': '{home}/search/kw{query}pg1',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': '56网盘'
    }
  },
  {
    'code': 'bb32f4ff-06ad-4709-b0c3-fb648ea210bd',
    'name': '小白盘',
    'category': '网盘',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABUFBMVEUAAAAVoIUTn4MWoIYVoIYYoIYOnYEaoocbpYshpYs5r5cVoIUgookMnIC65Nqi1M4fpoyJysP///8wq5IhmYIKjnQXoIZKtqEMnYEWoYRjt6dAp5NNsp9iu6oUoIYMnIEWoYhDtJ7c7+zJ6eTk8vIjpo00rpVjv61KqpZevauOz8SBxrij18264tsWoIUSkHj///8NnYEJi3EUl34JjHj5//+x7Pj/+eQKn4fr/v///fS46vL/++3u8N/98dXl5Mc9vcSgx6tQtqUSop8RnZxSoH5FnncnkXPe/P/F8/uc4+/B6uyF4uzz9etW1OH18d1iz9eTzr/O2LU+tbV4v7FFs6gcrKhcspkUpJCQtI4GkopwrYktnIhIoIVZoIFlqHJJmG964+un4OKB1+K73stszctRycul0MeJxbazz7QutLJdtrC3yKE+rZBppIVennKXlSA7AAAALnRSTlMA9Nzr1ItxNiT61cK1nT0oFgsE6unpy8G7opycbm1iVkpEKBwS37myqqOFb2xOE0M4MQAAAcFJREFUOMttk1d3wjAMhR2SdEH33nu3RHFCKZQOoHvvCd17/v+3KnKIA+G+xCf387XkIzOfGvo6NSWqhvXBRlZGlXqbEiUpaqR3uNSuqkVXygz1FKf0h4QhCXOs3udXSEciWl3AN1E+YrRA9Ls/Ls8ymR8fYtYMi/pCwn7ZiQHsPV9IxJxscoBaWp8vgFAybZkFIDrr9K+QvwWwmL74esSUtIxoxwjdWc3vAhxvcM7tk01I3cg66lhDm0N+bsLyhm2g+EoCjg0vYor10Qn7kLzhBul6G5buLe8M1ukA8w+wtG4LgB9C/M62Cp0yTZSAu4oAwxJAM1MI2If4mnuE/QTxP4QtAqqZAFdi8C0Ant3CenEhiGqmEpCdg9QVd4Q1wpVgLUoIuxEJSH7kc7kzvNDULwKCwBp0RRCvCQCIxcDR4m2BwC4GVLehkx1y994w48AjxhmLeMOQOT16P83z1TnMcHuyZ/zTxEkGEQdrdC0tQzjschwt2kXEMl0s7xIDFyCyR8LHAFRjR5DgNn2mmTdzkpCiA0iVZQk+McI8QgsSvHuk6OWVELy1t4kVaaDD9Ai0u+tZQIN6OKQ6b1uL9Ej7H59dnOpib3HsAAAAAElFTkSuQmCC',
    'target': 'SEARCH',
    'home': 'https://www.xiaobaipan.com',
    'author': 'lanyuanxiaoyao',
    'description': '小白盘帮收录了大量的网盘资源,页面清新，实时检查失效资源.帮您省心快速找到想要的电影,电视剧,小说,文档,音乐,软件,种子等热门网盘资源',
    'parser': 'CSS',
    'rules': {
      'https:\\/\\/www\\.xiaobaipan\\.com\\/list-.+-p\\d+\\.html': {
        'list': {
          'expression': '.main-container .category-list > .item-list:has(div[fid])',
          'title': {
            'expression': 'div[fid] h4.job-title > a'
          },
          'description': {
            'expression': 'div[fid] .jobs-desc'
          },
          'author': {
            'expression': 'div[fid] h5.company-title > a'
          },
          'dateTime': {
            'expression': '.info-row > .date',
            'replace': [
              {
                'regex': '分享时间:\\s*',
                'text': ''
              }
            ]
          },
          'link': {
            'expression': 'div[fid] h4.job-title > a',
            'attribute': 'href',
            'prefix': '{home}'
          },
          'extra': {
            'view': {
              'expression': '.info-row > .item-location:contains(查看)'
            },
            'size': {
              'expression': '.info-row > .salary'
            }
          }
        },
        'next': {
          'expression': '.pagination-bar > .pagination > li > a:contains(>>)',
          'attribute': 'href',
          'prefix': '{home}'
        },
        'options': [
          'OPEN_DIRECTLY'
        ]
      }
    },
    'search': '{home}/list-{query}-p4.html',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': '小白盘'
    }
  },
  {
    'code': '0d3e0c9f-a9c9-40c5-999a-e67519aabac4',
    'name': '小可搜搜',
    'category': '网盘',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAXVBMVEX///8BAQEPDw88PDzh4eH29vbs7OzZ2dn6+vqbm5stLS0jIyOvr6+kpKSRkZFKSkrx8fHJycl2dnYaGhq5ubl+fn5tbW1hYWE0NDSFhYVTU1PR0dHDw8NaWlrn5+ebffeqAAACMElEQVRIx+1UR5LcMAxkJsWkHEez/3+mwVzj2XBz+bB9UEFkN4AWCaFf/J9QYuym7QnYt9NK/hNfdNcx4wxi6DSqb9j83iu5io7u4yv+vRP8Gaj7tMpwZrqh+9pZ6/x0HXnpku98ecUG6LowrobbueXBkXi4Tcck7o1PA/1ahEJq3A2BF6JPCb6YDxLSqXd+v4RQnM3J7Hlo1pu/FcMFK6uI/OeL4WlAgJGCeEENHcEkJkN8iy1f27Yny10ksB5j2j4vOzA+05k6IGnHZMegmKWglYkCoW8FoH8RI0EhlGIyxEVrkHhNnGXGlBUBxcSmyBJ8SL5jnAToYTAVaWsvXQNwXZ2AGVU2L3hMstmbYC1LBTIlLe+xZvAgI8oY52wbiWPui0A8cncDxdfAp37l9XvoYkJJJlQdAlQFe+UWE1NJ23bc3qnS0iVeBAspFcS126GavnK4YcNeBCcuHuTcrBlsHrlW3m8WgFWlfUk2wfGolEZjnbXlotCh3IZ2DiPBJudZgVEVYqqXSUHYTlqFRO3OaMdUoC89LndGdQSkqo2Drg2OEJJjO/3UAydX5p5EaYOFhWNMCoobzJJag+0ZthtUSEHO2Ap71pGjdzjNJY6vRS/gayAcXobY0SCBmWaBHvRtQpuiS1O8W2Bx6bx7DGi4T9Cm/O+4dZ78+F9arN96U1qT6DOw0+AK0kLtB/QF5FokTag9Q9+A2aeeK3k+NvuBfsCH3TTJZtZboF/8C/wBmjIZ3LY8x4cAAAAASUVORK5CYII=',
    'target': 'SEARCH',
    'home': 'https://www.xiaokesoso.com',
    'author': 'lanyuanxiaoyao',
    'description': '小可搜搜，有你更方便',
    'parser': 'CSS',
    'rules': {
      'https:\\/\\/www\\.xiaokesoso\\.com\\/s\\/search\\?q=.+&currentPage=\\d+': {
        'list': {
          'expression': '.container .result-box .row .document-piece:not(:contains(争议))',
          'title': {
            'expression': '.media-body > h4.media-heading > a',
            'replace': [
              {
                'regex': '\\n\\s*',
                'text': ''
              },
              {
                'regex': '\\n+|\\r+',
                'text': ''
              }
            ]
          },
          'description': {
            'expression': '.media-bottom .file-list-contain',
            'replace': [
              {
                'regex': '^\\r|\\r$',
                'text': ''
              }
            ]
          },
          'author': {
            'expression': '.media-bottom span:nth-child(2) button',
            'replace': [
              {
                'regex': '\\s',
                'text': ''
              }
            ],
            'script': 'var regex = /(.+)分享\\s*(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[1]\n}\nreturn \'\''
          },
          'dateTime': {
            'expression': '.media-bottom span:nth-child(1) button',
            'replace': [
              {
                'regex': '&nbsp;',
                'text': ' '
              }
            ],
            'script': 'var regex = /(\\d{4}-\\d{2}-\\d{2})\\s(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[1]\n}\nreturn \'\''
          },
          'link': {
            'expression': '.media-body > h4.media-heading > a',
            'attribute': 'href',
            'prefix': '{home}',
            'replace': [
              {
                'regex': '\\n\\s*',
                'text': ''
              },
              {
                'regex': '\\n+|\\r+',
                'text': ''
              }
            ]
          },
          'extra': {
            'size': {
              'expression': '.media-bottom span:nth-child(1) button',
              'replace': [
                {
                  'regex': '&nbsp;',
                  'text': ' '
                }
              ],
              'script': 'var regex = /(\\d{4}-\\d{2}-\\d{2})\\s(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[2]\n}\nreturn \'\''
            },
            'number': {
              'expression': '.media-bottom span:nth-child(2) button',
              'replace': [
                {
                  'regex': '&nbsp;',
                  'text': ' '
                }
              ],
              'script': 'var regex = /(.+)分享\\s*(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[2]\n}\nreturn \'\''
            }
          }
        },
        'next': {
          'script': 'var regex = /(.+currentPage=)(\\d+)/\nvar result = params.url.match(regex)\nif (result && result.length > 2) {\n    return result[1] + (parseInt(result[2]) + 1)\n}\nreturn \'\''
        }
      },
      'https:\\/\\/www\\.xiaokesoso\\.com\\/info\\/.+': {
        'text': {
          'expression': '.container .row .detail-box:has(h3)',
          'title': {
            'expression': 'h3'
          },
          'dateTime': {
            'expression': 'span:contains(时间)',
            'replace': [
              {
                'regex': '时间：',
                'text': ''
              }
            ]
          },
          'extra': {
            'size': {
              'expression': 'span:contains(大小)',
              'replace': [
                {
                  'regex': '大小：',
                  'text': ''
                }
              ]
            },
            'number': {
              'expression': 'span:contains(文件个数)',
              'replace': [
                {
                  'regex': '文件个数：',
                  'text': ''
                }
              ]
            },
            'password': {
              'expression': 'span:contains(密码)',
              'replace': [
                {
                  'regex': '密码：',
                  'text': ''
                }
              ]
            }
          }
        },
        'list': {
          'expression': '.container .row .detail-box:has(h3)',
          'title': {
            'expression': 'h3'
          },
          'content': {
            'expression': '.download-erea button',
            'attribute': 'data-downloadurl',
            'prefix': 'http://norefer.mimixiaoke.com/api/jump?target='
          }
        }
      }
    },
    'search': '{home}/s/search?q={query}&currentPage=1',
    'properties': {
      'SEARCH_LITE_SUPPORT': 'true',
      'SEARCH_LITE_TITLE_TEMPLATE': '#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}',
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': '小可搜搜'
    }
  },
  {
    'code': '21288140-5491-4aac-a827-e084bfa70ae2',
    'name': 'npm',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAADVAADVAADVAADVAADVAADVAADVAADVAADVAADVAADVAADUAwP////63d3dKSnjTEzZFBTnaGj74+Pzrq7gQUH97e33zMzwnJzsiYnpc3P+9fXqe3vlX1/86en1wMD0urrukpLeNjbna2vkV1dx9FJWAAAADHRSTlMA5H9p8XHLXg+TPCIbiF8bAAAAvUlEQVQ4y+2RWw6CMBBFizzVmZYOlPdb9r9GaQUjqRIXwEluOh+nzc2UnfyJfznEZ4FzSMA8OMRjjhw45wkvQOkz4S1UZtDJhbMICWp6iNFQwYgbtRE4YinSXAuZmuoGSsRBtNgLyjaBoDBCB5AZIYVpiXoLD1tQS2JLqIsRK0vodLGU70oOoExtLcBMJEDF5oVGzxORAkkxyFY6H4uaEVHaiwrdF1cQRK30Lu6OkG3c1hsR+8F9/b2InXzjCSfLFUwXvmv4AAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_IMAGE_TEMPLATE': 'true',
      'SEARCH_LITE_KEYS': 'npm,JavaScript'
    }
  },
  {
    'code': '1f5443c7-9b0a-43e8-9420-83b7d49e16eb',
    'name': 'Maven',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEUAAADyO2/yO2/xPG/yPG/yPG/yO2/yO2/yPG/yO2/xPG/yO2/xPG/xPG/yPG/yO2/yO2/yPG/xPG/yPG/yPG/yO2/xPG9/RIhNAAAAFnRSTlMAFkPavpFrDZ8j5zDw0rJ/WE/GiDp1QDIvygAAANVJREFUOMu1kEt2gzAMReUPNjbQACF3/0vtaXxSGddk1NyZfk/Sk//CWPMnleooMDb1yZ0yA9jzvONex3caiRHWOt4cOdULZpw5KY4wVOGuoTZkHfmivSkOwEN/omyseAC7HvDaoFiAo6h5gK1pOABuvwtYYmtsBnyxqPQqevicimeoCcoNnuZZ+gKy8Tz9yCrQeWM3nh+CXDTkUl9UQJlQgnRIMy+89IgLBTWxYwTllT4DBR+lzzSXetJUb4c3ckkAt8bregzjEuQN62StvMNIivIJvgHGYREYjV73PQAAAABJRU5ErkJggg==',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Maven,mvn'
    }
  },
  {
    'code': 'a2387be5-1b9d-41df-b28a-246c972e492f',
    'name': 'Maven (Sonatype)',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEUAAADyO2/yO2/xPG/yPG/yPG/yO2/yO2/yPG/yO2/xPG/yO2/xPG/xPG/yPG/yO2/yO2/yPG/xPG/yPG/yPG/yO2/xPG9/RIhNAAAAFnRSTlMAFkPavpFrDZ8j5zDw0rJ/WE/GiDp1QDIvygAAANVJREFUOMu1kEt2gzAMReUPNjbQACF3/0vtaXxSGddk1NyZfk/Sk//CWPMnleooMDb1yZ0yA9jzvONex3caiRHWOt4cOdULZpw5KY4wVOGuoTZkHfmivSkOwEN/omyseAC7HvDaoFiAo6h5gK1pOABuvwtYYmtsBnyxqPQqevicimeoCcoNnuZZ+gKy8Tz9yCrQeWM3nh+CXDTkUl9UQJlQgnRIMy+89IgLBTWxYwTllT4DBR+lzzSXetJUb4c3ckkAt8bregzjEuQN62StvMNIivIJvgHGYREYjV73PQAAAABJRU5ErkJggg==',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Maven (Sonatype),mvn (Sonatype)'
    }
  },
  {
    'code': '3a3d7617-80ef-44f7-a369-9032f13aa9a0',
    'name': 'Github',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEUAAAA4ODhGRkY5OTk9PT0+Pj49PT1CQkJFRUU/Pz9AQEBEREQ3Nzc7OztDQ0M6Ojo+Pj5EREQ4ODj9/f2wsLD9/f35+flISEj6+vrb29v///83NzdHR0c/Pz8oKChTU1MvLy95eXnk5OSwsLCqqqp/f39gYGDV1dXKysrExMSSkpKJiYn39/fy8vKcnJyMjIyEhIRra2vq6uq5ubnUvOFSAAAAGnRSTlMA8/OfTjMhC51uPt7ekYiIYMvK7smjk5FvQDevNlkAAAFRSURBVDjLrZPZkoJADEVFUAT3dZT0wiaLiqDz//82nS41NEXNk3m9p+vmJunBV8v1vbltzz3f7ddHi7XFVVmb5ahHHk+GjOsCAMsed3VnyhjjHwJmjqmv8HkbAGtlvEcd4KWBCJFwWv5TxrMyzRSifEKRpaUMYUZ9TBiDJgiqNCnyvEjTKggiAWB/8g0VUAdGnRVgvdK6C6aAyAQeCoClqwF/jQETE0ixz42vAQ8dHjcTuGXo4WngBx0uQaeu6DF/Z2Bw7wJ3BOx/gIsGyOLcBSKywCa5jE09ZiE2STHhagKNoJg4KKmIuPW+CYEGpUbNL78ylHUSazW5SgFAo1Y5uCwLJgTkCOQc160z0LpBPsuM1a09gF43HYwaZfW80SbxYMyT41GSFC3AWnWPFkBEBMycnrOH6D1EOnvz4+y2qG939HHMck/Hw35/OJ7cwTfrDxRkPUCeRWdPAAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Github'
    }
  },
  {
    'code': '19880471-f92d-4d14-9705-45c9e8ded084',
    'name': 'Gitee',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEUAAADHHCLHHSDHHCLGHCLHHSLHHCHHHCLFHCLEHR3IISHHHSPGExn////zycrrqKvxwcPts7X109TuuLrgeX3++Pj88fHih4vaaG3XV1zMKzH23N7TSlDWjIfuAAAAC3RSTlMA1Sq85ZSIdFkaD0/9yi8AAAEJSURBVDjLhZNZtoMgDEATEBRRtHVq3+v+11kmmco53C8hFwmQQEQMjKKGskHAL4SjDCAnkDP2nczo+jFbTuUPlCRxlBWQlPEpIxojvcMywYyoy6P3E+9lVZHLGL3doLNxuRxzylNqoTObcLd+ibEoSA4g0ApvPXdsS2S3KaGAIfzgfOWnsAzAXAbrPG9TRWBAnaDmedGT8aj+gwKmwrSvN5dzsRBUcoqGoOrCrjSrOqJQJunPFAQKLBECWxAYDBXhddpbcRcl8BbO7eFYzbPtLgUBwL2Q8/9nBW6f2wjP4i0/Nt4RXzDTdKmEx+7Wyz6UXFFufkjHWLS1l0TSLPt247Rbr928zfb/AlLFJZVTWP9nAAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Gitee,码云'
    }
  },
  {
    'code': 'de83842d-4d2f-485c-be5a-02ad2a443664',
    'name': 'Docker Hub',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABNVBMVEUAAAAAWJ0EnOkAsP4Ak9wBitMDqPQBqfQjV3QKd7wCqPUCidIBVJgCitQDj9kCktsDqvgDjdYFpO8hpuZzzvgBUpcCidMBjdgDqfUCn+0JicoBaK53z/cBTpMzS1cArfwBV50GqPMEqPA5QEUDjtc3REgEqPMAV5kAbboBbLFxw+gBsP8BXqMBYaYOltY3REpcx/o/rOQfa5FYwPI5QUQsc5hHptMAVplOvfE9vfsAT5UAiNEAidUAqfYBVJkAjtoBgswBaK8BXKEArf0JouQCdr4BT5MeY4kagK0lWHMbmNsadqQacJ0jXXuL3P4Rk8sCfMQBZawTZ5UcbJSA2P1btuh7vuIsn94Lnd0QmNQTjtKfv9AWibsBbrW4raYaWXpGVFqFz/BNlrllh5RQbHdIXmgqS131KNMHAAAAO3RSTlMAWzPlF/TrICAH9uSspI1zZlZEKvfqzr67ta+ppKOdmZmHenJhWVdPEPX07+fEsK+rpKGTiYR8amFCOuObaM0AAAF+SURBVDjL3ZJXcsIwEEBlmxogEEgv9JLeuxqysU0PHQKhpN7/CJHxMIRJwn/yPlar0dsdaUfgH2JZdbmW5gpWhOLzhF0XQr90uHHvbHk8m3tVJoAxfv+s4CaEIZSWNWIKdpvNPiOEicYohVxIAYMIxhEwwZkShCPG+qqqMsbCgnAPwDrGG2IyaXZxrBCiUqoSIkOKGCHusWCzYRw1775CNBUhVdNIGqGqRnYA8GGDBdF4u108lOUKpRVZrkJK+7K8ZQn4FjBWDnyAE5IkzDeKgo3FLJQkRZFC0QAwOH4qPGQes9lOJmNkPOWhk81uOhyxhIML56WcXtdzpXqxNszpxaLOQ6FeKgVjlyfBBBe8EEEIEYLpfJ6HNBwHuOGcTEG0QjSm3eu1zZTbVnE6pjVEObDSHAyavNTEC6b4C7WaPvzIdVut7uR8EXzlajR6f3t94UOans9yvf9cLjfyk/6r37/E3elyo7ychxzrmtcCfiBwe7G9feZZjItO8Pf4BLqaVFDwhRsjAAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_IMAGE_TEMPLATE': 'true',
      'SEARCH_LITE_KEYS': 'Docker Hub'
    }
  },
  {
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'PyPI,Python'
    }
  },
  {
    'code': '2ebf794a-fb1c-4f55-9737-0db9da3878fe',
    'name': 'Ruby Gems',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEUAAADpOSPqPSvvPSrxPSrxPCv1Py3wPSrtPSjzPS3zPS3sOyvzPiztPSzvPCruPCzuOyrtOSjvPCnxPizuPCvzPizWG0+fAAAAFXRSTlMANQeu2JHvfRLI4CSH0G5NYFhC6pwzKjXKAAAA00lEQVQ4y4WT6Q6EMAiELT2sut7O+7/qri1ZAtF0/jTNfBwJ0Gk57133rimewBmnFzsvAUgJCEt+sGkfAAzrWp6drO98Asb+F5r7EUjemeIJSHEyPyleYg4JOEo+boVq1U1Vpa12RHf1uRZX4lZmdwOhvEY1MjDga9b+r60k9AqgCIgu0oD4QmiALsAQWQFHgtWuM3ysH0kBQoivACHE1wAT4luACfEtwIT4FmCCfQvMTojqy7Bk3ExE0uO2C0OkF6axcq2lba99+3Dap9c+3ub5fwEurRr2+bwLhwAAAABJRU5ErkJggg==',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'RubyGems'
    }
  },
  {
    'code': '9b429345-b2a3-4530-b726-d3395b2221a4',
    'name': 'pub',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAACVZVAxf8AVZkCU5U/x/9AxP8BVpk7wv0DVZc/xf8/xP8BVphAxv8CVZs6uvJAxv8AVJg/xP9Cxv8+xPwtt/YCVJcae7sWe7sLYqQ3sOgwn9sbf70zqukcgL4AV5sqt/k+xP8Vhsgquvwwod0Xf79Cyf/u4DU6AAAAH3RSTlMAn6TqHrAKsjsw59WLUTsY9tWWLCHWRznVsrGvrnBVOM3GuQAAAMJJREFUOMt908sWgiAUheGDKKaZppV2Byp6/0cMBq2tCPzT8609O7RM7Ibs0RHyz8Vea10ck2cnuuQZG975O8vfmG4fr+tCiPtL+l1yQqNRa1FCCGZUUozcqHdCCCaNSomWW5ASTFqQEBV3ICYaokY6EBPMDgBAALgBAAiAEgAiugABkPcAEDNAbQ8AAeAEAASAEwAQAFacVUgA0HQKCgDaBAR3NfQXW+1VPytbTlFR4zfCoj5QSgCsBcBaDBkaOnL9ABApU/CmJVlVAAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'pub,Flutter'
    }
  },
  {
    'code': '3e0cc26f-a96a-4f23-ac1c-48b9b87d825b',
    'name': 'pub (CN)',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAACVZVAxf8AVZkCU5U/x/9AxP8BVpk7wv0DVZc/xf8/xP8BVphAxv8CVZs6uvJAxv8AVJg/xP9Cxv8+xPwtt/YCVJcae7sWe7sLYqQ3sOgwn9sbf70zqukcgL4AV5sqt/k+xP8Vhsgquvwwod0Xf79Cyf/u4DU6AAAAH3RSTlMAn6TqHrAKsjsw59WLUTsY9tWWLCHWRznVsrGvrnBVOM3GuQAAAMJJREFUOMt908sWgiAUheGDKKaZppV2Byp6/0cMBq2tCPzT8609O7RM7Ibs0RHyz8Vea10ck2cnuuQZG975O8vfmG4fr+tCiPtL+l1yQqNRa1FCCGZUUozcqHdCCCaNSomWW5ASTFqQEBV3ICYaokY6EBPMDgBAALgBAAiAEgAiugABkPcAEDNAbQ8AAeAEAASAEwAQAFacVUgA0HQKCgDaBAR3NfQXW+1VPytbTlFR4zfCoj5QSgCsBcBaDBkaOnL9ABApU/CmJVlVAAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'pub (CN),Flutter (CN)'
    }
  },
  {
    'code': '055ae385-097a-4598-8c7b-e3d43e1f404e',
    'name': 'nuget',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAAASIAASIAAR4EASIEAR4EASIAAR4IASIAASIAAR4IAR4IAR4AASIEAR4EAR4IARoIAR4EAR4IARoEASIAxcKKVAAAAFHRSTlMA8+UIlWeyWdqpTzTGI35GEog9K0J2VKkAAADrSURBVDjLfdJbtoMgDAVQQgny9HnmP9brVUuaLsr5At1LTIIxaePVDMIExJEIAGgZAIsz0wA4AKUOwDp7l9vuJRHSlpVd9O/ELYm5HQeokN/V+43wHZs+wAyQtfQlpP6FELhWtlqU9X1ABKWnsSr8gMMi3rJo4B+QCO5eRQ3CAyagXGXXoIEVQPMpVoefABSZPQZAhWgEKPIyOfsThLvDufTB1bFbhD6IMp8+4AZ26gGaGjhsA4n6X2itrqH/D7Jx/SrkvGy7ffBycZlEkEt52cJJs5GwVaP49yWbzyye9CBdNTqvfXYSPq6Hf9z/If5fMQxdAAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_IMAGE_TEMPLATE': 'true',
      'SEARCH_LITE_KEYS': 'Nuget,C#'
    }
  },
  {
    'code': 'e0c9c31c-14c6-4c0d-a66f-b2a06e8b1a82',
    'name': 'crates.io',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA3lBMVEUAAAATDgaWfEaviUAEBAJhSjAQCwd5XD11VjPRmi/x1Zt6XSUAAADWtnsgGxESDgmphl7RnzzbpDvoul/Po05CMiBsVDogGBCSdUFHNiKffkFnUi8cFg7btm/erEyBYz/jsVRpTS2egF3lumXJn03sxXrluWWlh1VhTSftzozmqzfntFHQlCLGjBnnr0G/hBDpwG/WnzK3fQvnumTIlC7hrEa+jSyudxDqxHzKmkOEYz6Sayrpx4WkgFF4VS6gbg7is1eXc0jNmTLdoi7XnCindA/RqFu9hx+/mW67k0Y3YE+eAAAAKnRSTlMAERF7L+Jp/vHueHdQQj8i/erq2dC2m5OLf3lhXOzs3M7KvriqlmJgQipZZ0iGAAABW0lEQVQ4y73O2XaCMBSF4TqA2jq1jlU7zyeSQEiggIqz7fu/UE+wdUHBu67u2/9L1jn599Ueb5/zR2v+pU2I+X5VOEZaKtsE9/SWCS5gorKt0EMtC6wIIFDEJKSVJpW16qapyMSkpylwTg5H4CALTMyoUQq4NKisTIkZWwQGv/sr3rCysFl7cJaouWGbjNUAhJMB+td4n4iA5ShASQLkYY73GTgEQiAgtizEwdiyJTEYCgCBR0oJkARja22J3ZYxwEkCsEwC9TnO2zGg8zlQcISVAIx9EyGBSKB4aQLkOFfEdfFIHAKxhEGs113ucGZsQm7sAZ4A/RgYlYJPzo0w3PwA8Kb3h4w/aL4WuIxvQhZV6i1mi27sh1xRr+qlwOUcASHe1J/d1THERKNYLfs+EoDtdPZxM9yHuCmOOr2eFqjX5ctcqkekqndKzYXKx9bQtWa3kRHi35z89b4AF85HRHuuk/8AAAAASUVORK5CYII=',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Cargo,Rust'
    }
  },
  {
    'code': '23934197-14c3-4ad9-879f-ca27527711b2',
    'name': 'LuaRocks',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEUAAAAsP2QsP2MtP2MtP2QvQGEsPmQsPmEvP2IuQGItP2ItP2MrP2YtP2UtP2UsQGYrP2YsP2QrPmYtP2QtQGQsP2UsQGc2xHfCAAAAFnRSTlMAaXWBNx5ZKxJETIrsuKzT9qLfmpHGaHlidwAAAYBJREFUOMt10tm2gyAMBVCSMCODE///qTcgSr1dzUMrPduQKuJd1kEi8ausBASJAezP1HEExtO3kJqwpaIBoUHh7j9TBK/uFUghTKy1uNHaI3I6yxsGS631uNYUn9TqI8U1SL7KDIB78zWSVNd2eqtXJSVcLvwpS9UCHFBOnB8jXjFmKawyaF1roykhbVqEkTcbNtOGIaXRCh1qRDKuDEBtmC32f8ex4C1ijeD2OqpHubaxTMIGjAWwOuRbBGWpFuT2gBe4uuEjlvNcqT8cCQ/ACEMsOR4Aob2OF6ipiZL5XsD1LPkf0JUFJb4X97j1Wd/ALbWuRHBw2os+gdHoVt6d8KyjinwAIvSBl1qIlhsEbx6wXucEP8HpZDADWBwHg5Zwg0SLViwYNEH+EhJCB1vg70PIoAz0QNHo4QD2PXh5jtNC0MEUXl/rUJbQf08kppiA16rvbXYUU0xwT0TtfL/EBEbPoz7FDZSmO30L6Rgoj6jNO7oFBnA/0iH29Rlr1h++3xfconb+cQAAAABJRU5ErkJggg==',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'LuaRocks'
    }
  },
  {
    'code': '97081e97-54e1-49ad-8558-4adce0f99f9f',
    'name': 'Packagist',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABUFBMVEUAAAAAAACTl6QGBQYCAgMAAAAJCQoGBAUEAgKGipVtcXt6f4k1FgAvMDQvMDQEBAIAAACKiYpeYGpXWmEzNTk2OD0SEhIUFBeAf4RWWF9SU1pNTlNiZW0YCQE+QkY5FwEVFBUKBgM8PkIkJSgGAgE7Oz0qEACAg40MAAAcHSAkDQBWWV9wcHFcXF5QUlLd5fjl7P7r8v/Z4fHHzt5ucnz1/f/w+P+iqLWLj5hfYWmsssCYnam4vs2nrbp2eYTR2Oi+xNKxt8Weoq6AhI/N0+KNkp7Dydl6f4grLjPT2+5maHBPHAFMTlNHRkxgKATX3+u1uca3t7qEiZSVlJN4d3lrbG9hYWJTVl1+NgBaIQAAAADq6ena2djOysiOqraqp6eRjo4ASXwEPmI9PkIDIjgqJypgPCQFFiFSMBwXFxkOBwV1MQBFGACIs8dIeJUmaI9cN796AAAAL3RSTlMACf5jQDFZRyrz7+vDrpgfFP72xb22gXj78OTc187MtbKhmoyHg/zf2cXCs6idhU8egLYAAAJOSURBVDjLdZNVexpBFIZ3FwkEiLtLU2/njKz7Lm5xgbhr2/9/V3aheZIC3+33zhzn3ik6MTc/NcL11UAKAda+xHp50ekYH/+EAQA7qbWBrqeZpDm3ZOUxQgjA0AanNr5lIq92IjPmqyoRs8xs+XbBopKhm3Q22vH5CV+3tUPqaLJMEGRdoFmjdqiamQ4wPKjZorGj7J6em4AQEG97W7VAFpR4J0IKEHhs9OTX2Z4tAdbZ2emFIoHhrreBWFJCILCZ35dX157pEnZz+edCAYTtoU6FSYyA6erNfbNYsMpqsXl/VayZGMg/YAaDxojz2LzeAkCUPT0WBa1KMVlrAxFdIjkq6pbh5CkBDL66JWFfxjDOh0WsUEx9sFVXzskOCTrlsrzoyYCFsBPxWQBk5cq3Va/loZZAVH1UNgCcnwGwYWEERnH3wJJadsCAVt1XPYyAfg9TGBQlbO+fjLrBJLKyBqJ/vlt1CAD9EbZhUk7mN/eO9/QAKLkWy+cODnKKgkRnOqxiJBGdHJ8/3lfas9QPa0VGJWilvPC6GTwXHy34CIWzIqoiSZCVl+Jvd4tfUQTmlYI/EAXssPXYMPdOsRTUgiwCBG/tTPDcf+LHRSHXBrCp5Ie4Lg0RUnYlQIBNa3M70mNtx3C2IFBS0n0iLiS4bkXG8OZOQVAUW9Smu+2wpxIuUcMzyCTP9dSqLoqeatrlD739xOdbrcQKiD197f1D/GOjfvfwcFepLA73zuHluVFpVF7qlT4hBqYW689HR0f11b4HHkkvL6fT6be3+xe7Y35+ui8dGwAAAABJRU5ErkJggg==',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Packagist,PHP'
    }
  },
  {
    'code': '407e4687-094e-4ce4-86ef-bb30e2cf6612',
    'name': 'Gradle Plugins',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAAACMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDodH6xHAAAAEnRSTlMA8R+Vx3UNueOxhWZKLtalOVbXsm+HAAAA20lEQVQ4y82SSxLDIAxDg43DPyS+/2Eb8xnadLyPViA9xIxhe7Myhpp2PUcWWVCBapDcTagdO/QaWlZJGFzAdC4LPB/zAFnDQ5b26VrmsTr4WyZCLzUTyPyQFwTsvXg2rBbr5FJseUyzoplcyzGx0nI2ENo25wbY0w0gSp6kqchxuCRf6nOCZuZcL0B+5LCmbugk/5ePaSmqfV5Jy+N8NiUP29ChAGUCRiuYUgrSLxAo9qsMErbO9StkS/JeTnLxT8/s12e8d7Y/fiNF9AOQc1dfoQvdhuBw316kDwulG/m5iOegAAAAAElFTkSuQmCC',
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
      'SEARCH_LITE_DESC_TEMPLATE': '#description{${i.description}}#link{${i.link}}',
      'SEARCH_LITE_KEYS': 'Gradle'
    }
  }
]

module.exports = [
  {
    "code": "97542cba-e5d3-41fd-b990-46e9a4a5c5d4",
    "name": "東京 図書館",
    "category": "ACG",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAABVwtN+AAAAGElEQVQI12P4/x+KmBtgaB8DcwcqaoAjAIyGDQgPcy/ZAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.tokyotosho.info",
    "author": "lanyuanxiaoyao",
    "description": "A BitTorrent Library for Japanese Media",
    "parser": "CSS",
    "rules": {
      "https://www\\.tokyotosho\\.info/search\\.php\\?searchName=true&terms=.+&page=\\d+": {
        "parser": "REGEX",
        "list": {
          "expression": "<tr class=\".*?category_0\">.+?</tr><tr class=\".*?category_0\">.+?</tr>",
          "title": {
            "expression": "<a rel=\"nofollow\".*?bittorrent.*?>(.+?)</a>",
            "attribute": "1",
            "replace": [
              {
                "regex": "<span.*?span>",
                "text": ""
              }
            ]
          },
          "description": {
            "expression": "\\s*Comment: (.+?)<",
            "attribute": "1"
          },
          "author": {
            "expression": "Submitter.*?<a.*?>(.+?)</a>",
            "attribute": "1"
          },
          "dateTime": {
            "expression": "\\s*Date: (.+?)\\s+UTC",
            "attribute": "1"
          },
          "link": {
            "expression": "<a rel=\"nofollow\" href=\"(.+?)\">Details</a>",
            "attribute": "1",
            "prefix": "https://www.tokyotosho.info/"
          },
          "extra": {
            "size": {
              "expression": "\\s*Size: (.+?)\\s+",
              "attribute": "1"
            },
            "magnet": {
              "expression": "href=\"(magnet.+?)\"",
              "attribute": "1"
            }
          }
        },
        "next": {
          "script": "var regex = /(.*)(\\d+)$/\nvar result = params.url.match(regex)\nif (result) {\n    return result[1] + (parseInt(result[2]) + 1)\n}\nreturn ''"
        }
      },
      "https://www\\.tokyotosho\\.info/details\\.php\\?id=\\d+": {
        "text": {
          "expression": "#main > .details > ul",
          "title": {
            "expression": "li.detailsleft:contains(Torrent Name) + li"
          },
          "author": {
            "expression": "li.detailsleft:contains(Submitter) + li:has(a)",
            "replace": [
              {
                "regex": "Search.+",
                "text": ""
              }
            ]
          },
          "dateTime": {
            "expression": "li.detailsleft:contains(Date Submitted) + li"
          },
          "extra": {
            "size": {
              "expression": "li.detailsleft:contains(Filesize) + li"
            }
          }
        },
        "list": {
          "expression": "#main > .details > ul",
          "title": {
            "expression": "li.detailsleft:contains(Torrent Name) + li"
          },
          "content": {
            "expression": "li:contains(Magnet Link) > a",
            "attribute": "href"
          }
        }
      }
    },
    "search": "{home}/search.php?searchName=true&terms={query}&page=1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "東京 図書館,tokyotosho",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "43e259b9-abd3-465f-bd22-7bdc8ad907a2",
    "name": "Nyaa",
    "category": "ACG",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABAlBMVEURbeMIN2////8hd+Xn9P4ofeYBefoAcfXX6/0op/84jOz4/P898v8dov845P8vg+cwq/8Chf9C//0AavJvxP7d7Pyw1vo3hegSmf/w+P4zu/87ovQ/+f856v8MkP9q4v4Zivgysv/O7P40zv7J5fy42vsqoPqgyvkYc+s4xP/C4PsqmvgPePIujfE43P821f8+qv2K3/yAyfzQ5fskf+4Fi/+76v2b3f1auv1ouf1Ls/2OzfuDwPqsz/l8vfmTvvVsrfWDtPE1lvFio+4/iOcq1/8kw/+Y8f5K3f563/1a1/xmy/xF7Pue1ft11PlRq/lcsPhL0PZDmfIysPAAS95YlOoND8hKAAACLElEQVQ4y4WR53LiQBCE5d2VWSSExKEEAiQTRTqTjpzBOdt37/8qNyMZkP3HDaXaqv6qe3ZWOPtBwhmlwheJolpyu8ERHADUr7b07tQ/3GeBUvHj8c0BQIz6UtXRLrLZO7eUzCd+gQCwThVqU1HicS173XWTyUQiFwJQiggV1bZtIwAR3fvfkAAEAtg2aJ2nUn8K9oGoly6RyOUQiMVi5yAECgW7ua1W4xdZIDAiAoREmwq0qmhTLVu/DEsASB8JzxJA1bg+hgwseTwCYYmEPnUmejjGlXuTTyDwGeGBj3KmMGdcf3i7k2+SAQDEYNBSDwvbdhRF0XV9SGQ3mcdr+mKr1Tpta6d3FE3vsWKm694mEaB+Om0dbKrOXzV73JuZfDS8v0KA+qq/P/pUNDv2mC01bcaH17dFBARLjD7nslA1ydTWy0/Z5wwLKk79FJ7lpfDCCHuqsN6IMBYknHy8qZfSCarICZE5JkQA6NqmUg30ZRm/owgQDiJ5nlckB8kPEYDin7altjcjR7HvCZIFv3loZiCpHAFUjJBUSdibZcIZAwI6ohUWpKgipTs26TcqZpnhVUJgZ272sENftUTaXi7IvMF5owKA3AsAy4BjbeDDs76vzQVjGcYZ57JcXjsBsAoHXlVWa0IMzgzCZG6UJx1JQoAKjASqNGoZAAwDF5Dh5qtKmwoAf/+RULUN+ISbeO7XWM0UhKaDwOIT2BiBhZRR6xsVTsWmBcAP+g8dajvM1EuD+QAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://nyaa.si",
    "author": "lanyuanxiaoyao",
    "description": "A BitTorrent community focused on Eastern Asian media including anime, manga, music, and more",
    "parser": "CSS",
    "rules": {
      "https://nyaa\\.si/\\?q=.+&p=\\d+": {
        "list": {
          "expression": ".container table.torrent-list tbody > tr",
          "title": {
            "expression": "td[colspan] > a[title]:not(.comments)",
            "attribute": "title"
          },
          "dateTime": {
            "expression": "td:nth-child(5)"
          },
          "link": {
            "expression": "td[colspan] > a[title]:not(.comments)",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "size": {
              "expression": "td:nth-child(4)"
            },
            "view": {
              "expression": "td:nth-child(8)"
            },
            "magnet": {
              "expression": "td:nth-child(3) > a:has(i.fa-magnet)",
              "attribute": "href"
            }
          }
        },
        "next": {
          "expression": "ul.pagination > li.next > a",
          "attribute": "href",
          "prefix": "{home}"
        }
      },
      "https://nyaa\\.si/view/\\d+": {
        "text": {
          "expression": ".container > .panel:contains(Magnet)",
          "title": {
            "expression": "h3.panel-title"
          },
          "author": {
            "expression": "a[title=User]"
          },
          "dateTime": {
            "expression": "div[data-timestamp]"
          },
          "extra": {
            "size": {
              "expression": "div.col-md-1:contains(File size) + div"
            }
          }
        },
        "list": {
          "expression": ".container > .panel:contains(Magnet)",
          "title": {
            "expression": "h3.panel-title"
          },
          "content": {
            "expression": ".panel-footer a:contains(Magnet)",
            "attribute": "href"
          }
        }
      }
    },
    "search": "{home}/?q={query}&p=1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#view{${i.view}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.link}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Nyaa",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "afee8741-8deb-4a34-8827-7ec0cc4fd651",
    "name": "罗马盘",
    "category": "网盘",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAAAAT7MAULMAT7QAT7QAT7MAULQAT7MAT7MAT7QAT7MAULQAT7MAULQAT7QAT7MAT7QAULQAULQ9JC6sAAAAE3RSTlMA4YhuUdKXxLUl8GH7P6V8DhkykbkX9AAAAWhJREFUOMuVktuKwzAMRKO7bMl22v//2LXZ7cUNfdiBgIiOBzHM8RQ7iPXuBqDtuKh5NSQa8yOFquVjT9WYVWDJkAcAb3tMbH1ZRMRQAGTLd2IkMViE2jTwMQ2s9TeCc3DqtICOhF5hsEAzeNxxireqTYBux1LB9CbGtT8PbOYNrLwsq3PFke3PQCfiMJ+/iMRRGfofzqaRezY414i/j1AY2P3YVCqqUeU1e6eJxLHLjSCA1miIFvCZ/lhr0TUKqhNcsp/AsL4B/3NQWR74FTil4wTiK8AZ1kct34AbeCSZHV+Am1U2i4wd4AfUpLJORM4d6IBcyj08jTEJk48duOPqZAUj9iRKPD6Agcw0RoSCMM26fAIkYN4NQAb39OMCNI6hqhiME7LzAnQwRdQuCWBcxwUo1E1gUmIMhCvGa1DnOZ1bEkKDx5V8b1xi/n+pzzXSo6aBU3TujVTKZ5IqU37b+yTNlWFF+QP0Uw8hzrwjwgAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://www.luomapan.com",
    "author": "lanyuanxiaoyao",
    "description": "网盘资源搜索，就用罗马盘 - 最好用的百度网盘搜索引擎",
    "parser": "CSS",
    "rules": {
      "https://www\\.luomapan\\.com/search\\?keyword=.+&page=\\d+": {
        "list": {
          "expression": ".main .search-result .result-inner .result-wrapper .roma-item-wrapper",
          "title": {
            "expression": ".roma-info > h1.roma-title > a"
          },
          "description": {
            "expression": ".roma-info > .roma-detail-wrap"
          },
          "dateTime": {
            "expression": ".roma-info > .roma-meta > .meta-it:contains(时间)",
            "replace": [
              {
                "regex": "时间：\\s*",
                "text": ""
              }
            ]
          },
          "link": {
            "expression": ".roma-info > h1.roma-title > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "size": {
              "expression": ".roma-info > .roma-meta > .meta-it:contains(大小)",
              "replace": [
                {
                  "regex": "大小：\\s*",
                  "text": ""
                }
              ]
            }
          }
        },
        "next": {
          "expression": ".pager-wrapper > .pc-pager-wrapper > a:contains(下一页)",
          "attribute": "href",
          "prefix": "{home}"
        }
      },
      "https://www\\.luomapan\\.com/detail/.+": {
        "text": {
          "expression": "#info",
          "title": {
            "expression": "h1.filename"
          },
          "dateTime": {
            "expression": ".roma-meta > .meta-item:contains(时间)",
            "replace": [
              {
                "regex": "分享时间\\s*",
                "text": ""
              }
            ]
          },
          "extra": {
            "size": {
              "expression": ".roma-meta > .meta-item:contains(大小)",
              "replace": [
                {
                  "regex": "资源大小\\s*",
                  "text": ""
                }
              ]
            },
            "password": {
              "expression": ".roma-meta > .meta-item:contains(密码)",
              "replace": [
                {
                  "regex": "提取密码\\s*",
                  "text": ""
                }
              ]
            }
          }
        },
        "list": {
          "expression": ".detail-content",
          "title": {
            "expression": "#info h1.filename"
          },
          "content": {
            "expression": "#statement > .button-wrap > .button-inner > a",
            "attribute": "href"
          }
        }
      }
    },
    "search": "{home}/search?keyword={query}&page=1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "罗马盘"
    }
  },
  {
    "code": "52e8bdc3-84bc-495c-a406-b053a94fc825",
    "name": "56网盘",
    "category": "网盘",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAASFBMVEUAt2D////x+/f5/vwmwngOvGpa0Zl12apIzI7d9uq169GY47+N37gdwHLT8+M7yIXl+O/G79yr58qi5cVm1KCE3LMxxX/N8N+lV1mkAAAA/UlEQVQ4y5VTWRaCMAyE0H2xgID3v6lpRdO06HvOXzLT7B3+gFTrDOC2eE1HD+ML0youeAUjAXTH6+l8fUp8+37KpFNCRnMvop3xIse36W0tWW1qgUPPTVI7xa74A4OCqBu2qFBkBzQ1rwk9jswbBpC8alu7JGZYBg6PIT5JxUXfGn2mFoRGsNWCiMb9VwQJuWuOlWpALDi4t0VvZh7P8ww8awSaPe0mNV1DIt7SIKvZg5bV7QAvKpV7mr0yKqCYL7fAwNhgJZKuhCF0Z/s4D9LqUM5zG1oItYd9O/KJFUX68YceI+ukR5xLMvldcUBXaPdV+D566GZBPZTL/BPwuga5nuwrlQAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://www.56wangpan.com",
    "author": "lanyuanxiaoyao",
    "description": "专业网盘搜索引擎-56网盘搜索为您带来最佳网盘搜索体验",
    "parser": "CSS",
    "rules": {
      "https://www\\.56wangpan\\.com/search/kw.+pg\\d+": {
        "list": {
          "expression": ".content .sellListContent > li",
          "title": {
            "expression": "div.info > .title > a"
          },
          "description": {
            "expression": "div.info > .address"
          },
          "author": {
            "expression": "div.info > .rInfo > .sharer"
          },
          "dateTime": {
            "expression": "div.info > .rInfo > .feed_time"
          },
          "link": {
            "expression": "div.info > .title > a",
            "attribute": "href",
            "prefix": "{home}"
          }
        },
        "next": {
          "expression": ".content .contentBottom .list-page-box > a:contains(下一页)",
          "attribute": "href",
          "prefix": "{home}"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "{home}/search/kw{query}pg1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "56网盘"
    }
  },
  {
    "code": "bb32f4ff-06ad-4709-b0c3-fb648ea210bd",
    "name": "小白盘",
    "category": "网盘",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABUFBMVEUAAAAVoIUTn4MWoIYVoIYYoIYOnYEaoocbpYshpYs5r5cVoIUgookMnIC65Nqi1M4fpoyJysP///8wq5IhmYIKjnQXoIZKtqEMnYEWoYRjt6dAp5NNsp9iu6oUoIYMnIEWoYhDtJ7c7+zJ6eTk8vIjpo00rpVjv61KqpZevauOz8SBxrij18264tsWoIUSkHj///8NnYEJi3EUl34JjHj5//+x7Pj/+eQKn4fr/v///fS46vL/++3u8N/98dXl5Mc9vcSgx6tQtqUSop8RnZxSoH5FnncnkXPe/P/F8/uc4+/B6uyF4uzz9etW1OH18d1iz9eTzr/O2LU+tbV4v7FFs6gcrKhcspkUpJCQtI4GkopwrYktnIhIoIVZoIFlqHJJmG964+un4OKB1+K73stszctRycul0MeJxbazz7QutLJdtrC3yKE+rZBppIVennKXlSA7AAAALnRSTlMA9Nzr1ItxNiT61cK1nT0oFgsE6unpy8G7opycbm1iVkpEKBwS37myqqOFb2xOE0M4MQAAAcFJREFUOMttk1d3wjAMhR2SdEH33nu3RHFCKZQOoHvvCd17/v+3KnKIA+G+xCf387XkIzOfGvo6NSWqhvXBRlZGlXqbEiUpaqR3uNSuqkVXygz1FKf0h4QhCXOs3udXSEciWl3AN1E+YrRA9Ls/Ls8ymR8fYtYMi/pCwn7ZiQHsPV9IxJxscoBaWp8vgFAybZkFIDrr9K+QvwWwmL74esSUtIxoxwjdWc3vAhxvcM7tk01I3cg66lhDm0N+bsLyhm2g+EoCjg0vYor10Qn7kLzhBul6G5buLe8M1ukA8w+wtG4LgB9C/M62Cp0yTZSAu4oAwxJAM1MI2If4mnuE/QTxP4QtAqqZAFdi8C0Ant3CenEhiGqmEpCdg9QVd4Q1wpVgLUoIuxEJSH7kc7kzvNDULwKCwBp0RRCvCQCIxcDR4m2BwC4GVLehkx1y994w48AjxhmLeMOQOT16P83z1TnMcHuyZ/zTxEkGEQdrdC0tQzjschwt2kXEMl0s7xIDFyCyR8LHAFRjR5DgNn2mmTdzkpCiA0iVZQk+McI8QgsSvHuk6OWVELy1t4kVaaDD9Ai0u+tZQIN6OKQ6b1uL9Ej7H59dnOpib3HsAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.xiaobaipan.com",
    "author": "lanyuanxiaoyao",
    "description": "小白盘帮收录了大量的网盘资源,页面清新，实时检查失效资源.帮您省心快速找到想要的电影,电视剧,小说,文档,音乐,软件,种子等热门网盘资源",
    "parser": "CSS",
    "rules": {
      "https://www\\.xiaobaipan\\.com/list-.+-p\\d+\\.html": {
        "list": {
          "expression": ".main-container .category-list > .item-list:has(div[fid])",
          "title": {
            "expression": "div[fid] h4.job-title > a"
          },
          "description": {
            "expression": "div[fid] .jobs-desc"
          },
          "author": {
            "expression": "div[fid] h5.company-title > a"
          },
          "dateTime": {
            "expression": ".info-row > .date",
            "replace": [
              {
                "regex": "分享时间:\\s*",
                "text": ""
              }
            ]
          },
          "link": {
            "expression": "div[fid] h4.job-title > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "size": {
              "expression": ".info-row > .salary"
            },
            "view": {
              "expression": ".info-row > .item-location:contains(查看)"
            }
          }
        },
        "next": {
          "expression": ".pagination-bar > .pagination > li > a:contains(>>)",
          "attribute": "href",
          "prefix": "{home}"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "{home}/list-{query}-p4.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#size{${i.size}}#view{${i.view}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "小白盘"
    }
  },
  {
    "code": "0d3e0c9f-a9c9-40c5-999a-e67519aabac4",
    "name": "小可搜搜",
    "category": "网盘",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAV1BMVEX///8BAQEPDw/19fUwMDA8PDzh4eHs7OzZ2dn6+vqbm5sjIyOvr6+kpKSRkZFKSkrJycl2dnYaGhq5ubl+fn5tbW1hYWGFhYVTU1PR0dHDw8NaWlrn5+f4Q0VsAAACKElEQVRIx+1UyXbkIAw0YjeLd+x29/9/54jNJOOe5DYvh9ShnxqqJJUFdL/4mdBy7KftiQjbbhX9ji/7g82kAAyfRv0Fm56hkBuA9a9/8c8A5B2402/T74VueFh7a52fDlaWDnXnqyM1wNdFUE1P55YH7eTDbSwlcTc+j/RjkbrTYzCAf4DtCgsLHyXQ6zt/WGIo9+Zk9jQ2683fCnrgyioT/0k+YkqDGDmKl66hBwKeJumWWj62LWTLfSKIgRDePq/ALvc8U4ck5oTqBRazHLUqUzD0rQD2L/OgOYZKTgZcsoaJ18xZZsJFFXACNkcWCFM0EJIF3cMQLvNWqF0jyLU6ITOpbFnwBIrZM+aqFWDKWjoQJvAHxlp8nIvtTrJ5qAL5KN1RTg5Kp2Gl7XtUE1oJeY0CgyoIF7eamGratuNCr2tLh/wkWKBWkEewzfRRwo0Y8Umwk+pBzc2aIeZRatX9ZgFZVTrUZBOOR+c0jLCirQeF0yptcxiBmJJnRcalkNN1mDSGbdI6JmpnhjmhI30ZSD0zugeU6nYd2NXgiCGwbffTgJxSmXpI0gYbD+mYFZw0mCW3htszbjfomAL21Ip4QuXzM6ZfMEU5ng10jQTmVYwdh0hhu4j0qG83tCn6fIuDjSzlvHvQjp47anP+O05Gsia9S4v122Bqa6p7B7GbZhdayOrA7lCrub+tXnRfQNjnh9d7Zpt9dd/gZTcGxcx6yu4X/wN/AHRCF2bYLuL1AAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.xiaokesoso.com",
    "author": "lanyuanxiaoyao",
    "description": "小可搜搜，有你更方便",
    "parser": "CSS",
    "rules": {
      "https://www\\.xiaokesoso\\.com/s/search\\?q=.+&currentPage=\\d+": {
        "list": {
          "expression": ".container .result-box .row .document-piece:not(:contains(争议))",
          "title": {
            "expression": ".media-body > h4.media-heading > a",
            "replace": [
              {
                "regex": "\\n\\s*",
                "text": ""
              },
              {
                "regex": "\\n+|\\r+",
                "text": ""
              }
            ]
          },
          "description": {
            "expression": ".media-bottom .file-list-contain",
            "replace": [
              {
                "regex": "^\\r|\\r$",
                "text": ""
              }
            ]
          },
          "author": {
            "expression": ".media-bottom span:nth-child(2) button",
            "replace": [
              {
                "regex": "\\s",
                "text": ""
              }
            ],
            "script": "var regex = /(.+)分享\\s*(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[1]\n}\nreturn ''"
          },
          "dateTime": {
            "expression": ".media-bottom span:nth-child(1) button",
            "replace": [
              {
                "regex": "&nbsp;",
                "text": " "
              }
            ],
            "script": "var regex = /(\\d{4}-\\d{2}-\\d{2})\\s(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[1]\n}\nreturn ''"
          },
          "link": {
            "expression": ".media-body > h4.media-heading > a",
            "attribute": "href",
            "prefix": "{home}",
            "replace": [
              {
                "regex": "\\n\\s*",
                "text": ""
              },
              {
                "regex": "\\n+|\\r+",
                "text": ""
              }
            ]
          },
          "extra": {
            "size": {
              "expression": ".media-bottom span:nth-child(1) button",
              "replace": [
                {
                  "regex": "&nbsp;",
                  "text": " "
                }
              ],
              "script": "var regex = /(\\d{4}-\\d{2}-\\d{2})\\s(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[2]\n}\nreturn ''"
            },
            "number": {
              "expression": ".media-bottom span:nth-child(2) button",
              "replace": [
                {
                  "regex": "&nbsp;",
                  "text": " "
                }
              ],
              "script": "var regex = /(.+)分享\\s*(.+)/\nvar result = text.match(regex)\nif (result) {\n    return result[2]\n}\nreturn ''"
            }
          }
        },
        "next": {
          "script": "var regex = /(.+currentPage=)(\\d+)/\nvar result = params.url.match(regex)\nif (result && result.length > 2) {\n    return result[1] + (parseInt(result[2]) + 1)\n}\nreturn ''"
        }
      },
      "https://www\\.xiaokesoso\\.com/info/.+": {
        "text": {
          "expression": ".container .row .detail-box:has(h3)",
          "title": {
            "expression": "h3"
          },
          "dateTime": {
            "expression": "span:contains(时间)",
            "replace": [
              {
                "regex": "时间：",
                "text": ""
              }
            ]
          },
          "extra": {
            "size": {
              "expression": "span:contains(大小)",
              "replace": [
                {
                  "regex": "大小：",
                  "text": ""
                }
              ]
            },
            "number": {
              "expression": "span:contains(文件个数)",
              "replace": [
                {
                  "regex": "文件个数：",
                  "text": ""
                }
              ]
            },
            "password": {
              "expression": "span:contains(密码)",
              "replace": [
                {
                  "regex": "密码：",
                  "text": ""
                }
              ]
            }
          }
        },
        "list": {
          "expression": ".container .row .detail-box:has(h3)",
          "title": {
            "expression": "h3"
          },
          "content": {
            "expression": ".download-erea button",
            "attribute": "data-downloadurl",
            "prefix": "http://norefer.mimixiaoke.com/api/jump?target="
          }
        }
      }
    },
    "search": "{home}/s/search?q={query}&currentPage=1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#size{${i.size}}#number{${i.number}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "小可搜搜"
    }
  },
  {
    "code": "98b54ae1-5ac4-43a9-b1e5-83cb64932952",
    "name": "雨花阁",
    "category": "综合",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEXmYEjmYUjtZEkAAADlYEj////2yMDxp5nvnpDtjXz76ebzsKX++Pb41M31wrnqfGn65ODodF/98vD2zcbna1Xul4j53dj0vbPzuK0SIBXqAAAABHRSTlPpphwAI2YUpwAAAOlJREFUOMudk1GqwyAQRU0619GORk2TJvtf6fPDlyo0Cj0gDnrEUbjqMU+KblDT/FCzog55e6Iuk1J94do3gCmlBbgyyuyBUMoF2BuhnCpwciisHyE4vDkPwxwiIh/AwWwvQRw80QJHlFbEjcjhrK+AO/OifcZEFjqX5N2rFmSzgCXRWvuo/+HmFRoueTToRkiADlzRCsHawwvVtIIGiPbnhXwVDC6WO4HLr/4uxFfm3RGGPRjK7H2h9HIjeBE5V6yp28OqA30TWjZguReCiAdMI7hasMh4qoSdA9WwsC3lMDjD6A3DO4z/HwguFbU4xLpUAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.yhg66a.xyz",
    "author": "lanyuanxiaoyao",
    "description": "简单好用的BT搜索引擎",
    "parser": "CSS",
    "rules": {
      "https://www\\.yhg66a\\.xyz/search/.+-\\d+\\.html": {
        "list": {
          "expression": "#wall div.search-item",
          "title": {
            "expression": ".item-title h3"
          },
          "dateTime": {
            "expression": ".item-bar > span:contains(创建时间) b"
          },
          "link": {
            "expression": ".item-title h3 > a",
            "attribute": "href",
            "replace": [
              {
                "regex": "^",
                "text": "https://www.yhg222.xyz"
              }
            ]
          },
          "extra": {
            "size": {
              "expression": ".item-bar > span:contains(文件大小) b"
            },
            "view": {
              "expression": ".item-bar > span:contains(下载热度) b"
            },
            "number": {
              "expression": ".item-bar > span:contains(文件数量) b"
            }
          }
        },
        "next": {
          "expression": ".bottom-pager > a:contains(>)",
          "attribute": "href",
          "prefix": "{home}"
        }
      },
      "https://www\\.yhg66a\\.xyz/hash/\\d+\\.html": {
        "text": {
          "expression": "#content",
          "title": {
            "expression": "#wall > h2"
          },
          "dateTime": {
            "expression": ".fileDetail .detail-table > tbody > tr:nth-child(2) > td:nth-child(2)"
          },
          "extra": {
            "size": {
              "expression": ".fileDetail .detail-table > tbody > tr:nth-child(2) > td:nth-child(4)"
            }
          }
        },
        "list": {
          "expression": "#wall .fileDetail .detail-panel:has(a.download)",
          "title": {
            "expression": ".panel-header"
          },
          "content": {
            "expression": "a.download",
            "attribute": "href"
          }
        }
      }
    },
    "search": "{home}/search/{query}-1.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#view{${i.view}}#number{${i.number}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "雨花阁",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "2a534ba1-c675-4cd9-80e6-b6e58598ddc4",
    "name": "Torrent Kitty",
    "category": "综合",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEUAAAA7PkA7PkA7PkA8P0E7PkA7PkA7PkA7PkA7PkA7PkA7PkA7PkA7PkA7PkA7PkA7PkA0Njgm/QtFAAAAEHRSTlMA9AnR39ca576Da2MzKLCgQMllEwAAAJRJREFUOMvNkMEOhCAMRKGAoKu75f9/drUBDcrUiwffwcS8gQ41b2MIvOIHoGniwkiN8Jlt8HzCpe0jgZwZIgHgjkDCPpR2yO9dXd87s7P0/Nw8FZ6HUy7rjK1PnU0vodqPAcQ6HUJlOsbKehVWbzU/S0VtgDAi/+XCj8D5g61NvBZsA+yVQL3vLmD1EUy4pPxN5hH+WAIXu01UECwAAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "http://www.torkitty.com",
    "author": "lanyuanxiaoyao",
    "description": "Torrent Kitty - Free Torrent To Magnet Link Conversion Service",
    "parser": "CSS",
    "rules": {
      "http://www\\.torkitty\\.com/search/.+/\\d+": {
        "list": {
          "expression": "#archiveResult tr:has(.action > a)",
          "title": {
            "expression": "td.name"
          },
          "dateTime": {
            "expression": "td.date"
          },
          "link": {
            "expression": "td.action > a:contains(Detail)",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "size": {
              "expression": "td.size"
            }
          }
        },
        "next": {
          "expression": ".pagination > a:contains(»)",
          "attribute": "href",
          "script": "var next = params.url.replace(/\\d+$/, text)\nreturn next ? next : ''"
        }
      },
      "http://www\\.torkitty\\.com/information/.+": {
        "text": {
          "expression": "div.wrapper:has(.detailSummary)",
          "title": {
            "expression": "h2"
          },
          "dateTime": {
            "expression": "table.detailSummary tr:nth-child(5) > td"
          },
          "extra": {
            "size": {
              "expression": "table.detailSummary tr:nth-child(4) > td"
            },
            "number": {
              "expression": "table.detailSummary tr:nth-child(3) > td"
            },
            "hash": {
              "expression": "table.detailSummary tr:nth-child(2) > td"
            }
          }
        },
        "list": {
          "expression": "div.center:has(textarea.magnet-link)",
          "content": {
            "expression": "textarea.magnet-link"
          }
        }
      }
    },
    "search": "{home}/search/{query}/1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Torrent Kitty",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "179363b0-2305-4732-8c7d-8ae5777fb151",
    "name": "超人搜索",
    "category": "综合",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAADmAADoAADkAADmAADmAADnAADnAADpAADlAADmAADmAADmAAD/AADnAADnAADnAADnAADoAADDxCDgAAAAE3RSTlMA/kEZ8L/biDRzJc6qCWlLnHtZ8XpFqwAAAPtJREFUOMuFU4sOwyAIFESYj652//+xQ13UZmm4NOn1ckAVcAsplkwAlEtM7h+vyjDB9eXu8EKqEwcFdyr+Fh5Uy4L+UHiUrJ9hS4IMwHEL8bEpOON5+fec/NO88rKF/9SiUUOVwRZWnPRk1HP5lPRRYxqkV6ZWpAJEfaEEDqLCqaRcSaUIUDWAIY8CJ31cR4RzFMnAqdlk6EjnIG/AQaQlL0D4ZECC4jSNfzJ4Le8IwvFkOAKQg81QY0fZDHA3vDtuBrOE+ZPmMe2LWle9G9ZVz2YlrFAxNVJAcDZrtvuU6xLRdn06wdluY2CskbOG1hx7e3Hs1bOX11z/L9p8C57UCPCyAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.sosogo.online",
    "author": "lanyuanxiaoyao",
    "description": "超人搜索（www.crsoso.com）最好用的磁力链接搜索。",
    "parser": "CSS",
    "rules": {
      "https://www\\.sosogo\\.online/search/.+/page-\\d+\\.html": {
        "list": {
          "expression": ".container .list-view > article.item",
          "title": {
            "expression": "a > h4",
            "replace": [
              {
                "regex": "&nbsp;",
                "text": " "
              }
            ]
          },
          "dateTime": {
            "expression": "a:has(h4) + p",
            "replace": [
              {
                "regex": "&nbsp;",
                "text": ""
              }
            ],
            "script": "var regex = /热度：(.*?)\\s*文件大小：(.*?)\\s*创建时间：(.*?)\\s*文件数量：(.*?)\\s*$/\nvar result = text.match(regex)\nif (result) {\n    return result[3]\n}\nreturn ''"
          },
          "link": {
            "expression": "a:has(h4)",
            "attribute": "href",
            "replace": [
              {
                "regex": "^",
                "text": "https://crso.pw"
              }
            ]
          },
          "extra": {
            "size": {
              "expression": "a:has(h4) + p",
              "replace": [
                {
                  "regex": "&nbsp;",
                  "text": ""
                }
              ],
              "script": "var regex = /热度：(.*?)\\s*文件大小：(.*?)\\s*创建时间：(.*?)\\s*文件数量：(.*?)\\s*$/\nvar result = text.match(regex)\nif (result) {\n    return result[2]\n}\nreturn ''"
            },
            "number": {
              "expression": "a:has(h4) + p",
              "replace": [
                {
                  "regex": "&nbsp;",
                  "text": ""
                }
              ],
              "script": "var regex = /热度：(.*?)\\s*文件大小：(.*?)\\s*创建时间：(.*?)\\s*文件数量：(.*?)\\s*$/\nvar result = text.match(regex)\nif (result) {\n    return result[4]\n}\nreturn ''"
            },
            "view": {
              "expression": "a:has(h4) + p",
              "replace": [
                {
                  "regex": "&nbsp;",
                  "text": ""
                }
              ],
              "script": "var regex = /热度：(.*?)\\s*文件大小：(.*?)\\s*创建时间：(.*?)\\s*文件数量：(.*?)\\s*$/\nvar result = text.match(regex)\nif (result) {\n    return result[1]\n}\nreturn ''"
            }
          }
        },
        "next": {
          "expression": ".pagination > li.next > a",
          "attribute": "href",
          "replace": [
            {
              "regex": "^",
              "text": "https://crso.pw"
            }
          ]
        }
      },
      "https://www\\.sosogo\\.online/hash/.+\\.html": {
        "text": {
          "expression": "section.hash-view-title",
          "title": {
            "expression": "h2"
          }
        },
        "list": {
          "expression": "section.hash-view-download .panel-body .list-unstyled li",
          "title": {
            "expression": ".media-body h4.media-heading"
          },
          "content": {
            "expression": ".media-body h4.media-heading + a",
            "attribute": "href"
          }
        }
      }
    },
    "search": "{home}/search/{query}/page-1.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#view{${i.view}}#number{${i.number}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "超人搜索",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "b9ad410f-d655-4880-ba06-ee0c7cab3fec",
    "name": "搜番",
    "category": "综合",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEUAAAD+vQDxfSNatTFfti/qQjUAq+8Eq+78vQAAq+z+vwLtQDLuvAtatTEAre9btS9htS7+vwVbtS3/vgIAq/LqQDX9vQBbtTH8vwAArO/9vQEAru//vwTsRTP9vQD+vgBZti/7uwDqQTXvPjIDq+/8vwDvQTEAq+7tQTLqQDX9vQBeti3xQC/xPTIAre/qPDfsTjD9vADqQzUAq+tctTFB0gLgAAAAMXRSTlMAbgyPF49rGNqeg3cT5tlqM+nEVFPslUc9wKqPYTwsxaqgnFopHRfq07q1fmpMNjEkZpT5TwAAAY5JREFUOMuNkOmSqjAQhU9YhEFkkU0Rdx33mRvM+z/bTdMTL4X3x3xVVLpyPjpJ4/dYe/duUfE5dh//y3dt2+4ov7Rt4b4LOtfcAbcr3ozvtuMMq+iK4nMgLFvmz6sYXuHM+/sxrxf08fS352Ds8roEwtDkiyhaeBj3hT2Ope+XFoiPpyY64P4SigdWvtTU1CR/dkQeHmcWLt846pwQXQNmTjMs3F0xtmCtJVPSDZ4/LGgcyyW9L5A94RAZ4wuUZaJZmdyfQfM1/3fILKtTIZsr59cVmMNo8UF4Vpo2Wihn2+22FF3MePmI8EIpG1/I61EIMQthGM1PT+LkIQiEFDLoLpmuxWtQTA5NXQfrLJVMfaT/TT6n3EnC0KIxMEGvwekAJBs73iTAyrTYcgdzQDxRdqyU7SDrdfB4UCNgo1QnqGmCpj8obUQ5nKkygppUyHzOeQq5B1DOAhkJwiwL0eOmWKh4nWKAM+EgdhSTvAlm/6eoMGBjOtt8CWco8CMqKvgZbzixbVddcbNvCX7NX3T6V1YuWt7EAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://soufan.xyz",
    "author": "lanyuanxiaoyao",
    "description": "搜番",
    "parser": "CSS",
    "rules": {
      "https://soufan\\.xyz/s\\?word=.+": {
        "list": {
          "expression": "div.row > div.col-md-6:has(nav) > ul.list-unstyled",
          "title": {
            "expression": "h3.list-title > a"
          },
          "dateTime": {
            "expression": "li.result-resource-meta-info > span.result-resource-meta-info-value:gt(2)"
          },
          "link": {
            "expression": "h3.list-title > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "size": {
              "expression": "li.result-resource-meta-info > span.result-resource-meta-info-value:gt(0)"
            },
            "number": {
              "expression": "li.result-resource-meta-info > span.result-resource-meta-info-value:gt(1)"
            },
            "view": {
              "expression": "li.result-resource-meta-info > span.result-resource-meta-info-value:gt(3)"
            }
          }
        },
        "next": {
          "expression": "div.row > div.col-md-6:has(nav) > nav > ul.pagination > li > a:contains(»)",
          "attribute": "href",
          "prefix": "{home}"
        }
      }
    },
    "search": "{home}/s?word={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#view{${i.view}}#number{${i.number}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "搜番,sofan"
    }
  },
  {
    "code": "b5a76675-1d23-468e-b6a1-6845f217b3e3",
    "name": "BTSOW",
    "category": "综合",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAHlBMVEUAAAB+uA7/hACAQgDf398MCgBnlgsgLgTQbABgMgCwyM9EAAAAZElEQVQoz53SMQqAMBBE0THY2GULrSUewQt4Bk/iGTy5iLIbZopAfvkYSJEFDlSN4GKgk3aDQGYwgcwQE/ubGUxgYbCLwaBpJfpgYsDNAIHTISbb/uaQykpPCyQGOEg9Xynn8ADITA59HLSJegAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://btsow.cam",
    "author": "lanyuanxiaoyao",
    "description": "BTSOW - The free online torrent file to magnet link conversion, magnet link to torrent file conversion, Search magnet link and Search torrent file.",
    "parser": "CSS",
    "rules": {
      "https://btsow\\.cam/search/.+": {
        "list": {
          "expression": ".container > .data-list > .row:has(a)",
          "title": {
            "expression": "a[title]",
            "attribute": "title"
          },
          "dateTime": {
            "expression": ".date"
          },
          "link": {
            "expression": "a[title]",
            "attribute": "href"
          },
          "extra": {
            "size": {
              "expression": ".size"
            }
          }
        },
        "next": {
          "expression": "ul.pagination a[name=nextpage]",
          "attribute": "href",
          "prefix": "{home}"
        }
      }
    },
    "search": "{home}/search/{query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "BTSOW",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "c4546f52-a602-4776-8e87-f05e01343d09",
    "name": "海盗湾",
    "category": "综合",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAMAAAAJbCvNAAAAq1BMVEX///+YiHuIdGN2WUT+/v1/bF35+ffz8O3///+ZZD2PVCq7o5GebUrj3Nba0MfLvLHSxrw2EwD18vCKXDvArp+FRBfq5uKwkXpfPCCRaEvDtaqQblajdVPv7eqxm4mrhmqke19wTjP29/abdlp9VDWWemaCXkNkSjV5SSe6mYGggWpVMhXMtqbIsJyiiXRpRChtMAakkoSHUClzPRdFJxBjKQEuCQCEZlAXAAC0ulqbAAAACHRSTlPy8/z85vLy8oDGrLkAAAISSURBVDjLfdGHcqMwEAZgl5RdCZUgCdHBgHuJ0+/9n+yWeOyQOyf/jBmz+xntmtHN6LdQG74iQvg/o4FQ0ZX+ABQr8TvI3kTP1E+gfNESICzFT8C0oEGsOFDCK0AdOUiVvKn+u/4HRAXYtw2ANQxxH/nD6RHhBfgSeEaFliHLefISgqJmlJ5BaEoQNGD9jMzC3nEILUBziM5AlboAAdYhRrB2GH7+OLGXGawSeiPFClndeMc8gE4h6b6GTHXjj7JgTO6RptAAbWaP8gvoIkLngfEmpy1Q0KGGBYM1G/AsYDvFc4cBBiEB5vgAgHhGejZnzoqAEYgMMjkEkoBeu1zLpnI5LcBonyHQzvuqZlwo4K6mTQPE4tsRRuwdIm8i7lXFEYfgrgGIJKcSW+/qNpXI+j6KM7hXAsTus5j7yvOKBX2f7S5HFFxLpBDIGaPxCPQ3gxm4ORXp2n9ON259AcI4hjm1amw1r7mtkZF4qc7AHk1SY5K0vjJSVpwnRltBg3N5AqLTVEsSY5JVa1VlTAZeQL/c+W2qsOxMt5rP51lXbhaLdtNl3/9qHR7iVVYe5pxai8WiW6SpGgAKjz9Sm1qfPU6ns9nsMZPjaAjU5GNWWvUUb2eP1I5n8faJyuEZ6IftNJ5P4u02jpcxhcRyLmDydD+CcLx8Xb4/9KHrJa8Pf96Xy1c9urkbT28n46u5vR3f/AVWKTzuemkL9AAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://thepiratebay.org",
    "author": "lanyuanxiaoyao",
    "description": "Download music, movies, games, software! The Pirate Bay - The galaxy's most resilient BitTorrent site",
    "parser": "JSON",
    "rules": {
      "https://apibay\\.org/q\\.php\\?q=.+": {
        "list": {
          "expression": "$",
          "title": {
            "expression": "$.name"
          },
          "author": {
            "expression": "$.username"
          },
          "dateTime": {
            "expression": "$.added",
            "suffix": "000",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "$.id",
            "prefix": "{home}/description.php?id="
          },
          "extra": {
            "number": {
              "expression": "$.num_files"
            },
            "size": {
              "expression": "$.size",
              "script": "if (!text || text === '') return text\nlet size = parseFloat(text)\nif (size < 1024) return size + 'B'\nelse if (size < 1048576) return (size / 1024).toFixed(2) + 'K'\nelse if (size < 1073741824) return (size / 1048576).toFixed(2) + 'M'\nelse if (size < 1099511627776) return (size / 1073741824).toFixed(2) + 'G'\nelse return '' + size"
            }
          }
        }
      }
    },
    "search": "https://apibay.org/q.php?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#size{${i.size}}#number{${i.number}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "海盗湾,The Pirate Bay"
    }
  },
  {
    "code": "aa9c4d00-b805-412f-8bc5-10ce12ea78a2",
    "name": "1377X",
    "category": "综合",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUAAADdSxPiUR7ePQndPQffPQjhRRPdPwjpZTrqckrbPAfgQxHlZULePgfjVSbgUiXnbUnlYjXlWSvdPQbmYjDjVzHdOwfjVyjhQQvpZzfoXCnZOwPcNwXcRAvfXy7cXjzoajbjXTHgShnZSDPQNQXkTyfjVSLiPgjoYjXqbkXsdUvpaD3jTRvkVSN7xPrAAAAAJ3RSTlMADjyxU/QZ2rWviyrpnW1O+/Lw6uXizsq4qJp3Nfu0oZSJYcLCl37Q8/yTAAABCElEQVQ4y82RWXLCMAxAJWejhCwsKQlpga42Ddz/epUlZwyJD8D70+jN82gMzwKW3YLoPpBHdX6xdApG0r0ZCLOuWF9c/iyGJ6FqDHNAG1iJ8IXgKTcs7BQCnmsWVgruwOOYQApYof60AY8yY+I0sHCSvedHjGO5JuFCD0yFfCcG7YmaLp7yy/thYKHJYUa694IpIUBlT7X7wUT0QCghgrnqHkKoxgrmprUugoWDIa7aslWhwMbcaC208wRG79qTxDMhTmTzKkaUTgOtLPq3zCVwEpB9luMymEhdeQkwJh6+G/vEBWigxOzUeOsCCJRw53yjD7gHEsVTpoX4rlBERMsBmYgihyfhH9RqLgNr+maMAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://1337x.to",
    "author": "lanyuanxiaoyao",
    "description": "Download verified torrents: movies, music, games, software",
    "parser": "CSS",
    "rules": {
      "https://1337x\\.to/search/.+?/\\d+/": {
        "list": {
          "expression": ".box-info .table-list tbody > tr",
          "title": {
            "expression": "td.name > .icon + a"
          },
          "author": {
            "expression": "td.user"
          },
          "dateTime": {
            "expression": "td.coll-date"
          },
          "link": {
            "expression": "td.name > .icon + a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "size": {
              "expression": "td.size",
              "replace": [
                {
                  "regex": "\\d+$",
                  "text": ""
                }
              ]
            }
          }
        }
      }
    },
    "search": "{home}/search/{query}/1/",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "1377X"
    }
  },
  {
    "code": "9e3d4593-c279-4e02-8891-854c96b1ebee",
    "name": "YTS.MS",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA21BMVEUAAABMgiNWmygsfiBhpS9Cjh9BlhhWmidorDRrqTFGkCUsfB1ipTNnpzVmqDNvsDYrfyA1fh5rrjQnZRJiozRFgR5fojFnqjUwchpUmy1trzRWnS1foi86iB43hyIqcRszhCBvrzVmqDQ8bhpbnjAqcRdOlypsqzZkpjQhTw01hRtIliUvThAZOQdjpDR4wyoYLAYGCgApdx5Xmy9dozIveh4obBdIkihoqDdDjyU5YhdpqTVUmi9BjiRoqDctVQwSJAN5uDUkXRQxhx5QfyFrrjZSmi1Djyk4hyX4cjizAAAARXRSTlMACBH8JTosG+ndSPPEMv7v6tuxlFIj/tbNycSTaFbm4sa6rqyoqKSPeHhzb1dFRDIxF/zp6OK+saSOhYKBZF0tI9S3sKQ5W5frAAABeklEQVQ4y61TZ2/CUAy038sgSUkIgbL33nuV2fGA//+LahAJRaSRKvU+5Cz5fI4dB/4NqGJgnsksMK921OD6jAyB2GyC83JKCh6gmgk2CE9jwYLmVAJU5DjNKitXqKDqOW9wLGsM8JPXsG3YdoRgODmbc6Plzqi9IECbJ/fFsVNLcl6YO7Px3Kn1bgIpdBHIRsHhHyOUI7yFOW70APFBwIrcKFCNzo0uKHle1BE8QYIRrc5UCtA5z4YA2/w53747hMJEnVPyQFQ/JUdEyuJkH9yXTIgdUeZYuXRKEaHEIHu0h+6YUbFEeppvVzuigZaOhszKyFuUoB6spHUpHrwTDdKWpX0N76u2RANBjePF7kpMkfdELrAsLP+v4e6ib4lE2P8Qbz4NIdKST34bd6MoKZ484ivdi6WSEFqWPbTXF7mfZ00eorRTPXe9ntIf+61DJEksm7F+P5bNpCZ16enyGpoQpmm+EiZVHf1+n9i6/EKoZiX8/cQJ8Cd8A8/iIhO1pyRuAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://yts.mx",
    "author": "lanyuanxiaoyao",
    "description": "The official YTS YIFY Movies Torrents website. Download free yify movies torrents in 720p, 1080p and 3D quality. The fastest downloads at the smallest size.",
    "parser": "CSS",
    "rules": {
      "https://yts\\.mx/browse-movies/.+?/all/all/0/latest/0/all": {
        "list": {
          "expression": ".container section .row > div.browse-movie-wrap",
          "title": {
            "expression": ".browse-movie-title"
          },
          "image": {
            "expression": "img.img-responsive",
            "attribute": "src"
          },
          "dateTime": {
            "expression": ".browse-movie-year"
          },
          "link": {
            "expression": ".browse-movie-link",
            "attribute": "href"
          },
          "extra": {
            "location": {
              "expression": ".browse-movie-title > span",
              "replace": [
                {
                  "regex": "^\\[",
                  "text": ""
                },
                {
                  "regex": "\\]$",
                  "text": ""
                }
              ]
            },
            "score": {
              "expression": "h4.rating",
              "replace": [
                {
                  "regex": "\\s*\\/.+$",
                  "text": ""
                }
              ]
            }
          }
        }
      }
    },
    "search": "{home}/browse-movies/{query}/all/all/0/latest/0/all",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#location{${i.location}}#score{${i.score}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "YTS.MS"
    }
  },
  {
    "code": "13e17cb5-ab9d-470d-8a59-13123f5897c8",
    "name": "Zooqle",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAAyMjIxMTExMTEzMzMyMjIzMzMxMTE0NDQ1NTUxMTE9PT0tLS0zMzMwMDA6Ojo4ODgzMzM3Nzc9PT0xMTGuoy6VAAAAFHRSTlMA0N7CCqJdcBcl8EAyjk994bKW7KJ+dF4AAADhSURBVDjLzZJbjsMwCEWx8TPOu+x/rYNxW4ZolPzOkaregy52IgX+FSXADdkRkY/F2KrLSIMpqTH4KRwsqcx9r15MWDnmvipL1oTIMXyDNSnwnV5C5tFsTZL/nJV4tFqT5MyONfsMSw/Wvmel913O2AQD5NhAdmdjHgbVs0zEZGNSEMIiA5yN9YJSWlWpvZlHQWnHaz8LlHN/He1aCOIMNpT/TV7OwWAL/CPL9ruA2E66cm76Qaz0J3oCLDpKzhSuDaxQ8Z2jFpgW3e5ikpwktyqFGx4LYSIPt7ingucrnvkByFQZ9OleFowAAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "https://zooqle.com",
    "author": "lanyuanxiaoyao",
    "description": "Download torrents at Zooqle",
    "parser": "CSS",
    "rules": {
      "https://zooqle\\.com/search\\?q=.+": {
        "list": {
          "expression": "table.table-torrents tr:not(thead tr)",
          "title": {
            "expression": "td:nth-child(2) > a.small"
          },
          "dateTime": {
            "expression": "td:nth-child(5)"
          },
          "link": {
            "expression": "td:nth-child(2) > a.small",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "size": {
              "expression": "td:nth-child(4)"
            }
          }
        }
      }
    },
    "search": "{home}/search?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Zooqle",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "6d939c65-4f9c-47b7-864d-6d185b0d5bcd",
    "name": "EZTV",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAsVBMVEX///9CcuiTq/Ds7/vT4PlQhu2owvVhkO3///////8Kdert9v88dOtXie4piu0chO3K3PqIr/OUyfcBa+gAX+c8mPC43ftSpvO0zPd2nvFGnvEKf+xor/Sp2fmTufapwvUwkvBnku9Lfevg9P7X7v3G5vvP5fpmnPGKxPZIg+wvaOff7fyAwPafvfVdrvMmYOX28/zY4vnD1Ph2tfSVsfRluvN1pvKY1PdBje4se+oVVec2SpmRAAAACXRSTlPx9Pfu7u7u7t6n8bvDAAAB0ElEQVQ4y4yQ22rEMAxE+6oxSMGXGBynBHLZQEJYCNvu/v+PVSRuYJ/a8YukOUiDP+gP/RMwO0Mk7KPWbQyqlHLeYv4FdoFz3mPrydy8d3BeH3xXgMgjqSyLNfW6rbWhfpVGuxOYGHMBkq2qiY5GOJcMJh4HVM69ck+HsiBOBagDMzcNmLuQ5tNfBVzTtaGJI73JdtypX4AhI737beDO0gVUEXwvrakGou8ApLH4CiwbpC1++2loUf88UABqBekcTFY3P1hsOfU4AB0ByS6aZra1mQWYTT+ONAAFmCLAHF7Pr7u5AQ0AB7BWBdBcncAjaZTYyFN/BU4f5wsg89M3naw4DMNgAE66zIyQBNalWBcbe8qUZAhtQ+ih7/9gTdR0IYYa7P/gzyv2pRGERfndvwCs2H16MEqciZipmaqHvwtTy29AqJlAylTTkXroNY9pYBZ74vA/5o4p2Foxhd07gIa8paSzpYsWL8BtQOvgwWZQWQKKBjCxWCzB4dgZgC7r2J4PrgDhDhwxAvoAS9AO83NMrUMvDopNDgiIdifeq2ABrv3J2z6jRmEp/qZeJUpn5+iUsy+Az5RkviMmxSf4qSrLzXe9/VpXU9ls69X6MfIGFt48ATq21RYAAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "https://eztv.re",
    "author": "lanyuanxiaoyao",
    "description": "EZTV, your one stop source for all your favorite TV shows. FREE downloads! Watch more TV Series than ever. EZTV is releasing daily new episodes. SAFE!",
    "parser": "CSS",
    "rules": {
      "https://eztv\\.re/search/.+": {
        "list": {
          "expression": "table.forum_header_border tr[name=hover]",
          "title": {
            "expression": "td > a[title]"
          },
          "dateTime": {
            "expression": "td:nth-child(5)"
          },
          "link": {
            "expression": "td > a[title]",
            "attribute": "href",
            "prefix": "home"
          },
          "extra": {
            "size": {
              "expression": "td:nth-child(4)"
            }
          }
        }
      }
    },
    "search": "{home}/search/{query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "EZTV",
      "TEST_SEARCH_KEY": "girl"
    }
  },
  {
    "code": "5bfd545b-9cc5-47df-a515-15f7f0d0f68a",
    "name": "iBit",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEUAAADJLinJLinJLirJLinLLifJKCjJLinJLSrHLinJLyjJLSjVXln99fXwxMLRTEf////NPznbdnL34ODz09HmnJn67e3rsrDgiIW/Nh+5AAAAC3RSTlMA38+ydScT840yTKAyIHgAAAFaSURBVDjLjZPbkoMgDIYFtNoCwZAAvv+TLq0RcZ2dboYLBj7Cn9Nw2uO1GK2UNsvrMdxtGvVsxWY9Tr+uH6OyF1PjxctkrA3VsENM5+SprXWUM8XeiX6299pWwK/rGu2FmOR/YzugN7PrGO1fgB0/AlQP4EWqestY7AmkQtlnTuEglqpQdcDqIaXCvoWjJlEgALjgXMDIfmsqTAckjAWAiwvgxYcZ1AkUTFC2mCjHQIz7H8PcgOw2SvjeMoVNXMyDbQAEBpR9Cjnt5x2Q3CENGeoSYO6BIzrgA5g7kaW5RSp1icgzTEagPYVVofM7bFqiUo7WZXb1/ZYBk3eSKEn1RtEiRsoA7CHEXI5UD0u7BwghAZdYQflskXIjJxuAPG0BEV3x5M5yf1Q4iFAd05qZydeApFRnyzmCevguFkNyreX6ppVH96aVtr+bfl4G52Zm+jZ6/xzer+P/A+esKFy50Uo8AAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://ibit.am",
    "author": "lanyuanxiaoyao",
    "description": "IBit - Verified Torrent Search Engine. find &amp; download torrents, movies, music, games, software, tv shows, &amp; other downloads. download a verified bittorrent for free.",
    "parser": "CSS",
    "rules": {
      "https://ibit\\.am/torrent-search/.+": {
        "list": {
          "expression": "table.torrents > tbody > tr",
          "title": {
            "expression": "td:nth-child(1) > a",
            "attribute": "title"
          },
          "dateTime": {
            "expression": "td:nth-child(4)",
            "attribute": "title"
          },
          "link": {
            "expression": "td:nth-child(1) > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "type": {
              "expression": "td:nth-child(3) > a",
              "attribute": "title"
            },
            "size": {
              "expression": "td:nth-child(5) > a",
              "attribute": "title"
            }
          }
        }
      }
    },
    "search": "{home}/torrent-search/{query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#size{${i.size}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "iBit"
    }
  },
  {
    "code": "bbf01d3b-55d8-4a62-9928-58caf01f32df",
    "name": "哔哩哔哩弹幕网",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJ1BMVEUAAAAAoNkAodkAotgAodwAoNoAoNkAoNgAotkAodkAn9kAodkAoNmhO5srAAAADHRSTlMA58YZDs/2bkm2pGGZWlcAAAAAm0lEQVQoz2PABhYugdBeUhCa+8whBxDNonNmA1TgjAqIdjoDFWDQASthAVJADlRKBUqCALvaGThIKmBgYI45gwSOGjCwnkEBAQw1qALHgVZMRjjREmhRzhkDhADzmWMMZ84geQLIwy7QKAFkA0m4gMxBIB9IwgTAGERiCGBowWkoHJApgOE5DO9jBBBGEGIGMgN7GIKfWsBAGAAAAgyoA4E9r5MAAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "https://bilibili.com",
    "author": "lanyuanxiaoyao",
    "description": "bilibili是国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主。大家可以在这里找到许多欢乐。",
    "parser": "JSON",
    "rules": {
      "http://api\\.bilibili\\.com/x/web-interface/search/all/v2\\?keyword=.+": {
        "list": {
          "expression": "$.data.result[?(@.result_type=='video')].data",
          "title": {
            "expression": "$.title",
            "replace": [
              {
                "regex": "<em.*?>",
                "text": ""
              },
              {
                "regex": "</em>",
                "text": ""
              }
            ]
          },
          "description": {
            "expression": "$.description",
            "replace": [
              {
                "regex": "\n",
                "text": ""
              }
            ]
          },
          "image": {
            "expression": "$.pic",
            "prefix": "http:"
          },
          "author": {
            "expression": "$.author"
          },
          "dateTime": {
            "expression": "$.pubdate",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "$.arcurl"
          },
          "extra": {
            "view": {
              "expression": "$.play"
            }
          }
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "http://api.bilibili.com/x/web-interface/search/all/v2?keyword={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#view{${i.view}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "哔哩哔哩弹幕网,Bilibili"
    }
  },
  {
    "code": "904562ca-18e3-4e45-87f6-339b50a44879",
    "name": "爱奇艺",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABqlBMVEUAvwAA4AAAAAAAxwAA0gAA2gAA3gAA1wAAzAAA3AAAzwAAwwAAwAAA4QAAzwAAzgAA4AAAwQAAwwD///8AwgAA3AAA0gAA2AAAvAAA4AAAxgAAyQAAzQDy+/KA44AA1QAAuQBC1T8KyQoArwD4/vQNzA2A4IAMxgwAqQAAowAAmgANzw0XzQ37/vjt/Ou29bIA4wAAngBx4HFi2mIAtAD7/vvm+uV+0X1y3W/z/vKF4IRf2F9R5U6j66FjymNN40hL1EdH20RD0kFB4TwbyxYNpw3q9+nJ9MeO44tZ11dG5EM5xzc50jYs0ichyiAdwxsJpgjb99nW8NbP98y757mu9Kia55OM7YeF6oWK1YWD7oBu6WtZ5VVQxE5P1U0ysy8uvC0nyyMiuiEashcY0w8N1Q0P2woH2gbg8+DV9tLL7cjE6MPE88C+77yy5LGr66em8Z6b7piT7ox33Xh233Vm52VJwEY32DYyzCwy4iop4SIb3RgTwxLg+d+z7a2i3J6W2pJ563lvyW9x1mxRv1A53jYj1iEauRYWqhQS3w2q36RU0FJNzUsOvgy22HAMAAAAE3RSTlPz8gDy8vLz8vKW8pjW1TcvvbySh2EWBQAABSNJREFUWMPVl2dDE0EQhs9u7JrJZt09zCUHpmhiYmICAoKA9CYCSpGqYO+99+5/dmfLwcUAKp98SW5nZ+d9Mne3cMTaKLQnsHvDX2t3YA96ERDIZg/+g7LZgALsK7eH1FAhGfJPs/sQEMjiXC/pMKQiPTMDjv636MHam/UcISFjM2+Zw5eZe2UhDLJ7rUCogrRtbR0MWLvDofVot7U1tC5t/T8A4dUBYX9VGBUJa+FUZSLLcqoQawVgCwZGWLX49Vnr5MO34+fvjhzTGrlzb/ztxGT306+LBmXgWwTAxCT8fHL8TkexOriiqjPnRsYnnmGHIbRpgG774bl08M/08vyiQmiAZEXuBv9C5xa1DQFSpMFrs9jxavTQ/XzXVHNLNNrb2xuNtkx15R8c7rx982yVqbpHlG8J0CHNnV1PYjGqBZ68THx26v5VrDyxYADblH8Bz7991qHAOLdJRdk2Z0AdegMJTaqFbQbQislOx7NGwhUUCUfEEo1i7XnbD/iUr6/P99siIgtPu7ufLhAi80LKRiRBdSJq6x/7O4iQtv7+NjsiWhmpww+oO9aAXbQ2NDU8J88ampq6xYw8F9PusF3T3z8ratEnABHxCRF1Cq2ENAU9TRByGccLMIHDRxIhx8SYIURmufRttjarrk5j8rRNimI4+/0H3pM0sS+fwFJ2SZ40V7x77IjMcvSVA7h0PHDdPE4v2Ufwvh9icBuxhE9ito+pbBlAXtkoV2sAtbgpDIBDM65+YndwD4LBegBFeNLT88Qm2sGPI+CoAdgsI8aHHI+1lFQEcCpkAEwBvFMgdFSMd/uwjzZeEWA/rhP6yGvUGlMd6ClEoFeMV/FK3KSE6KwPwNVFZHqtDEBsOBtUql8JoC4irAAg9KTyp+Oc2DJ7eFUAGIAphVkFaHRIOWCHjSOrCGBeB5x2SEAzFbHKUgnYYe0g9ooA8ADEeY8FRcoFIKazBoACDYj5AGp6mGLBQNr8vts6awA2SgOoAlCo9QFEAQcM7zsYellB225trwSgvwPiXshMiPpjAFsZwPkyQLwat7vj5PGerwXgGoCCFgS00BgCXsWhEacxqOhaCoW2W5skgGqA04ljpojHUYfFT4jxJBUFy0IwIWqTATSrbQJuqT2o9MalPB7EUgddFcMlAHtxSugF407SfVQaKw0HT9y6lgfoufjo4gBgxbKQzs3MzPwEH4DD5/n5z8A4o4VEMpkarJIbH9xEMqE+ank4MDc384L5AOphUYsFDIBSd65UKvUAAyEmS2UIGNK+oLzXBgBMCNoweRWoNoCbyyULXImJjKIggzqN6g8D+hDAUOAMYfZGV00MqJTjOEgz0llgsaj0BweoNBoAd9+bh/uNxkMP8lOP+9pqamJGNW19vc1dtYdGb77UD/hhF/wAmrgW9CtdXVWVyRSLmUymqi5dtlg9X2AeQMk9881Ura3r0wngZQBwU19OjQ1fqV7dmm6//ubddC5BgZUDxAZIpXLJL9MfTpXGXt8avjZ0pb1Kqv3K0ND1W6/HSu8+TM8P5lKpZMH4DQCFN8hxxXYRFSlEJZODg2dQgyLM5VQy4boFx9gNAICBYgipO1gouEIJLYzR55h/nFQxHjZZFmiJmSRUuPlGzAyeNMCU6/faot7RkgAKfitd3efZJWAXrEu7rJ10PX6609q7PsBea+NOup4G8KvvfgrUg4gY1JxSk6fLltWKee3fiADRw5Kg/EfntMDzonYKs/r6f2CX9dfadWAPen8Bwj6+7lLV8IsAAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "https://www.iqiyi.com/",
    "author": "lanyuanxiaoyao",
    "description": "爱奇艺（iQIYI.COM）是拥有海量、优质、高清的网络视频的大型视频网站，专业的网络视频播放平台。爱奇艺影视内容丰富多元，涵盖电影、电视剧、动漫、综艺、生活、音乐、搞笑、财经、军事、体育、片花、资讯、微电影、儿童、母婴、教育、科技、时尚、原创、公益、游戏、旅游、拍客、汽车、纪录片、爱奇艺自制剧等剧目。视频播放清晰流畅，操作界面简单友好，真正为用户带来“悦享品质”的在线观看体验。",
    "parser": "CSS",
    "rules": {
      "https://so\\.iqiyi\\.com/so/q_.+": {
        "list": {
          "expression": ".qy-search-main .layout-main div[desc] > div[desc=card]",
          "title": {
            "expression": "a.qy-mod-link",
            "attribute": "title"
          },
          "description": {
            "expression": ".qy-search-result-info > .info-lbl:contains(简介) + .info-des"
          },
          "image": {
            "expression": "a.qy-mod-link > img",
            "attribute": "src",
            "prefix": "https:"
          },
          "link": {
            "expression": "a.qy-mod-link",
            "attribute": "href",
            "prefix": "https:"
          }
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "https://so.iqiyi.com/so/q_{query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "iqiyi, 爱奇艺"
    }
  },
  {
    "code": "9777491c-2a30-43e3-9008-60fb0a0d24a6",
    "name": "100影视网",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAACglBMVEUAAAAqU6/OqZ2Jnr2WpbzNUBNIabLguZHQWBnZjlrKWlLbn3Nki8Fph7hOd7iFoMLXwrLIlI/CbWnSuajImJGkqrvYjIjAGRJAZK8xWbDHMSk+ZbRNb7LGNCzCKSPDNzHShVJIbLPagUbSd0VTdbXVjF3XhU5WeLhqiLjOWlFMb7XUnHTZkWBdf7jnqnZTfLmkrrpvi7fDXFfCNSzftYjhtY7EdG+ruceBmby9ZGDXvZ/btJNmhLbPn5rBsK94krrl0LTEcm3TrJV5mcF9m8C9FRPUXxpIZqzDHRY3XrLINirQIhUkS6nSUCPJaze+GRTTazFkf67CiW3PYSk3YLLDKCHFIxleerHNcT5AZrTfhkjKamXTdD3RSTvRZy7CTEfiiUtQcbNbfbfScDqtoJ3JT0vUlWVzirM/aLNUdLKho6vOX0hlfrN2irPSnJjLRD3KZFzhkViSo7i5MSvYmHCxur3GTkjhfGrHYVnARkFfgLeTo7bIa2fMe3NbfLbfqHW9V1Bkgriisb/YnHi/SkTfjXDatpO9MSx4kLnto3W9UU3Me3K5SEZigbNOc7HBf3yzPTp2q9S3nZXbnIvv0Ki4Pjimucy/c3PJkYudrsCRqMOgjJrauKCnsL7FIBskS6/FIx3DDgfFGBHEFA4zWLAwVbDDCgTFHBUgR65KaKweRqzEGxzDGBfBBQL7//8rUbAqT6vCEAnEGQe8AQC/AAAoT681WaxEY6vHLgJObLDOZF+/f1jGQDrGOTPDIxzEHhrDExTEHhDJNQvJJQnGHwfQSgXMRQS8CgL09PLq2dnpyMbnv71Sc7NlgbI/Ya06W61WcKnipaLQdnK1h2XQglLLIRg8QaegAAAAnnRSTlMA/hAuC/3VYvauopBWUEtKIB8dGQwG+/r58Ovp5+PZ2NLMxsTBubazsayqppuXjouEhIKBdWxqY2JYVj8+OTY1MjEwHBT8+ff29PT08vLu7uzr5ubk4+Pg4N/f3tva2dfT0c/PzsrDv7u4t7eurauooqGdnJuYkpGQj42GhYGAf354d3Nxb25tbGppZ2FgXVdXVVVSUU1LREE+PDgnIoDUgrUAAAItSURBVCjPrZHlW9tQFIdv6l5Gi7szXDdg+Ji7u7u7u7u7xZO2oa7YgKFz3/+zJHuePU8D7Sfeb/e853eSey4IgdEAwvPoXnjfHF8e1o9b47kGwOOIUP55ig2/Da6uN4SIl03HsCl1BkWG0NTdbIpsqj6ehBEondyobJOD18EN9TPnpSShGGZCYduuGqmisahSMOKYByMIVsNWd4F8SKleLfzLiHgaRWGW3r4KtVQ9/xIQMp42cb7VvUi+KSMrPQoIOe3iG6xtysq12SsngRFMwHFuwDtpRcHy1BtgJLdMBD8gXT7390MwCmdcOD/gXFbnZo3urlYs3OEWdgc91r7s/IUl+u1OiIrLeflfRj45v3eVC0dha79i6+F6AN4kmB0II/tnRfcPrYt+/+GtDUZb+wc780Vs7UUcQpKO2Xy4LLnrh93+kfcDQ7+OcF68GKFIiMnk7rbE22G3f+oY9sJor3swdSIX0icwFOlgYp8CkYqgY35Gdw17CJiwDUwt4uItJyE27zNbLrLb9dJwt8vjxXCccM85wG1PUiVDEJJCnN9PsSdVTDdO01jPn1lL911pZguTr6dBZohCzP4F/MeMzy6f2K86Wl79ysieomqLVyBmH+VgnF8OCtbEZjWFG/xOxP/Nh0A5JTVBTvSgePfGxHaLJRCwBMgZedqgl5aIq3ITP7dPk+UVLrN8jU0728AWgxu0d3QN+tLcbZmyHRdqJWB0JJo9O0t1LWDM+QtNRs09tXOTNQAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://www.100yingshi.com",
    "author": "lanyuanxiaoyao",
    "description": "100影视网（100yingshi.com），每天搜集互联网最新电影和电视剧，为广大用户免费提供无广告在线观看电影和电视剧服务，及时收录最新、最热、最全的电影大片,高清正版免费看。",
    "parser": "CSS",
    "rules": {
      "https://www\\.100yingshi\\.com/yssearch/.+?----------\\d+---\\.html": {
        "list": {
          "expression": ".index-area li",
          "title": {
            "expression": "p.name"
          },
          "image": {
            "expression": "img",
            "attribute": "src",
            "prefix": "{home}"
          },
          "author": {
            "expression": "p.name + p.actor"
          },
          "dateTime": {
            "expression": "p.actor:nth-child(4)",
            "script": "if (text) {\n    return text.split('/')[0]\n}\nreturn text"
          },
          "link": {
            "expression": "a.link-hover",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "location": {
              "expression": "p.actor:nth-child(4)",
              "script": "if (text) {\n    return text.split('/')[1]\n}\nreturn text"
            },
            "other": {
              "expression": ".other"
            }
          }
        },
        "next": {
          "expression": ".page > a.page_link[title=下一页]",
          "attribute": "href",
          "prefix": "{home}",
          "script": "if (text === params.url) {\n    return ''\n}\nreturn text"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "{home}/yssearch/{query}----------1---.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}#other{${i.other}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "100影视网"
    }
  },
  {
    "code": "404af31f-0fe6-42e8-922b-9f45d628ea99",
    "name": "1231d电影网",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABTVBMVEX7AAD/AADcAAD/6ejhAAD/zM3vcHDmAADrAADscnH/sLDWAwD0AADOKCX/i4f/tbTvAAD/0Mz/y8f/jo7/wL3ODQH/y8P/qqe/FxP/5erNLy7VKSLJEAH/+P//3+T/18//xcb6pan/pp/pbGr8amjQKyjIKyTPDw/hCwD+/P//6+7/7ur/5OX/4uL+wML/yL//urr/vbj/sKn/hYnndXP/eHLzb3DHNTDRKCzELSvIFg69GQjSDwDSAwD/9fz/8Pf/9PL/6eL/4Nz/3Nb/qq38nqD/lJbvg4P/cm//bGb/ZGL/X17/UVT/QDv6NiyuLivaJiWmIyLVEw7YFAH/xcr/u8Xsjo3hi4rRdHL/WFjdU1H/R0rXRkT/OkH+LCqfIyDRKh7YGxjfDg/qGwvtl5bYiI7win/YiX3EeHPkZWnJZmW4X1/MVlr2T0npGx54B7kcAAACVklEQVQ4y32T1XbjMBBAZUWOXMkUs8PUBhposA2VmWHL3C7T/z+unCZnd5um1y/jOdej8cwRyEUWp31vUSj4phcjORBZWK3736Tpr9sL82B6o40ghGgEyHA28iDWQtxY8GwMBKYQB8bAoakA4CU8VgBY4t8VOKEvCH1BFMEQcRBz/wiciLGXAqKAIaUUg5cmJa8HJOInSLcaNEuhqN7WZFnXt73/xAKasgDfonvrpzyvWZalyVmYjhJdtuyHzVQqvZtpsQrB3k70NJHQAnZSCWyZfpd8/KFUO9WVlVjpscWzOdBL99PRvbF8cPR1yXYmouT8bEWmz/v7d3do7gMIBNFvwhuNynJ6hviIc7W2NlNKhbOY9aCiuf4c1H27kjY8wSXOjX5mKPrmyXG7fayiIBMmsWB2Ovel4sHRhbvqXFWJopDGo21UZm6hJwS7W8lkMhF1q2uJaC2TWlLOv5Ttkz1ZlreZwJo018tGnI+XAhppZjKpIvl+Ud6mJ12z1z/CkpAKIZUMcuA4jhme/fYzQW6OIe2aVEShMtBCKpspeDa0X7I3Q71W4zd3rnd1WW4I+MFiAgYMNXu5oxCiEKVi6Lvre0mFtXoNJX4osC0h2jMz4bDZpU8wS81wuCegyTjg5/DfPauqIIiqKL58oQIhZDFB4AbbB8OARQwWCSGNDcoThsogGADwYXwgDOG8539Bk4YCB15VYEccsm1KeEwF9oYneRCbRdxYELs4vo02hRDBUViu83kJzC/YdX+z6Z94hZ9l6qv5eRBh179QLBZ8I7huPp/L/QHCck4q64kFlQAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://www.1231d.com",
    "author": "lanyuanxiaoyao",
    "description": "最好的迅雷电影下载网，分享最新电影，高清电影、综艺、动漫、电视剧、韩剧、港剧、台剧、泰剧、欧美剧、日剧等下载！",
    "parser": "CSS",
    "rules": {
      "https://www\\.1231d\\.com/search/page/\\d+/wd/.+\\.html": {
        "list": {
          "expression": ".vodlist li.searchlist_item",
          "title": {
            "expression": "h4.vodlist_title",
            "replace": [
              {
                "regex": "&nbsp;",
                "text": " "
              }
            ]
          },
          "description": {
            "expression": "p.vodlist_sub:contains(简介)",
            "replace": [
              {
                "regex": "^简介：",
                "text": ""
              }
            ]
          },
          "image": {
            "expression": ".searchlist_img a",
            "attribute": "data-original"
          },
          "author": {
            "expression": "p.vodlist_sub:contains(导演)",
            "replace": [
              {
                "regex": "^导演：",
                "text": ""
              }
            ]
          },
          "link": {
            "expression": "h4.vodlist_title a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "other": {
              "expression": ".searchlist_img .pic_text"
            }
          }
        },
        "next": {
          "expression": "ul.page > a:contains(下一页)",
          "attribute": "href",
          "prefix": "{home}"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "{home}/search/page/1/wd/{query}.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#other{${i.other}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "1231d电影网"
    }
  },
  {
    "code": "9792b981-b78a-4afe-8657-6fb1cb5ba385",
    "name": "蜗牛影院",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABPlBMVEUAAAD1W1D/xgDtU3rwcorwmZ3/AF//AF3aAF63GWH/wwD/AWX1PIP1Pnzla4X/eia1GWH/AGD/AGG7JGG3ImbbDWH/giz/AGO4KGj/CWr/DGrgJmz/iEX2LXXAQHj/wAD/rgD/eyS1Fl//AF3kAF3cAGD/fin/FFncAV//gCrgRlf3d0P+qgD/xADrAmO4I2XcFWb/hDL/XUzeGWf/gzS5LG3/xgDdG2jEKWz/pRzDRX7/H3H/hjm7M23/zjn/k1P/zCn/AF3bAF3/eyL2TkL/wACzE162El3VAF33VT77YDT+ai7/owC7Dl3uAFziFFf/NUXyR0T/dSj/hRX/uAD/lgDEBl3gAF3MAF32AFzlAFzlIVTbMU/pLU/tOUrwQEf/QkD3Wzn8cSj+ngDUDVvBHln/FVLeO0z/WDf/jgCK96zvAAAAQXRSTlMAu7sVCAPm+PfTxYMvIBDp4sy/vbq3qqCJc2JMPTgy9/fz8PDw4dnV0767u7uxo6Gbk4eDdW5raWNbWVFQSz8oGbngW2kAAAFaSURBVDjLbZPnVsIwGECjlY2AoDJU3HvvPUJoCy0gIG5UhvP9X8CQQdJx/9578n05OQHgLKb1CBwqwJVsQGMkLofcgpTWZ24763EGo5pELKW4BgI9cBKxBQlJl58KBf/YhHWVNV3oHMG/E5ZXGWjSQn8o5DiL+8NSkP/50vUy0YKV44gI8rXmJ9MCsgoLMB+vOTuPC1tTHhoQ3m+tugIh9IYUElBqb1KCNSGp0IAnTL88Q05aBHQVqgUjigjYKhUo4w3bAsNs2YN1Sbc7CCGzKgVxBWwYXBdNRBGFLwPAYLdNtVFHjPo396EhHKilTrFINafFrpDBHgeqWrpDFgyyXwg/KQvUhjX5hXA+iV+CByS5l4KqL36OT+cBQxTmclphVg4afEp0jwwXgfWI2fFJD3APSj2/emH/Xpv9oIvQ0oHz4xxN8+AvunsNnNwEmZ+hw51c0SJ4GnHV/2thsQoatoZfAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.snailok.com",
    "author": "lanyuanxiaoyao",
    "description": "蜗牛视频为您提供最新电影,好看的电影,新电视剧大全，经典动漫，推荐好看的热门综艺大全全集等免费高清视频在线观看。",
    "parser": "CSS",
    "rules": {
      "https://www\\.snailok\\.com/vodsearch/.+?----------\\d+?---\\.html": {
        "list": {
          "expression": ".col-lg-wide-75 .stui-vodlist__media li",
          "title": {
            "expression": "h3.title"
          },
          "image": {
            "expression": ".lazyload",
            "attribute": "data-original"
          },
          "author": {
            "expression": ".detail p:contains(主演：)",
            "replace": [
              {
                "regex": "主演：",
                "text": ""
              }
            ]
          },
          "link": {
            "expression": "a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "other": {
              "expression": ".pic-text"
            }
          }
        },
        "next": {
          "expression": "ul.stui-page li a:contains(下一页)",
          "attribute": "href",
          "prefix": "{home}"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "https://www.snailok.com/vodsearch/{query}----------1---.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#other{${i.other}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "蜗牛影院"
    }
  },
  {
    "code": "90b35a14-d7af-4171-bdae-f9ff3c98e8b7",
    "name": "91美剧",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEUAAADopQDopgDnpwDnpgDnpgDnpwDnpwDnpQDpngDnpwDmpwDrpADppADnpwDnpwDnpwDnpgDmpgDlowDnpgDxqgDopgDtnQDsoQDopwDnpgDopQDmpgDppQDnpgDnpwDnpgDnpwDpqADppgDlpADkowDqogDoqADnpwDopwDopgDnpwDopQDnpgDmpgDppgDppQDmpQDmpQDmpgDqpAD4jADmpwDppADsoADmpgD2jwD1kgDtnwDnqADsnwDrnwDlpgDnpwDnpgDmpQDmqADoqgr////++/X78trqsyT//vv99+r447LuwErsuTfnpwX99uX679P67Mz457z236f125v01ITz0HnyzW/wxl/prxvprxjprRPorAz9+e788+D346/01IrvxFnvxE/tvUXrtCnKxEhAAAAAQXRSTlMAZQOvwqL99T8g5GtOM/neyMW/Uh8VExAM6Z6HaVtI7dynlZEjGQbWzrayqoJ5Xy8Iu2NaNxfSw6yaRjsvJru7jLs07YsAAAHCSURBVDjLfZPXeoJAEIUVVEDAgiIWRMWWGHtMr7BiL+nFkp73f4W4sPqpQc8l5+fM7uyMZS6sHAykqRR1IAQzmMVEgQuWlHw+5vTs3B/8b2N+phDOcTbv0dVxkibT63aapE88IYcyU93l3o0UWX7FT+2Hd5yEovv1uiMW5yIMv+RTxYSzrizLdShLPLYov487V2xYJysvMgI+O/pfBTOpKsq4ZjO6L7BJt0MxAF0ohOCqlF6kFLUhG6jaeDQZAmAwTlkSIBCNxOfAdPD12v+dohSXp5CCQH4vZNha+/vpoff4/DMeGhGhcA0CCY/eAADaL71Wt3tz+9ifGBmuigQBDh5RVYDW/2g2mm/NRutpoBlFvD5BCFh2Yvr5h+2X20anddfqNHuvIwAg4KmWSNKSJXRAG3y+N7r3D/c3nbvnNgJEhi5sA7x0VbZvKIEAMZHbdkibKO7tml8TAVarHd/cKARsbjUC4GOppo+FANPnXgaMgVGWB2YdwPxRPKSsyQFDvTqAhnbFVgl3nECA+dhX5CSejXEijVfMFydaK0n5XLgIO7m+epdw9fjZF9ZqJZl8ZPPylv3UAcXWtqx/ppwJ8vwf4cyqvs/d/6IAAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "https://91mjw.com",
    "author": "lanyuanxiaoyao",
    "description": "91美剧网，一个可在线观看美剧的视频网站，美剧爱好者的在线美剧天堂。提供高清、流畅、无广告的观看体验。",
    "parser": "CSS",
    "rules": {
      "https://91mjw\\.com/page/\\d+?\\?s=.+": {
        "list": {
          "expression": ".list-content article",
          "title": {
            "expression": "a",
            "attribute": "title"
          },
          "image": {
            "expression": "img",
            "attribute": "data-original"
          },
          "link": {
            "expression": "a",
            "attribute": "href"
          },
          "extra": {
            "other": {
              "expression": ".zhuangtai"
            },
            "score": {
              "expression": ".pingfen"
            }
          }
        },
        "next": {
          "expression": ".pagination .next-page a",
          "attribute": "href"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "https://91mjw.com/page/1?s={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#score{${i.score}}#other{${i.other}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "91美剧"
    }
  },
  {
    "code": "c0de6c06-ca67-474b-8a8d-23bf14d88866",
    "name": "91影院",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAD/NTX/Ozj/Ozb/Ojf/Ozf/Ojj/Ozj/Ojf/Pj7/PjX/OTn/PT3/Ojf/Ozj/Ozj/Ojf/Ozj/Ozf/Ojj/PDf/OTf/Ozj/Ozb/Ojf/Ozj/Pzj/Ojf/Ozj/Ozh40/PzAAAAHXRSTlMABfe3S9HA7tsPGjcUmeXIqqSQQCm/iW1cUyJ9Y+qa0+YAAAEDSURBVDjLvdJJbsQgEAXQKkKFydCeZ+5/zRhot0Vi5F3+wvDFAyRk+L/gaozGq1YVZstdLYWQ1qSq54Zkq+DK4nyM5EHPxI4526/1lfw7sgfgIs2b65LNf9ICNu/p1weoV+gsbiQdWw6MCOvTEgZhbsDCwu0ah+A42D9gD/WlsE6gty+WgykHgJpyMIdK1XnFIb5z0IUTBTeuBNKJTvoSgNHHlEFPDwC4fADQt+REEaQ/pO+oCNRspwqwLgFlj4dosQx4fKjOyDjcgN2HOBe+ci2ccKbB0lOnCA43AKbzCLZhBMMvgGMSYlOp29BGuIJLQzS05tyzWqJRQ/6SWmW1Svg5P6akKKA3yo9QAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.91cinema.cn",
    "author": "lanyuanxiaoyao",
    "description": "91影院,91视频,91,91视频在线观看,91福利视频,福利在线,手机电影院,免费影院,神马影院,福利区,国产影院",
    "parser": "CSS",
    "rules": {
      "https://www\\.91cinema\\.cn/vsearch/.+?----------\\d+?---\\.html": {
        "list": {
          "expression": "body .item",
          "title": {
            "expression": "h2 > a",
            "attribute": "title"
          },
          "image": {
            "expression": ".ff-img",
            "attribute": "src"
          },
          "author": {
            "expression": ".txtList li:contains(主演：)",
            "replace": [
              {
                "regex": "主演：",
                "text": ""
              }
            ]
          },
          "dateTime": {
            "expression": ".sTime"
          },
          "link": {
            "expression": "h2 > a",
            "attribute": "href"
          },
          "extra": {
            "other": {
              "expression": ".sStyle"
            }
          }
        },
        "next": {
          "expression": ".list-pager-v2 .page-item a[title=下一页]",
          "attribute": "href",
          "prefix": "{home}"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "https://www.91cinema.cn/vsearch/{query}----------1---.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#datetime{${i.datetime}}#other{${i.other}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "91影院"
    }
  },
  {
    "code": "caac0d94-29f4-4a70-afbf-7c71239d6732",
    "name": "豆角电影网",
    "category": "影视",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABwlBMVEX+///1///k9f/e+/+s1P7Z+P/V8fxQdJ622/6lyfHS6fF5n8dkk8FWgK7j/f/R8P+/5P9ojbTo/f/V9f/K7f/P7fnG5fC/4O1HbZrG6P/F5fnn9fit0fOcwelVg7bc8/rZ7vXL6PCv2+uQueeNr82Bqsxum8ZrkrtOfLHt//+64P+73OePtNR0mb5dhrRFdq9JcaA/aJdNbZPs+v/q9v7w+f3h9Pq34Oy13Omo0+awyuaz0+KfyuGrzuCexd6ivNl3odSIstF2pMuApMZtk8JbjsFWh7thirZMd6Y6YI7y+/+ly/m31fji7/PX6u+21e/D1u2cxe2mxenE4Oi7z+eXuuKlx92YxdyWvtuJtNucvNJ8pdKftc9wms2HosFgha1Xe6bb7v/C3PycxvfK6vXB5fC74/DO3vCv0+zM4+uKtemEsOKkzeCdvd+FrdyRv9mHq9aJt9Wjw9R/rdCSs8xtmcB7nb5NgbhykLZ4lLFxjq5fgKpmhKk6bKMsYqI3YpU/YYotWIe03O+40O+82u6myui21+W61OB4pdt/qteWuNaXsMeKqsaTqL98l7dAcahZep8gWZowXpI4WoayxdpUhsaiOXTKAAADLUlEQVQ4y22TZVsbQRRG1yWr8Y27ewoJxF0KheLu7hQpFKfu3v/bTfps/Xw9M/Pcufe9gAQIQT6ybtJtzVDONeBfwPuPUnlhPxgXwrukDoI6/vbD8X1HjPGXg4R/aSrciM0N3/lNd0JcHEdqEfOA3+iU4w1vla6cTt/9dX16p3BNIeZalXZ75A9fG/1+BCF7IVDyXy+Qkw9TvJueKR2OEzr+mTMkn8fxs+HOHx6Lh5DICU3wudF+Fcdnii7qWD43H21+ed+uAxy5LRK1qrv4WMWpNc+z27kx04ARQXqWdi/uAyK+yucyf+w+fDDWbbd3dWk1aqVSxRtNjs2BxdYLdxe8l3WedLV8MrmiRmGLWpudfBuSM1H5E7HO/KA5Yp5Q6dNPNcsYCqOYbUgbCKQPjh7WvZexFAiETTORqntcr4RhGLL0yWw2qwWDFQpWR+6ar+Mc8OllD0OXHozZV1c0NpnVYDCAbRQwjKKmm33gU4QYpIrj3WJ1ssQdsN2cu/fuWV+8eVve6R2pAFdXMxwLbcisibZs676NocBokKK9jLEf+HbVcOl9YAtpMvegBIbps07PyaUcBXqESC2U06sxLGHolJrfwqd4Wv8QQwDlCBM+dk2mA0MbfQZJGyxWmVXhI5jPWwCFLk7OOg9eDCUM4A+tkNm0SXsu6ByEnjRfAs2QUsHCrMIHtuk0iK1YWU127x265/KsfAoo3DIOUgezLCYiE7FaLGILVNkybZ5T5lOACr9uMCHn5Gg6ENBqbEpRqpc1Wi1npL3C4MIdMa2neCPsKR8dpDXipNDl1eRj+/a4K6hyRGM7YDswiGNrwmTkOVSp1mi7uuzdmb2Jkockos3e1oGOi8oSQhAE+SyTyWxnn+vVnD5Xos2v/ELc0v5X6uaLMH8u91Cu4t66jtP3p/pVEzVvAbl5A0o7g+P4vBjndZ3OGHSV3B4SYQTHyBkk5V6BEiRC8Pz60ftHFEVXmSkkivfOLgA/6ZilCgWa+XiWX2PRV96oY7M5DXb8sXmzuIBTJiWLTS+aYuckfirpn/ODRLiBinBOhvHRd+8g4D+sfbw1b/Z46ipW3DqJ75d9oF5XMPkAAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://m.tvb52.com",
    "author": "lanyuanxiaoyao",
    "description": "豆角电影网为您提供最新免费高清电影,迅雷下载,最新电视剧在线观看,视频格式有720P 1024p高清rmvb,及mkv等影音资源-豆角电影网。",
    "parser": "CSS",
    "rules": {
      "https://m\\.doujiaow\\.com/index\\.php\\?m=vod-search-pg-\\d+?-wd-.+?\\.html": {
        "list": {
          "expression": ".ulPicTxt li",
          "title": {
            "expression": ".sTit"
          },
          "image": {
            "expression": "img",
            "attribute": "data-src"
          },
          "author": {
            "expression": ".sTit .sDes:contains(主演：)",
            "replace": [
              {
                "regex": "主演：",
                "text": ""
              }
            ]
          },
          "dateTime": {
            "expression": ".sDes:contains(地区：)",
            "replace": [
              {
                "regex": "地区：",
                "text": ""
              }
            ],
            "script": "if (!text || text === '') return ''\nlet array = text.split('/')\nreturn array[1].trim()"
          },
          "link": {
            "expression": "a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "other": {
              "expression": ".pic a .sStyle"
            },
            "score": {
              "expression": ".sTit .sDes:contains(评分)",
              "replace": [
                {
                  "regex": "评分：",
                  "text": ""
                }
              ]
            },
            "location": {
              "expression": ".sDes:contains(地区：)",
              "replace": [
                {
                  "regex": "地区：",
                  "text": ""
                }
              ],
              "script": "if (!text || text === '') return ''\nlet array = text.split('/')\nreturn array[0].trim()"
            }
          }
        },
        "next": {
          "expression": ".fenye a.pagelink_a:contains(下一页)",
          "attribute": "href",
          "prefix": "{home}"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "https://m.doujiaow.com/index.php?m=vod-search-pg-1-wd-{query}.html",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#location{${i.location}}#score{${i.score}}#datetime{${i.datetime}}#other{${i.other}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.image}",
      "SEARCH_LITE_KEYS": "豆角电影网"
    }
  },
  {
    "code": "21288140-5491-4aac-a827-e084bfa70ae2",
    "name": "npm",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAADVAADVAADVAADVAADVAADVAADVAADVAADVAADVAADVAADUAwP////63d3dKSnjTEzZFBTnaGj74+Pzrq7gQUH97e33zMzwnJzsiYnpc3P+9fXqe3vlX1/86en1wMD0urrukpLeNjbna2vkV1dx9FJWAAAADHRSTlMA5H9p8XHLXg+TPCIbiF8bAAAAvUlEQVQ4y+2RWw6CMBBFizzVmZYOlPdb9r9GaQUjqRIXwEluOh+nzc2UnfyJfznEZ4FzSMA8OMRjjhw45wkvQOkz4S1UZtDJhbMICWp6iNFQwYgbtRE4YinSXAuZmuoGSsRBtNgLyjaBoDBCB5AZIYVpiXoLD1tQS2JLqIsRK0vodLGU70oOoExtLcBMJEDF5oVGzxORAkkxyFY6H4uaEVHaiwrdF1cQRK30Lu6OkG3c1hsR+8F9/b2InXzjCSfLFUwXvmv4AAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.npmjs.com",
    "author": "lanyuanxiaoyao",
    "description": "npm is the world’s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage development as well.",
    "parser": "CSS",
    "rules": {
      "https://www\\.npmjs\\.com/search\\?q=.+": {
        "list": {
          "expression": "main .center aside + div > section",
          "title": {
            "expression": "div.w-60-l div:nth-child(1) h3"
          },
          "description": {
            "expression": "div.w-60-l h4:contains(Description) + p"
          },
          "author": {
            "expression": "div.w-60-l h4:contains(Publisher) + div div:nth-child(1) > a[href]"
          },
          "dateTime": {
            "expression": "div.w-60-l h4:contains(Publisher) + div span[title]",
            "script": "let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[2]\n}\nreturn ''"
          },
          "link": {
            "expression": "div.w-60-l div:nth-child(1) > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "version": {
              "expression": "div.w-60-l h4:contains(Publisher) + div span[title]",
              "script": "let regex = /published\\s*(.+?)\\s*•\\s*(.+)$/\nlet result = text.match(regex)\nif (result && result.length > 1) {\n    return result[1]\n}\nreturn ''"
            }
          }
        },
        "next": {
          "expression": "main .center aside + div > section + div a:contains(»)",
          "attribute": "href",
          "prefix": "{home}"
        }
      },
      "https://www\\.npmjs\\.com/package/.+": {
        "text": {
          "expression": "html",
          "title": {
            "expression": "#top span[title]",
            "attribute": "title"
          },
          "description": {
            "expression": "head meta[name=description]",
            "attribute": "content"
          },
          "dateTime": {
            "expression": "#top div:has(h3:contains(Install)) > div > h3:contains(Last publish) + p time",
            "attribute": "title"
          },
          "extra": {
            "version": {
              "expression": "#top div:has(h3:contains(Install)) > div > h3:contains(Version) + p"
            },
            "size": {
              "expression": "#top div:has(h3:contains(Install)) > div > h3:contains(Unpacked) + p"
            },
            "number": {
              "expression": "#top div:has(h3:contains(Install)) > div > h3:contains(Total Files) + p"
            },
            "license": {
              "expression": "#top div:has(h3:contains(Install)) > div > h3:contains(License) + p"
            }
          }
        },
        "list": {
          "expression": "#top > div > h3:contains(Install) + p:has(code)",
          "content": {
            "expression": "svg + code[title]"
          }
        }
      }
    },
    "search": "{home}/search?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#author{${i.author}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "npm,JavaScript",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "a2387be5-1b9d-41df-b28a-246c972e492f",
    "name": "Maven (Sonatype)",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEUAAADyO2/yO2/xPG/yPG/yPG/yO2/yO2/yPG/yO2/xPG/yO2/xPG/xPG/yPG/yO2/yO2/yPG/xPG/yPG/yPG/yO2/xPG9/RIhNAAAAFnRSTlMAFkPavpFrDZ8j5zDw0rJ/WE/GiDp1QDIvygAAANVJREFUOMu1kEt2gzAMReUPNjbQACF3/0vtaXxSGddk1NyZfk/Sk//CWPMnleooMDb1yZ0yA9jzvONex3caiRHWOt4cOdULZpw5KY4wVOGuoTZkHfmivSkOwEN/omyseAC7HvDaoFiAo6h5gK1pOABuvwtYYmtsBnyxqPQqevicimeoCcoNnuZZ+gKy8Tz9yCrQeWM3nh+CXDTkUl9UQJlQgnRIMy+89IgLBTWxYwTllT4DBR+lzzSXetJUb4c3ckkAt8bregzjEuQN62StvMNIivIJvgHGYREYjV73PQAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://search.maven.org",
    "author": "lanyuanxiaoyao",
    "description": "Official search of Maven Central Repository.",
    "parser": "JSON",
    "rules": {
      "https://search\\.maven\\.org/solrsearch/select\\?q=.+": {
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
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "$",
            "script": "let data = JSON.parse(text)\nreturn 'https://search.maven.org/artifact/' + data.g + '/' + data.a + '/' + data.latestVersion + '/jar'"
          },
          "extra": {
            "version": {
              "expression": "$.latestVersion"
            }
          }
        },
        "next": {
          "expression": "$.response.start",
          "script": "let result = /(.+start=)\\d+(&.+)/g.exec(params.url)\nif (result) {\n    return result[1] + (parseInt(text) + 1) + result[2]\n}\nreturn \"\""
        }
      },
      "https://search\\.maven\\.org/artifact/.+/jar": {
        "parser": "JS",
        "text": {
          "expression": "return text",
          "title": {
            "script": "let result = /https:\\/\\/search\\.maven\\.org\\/artifact\\/(.+?)\\/(.+?)\\/(.+?)\\/jar/g.exec(params.url)\nif (result) {\n    return result[1] + ':' + result[2] + ':' + result[3]\n}\nreturn ''"
          }
        },
        "list": {
          "expression": "let result = /https:\\/\\/search\\.maven\\.org\\/artifact\\/(.+?)\\/(.+?)\\/(.+?)\\/jar/g.exec(params.url)\nif (result) {\n    let groupId = result[1]\n    let name = result[2]\n    let version = result[3]\n    return [\n        JSON.stringify({\n            title: 'Apache Maven',\n            content: '<dependency>\\n' +\n                '  <groupId>' + groupId + '</groupId>\\n' +\n                '  <artifactId>' + name + '</artifactId>\\n' +\n                '  <version>' + version + '</version>\\n' +\n                '</dependency>'\n        }),\n        JSON.stringify({\n            title: 'Gradle Groovy DSL',\n            content: 'implementation \\'' + groupId + ':' + name + ':' + version + '\\''\n        }),\n        JSON.stringify({\n            title: 'Gradle Kotlin DSL',\n            content: 'implementation(\"' + groupId + ':' + name + ':' + version + '\")'\n        }),\n        JSON.stringify({\n            title: 'Scala SBT',\n            content: 'libraryDependencies += \"' + groupId + '\" % \"' + name + '\" % \"' + version + '\"'\n        }),\n        JSON.stringify({\n            title: 'Apache Ivy',\n            content: '<dependency org=\"' + groupId + '\" name=\"' + name + '\" rev=\"' + version + '\" />'\n        }),\n        JSON.stringify({\n            title: 'Groovy Grape',\n            content: '@Grapes(\\n' +\n                '  @Grab(group=\\'' + groupId + '\\', module=\\'' + name + '\\', version=\\'' + version + '\\')\\n' +\n                ')'\n        }),\n        JSON.stringify({\n            title: 'Leiningen',\n            content: '[' + groupId + '/' + name + ' \"' + version + '\"]'\n        }),\n        JSON.stringify({\n            title: 'Apache Buildr',\n            content: '\\'' + groupId + ':' + name + ':jar:' + version + '\\''\n        }),\n        JSON.stringify({\n            title: 'PURL',\n            content: 'pkg:maven/' + groupId + '/' + name + '@' + version\n        }),\n        JSON.stringify({\n            title: 'Bazel',\n            content: 'maven_jar(\\n' +\n                '    name = \"' + name + '\",\\n' +\n            '    artifact = \"'+groupId + ':' + name + ':' + version + '\",\\n' +\n                ')'\n        })\n    ]\n}\nreturn ''",
          "title": {
            "expression": "return JSON.parse(text)['title']"
          },
          "content": {
            "expression": "return JSON.parse(text)['content']"
          }
        },
        "options": [
          "OPEN_WITHOUT_DOWNLOAD"
        ]
      }
    },
    "search": "{home}/solrsearch/select?q={query}&start=0&rows=20",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#author{${i.author}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Maven (Sonatype),mvn (Sonatype)",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "3a3d7617-80ef-44f7-a369-9032f13aa9a0",
    "name": "Github",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEUAAAA4ODhGRkY5OTk9PT0+Pj49PT1CQkJFRUU/Pz9AQEBEREQ3Nzc7OztDQ0M6Ojo+Pj5EREQ4ODj9/f2wsLD9/f35+flISEj6+vrb29v///83NzdHR0c/Pz8oKChTU1MvLy95eXnk5OSwsLCqqqp/f39gYGDV1dXKysrExMSSkpKJiYn39/fy8vKcnJyMjIyEhIRra2vq6uq5ubnUvOFSAAAAGnRSTlMA8/OfTjMhC51uPt7ekYiIYMvK7smjk5FvQDevNlkAAAFRSURBVDjLrZPZkoJADEVFUAT3dZT0wiaLiqDz//82nS41NEXNk3m9p+vmJunBV8v1vbltzz3f7ddHi7XFVVmb5ahHHk+GjOsCAMsed3VnyhjjHwJmjqmv8HkbAGtlvEcd4KWBCJFwWv5TxrMyzRSifEKRpaUMYUZ9TBiDJgiqNCnyvEjTKggiAWB/8g0VUAdGnRVgvdK6C6aAyAQeCoClqwF/jQETE0ixz42vAQ8dHjcTuGXo4WngBx0uQaeu6DF/Z2Bw7wJ3BOx/gIsGyOLcBSKywCa5jE09ZiE2STHhagKNoJg4KKmIuPW+CYEGpUbNL78ylHUSazW5SgFAo1Y5uCwLJgTkCOQc160z0LpBPsuM1a09gF43HYwaZfW80SbxYMyT41GSFC3AWnWPFkBEBMycnrOH6D1EOnvz4+y2qG939HHMck/Hw35/OJ7cwTfrDxRkPUCeRWdPAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://github.com",
    "author": "lanyuanxiaoyao",
    "description": "GitHub is where people build software. More than 50 million people use GitHub to discover, fork, and contribute to over 100 million projects.",
    "parser": "JSON",
    "tags": {
      "Trending Today": "{home}/trending?since=daily",
      "Trending This Week": "{home}/trending?since=weekly",
      "Trending This Month": "{home}/trending?since=monthly"
    },
    "rules": {
      "https://api\\.github\\.com/search/repositories\\?q=.+?&per_page=20&page=\\d+": {
        "list": {
          "expression": "$.items",
          "title": {
            "expression": "$.full_name"
          },
          "description": {
            "expression": "$.description"
          },
          "dateTime": {
            "expression": "$.updated_at",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "$.html_url"
          },
          "extra": {
            "star": {
              "expression": "$.stargazers_count"
            },
            "language": {
              "expression": "$.language"
            },
            "license": {
              "expression": "$.license.name"
            }
          }
        },
        "next": {
          "script": "let result = /(.*page=)(\\d+)$/g.exec(params.url)\nif (result) return result[1] + (parseInt(result[2]) + 1)\nreturn ''\n"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "https://api.github.com/search/repositories?q={query}&per_page=20&page=1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#star{${i.star}}#language{${i.language}}#license{${i.license}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Github",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "19880471-f92d-4d14-9705-45c9e8ded084",
    "name": "Gitee",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAV1BMVEUAAADHHCLHHSDHHCLGHCLHHSLHHCHHHCLFHCLEHR3IISHHHSPGExn////zycrrqKvxwcPts7X109TuuLrgeX3++Pj88fHih4vaaG3XV1zMKzH23N7TSlDWjIfuAAAAC3RSTlMA1Sq85ZSIdFkaD0/9yi8AAAEJSURBVDjLhZNZtoMgDEATEBRRtHVq3+v+11kmmco53C8hFwmQQEQMjKKGskHAL4SjDCAnkDP2nczo+jFbTuUPlCRxlBWQlPEpIxojvcMywYyoy6P3E+9lVZHLGL3doLNxuRxzylNqoTObcLd+ibEoSA4g0ApvPXdsS2S3KaGAIfzgfOWnsAzAXAbrPG9TRWBAnaDmedGT8aj+gwKmwrSvN5dzsRBUcoqGoOrCrjSrOqJQJunPFAQKLBECWxAYDBXhddpbcRcl8BbO7eFYzbPtLgUBwL2Q8/9nBW6f2wjP4i0/Nt4RXzDTdKmEx+7Wyz6UXFFufkjHWLS1l0TSLPt247Rbr928zfb/AlLFJZVTWP9nAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://gitee.com",
    "author": "lanyuanxiaoyao",
    "description": "Gitee.com 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 500 万的开发者选择 Gitee。",
    "parser": "JSON",
    "rules": {
      "https://gitee\\.com/api/v5/search/repositories\\?q=.+?&per_page=20&page=\\d+": {
        "list": {
          "expression": "$",
          "title": {
            "expression": "$.human_name"
          },
          "description": {
            "expression": "$.description"
          },
          "dateTime": {
            "expression": "$.updated_at",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "$.html_url"
          },
          "extra": {
            "star": {
              "expression": "$.stargazers_count"
            },
            "language": {
              "expression": "$.language"
            },
            "license": {
              "expression": "$.license"
            }
          }
        },
        "next": {
          "script": "let result = /(.*page=)(\\d+)$/g.exec(params.url)\nif (result) return result[1] + (parseInt(result[2]) + 1)\nreturn ''\n"
        },
        "options": [
          "OPEN_DIRECTLY"
        ]
      }
    },
    "search": "{home}/api/v5/search/repositories?q={query}&per_page=20&page=1",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#star{${i.star}}#language{${i.language}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Gitee,码云",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "de83842d-4d2f-485c-be5a-02ad2a443664",
    "name": "Docker Hub",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABNVBMVEUAAAAAWJ0EnOkAsP4Ak9wBitMDqPQBqfQjV3QKd7wCqPUCidIBVJgCitQDj9kCktsDqvgDjdYFpO8hpuZzzvgBUpcCidMBjdgDqfUCn+0JicoBaK53z/cBTpMzS1cArfwBV50GqPMEqPA5QEUDjtc3REgEqPMAV5kAbboBbLFxw+gBsP8BXqMBYaYOltY3REpcx/o/rOQfa5FYwPI5QUQsc5hHptMAVplOvfE9vfsAT5UAiNEAidUAqfYBVJkAjtoBgswBaK8BXKEArf0JouQCdr4BT5MeY4kagK0lWHMbmNsadqQacJ0jXXuL3P4Rk8sCfMQBZawTZ5UcbJSA2P1btuh7vuIsn94Lnd0QmNQTjtKfv9AWibsBbrW4raYaWXpGVFqFz/BNlrllh5RQbHdIXmgqS131KNMHAAAAO3RSTlMAWzPlF/TrICAH9uSspI1zZlZEKvfqzr67ta+ppKOdmZmHenJhWVdPEPX07+fEsK+rpKGTiYR8amFCOuObaM0AAAF+SURBVDjL3ZJXcsIwEEBlmxogEEgv9JLeuxqysU0PHQKhpN7/CJHxMIRJwn/yPlar0dsdaUfgH2JZdbmW5gpWhOLzhF0XQr90uHHvbHk8m3tVJoAxfv+s4CaEIZSWNWIKdpvNPiOEicYohVxIAYMIxhEwwZkShCPG+qqqMsbCgnAPwDrGG2IyaXZxrBCiUqoSIkOKGCHusWCzYRw1775CNBUhVdNIGqGqRnYA8GGDBdF4u108lOUKpRVZrkJK+7K8ZQn4FjBWDnyAE5IkzDeKgo3FLJQkRZFC0QAwOH4qPGQes9lOJmNkPOWhk81uOhyxhIML56WcXtdzpXqxNszpxaLOQ6FeKgVjlyfBBBe8EEEIEYLpfJ6HNBwHuOGcTEG0QjSm3eu1zZTbVnE6pjVEObDSHAyavNTEC6b4C7WaPvzIdVut7uR8EXzlajR6f3t94UOans9yvf9cLjfyk/6r37/E3elyo7ychxzrmtcCfiBwe7G9feZZjItO8Pf4BLqaVFDwhRsjAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://hub.docker.com",
    "author": "lanyuanxiaoyao",
    "description": "Docker Hub is the world's easiest way to create, manage, and deliver your teams' container applications.",
    "parser": "JSON",
    "headers": {
      "Search-Version": "v3",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
    },
    "rules": {
      "https://(store|hub)\\.docker\\.com/api/content/v1/products/search/\\?.*q=.+": {
        "list": {
          "expression": "$.summaries",
          "title": {
            "expression": "$.name"
          },
          "description": {
            "expression": "$.short_description"
          },
          "avatar": {
            "expression": "$.logo_url.small",
            "script": "return text === '' ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAOVBMVEUAAAC2ub2IjpJWYGe0uLtkbXOQnJ21urymq6yXnaKHj5Klqq65vLxXY2i3ub5tdnpXYmeGjpOIjZNaR/7aAAAAE3RSTlMATU1NRT0KOhg/OzkrJiISNTAmrZQjMwAAANpJREFUSMft0dESgiAQRmEQBFTS6v0ftimcGDuybPf+99+4R8z5ks/mr4VorQWSQZlflSLvQI1Wbw/zqQOSt1hMEigRREGu1qOQrbgMkb0I+EyrDPjHE0APoVra8iHDov/K6AoZhkUnZud28l7sg2l0BzJMvnuTq6SMSQSVfJEQQVI2xUbEOUESbgJBEgBIXUSEQOp1iAAhwk0g2AIAgrmLXOSUhIee3IMp22YdGTdTlzTkZo57ggBwP0mIwJCECAxJwk2tJBU4vlIjQko6jZCTujcxCaCbNLcjXuTzEQfgzjnGAAAAAElFTkSuQmCC' : text"
          },
          "author": {
            "expression": "$.publisher.name"
          },
          "dateTime": {
            "expression": "$.updated_at",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          },
          "link": {
            "expression": "$.slug",
            "prefix": "https://hub.docker.com/r/"
          },
          "extra": {
            "star": {
              "expression": "$.star_count"
            }
          }
        },
        "prev": {
          "expression": "$.previous",
          "replace": [
            {
              "regex": "store",
              "text": "hub"
            }
          ]
        },
        "next": {
          "expression": "$.next",
          "replace": [
            {
              "regex": "store",
              "text": "hub"
            }
          ]
        }
      },
      "https://hub\\.docker\\.com/r/.+": {
        "parser": "JS",
        "text": {
          "expression": "return text",
          "title": {
            "expression": "let result = /https:\\/\\/hub\\.docker\\.com\\/r\\/(.+)$/g.exec(params.url)\nif (result) {\n    return result[1]\n}\nreturn \"\"\n"
          }
        },
        "list": {
          "expression": "let result = /https:\\/\\/hub\\.docker\\.com\\/r\\/(.+)$/g.exec(params.url)\nif (result) {\n    return [result[1]]\n}\nreturn \"\"\n",
          "title": {
            "expression": "return 'Pull'"
          },
          "content": {
            "expression": "return 'docker pull ' + text"
          }
        },
        "options": [
          "OPEN_WITHOUT_DOWNLOAD"
        ]
      }
    },
    "search": "{home}/api/content/v1/products/search/?type=image&q={query}&page=1&page_size=50",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#star{${i.star}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.avatar}",
      "SEARCH_LITE_KEYS": "Docker Hub",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "651c444e-1c66-457c-895d-2eea27c9a306",
    "name": "PyPI",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAAbFBMVEUAAADl4+Dr6+vh4d7h4d/e3dvk5OTv7+7i4uHc29rf397d3dzZ2djPz8/r6+fm5ePj4+Pa2trS0tLFxcXp6eXr6+nm5ubh4d729vbp6ejc29rZ2djW1tbV1dXT09LR0dHv7uv////39/T7+/ue4yJnAAAAIHRSTlMA8uLi7Ons88eUtKSGGvz0vHsxC/jt1tH53t1qYE5GJxgpHkQAAAC9SURBVCjP7ZNJEoMgFAXVMKkIzlMSw3D/OwYrhQQK1tmkt91Vf/Nf5tFQspR9lmC4V0gZMCmbiH7Ws7qY2m7wbF8uQvls1ePrMFYx5vowmraTSoJJnUEIRcozgFB2E4JDELECICFlYYITFDYIYGmwgYEByK3lYNJSusAyQsiUGgFSxniBg0O0OusCR67lP/hVQMmYDnDbfV6axYJ1Ll9uFHsQ6K0+wlmBK9CFHYVH01X5GWB/VsHCdkL9Yb4BFDxZEFKRVEkAAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "https://pypi.org",
    "author": "lanyuanxiaoyao",
    "description": "The Python Package Index (PyPI) is a repository of software for the Python programming language.",
    "parser": "CSS",
    "rules": {
      "https://pypi\\.org/search/\\?q=.+": {
        "list": {
          "expression": "#content ul.unstyled[aria-label] > li",
          "title": {
            "expression": "a.package-snippet h3 span.package-snippet__name"
          },
          "description": {
            "expression": "a.package-snippet p.package-snippet__description"
          },
          "dateTime": {
            "expression": "a.package-snippet h3 span.package-snippet__released time",
            "attribute": "datetime",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
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
        "next": {
          "expression": "#content .button-group--pagination > a:contains(Next)",
          "attribute": "href",
          "prefix": "{home}"
        }
      },
      "https://pypi\\.org/project/.+": {
        "text": {
          "expression": "#content",
          "title": {
            "expression": ".banner h1.package-header__name"
          },
          "description": {
            "expression": ".site-container p.package-description__summary"
          },
          "dateTime": {
            "expression": ".banner .package-header__date time",
            "attribute": "datetime",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
          }
        },
        "list": {
          "expression": "#content .banner",
          "title": {
            "script": "return 'Install'"
          },
          "content": {
            "expression": "#pip-command"
          }
        }
      }
    },
    "search": "{home}/search/?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "PyPI,Python",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "2ebf794a-fb1c-4f55-9737-0db9da3878fe",
    "name": "Ruby Gems",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEUAAADpOSPqPSvvPSrxPSrxPCv1Py3wPSrtPSjzPS3zPS3sOyvzPiztPSzvPCruPCzuOyrtOSjvPCnxPizuPCvzPizWG0+fAAAAFXRSTlMANQeu2JHvfRLI4CSH0G5NYFhC6pwzKjXKAAAA00lEQVQ4y4WT6Q6EMAiELT2sut7O+7/qri1ZAtF0/jTNfBwJ0Gk57133rimewBmnFzsvAUgJCEt+sGkfAAzrWp6drO98Asb+F5r7EUjemeIJSHEyPyleYg4JOEo+boVq1U1Vpa12RHf1uRZX4lZmdwOhvEY1MjDga9b+r60k9AqgCIgu0oD4QmiALsAQWQFHgtWuM3ysH0kBQoivACHE1wAT4luACfEtwIT4FmCCfQvMTojqy7Bk3ExE0uO2C0OkF6axcq2lba99+3Dap9c+3ub5fwEurRr2+bwLhwAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://rubygems.org",
    "author": "lanyuanxiaoyao",
    "description": "RubyGems.org 是 Ruby 社区的 Gem 托管服务。让你能便捷、快速的发布、管理你的 Gem 以及安装它们。提供 API 查阅可用 Gem 的详细资料。",
    "parser": "XPATH",
    "rules": {
      "https://rubygems\\.org/search\\?.*query=.+": {
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
            "expression": "./@href",
            "prefix": "{home}"
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
        "next": {
          "expression": "//main[@class='main--interior']//nav[@class='pagination']/span[@class='next']/a/@href",
          "prefix": "{home}"
        }
      },
      "https://rubygems\\.org/gems/.+": {
        "text": {
          "expression": "//main[@class='main--interior']",
          "title": {
            "expression": "//h1[@class='t-display page__heading']/text()"
          }
        },
        "list": {
          "expression": "//main[@class='main--interior']//div[@class='gem__aside l-col--r--pad']//input[@class='gem__code']",
          "content": {
            "expression": "./@value"
          }
        }
      }
    },
    "search": "{home}/search?query={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#star{${i.star}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "RubyGems",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "9b429345-b2a3-4530-b726-d3395b2221a4",
    "name": "pub",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAACVZVAxf8AVZkCU5U/x/9AxP8BVpk7wv0DVZc/xf8/xP8BVphAxv8CVZs6uvJAxv8AVJg/xP9Cxv8+xPwtt/YCVJcae7sWe7sLYqQ3sOgwn9sbf70zqukcgL4AV5sqt/k+xP8Vhsgquvwwod0Xf79Cyf/u4DU6AAAAH3RSTlMAn6TqHrAKsjsw59WLUTsY9tWWLCHWRznVsrGvrnBVOM3GuQAAAMJJREFUOMt908sWgiAUheGDKKaZppV2Byp6/0cMBq2tCPzT8609O7RM7Ibs0RHyz8Vea10ck2cnuuQZG975O8vfmG4fr+tCiPtL+l1yQqNRa1FCCGZUUozcqHdCCCaNSomWW5ASTFqQEBV3ICYaokY6EBPMDgBAALgBAAiAEgAiugABkPcAEDNAbQ8AAeAEAASAEwAQAFacVUgA0HQKCgDaBAR3NfQXW+1VPytbTlFR4zfCoj5QSgCsBcBaDBkaOnL9ABApU/CmJVlVAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://pub.dev",
    "author": "lanyuanxiaoyao",
    "description": "Pub is the package manager for the Dart programming language, containing reusable libraries & packages for Flutter, AngularDart, and general Dart programs.",
    "parser": "CSS",
    "rules": {
      "https://pub\\.dev/packages\\?q=.+": {
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
        "next": {
          "expression": "ul.pagination > li > a[rel=next]",
          "attribute": "href",
          "prefix": "{home}"
        }
      }
    },
    "search": "{home}/packages?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#star{${i.star}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "pub,Flutter",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "3e0cc26f-a96a-4f23-ac1c-48b9b87d825b",
    "name": "pub (CN)",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAACVZVAxf8AVZkCU5U/x/9AxP8BVpk7wv0DVZc/xf8/xP8BVphAxv8CVZs6uvJAxv8AVJg/xP9Cxv8+xPwtt/YCVJcae7sWe7sLYqQ3sOgwn9sbf70zqukcgL4AV5sqt/k+xP8Vhsgquvwwod0Xf79Cyf/u4DU6AAAAH3RSTlMAn6TqHrAKsjsw59WLUTsY9tWWLCHWRznVsrGvrnBVOM3GuQAAAMJJREFUOMt908sWgiAUheGDKKaZppV2Byp6/0cMBq2tCPzT8609O7RM7Ibs0RHyz8Vea10ck2cnuuQZG975O8vfmG4fr+tCiPtL+l1yQqNRa1FCCGZUUozcqHdCCCaNSomWW5ASTFqQEBV3ICYaokY6EBPMDgBAALgBAAiAEgAiugABkPcAEDNAbQ8AAeAEAASAEwAQAFacVUgA0HQKCgDaBAR3NfQXW+1VPytbTlFR4zfCoj5QSgCsBcBaDBkaOnL9ABApU/CmJVlVAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://pub.flutter-io.cn",
    "author": "lanyuanxiaoyao",
    "description": "Pub is the package manager for the Dart programming language, containing reusable libraries & packages for Flutter, AngularDart, and general Dart programs.",
    "parser": "CSS",
    "rules": {
      "https://pub\\.flutter-io\\.cn/packages\\?q=.+": {
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
        "next": {
          "expression": "ul.pagination > li > a[rel=next]",
          "attribute": "href",
          "prefix": "{home}"
        }
      }
    },
    "search": "{home}/packages?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#star{${i.star}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "pub (CN),Flutter (CN)",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "055ae385-097a-4598-8c7b-e3d43e1f404e",
    "name": "nuget",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAAASIAASIAAR4EASIEAR4EASIAAR4IASIAASIAAR4IAR4IAR4AASIEAR4EAR4IARoIAR4EAR4IARoEASIAxcKKVAAAAFHRSTlMA8+UIlWeyWdqpTzTGI35GEog9K0J2VKkAAADrSURBVDjLfdJbtoMgDAVQQgny9HnmP9brVUuaLsr5At1LTIIxaePVDMIExJEIAGgZAIsz0wA4AKUOwDp7l9vuJRHSlpVd9O/ELYm5HQeokN/V+43wHZs+wAyQtfQlpP6FELhWtlqU9X1ABKWnsSr8gMMi3rJo4B+QCO5eRQ3CAyagXGXXoIEVQPMpVoefABSZPQZAhWgEKPIyOfsThLvDufTB1bFbhD6IMp8+4AZ26gGaGjhsA4n6X2itrqH/D7Jx/SrkvGy7ffBycZlEkEt52cJJs5GwVaP49yWbzyye9CBdNTqvfXYSPq6Hf9z/If5fMQxdAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://www.nuget.org",
    "author": "lanyuanxiaoyao",
    "description": "The NuGet Gallery is the central package repository for NuGet, the package manager for .NET.",
    "parser": "CSS",
    "rules": {
      "https://www\\.nuget\\.org/packages\\?.*q=.+": {
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
          "avatar": {
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
        "next": {
          "expression": "ul.pager > li.next > a",
          "attribute": "href",
          "prefix": "{home}"
        }
      }
    },
    "search": "{home}/packages?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#author{${i.author}}#download{${i.download}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "${i.avatar}",
      "SEARCH_LITE_KEYS": "Nuget,C#",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "e0c9c31c-14c6-4c0d-a66f-b2a06e8b1a82",
    "name": "crates.io",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA3lBMVEUAAAATDgaWfEaviUAEBAJhSjAQCwd5XD11VjPRmi/x1Zt6XSUAAADWtnsgGxESDgmphl7RnzzbpDvoul/Po05CMiBsVDogGBCSdUFHNiKffkFnUi8cFg7btm/erEyBYz/jsVRpTS2egF3lumXJn03sxXrluWWlh1VhTSftzozmqzfntFHQlCLGjBnnr0G/hBDpwG/WnzK3fQvnumTIlC7hrEa+jSyudxDqxHzKmkOEYz6Sayrpx4WkgFF4VS6gbg7is1eXc0jNmTLdoi7XnCindA/RqFu9hx+/mW67k0Y3YE+eAAAAKnRSTlMAERF7L+Jp/vHueHdQQj8i/erq2dC2m5OLf3lhXOzs3M7KvriqlmJgQipZZ0iGAAABW0lEQVQ4y73O2XaCMBSF4TqA2jq1jlU7zyeSQEiggIqz7fu/UE+wdUHBu67u2/9L1jn599Ueb5/zR2v+pU2I+X5VOEZaKtsE9/SWCS5gorKt0EMtC6wIIFDEJKSVJpW16qapyMSkpylwTg5H4CALTMyoUQq4NKisTIkZWwQGv/sr3rCysFl7cJaouWGbjNUAhJMB+td4n4iA5ShASQLkYY73GTgEQiAgtizEwdiyJTEYCgCBR0oJkARja22J3ZYxwEkCsEwC9TnO2zGg8zlQcISVAIx9EyGBSKB4aQLkOFfEdfFIHAKxhEGs113ucGZsQm7sAZ4A/RgYlYJPzo0w3PwA8Kb3h4w/aL4WuIxvQhZV6i1mi27sh1xRr+qlwOUcASHe1J/d1THERKNYLfs+EoDtdPZxM9yHuCmOOr2eFqjX5ctcqkekqndKzYXKx9bQtWa3kRHi35z89b4AF85HRHuuk/8AAAAASUVORK5CYII=",
    "target": "SEARCH",
    "home": "https://crates.io",
    "author": "lanyuanxiaoyao",
    "description": "cargo is the package manager and crate host for rust",
    "parser": "JSON",
    "rules": {
      "https://crates\\.io/api/v1/crates\\?.*q=.+": {
        "list": {
          "expression": "$.crates",
          "title": {
            "expression": "$.name"
          },
          "description": {
            "expression": "$.description"
          },
          "dateTime": {
            "expression": "$.updated_at",
            "script": "if (!text || text === '') return text\nlet date = /^\\d+$/.test(text) ? new Date(parseInt(text) < 10000000000 ? parseInt(text) * 1000 : parseInt(text)) : new Date(text)\nif (date.getFullYear()) {\n    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()\n}\nreturn text"
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
        "next": {
          "expression": "$.meta.next_page",
          "script": "if (text === null || text === '') return ''\nreturn 'https://crates.io/api/v1/crates' + text"
        }
      }
    },
    "search": "{home}/api/v1/crates?page=1&per_page=10&q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}#download{${i.download}}#datetime{${i.datetime}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Cargo,Rust",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "23934197-14c3-4ad9-879f-ca27527711b2",
    "name": "LuaRocks",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEUAAAAsP2QsP2MtP2MtP2QvQGEsPmQsPmEvP2IuQGItP2ItP2MrP2YtP2UtP2UsQGYrP2YsP2QrPmYtP2QtQGQsP2UsQGc2xHfCAAAAFnRSTlMAaXWBNx5ZKxJETIrsuKzT9qLfmpHGaHlidwAAAYBJREFUOMt10tm2gyAMBVCSMCODE///qTcgSr1dzUMrPduQKuJd1kEi8ausBASJAezP1HEExtO3kJqwpaIBoUHh7j9TBK/uFUghTKy1uNHaI3I6yxsGS631uNYUn9TqI8U1SL7KDIB78zWSVNd2eqtXJSVcLvwpS9UCHFBOnB8jXjFmKawyaF1roykhbVqEkTcbNtOGIaXRCh1qRDKuDEBtmC32f8ex4C1ijeD2OqpHubaxTMIGjAWwOuRbBGWpFuT2gBe4uuEjlvNcqT8cCQ/ACEMsOR4Aob2OF6ipiZL5XsD1LPkf0JUFJb4X97j1Wd/ALbWuRHBw2os+gdHoVt6d8KyjinwAIvSBl1qIlhsEbx6wXucEP8HpZDADWBwHg5Zwg0SLViwYNEH+EhJCB1vg70PIoAz0QNHo4QD2PXh5jtNC0MEUXl/rUJbQf08kppiA16rvbXYUU0xwT0TtfL/EBEbPoz7FDZSmO30L6Rgoj6jNO7oFBnA/0iH29Rlr1h++3xfconb+cQAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://luarocks.org",
    "author": "lanyuanxiaoyao",
    "description": "A website for submitting and distributing Lua rocks",
    "parser": "CSS",
    "rules": {
      "https://luarocks\\.org/search\\?q=.+": {
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
        }
      }
    },
    "search": "{home}/search?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#author{${i.author}}#download{${i.download}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "LuaRocks",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "97081e97-54e1-49ad-8558-4adce0f99f9f",
    "name": "Packagist",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABUFBMVEUAAAAAAACTl6QGBQYCAgMAAAAJCQoGBAUEAgKGipVtcXt6f4k1FgAvMDQvMDQEBAIAAACKiYpeYGpXWmEzNTk2OD0SEhIUFBeAf4RWWF9SU1pNTlNiZW0YCQE+QkY5FwEVFBUKBgM8PkIkJSgGAgE7Oz0qEACAg40MAAAcHSAkDQBWWV9wcHFcXF5QUlLd5fjl7P7r8v/Z4fHHzt5ucnz1/f/w+P+iqLWLj5hfYWmsssCYnam4vs2nrbp2eYTR2Oi+xNKxt8Weoq6AhI/N0+KNkp7Dydl6f4grLjPT2+5maHBPHAFMTlNHRkxgKATX3+u1uca3t7qEiZSVlJN4d3lrbG9hYWJTVl1+NgBaIQAAAADq6ena2djOysiOqraqp6eRjo4ASXwEPmI9PkIDIjgqJypgPCQFFiFSMBwXFxkOBwV1MQBFGACIs8dIeJUmaI9cN796AAAAL3RSTlMACf5jQDFZRyrz7+vDrpgfFP72xb22gXj78OTc187MtbKhmoyHg/zf2cXCs6idhU8egLYAAAJOSURBVDjLdZNVexpBFIZ3FwkEiLtLU2/njKz7Lm5xgbhr2/9/V3aheZIC3+33zhzn3ik6MTc/NcL11UAKAda+xHp50ekYH/+EAQA7qbWBrqeZpDm3ZOUxQgjA0AanNr5lIq92IjPmqyoRs8xs+XbBopKhm3Q22vH5CV+3tUPqaLJMEGRdoFmjdqiamQ4wPKjZorGj7J6em4AQEG97W7VAFpR4J0IKEHhs9OTX2Z4tAdbZ2emFIoHhrreBWFJCILCZ35dX157pEnZz+edCAYTtoU6FSYyA6erNfbNYsMpqsXl/VayZGMg/YAaDxojz2LzeAkCUPT0WBa1KMVlrAxFdIjkq6pbh5CkBDL66JWFfxjDOh0WsUEx9sFVXzskOCTrlsrzoyYCFsBPxWQBk5cq3Va/loZZAVH1UNgCcnwGwYWEERnH3wJJadsCAVt1XPYyAfg9TGBQlbO+fjLrBJLKyBqJ/vlt1CAD9EbZhUk7mN/eO9/QAKLkWy+cODnKKgkRnOqxiJBGdHJ8/3lfas9QPa0VGJWilvPC6GTwXHy34CIWzIqoiSZCVl+Jvd4tfUQTmlYI/EAXssPXYMPdOsRTUgiwCBG/tTPDcf+LHRSHXBrCp5Ie4Lg0RUnYlQIBNa3M70mNtx3C2IFBS0n0iLiS4bkXG8OZOQVAUW9Smu+2wpxIuUcMzyCTP9dSqLoqeatrlD739xOdbrcQKiD197f1D/GOjfvfwcFepLA73zuHluVFpVF7qlT4hBqYW689HR0f11b4HHkkvL6fT6be3+xe7Y35+ui8dGwAAAABJRU5ErkJggg==",
    "target": "SEARCH",
    "home": "https://packagist.org",
    "author": "lanyuanxiaoyao",
    "description": "The PHP Package Repository.",
    "parser": "JSON",
    "rules": {
      "https://packagist\\.org/search\\.json\\?q=.+": {
        "list": {
          "expression": "$.results",
          "title": {
            "expression": "$.name"
          },
          "description": {
            "expression": "$.description"
          },
          "link": {
            "expression": "$.url"
          },
          "extra": {
            "download": {
              "expression": "$.downloads"
            },
            "star": {
              "expression": "$.favers"
            }
          }
        },
        "next": {
          "expression": "$.next"
        }
      }
    },
    "search": "{home}/search.json?q={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#star{${i.star}}#download{${i.download}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Packagist,PHP",
      "TEST_SEARCH_KEY": "kafka"
    }
  },
  {
    "code": "407e4687-094e-4ce4-86ef-bb30e2cf6612",
    "name": "Gradle Plugins",
    "category": "开发",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAAACMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDoCMDodH6xHAAAAEnRSTlMA8R+Vx3UNueOxhWZKLtalOVbXsm+HAAAA20lEQVQ4y82SSxLDIAxDg43DPyS+/2Eb8xnadLyPViA9xIxhe7Myhpp2PUcWWVCBapDcTagdO/QaWlZJGFzAdC4LPB/zAFnDQ5b26VrmsTr4WyZCLzUTyPyQFwTsvXg2rBbr5FJseUyzoplcyzGx0nI2ENo25wbY0w0gSp6kqchxuCRf6nOCZuZcL0B+5LCmbugk/5ePaSmqfV5Jy+N8NiUP29ChAGUCRiuYUgrSLxAo9qsMErbO9StkS/JeTnLxT8/s12e8d7Y/fiNF9AOQc1dfoQvdhuBw316kDwulG/m5iOegAAAAAElFTkSuQmCC",
    "target": "SEARCH",
    "home": "https://plugins.gradle.org",
    "author": "lanyuanxiaoyao",
    "description": "Search Gradle plugins.",
    "parser": "CSS",
    "rules": {
      "https://plugins\\.gradle\\.org/search\\?term=.+": {
        "list": {
          "expression": "#search-results > tbody > tr",
          "title": {
            "expression": ".name > h3.plugin-id > a"
          },
          "description": {
            "expression": ".name > h3.plugin-id + p"
          },
          "dateTime": {
            "expression": ".version > .date"
          },
          "link": {
            "expression": ".name > h3.plugin-id > a",
            "attribute": "href",
            "prefix": "{home}"
          },
          "extra": {
            "version": {
              "expression": ".version > .latest-version"
            }
          }
        },
        "prev": {
          "expression": ".page-link a:contains(Previous)",
          "attribute": "href",
          "prefix": "{home}"
        },
        "next": {
          "expression": ".page-link a:contains(Next)",
          "attribute": "href",
          "prefix": "{home}"
        }
      },
      "https://plugins\\.gradle\\.org/plugin/.+": {
        "text": {
          "expression": ".plugin-detail > .detail",
          "title": {
            "expression": "h1"
          },
          "description": {
            "expression": ".plugin-info p.description-text"
          },
          "author": {
            "expression": ".plugin-owner p > a",
            "script": "if (text) return text.trim()\nreturn \"\""
          }
        },
        "list": {
          "expression": ".tabpanel .tab-content .tab-pane",
          "title": {
            "expression": "pre:eq(0)",
            "attribute": "class"
          },
          "content": {
            "expression": "pre:eq(0) > code"
          }
        }
      }
    },
    "search": "{home}/search?term={query}",
    "properties": {
      "SEARCH_LITE_SUPPORT": "true",
      "SEARCH_LITE_TITLE_TEMPLATE": "#title{${i.title}}#version{${i.version}}",
      "SEARCH_LITE_DESC_TEMPLATE": "#description{${i.description}}#link{${i.link}}",
      "SEARCH_LITE_IMAGE_TEMPLATE": "",
      "SEARCH_LITE_KEYS": "Gradle",
      "TEST_SEARCH_KEY": "kafka"
    }
  }
]
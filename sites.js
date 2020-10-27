module.exports = [
  {
    'code': '21288140-5491-4aac-a827-e084bfa70ae2',
    'name': 'npm',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAY1BMVEUAAADVAADVAADVAADVAADVAADVAADVAADVAADVAADVAAD////aHR364uLqgIDXCgrkWVn2yMjeNzf+9fXwpqb3y8vshYXdLS351dX++vr1wMDyq6viSkrvnJz75ubocXHlZGTHPyU9AAAACnRSTlMAgFkJyOMcp2ZYyCQi6gAAAW5JREFUeNrt2kl2gkAUQFESYxoU0Rhs0+1/lRk4sDxSAURPSnPvkO+n6s0ckAEAAAAAAAAAAAAAAJzX3Y3I8hshJDVCUiMkNUJSIyQ1ByHluK3Ttso8MO6tjIZ8fRbtrJbB1nvR1nuwtVwVPX1+RUMmo5bmr8HWdNTWNNh6nY/6mggRIkSIECFC/m/IdrL3sW4bsgm2FvO2Iatwq4gOuobET28OCQ8ZF21D3vLALDq4rpByFhsIESJEiBAhQoQIESJEiBAhfxCyetvbzq845JAQIUKECBEiJMmQ9e7Z+gwh69GxbXjfKjpoDPmuZscOvoTZ7J5tlk0hxaz5VUeqRXjfj+r3QfUdDcnLGrU/yJtCFnXv6npW8yXCkH7if+MvT0gtIb0IiRPSi5A4Ib3ccsj9KZ6H+d54WmOZ7w2fX+4vLjvJ4CHvYPiYpUpIaoSkRkhqhKRGSGoGTw8dPKUbkg06yQAAAAAAAAAAAAC4Lj/qjG1Gl7QKXwAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://www.npmjs.com',
    'author': 'lanyuanxiaoyao',
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
        }
      }
    },
    'search': '{home}/search?q={query}'
  },
  {
    'code': '1f5443c7-9b0a-43e8-9420-83b7d49e16eb',
    'name': 'Maven',
    'category': '开发',
    'icon': 'data:image/png;base64,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',
    'target': 'SEARCH',
    'home': 'https://mvnrepository.com',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/search?q={query}'
  },
  {
    'code': 'a2387be5-1b9d-41df-b28a-246c972e492f',
    'name': 'Maven (Sonatype)',
    'category': '开发',
    'icon': 'data:image/png;base64,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',
    'target': 'SEARCH',
    'home': 'https://search.maven.org',
    'author': 'lanyuanxiaoyao',
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
            'script': 'let date = new Date(parseInt(text))\nif (date.getFullYear()) {\n    return (date.getFullYear() + \'-\' + (date.getMonth() + 1) + \'-\' + date.getDate() + \' \' + date.getHours() + \':\' + date.getMinutes() + \':\' + date.getSeconds())\n}\nreturn text'
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
    'search': '{home}/solrsearch/select?q={query}&start=0&rows=20'
  },
  {
    'code': '3a3d7617-80ef-44f7-a369-9032f13aa9a0',
    'name': 'Github',
    'category': '开发',
    'icon': 'data:image/png;base64,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',
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
            'expression': '$.updated_at'
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
    'search': 'https://api.github.com/search/repositories?q={query}'
  },
  {
    'code': '19880471-f92d-4d14-9705-45c9e8ded084',
    'name': 'Gitee',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAolBMVEUAAADHHSPHHCLHHCPHHSPHHCLHHSLIHCLHHSHHHSPHHSPHHSLHHSPHHCLHHSLHHSPGHCTHHCPHHCTHHSLGHCbHHSPHHSLHHCbHHSP////FFBvEDxbKKC300tPNMzn54uP55+fRRUr88fHHGiDQP0XDCA777u722NjJICbLLTPxx8jvvsDnmp3gf4PZZGj99fbzzM7edXn66erqp6naam7VVls9tXdXAAAAGHRSTlMA4DgK1iHCYVXpzveqlZ6HfUY/uY6yKhYNZnXTAAACuklEQVRYw7WYiXbqIBBAScDExN1uE9BoG9PEXav9/197S/NEkCWY5/2AewaGGWCQAeyHg24QE88jcdAdhD5Gd9AK+3EHBDqkH7YcNaOeB0q83qi+BbefwMBTu+YS2wFYCNrIzusz1OD51eYZRlCLaGhOVRdq0zUkcEzAATLWefwInIh8jccDRzy/qYebmnk40egmXwTuwpNz9wI3ZNQALxgsnkOQoTnLyokOYPCPobCwjhQMy5fnzfow1bH+vpiiN8TpSdGwdFskRlZAL3XHPW3JQ7fzxEIx4dt06QU4FjyMbhIr0ytRjJUBUcY9FpEcUiDu89YmkZcGQVXz4sLSzzqiaUmBM1akLL8K6GumozjSDDi9v2coEgJaFpcM71ItE8ED0Z9CCcWAzknFCXKm5cfDCX+L+uJWby4njkF9+ghhIuQ+W1eiXQ4OEIz8jiAqD9U+p8xF1PGlLaKT6Y9oZhXJmzSwiDKq3GxZNEBdsyijS3X65VsOBUZRRo/FXEGxk1YeoNgoostZouRQijHFiBhFLP0yFS2HIM8impvaCMf7byKHpRlFxGGzjaK4Rvo/r9jrRIH9QKaLa04aUddeIuyafLFXiwaORcsWH2pRKLYRu+idRyS1EUxcRPlOXSIE81YriZZM5SlXlWhNqdRqUagUzZeK1p+Xp6RiwzK5+bcilSjZLN5v2FXx3LT0qMUvSFmU7D9k9tri7/ErWxDZ2Yp3TPV0D5xFn2JOA/6scRQdxZS2+UPLTbQVb5EY86cfFxVWzezMqCogIXEUVraH0TGVPM/K5zH7Xk+1HNan8yRnIBC9qR/sDCZayozlFCSGui8ENZGBzBN+0KcGjaMG36zmH7/xI7+izT/HnJHnFM/IMM94qe95MU418NCrGc4Q2wZQ9YYsrYePfdwHUc1HY+7DOnLHsK75+PAXhJOOgdoW2OEAAAAASUVORK5CYII=',
    'target': 'SEARCH',
    'home': 'https://gitee.com',
    'author': 'lanyuanxiaoyao',
    'parser': 'CSS',
    'rules': {
      'https://search\\.gitee\\.com\\?type=repository&q=.+': {
        'list': {
          'expression': '#hits-list .item',
          'title': {
            'expression': '.header .title a'
          },
          'description': {
            'expression': '.desc'
          },
          'dateTime': {
            'expression': '.attr span.tag:contains(更新)',
            'replace': [
              {
                'regex': '更新于 ',
                'text': ''
              }
            ]
          },
          'link': {
            'expression': '.header .title a',
            'attribute': 'href'
          },
          'extra': {
            'star': {
              'expression': '.attr span.icon-star + em'
            },
            'language': {
              'expression': '.attr span.lang'
            }
          }
        }
      }
    },
    'search': 'https://search.gitee.com?type=repository&q={query}'
  },
  {
    'code': 'de83842d-4d2f-485c-be5a-02ad2a443664',
    'name': 'Docker Hub',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAABNVBMVEUAAAAMoO8Hp/EDqfQNqvUDqfQCktsApvEDqfUCkNs2R08CqvQCqfQAl+ELj9cDqfQCktwDqvQ4sO0EqPENmeQApe5dwPECj9k3R04DqvQDld8El+ADpPASq/MxSE5Fan1Puu5Cte0Dk94DqvQDk90DqfQEqfQEld0DlOA3Rk8EqfQ6hqw6suo5i7Erqeg2SE4tjbw1R00CiNEDqfQBV5s3R0+B1Pr///8CitQxTl6t2fFNW2Ly+f0Fpu4eltciaowoYHsHoeYedJsuWGw2SVPu9/x+0/lxzPYhcJMlZ4YzTFhsyfXHy80RjcU9VmE4TVdkxPI7q+Ynm9oHgcMWhbgPeLEWcqQtW3E5UFt40PcJnuBzutsRl9kPkcxknrkZfq0ce6VReIt8yu4zpeFaiqA2a4ZEX21dyzWMAAAAMnRSTlMABg70NOjTHVLdvX5tPPvdvq6jZDIW+Orixpl4RSoP/u7OybasoouKYE3YwrWtfHVnK2+JdRYAAAKeSURBVGje7dRnU+JAHMfxfxIgUkWKvZ79+rG3QigmFCkqYu/12vt/CQeOKYskC7KZuZnbzxMGZvh9SQM4juM47n+TMsAzHuABHgD4twPfDeas+Rn0FAy6GwgiFHQzMILaRtwLyFInIMmuBcbQszG3Ah70wuNSYFUPrLoTECQ94HUnMIcMMtuAeY8SF0EQB5qlp+KWgBBf9rZfR8dCMqMAeQQhL9K9ZxeYRb0E2QXEngEPuwBModemgGEgjl6bZRkQvKjbMrALmPeRyZtkGwh173uAVUBMekbWRhFpdA4sBMSYtCaCVZLdsleS2v8RIpBEZoEQmFwJyEAgrkGh3igiQ1F9RFaFklpAVqVTRHhUi5ZndzMwTxSk4l1JwXhXbV53xm5PGxWMLx6u9VqzvouxUrrTG8WHMsZas2DkTy/a364349AxvxnAePLLN0sDm3YVxfKmrGla2fygUtZUtaEpxttGvVSqN8oV/GIyEAhMYoMZcAnofCkmwmBnmsm+D2zNstjPJMBehkHgHTjwp+xtZ/P57DF1P5MEB+sO+zvptp1tWmAGnIj25yib3s/l9tNZyr4fbFBv1Hw6h3EunaecIBmchTOUwI5zYANo/EOdommgSnQfwsn57wPlLJU67uMiR6EP0Zfdk7Ozc1W7uMQdin6bOu77oB/CwmWrVcEmPUDlE6AvXy9xt4PzIZ9g0qcWMf50f1ON0B/gFejfhwrGrYM/C0+/7m9+bHUcUfdnYBCx6hapRvkXnEjAYD7vmeP0Q8hMw8AS42Sgum0/75PhLWLkQdQiNvP+MLyRuEQkare95qNhGIIQG6+ahaufr378jADDmvu4WDMSh8fm+ER0QwBGPLGlxfHDvdpVdevwKBKZ8K2shwXgOI7juLf4C9igctnDx0w2AAAAAElFTkSuQmCC',
    'target': 'SEARCH',
    'home': 'https://hub.docker.com',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/api/content/v1/products/search?q={query}&type=image&page_size=50'
  },
  {
    'code': '651c444e-1c66-457c-895d-2eea27c9a306',
    'name': 'PyPI',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAAllBMVEUAAADl4+Dr6+vh4d7e3dvg4N7b2tnx8fDu7uzm5ePh4eDi4uDj4+Pa2trS0tLFxcXp6eXi4uHr6+nk5OTh4d7f397b29nb29rOzs7s7Ojq6ub29vbx8fHn5+bp6ejc29rk5OPi4uLe3dzf39/V1dTZ2djW1tbV1dXT09LQ0NDq6ure3t7R0dHv7ur////39/T7+/v19fL1AviLAAAALXRSTlMA8uLi6e6U+/X06cW8ezEL+O/t6dGxo4MY/fv57ene3drJt6SKamBORh3NlCe9Dv9YAAAAz0lEQVQoz+2TyRKCMBAFUcMOyqLsO6igwpD//zlDpcBKhLMX+zjdx3kCQ+DrZ+kobHC6VikGAEWXuhV9rwtiKdgxzBNjj9JZBgacXW6z7XxdgRVw4bVEN4YDmyilJyCE5C0fiakrHPpeRSL+trLoysOwJ8GEzTXY1pSBMAeEUETqbFXNGYlkA4KFUAhgaTZQyQYUFbkxNWzwYTcO/+BXQaNb20FimPSlo7Ugfjxfyyi8nAvGrG65WV20JRj3dBQcgVntpiBhZ8UtLC/9gDm9ATF7e9CWTWS4AAAAAElFTkSuQmCC',
    'target': 'SEARCH',
    'home': 'https://pypi.org',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/search/?q={query}'
  },
  {
    'code': '2ebf794a-fb1c-4f55-9737-0db9da3878fe',
    'name': 'Ruby Gems',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAADqNijvPSzkOR7uPSzuPSzuPizuPCjvPCvuPSvuPSzuPSzpOiXtPCrsPSvrOyjuPSvuPSrvPCvtPCvrOy3tOC3vPSzuPCzpOSrtPizvPiz8QjD0QC73QTA7aGeCAAAAGnRSTlMABPwQ4PbxJovnzaUYR0AysG1Okzcsu3EgYsCkxWQAAAG5SURBVEjHpZaLkoIwDEVLoAgoK4ogpu3//+b2YbewSQcdMspoe09zw9AUQaMohLjO89X/IsHKLyMoBePlE6Swn2erUEpU7dP9213+3iktXQapVXcnSYj5wVipUfOsjMXMQEoh5t3K1UuIV+UyxVJ487fWalDJpnQjZSMVWrq9ubm8eX2e3H83Mp01LSWZ195818dJd+07X4reluLMN+DTVzF9sll5m9Bc0oQ3jxLc6DZ38V4LJPpSfMS8Rg/ePC1uGrQJbkPaslUApDJyPwBUW1q5BSoNOj4GBYn4uFhR9QegfISluAxh5iFxBeh6cRP2u/Q/m+hP74WWWq8z1HbcDT9ag3oVqOs+zJxqJIDV1wZwE2DAEjwQ9P8CQTuCAej6IQLBAVHPEwyw1Eoi8gRexUQtjQr5DKDOJWdJNJEgesFZKhwBwOpztzXmoHoWEIkg6/NAdEX1OSDmIPockIitPg8kV1t9Hkg5kj4CdANtibU+biC6RZOrpCdbNDWBNZH0pAnQNmOvY9DTNsM3snChjSzfKr0/2irzzThgpBl/2+6/PFAOHVn7h+KRY3f/YD/y6nD85WT/9ecXqeVGuluA50EAAAAASUVORK5CYII=',
    'target': 'SEARCH',
    'home': 'https://rubygems.org',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/search?query={query}'
  },
  {
    'code': '9b429345-b2a3-4530-b726-d3395b2221a4',
    'name': 'pub',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAw1BMVEUAAAADU49AxP8DU5NBwv0/w/8CVJcBVpo+xP8AVZo/xP8AVppAxP9Cxf8/x/8/w/9AxP8BV5srtfQBVpoAV5oEVZUAU5wffcMBV5oBVpsBVpsDVJQttfMmisgAVZoAVpodhME5vfkuks4mkc5Axv9AxP80peAPaalAw/9AxP8BVptAxP9AxP8BVpo/wv8fhcBBxP9Fxf8BV5srt/cEWZxAxP8qtPQtuPcVhMY8wf4vmNQFW55Bxv8ijcsos/QhjMssuPiEcCciAAAAMnRSTlMAfYYtKfHvy2hof/LrIy3cy/vx00kZEAnKwLBzaGZZIvHu3d3c2svLyqqZj4uHWVJOFngsvswAAAFbSURBVEjHjdPrTsJAEIbhQQpSULScFQHP5+OwBbQi3v9VaadNh83XDfv+nidfssmSo6Dx9Pw+JN8OmzdxHNceAt/zozjrvu15XnTc9j5H4T4H4XWOAs+vv0tziMnll6vbgLDZ1cowsykpSe6qCCrrxYqd7YPodze/PyvjL8a8Wc5VGKlE6EAKcmG2comQBYgwZrcYjARkwniIMGJeC5gvfMTghAV4i2lUABHJDiEDClCwNkpFL7LBMhUJAqlCNDzlAujGfyps0GsBWKoAIAMKVDhBr45AhAu8sAJbOMCjBUAgCCMLgIBnnXUVLGwiAgBN9VlxowxQ2MKFPBFsAxG6gIIRiNjIQtkGABECMPmDAETIAmyAECDivLhQI1wEApp0dMGeEoGAzjq4oBsKQJS/bj1vTFs1ap+uLt6qWX2yRezoICAIBQJ/gQAFAn+BAAUCX4EAe92Dmh+U9wcqATNO/HJcaAAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://pub.dev',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/packages?q={query}'
  },
  {
    'code': '3e0cc26f-a96a-4f23-ac1c-48b9b87d825b',
    'name': 'pub (CN)',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAw1BMVEUAAAADU49AxP8DU5NBwv0/w/8CVJcBVpo+xP8AVZo/xP8AVppAxP9Cxf8/x/8/w/9AxP8BV5srtfQBVpoAV5oEVZUAU5wffcMBV5oBVpsBVpsDVJQttfMmisgAVZoAVpodhME5vfkuks4mkc5Axv9AxP80peAPaalAw/9AxP8BVptAxP9AxP8BVpo/wv8fhcBBxP9Fxf8BV5srt/cEWZxAxP8qtPQtuPcVhMY8wf4vmNQFW55Bxv8ijcsos/QhjMssuPiEcCciAAAAMnRSTlMAfYYtKfHvy2hof/LrIy3cy/vx00kZEAnKwLBzaGZZIvHu3d3c2svLyqqZj4uHWVJOFngsvswAAAFbSURBVEjHjdPrTsJAEIbhQQpSULScFQHP5+OwBbQi3v9VaadNh83XDfv+nidfssmSo6Dx9Pw+JN8OmzdxHNceAt/zozjrvu15XnTc9j5H4T4H4XWOAs+vv0tziMnll6vbgLDZ1cowsykpSe6qCCrrxYqd7YPodze/PyvjL8a8Wc5VGKlE6EAKcmG2comQBYgwZrcYjARkwniIMGJeC5gvfMTghAV4i2lUABHJDiEDClCwNkpFL7LBMhUJAqlCNDzlAujGfyps0GsBWKoAIAMKVDhBr45AhAu8sAJbOMCjBUAgCCMLgIBnnXUVLGwiAgBN9VlxowxQ2MKFPBFsAxG6gIIRiNjIQtkGABECMPmDAETIAmyAECDivLhQI1wEApp0dMGeEoGAzjq4oBsKQJS/bj1vTFs1ap+uLt6qWX2yRezoICAIBQJ/gQAFAn+BAAUCX4EAe92Dmh+U9wcqATNO/HJcaAAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://pub.flutter-io.cn',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/packages?q={query}'
  },
  {
    'code': '055ae385-097a-4598-8c7b-e3d43e1f404e',
    'name': 'nuget',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAAAASIMASIAASIAASIAASIAASIAARIUASIEASIAASIEASIEASYAASIAASIEASIAAR4AASIAAR4EASIEARYQASIAASIAASIAiiG+5AAAAF3RSTlMAHOHu2Z5mCnGTOFQlr3nQu4VJLhPHpqy+vfQAAAFkSURBVEjHjZVbloQgDAWDxCACvtvsf6dzaM6MoDCmfjvVNwGjAOCd8yDHEDIjyQXSHHFiAfnLYqQCJ1BJBZ2E+ZAKNgkrSFEh1gcFYg7qe6o0JEdtk+0L7LS1O/ArcgVcffPeGyCZSr3lf7CmUS83Jo7oTreMCQrGWDjTrvahMYkei4biFS4+uQ0jmCIg+wvXiNgyYWXm8y/u05g762gppurrwnwJB0oEfQmqy1s6PlynELKhiWUCf3aIbJ1UYJxGP1rNMuF6NIRCG7kwW3JkZ6mAdKQfh04ipDNLbCgQcIcLp9+FAXLsq4Dqtl9vwgkFZnkTVijp34TpJthSOOa3hFDuA4TKxucojDcDF8P/LxWge+r+GKI3eUDcwW4vh7pD2aH25Usj4vHR1PSbob716KHAPTdnccqA8TR/fVf/ypfgEpYu5RE8oI6bdAQVxsANwghVjDux0tfpDDTxGw0FtF2n8wMU6F17sp0+tAAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://www.nuget.org',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/packages?q={query}'
  },
  {
    'code': 'e0c9c31c-14c6-4c0d-a66f-b2a06e8b1a82',
    'name': 'crates.io',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACSVBMVEUAAAAZDgDy5K0PDQYcDg4KBgKFazishjthSjDx1Zt6XSUBAACphl7bpDvoul8XEQsAAAAcGBEJCQYAAAB2WzyMZifpuV1xVjh6WDLRmi7btm/erEzOnT3ToDzVnjN2VTHLli5hSTCBYz/Qo0vjsVTNo1JpTS2egF1INyTlumU7LB3Jn01kTTQoHhR0W0DsxXqKb0IYEg1INiGafECxkVK0jD+jfz2bfUZGNyUQCwl7ZDQAAADluWWlh1VQPSoqIRYOCwYAAADIrHwoIRJhTSfvz5PKpV/tzowtJRdOOx21lWDVv2qZmWbnrDnkqTbmqzfntlflslDmsk3prTnlsUzmrkHqrzviqTnAhRLmtFPotlLkqzzlqzrgpzflqjbdpDXUnjTMkR21ewnpxHvnwHTpv27ntFHos07jr0vpsUXOkx/JjhvGixfEiRW9gg65fgvpxoPpvmnnumTktVvquFfis1ekgVTirkjnsELkrUDmrT3iqjzfpTTYoTTdoi69jC7XnCjUmSfPliandA/oumHjuGHRqFuadUjJmkbgrEXdqUTLm0Lhq0GJZ0GAYUB6XT7bpDnMmTPIljHGkzDUnS/Fki/Bjy7LlSt4UyvMkiTRlyPPlCHIjyC9hx/HjR3DixzBhxiteha8gxOrdRCicA6weA3pyYvqxX6/mW7mu2jhuGfqt1KkfkmSb0jlr0a7k0bKmUCCXzmQbTV7WDLNmDHFkzF0VDHYnzC6ii2Qay3Tmiu/jCiUbCiYbiXGjyOyfRa4gBOdbhKdbA3DhgxBAAAATXRSTlMABAINCBYUeuB4dzH96tlnUTwsIvz89vT09Ozs6urq6uro3NLOzsq+vriuqp6amJaOjIqIgHp6eHRwZmZiYFxcXE5KRkJAPioiGhgMCgTKun0AAAIVSURBVDjLvdFFd9tAFAVgy7Zat06DZWZmZubWIovMzBQnZoYwMzOUmZl+WbVpjxQ5i256t/ebd97MCP53hNf3bD17Z9767rltOOo3rT56e57jxShiMVWhNuXyAzeEhcCS+L1aHFNU3a/B0F2XhQVAqlqDIiiOPjT5lbbiazywPqOxY1a/2YphNZWWlkU8sNaOK5glrNYAgiNIgg/W2SvN1ZhNqSSIhFqr5YONKXNYgdhiEERAMAyfmNMDV1dlOlLvo5AmCUVksEy2mFOLTm/BPg1ls1kV1N2ni8jlXAAcWYMjln6Dc3hYpf+Q1jnkDiUHLOgIMvuNuF0ug0r/tkvmIAO1TQvZIJd8FFaM09/cbpWmSyd3hBvVEAcYnD2Znu7ROppWkWSs0Q7r3kDH2MDjdhkGc7nmUW88GgzqolBfr54zgaY9nrFBg3OovymueAYRyXSaDYS3fD6vd2JkcnLMSSW0Wi2h7+1UH/97R0BUNv3js29qPP/zu4uCmRDqTo36IPCnF4sutL96bvRNzMzkPZSMSYSMNYR2sECZpFWybHrKmP9FU8wjylsa6l8/3c8CYHlJ6amlH2eNRi9FPg40h1oHtl8BBKwlwArppRVtbV9mjRRZF3r3YPN58ZyvFoPSizv3HZJ8ffHk5cCGkyIBPwAoLT2zu72ofuVhEGDGFyLiipJNRXtv8mvWNmC5mFvzieAf8xsizakrlfArFAAAAABJRU5ErkJggg==',
    'target': 'SEARCH',
    'home': 'https://crates.io',
    'author': 'lanyuanxiaoyao',
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
            'expression': '$.updated_at'
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
    'search': '{home}/api/v1/crates?page=1&per_page=10&q={query}'
  },
  {
    'code': '23934197-14c3-4ad9-879f-ca27527711b2',
    'name': 'LuaRocks',
    'category': '开发',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAYFBMVEUAAAAsQGcsP2Y1QlwtPl4rP2YzQ2EqPWQtQGctQGYuQWcvQWUsP2YwQWMtQWYuQWQtQGYmNlcuQWYuQGUxQmYvQWcxRGgxQ2YtQWYtQWcuQGQ8S2s0R2xAUnU6TXAsQGfZSO1DAAAAH3RSTlMA9+8LKoAVkttHtTzQH59OyDOpdF5rila/42U2f3y2fzBAOQAABqFJREFUaN612et6oyAQBmAGEFA8xbOmXe7/LldEM1Gixjb9fuzu82zs28mMCAn5UXiZ55z8ZZKq6MGYDpW/EAyNIujoH9UiQtkbiANOBshK6JI/EJocRkELQkgNGQkg+qzCdBOPggytMCMs+GQtQge2hmYSEJkU/qEaAqxhhYwpIb59QsitkKGAyKzo3wm3IKdGuRp2EDJQpX9zQ0TU0GjA1vqI+1fs+sLbegivDAIfih5GgTNCdhFUxr5waVcBUKV4t4ZJqFE4REhNS6KVmROJd4QUhfcQkiV3ZR5J2e9rQATDIoOB9khoU2WFmxWuIZqap0S74xqmykBcYg1XkNo8R4nTW+4nyNcKoZx44UFO3bJxIZkKLyHSQPpODSzR7fD9/T20mjOSMIKp4BmJxUukORVE1nSKghsf6HPZJgTD1TMiny4TCwIx1GcPEwVmHVBpiMUEBtM/1uWwUKrQDqFhQasDI4yoeRUaPZrPUtQfv3A7XUYrh/Akp/b1TDCfEAES24BMllcVMMvl48J4nujEIYTnfUh4FEdSbxydm6PE7fIjh45SqoqQJZtpgHZGCI+VJgEYQ1NOMKw+KAOmPxuxvJbr2wjUana/zZxhQchdqZA09rocFSFhR6Bp3VZBZ/+7EOsOKjq4liyVZDPCBnFXdFYithip2Ul0d798lvuLu1au96IzU3LhkFFN2S3uQ2aVZcVg+4Z4qtVXYijd31PfQzIjqb2FeGxrwbsp2H2v9FPX0uUCDM+dwoMoChIyI2ysGoKxUHVnEkzHpjd3t+cd29zttF0rt9j2BeOQeJoTFvaj0rjFJ9mf3WUVwrtd3Q8UrAQVIqfON2Y336vr73QaFk+pNwiRxikkpEoz7R52uwnIHLyzYdg+QGII2BrJ4KH0yhrs3w7gP19ZNw/qtvtOQYQVZlG0sopTMQdPJfdeYyl4V4JeIWN1s1ISTRXHtfu885wa43WF3aUCCNcI4REY4+akojkXxRFCtb+LoHcUeBlRUMpDCGvTPM5lxsiksPRIUdp/Ki5rvBPSTAQ+gs+Tt5SBbR8FKRmTDKPQF1Uy3UA+grFKfD9WIP8Kb/c2pcvDuBWETxtQJxwiqHA7cocOpbAICRHLFpe4nCJhRVrb/X/mPDSqRiFL1fgv3IC+gZQ0IzV0QnRnQv7Fx3G1mxkl7yi8gwSmb0kJkUiiAwHiRjPGy46CKsaWMHIJkXYnMyki2hVkaIWImr6wLWmL5hqSmkXhLxVQdnPOh1FwLbGnDvPvOuKUfKPguA7FJPCp6XbKriKN62pGvjYKjqsV6lEI5Si4pBcQ3DL1oet+txpXd17qyvEqjcIYeQ2pcIlqIGX32I1roMdxteclNTad8HqzR/6+hmhYlJBZhec4rtPahwIG2mtIosyc3imJG9dZSCoUMJS/i+CRGWuRUHA+WKForVDYRvjJ2buIfwhUmkmjKPRWEK0vYN8vIpo+KXbRV0OCN8TLQHYFYVoOrFsdNG80IDf5WsBXnSIoBB01KSlXHb3RL5ab4zTkHHFCmS8DpLZIfGz0/BRxQjcKMnMPzwFWSHCGNEScIIuQjgJO8RVEcR3dDpHK1dAm6wG7gMBAMhrfDhADbm3dpIT3EckIGWisD5B8QMG77c8Q3G3XoPQeUu99GM7jNxGlWRPa2lHZIqzZU7R6C+lDu/Bw70Nii6BSHijniDv/u119NSuIYHYVHp0isWbWMHT6iS0qiJwpIqCHCKSJkICHPKuEGwSV3S9csvgAUS157P8KgsprxD6ZdhQe7CFUcpLNCyfuiAbah4hsFIO1bPMSUfJOuD06bHdElVMc4tUyKvtIBKvtVzFwwpveYEp8h/s+Q2StBKj4CBG6boooj/OokHWYTD9r9d49rVxhTzOH+EHFR/DExw4/Q0UFkdNaEPHTUjS6ZPvRWuYOpr7SmEK8j5DqoUR8e1ijNEbEm2TxPkJ0RMGeVUrxqkxE/EkW7yOE8WyoNF6xescQ8WtBxUMuRGSdcchO98VvERHKGI6+5mYN9gWRy9/i5gF+jn2sXEeYFQ6/jsHup+xHSFJ11NCiFe8UnEIqPORcmL55G7ATZ4opxCVEZFboSs4uNA/vSkQOBDkJtwsC3vuIHI6rwmG6rKQCkf1xjS8IRzOm4TVyG8fVTOftH0cUINk+klSF/fAGt7g/VUwqENkIOK6fURDxx/UDiu0+IhfG9eqMMUS8cf2Qko7KiHjj+mHFSIvwUTC9ROGjERFE0Hnj+nHFGIPj+kdJujj41TD9B9cKOFGcbfjDAAAAAElFTkSuQmCC',
    'target': 'SEARCH',
    'home': 'https://luarocks.org',
    'author': 'lanyuanxiaoyao',
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
    'search': '{home}/search?q={query}'
  },
  {
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
    'search': '{home}/search.json?q={query}'
  },
]

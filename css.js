// language=CSS
const loadingBarCss = `
  .loading-bar {
    height: 2px
  }

  .loading-bar .bar {
    background-color: #c41d7f
  }
`

// language=CSS
const customCss = `
  .list-item span.title {
  }

  .list-item span.label-tag {
    color: white;
    margin-left: 6px;
    padding: 1px 7px 1px 7px;
    border-radius: 10px;
    font-size: 0.8rem;
  }

  .list-item span.label-tag svg {
    margin: 0 4px -4px -2px;
  }

  .list-item .label-logo {
    margin: 0 3px -3px 0;
  }

  .list-item span.link {
    display: none
  }

  .list-item span.star {
    background-color: #7cb30599;
  }

  .list-item span.size {
    background-color: #0522b399;
  }

  .list-item span.number {
    background-color: #5f471e99;
  }

  .list-item span.view {
    background-color: #b3050599;
  }

  .list-item span.score {
    background-color: #e70fb299;
  }

  .list-item span.location {
    background-color: #1fb30599;
  }

  .list-item span.author {
    background-color: #c41d7f99;
    padding-bottom: 2px;
  }

  .list-item span.version {
    background-color: #ff683599;
  }

  .list-item span.license {
    background-color: #349e6999;
  }

  .list-item span.datetime {
    background-color: #1890ff99;
    padding-bottom: 2px;
  }

  .list-item span.language {
    background-color: #00606499;
    padding-bottom: 2px;
  }

  .list-item span.download {
    background-color: #c2496199;
    padding-bottom: 2px;
  }

  .list-item span.other {
    background-color: #6949c299;
  }
`

// language=CSS
let settingDialogCss = `
  #setting-dialog button + button {
    margin-left: 2px
  }

  [data-a11y-dialog-native] > :first-child {
    display: none;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5)
  }

  dialog {
    border: 0;
    border-radius: 10px;
    top: 15px;
    margin-bottom: 15px;
    width: 60%;
  }

  dialog[open] {
    display: block;
  }

  .dialog-container[aria-hidden='true'] {
    display: none;
  }

  .setting-dialog-close-button {
    float: right;
    border-radius: 10px;
    border: 0;
    background-color: transparent;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .setting-dialog-close-button:hover {
    background-color: lightgray;
  }

  .setting-dialog-title {
    display: contents;
  }

  .setting-dialog-container {
    margin-top: 10px;
  }

  .setting-dialog-container .item-title {
    margin-bottom: 5px;
    margin-top: 8px;
  }

  .setting-dialog-container .proxy-input {
    width: 60%;
    height: 19px;
    margin-right: 5px;
  }

  .setting-dialog-container .about-content p {
    margin: 5px 0 0 0;
  }

  .setting-dialog-container .publish-url {
    display: block;
    margin: 10px 5px 5px 5px;
  }

  .setting-dialog-container .lines {
    margin-bottom: 5px;
  }

  .setting-dialog-container .donate-content {
    display: flex;
    width: 260px;
    height: 120px;
    border: 2px solid black;
    border-radius: 6px;
  }

  .setting-dialog-container .donate-content .donate-left {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .setting-dialog-container .donate-content .donate-left img {
    width: 80%;
  }

  .setting-dialog-container .donate-content .donate-right {
    width: 60%;
    height: 100%;
    text-align: center;
  }

  .setting-dialog-container .donate-content .donate-right .avatar {
    width: 20%;
    margin-top: 20px;
  }

  .setting-dialog-container .donate-content .donate-right .name {
    text-decoration: underline;
    cursor: pointer;
  }

  .setting-dialog-container .donate-content .donate-right .slogan {
    color: rgb(121, 121, 121);
    font-size: 0.9rem;
  }

  .setting-dialog-container .extra-content .extra-row {
    display: flex;
    margin-top: 15px;
  }

  .setting-dialog-container .extra-content .extra-row .icon img {
    width: 45px;
  }

  .setting-dialog-container .extra-content .extra-row .info {
    margin-left: 10px;
    width: 100%;
  }

  .setting-dialog-container .extra-content .extra-row .info .plugin-name {
    font-weight: bold;
  }

  .setting-dialog-container .extra-content .extra-row .info .plugin-name a {
    text-decoration: none;
    font-size: 0.9rem;
    float: right;
  }
`

module.exports = [
  document.createTextNode(loadingBarCss),
  document.createTextNode(customCss),
  document.createTextNode(settingDialogCss)
]

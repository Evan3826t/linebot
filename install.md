## 安裝檔案
### linebot
* line 機器人需要使用
  
### dotenv
* env(環境變數的功能)，讀取環境變數
  
## 安裝檔案 vscode
### ESlint
#### 需搭配 node.js 套件使用 (npm install eslint -g)
#### cmd: eslint --init
* ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
* ? What type of modules does your project use? CommonJS (require/exports)
* ? Which framework does your project use? None of these
* ? Does your project use TypeScript? No
* ? Where does your code run? Node
* ? How would you like to define a style for your project? Use a popular style guide
* ? Which style guide do you want to follow? Standard: https://github.com/standard/standard
* ? What format do you want your config file to be in? JSON
  
## 登入 ngrok
### 開新的終端機
* ngrok authtoken 1W0h7t7ZHTtPA04PASYrYLEljS7_2egomPqYoA7sJTJnH3qxR (Connect your account => ngrok登入後會顯示)
* ngrok http 3000
* (Forwarding   https://d4ac6f0f.ngrok.io -> http://localhost:3000) 複製 https://d4ac6f0f.ngrok.io 貼到line 機器人 Messaging API 的webhook

## 串 api
### 安裝 request-promise (https://www.npmjs.com/package/request-promise)
* request 也需要安裝 (npm install request)
* 是 promise 格式，所以可以使用 await
* 

## npm install nodemon -g 裝完後，只要改完檔案存檔，會自動重開機器人
## F1 喜好設定:開啟設定(json)  => 存檔後會自動排版
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
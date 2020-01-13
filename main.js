require('dotenv').config()
const linebot = require('linebot')
const rp = require('request-promise')

const callAPI = async (sna) => {
  let data = ''
  try {
    const str = await rp('https://data.ntpc.gov.tw/od/data/api/54DDDC93-589C-4858-9C95-18B2046CC1FC?$format=json')
    let json = JSON.parse(str)
    json = json.filter(j => {
      return j.sna === sna
    })
    console.log(json)
    if (json.length === 0) data = '找不到資料'
    else data = json[0].ar
  } catch (erroe) {
    data = '發生錯誤'
  }
  return data
}

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// .listen('路徑', port, 啟動時的 function)
bot.listen('/', process.env.PORT, () => {
  console.log('國家機器動的厲害')
})

bot.on('message', event => {
  console.log(event.message)
  if (event.message.type === 'text') {
    const usermsg = event.message.text
    //   event.reply(usermsg)
    callAPI(usermsg).then(result => {
      event.reply(result)
    }).catch(() => {
    })
  }
  if (event.message.type === 'sticker') {
    // event.reply('我沒有貼圖')
  }
})

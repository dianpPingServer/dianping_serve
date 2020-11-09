const express = require('express')
const XiaoChuanRouter = express.Router()


const shopTags = require('../datas/xiaochuan/shopTaps/shopTap.json')
XiaoChuanRouter.get('/getshoptags',(request,response)=>{
  response.send(shopTags)
})

module.exports = XiaoChuanRouter
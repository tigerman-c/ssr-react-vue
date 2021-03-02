const express = require('express')
const app = express()
const { renderToString } = require('react-dom/server.js')
const React = require('react')
const News = require('../react/news')

const content = renderToString(<News />)

app.all('/react', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Content-Type', 'text/html;charset=utf-8')
    console.log(escape(content))
    res.send(content)
})


var server = app.listen(8082, function () {
    console.log('应用实例，访问地址为 http://localhost:8082')
})

module.exports = function(){}
const express = require('express')
const app = express()
const { renderToString } = require('react-dom/server')
const React = require('react')
const News = require('../../react/news')

const content = renderToString(<News />)
const html = `
    <html>
        <body>
            <div id="root">${content}</div>
        </body>
        <script src="/react.index.js"></script>
    </html>
`

app.use(express.static('../../public'))  

app.all('/react', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Content-Type', 'text/html;charset=utf-8')
    // console.log(content)
    res.send(html)
})


var server = app.listen(8082, function () {
    console.log('应用实例，访问地址为 http://localhost:8082')
})

module.exports = function(){}
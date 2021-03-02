const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

app.all('/login', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.header("Content-Type", "application/json;charset=utf-8");
  console.log(req.body)
  res.send({name:'express',type:'1'})
//   res.send(JSON.stringify(JSON.stringify({name:'express',type:'1'})));
})

app.all('/html', function (req, res) {
  const content = 

  res.setHeader('Access-Control-Allow-Origin','*')
  res.header("Content-Type", "text/html;charset=utf-8");
  res.send(`
    <html><h3>h3333</h3></html>
  `)
  //   res.send(JSON.stringify(JSON.stringify({name:'express',type:'1'})));
})


app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
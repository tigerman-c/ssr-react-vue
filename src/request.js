const axios = require('axios')

axios.get('http://localhost:8081/login').then(res =>{
    console.log(res.data)
})
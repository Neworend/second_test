//引入express
const express = require('express')

//创建应用对象
const app = express()

//创建路由规则
app.get('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应体
    response.send('hello express')
})

app.post('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应体
    response.send('hello express poss')
})

app.all('/json-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
        // 响应一个数据
    const data = {
            name: 'zt'
        }
        // 进行字符串转换
    let str = JSON.stringify(data)
        //设置响应体
    response.send(str)
})
app.get('/delay', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')

    setTimeout(() => {
            response.send('延时响应')

        }, 3000)
        //设置响应体

})

//监听端口启动服务
app.listen(4000, () => {
    console.log('服务已经启动,4000端口监听中');
})
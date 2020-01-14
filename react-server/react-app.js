const express = require('express');
const app =express();
const hostname="0.0.0.0";
const port =1910;     //访问locahost:1910
const http = require('http');
const server=http.createServer(app);
const connection = require('./utils/connect')

const session = require("express-session");
const path = require("path"); // Node 自带模块

// cors解决跨域
var cors=require('cors')   
app.use(cors());

app.get('/index',(req,res)=>{
    res.send('这是前后端分离的后端页面')
})

app.use(express.json());  // 获取 POST 请求的 FormData  $.POST  !!!!
app.use(express.urlencoded({ extended: false }));  // 表单 Form  action  name   req.body    !!!!

//通过本地可以访问上传的文件
app.use(express.static(path.join(__dirname, 'public'))); // 静态目录 __dirname 根目录   public 拆分到 根目录

// 注意位置  设置session  session 中间件 req.session 
app.use(session({
    name:"AppText",
    cookie:{maxAge:1000*60*60},  // 时长 60min 
    secret:"test",
    resave:false,
    saveUninitialized:true
}))

// var vueRouter = require('./maizuo');
// app.use('/maizuo',vueRouter);



// var {checkToken} = require("./utils");
// app.use(checkToken);  //配置校验  token  的中间件

// var vueRouter = require('./vue');
// app.use('/vue',vueRouter);

var reactRouter = require('./react');
app.use('/react',reactRouter);

server.listen(port,hostname,()=>{
    console.log(`my server is running at http://${hostname}:${port}`)
})
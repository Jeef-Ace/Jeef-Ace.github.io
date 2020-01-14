const mongoose = require('mongoose');
const hostname = '0.0.0.0';
const port = 27017 ;
const dbname = 'react';
const CONN_DB_STR = `mongodb://${hostname}:${port}/${dbname}`;
mongoose.connect(CONN_DB_STR,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log('连接失败')
    }else{
        console.log('操作起来')
    }
})

const connection = mongoose.connection;

module.exports = connection;


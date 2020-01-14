var express = require('express');
var router = express.Router();
var {People,Place,Forum} = require('./utils/schema');
var multer = require("multer");    //接收文件
var moment = require("moment");


router.get('/index', (req, res) => {
    // console.log(req.url)
    res.send('这是 react 接口文件')
})

router.get('/place',(rep,res)=>{
    Place.find().then(result=>{
        res.json({
            code:200,
            msg:"获取三级联动地址成功",
            result,
            type:1
        })
    })
})

router.get('/all', (req, res) => {   //总数据
    // console.log(req.query);
    People.find().then(result=>{
        res.json({
            code:200,
            msg:"获取员工信息成功",
            type:1,
            result
        })
    })
    
})

router.post('/add',(req,res)=>{
    const {values} = req.body;
    values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");
    // console.log(values)
    People.insertMany(values).then(result=>{
        res.json({
            code:200,
            msg:"新增员工信息成功",
            result
        })
    })
})

router.post('/update',(req,res)=>{
    const {values} = req.body;
    values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");
    // console.log(values)
    People.updateMany({key:values.key},{$set:values}).then(result=>{
        console.log(result)
        res.json({
            code:200,
            msg:"修改员工信息成功",
            result
        })
    })
})

router.get('/delete',(req,res)=>{
    const{key}=req.query;
    People.deleteOne(key).then(result=>{
        res.json({
            code:200,
            msg:'删除个人信息成功',
            result
        })
    })
})


//论坛
router.get('/comment',(req,res)=>{
    Forum.find().then(result=>{
        // console.log(result)
        res.json({
            code:200,
            msg:"获取头条成功",
            result,
            type:1
        })
    })
})

//发表评论   可以增加修改评论人数
router.post('/comment/add',(req,res)=>{
    var {values,_id} = req.body;
    console.log(values)
    console.log(_id)
    Forum.update(
        {_id},
        {
            $push:{
                "comment":{...values}
            }
        }
        ).then(result=>{
            // console.log(result)
            res.json({
                code:200,
                msg:"新增评论成功",
                result
            })
        })
})

//评分
router.post('/rate',(req,res)=>{
    var {rate,_id} =req.body;
    console.log(req.body)
    Forum.updateMany(
        {_id},
        {$inc:{hot:rate}}
    ).then(result=>{
        console.log(result)
        res.json({
            code:200,
            msg:'大爷评分成功',
            result
        })
    })
})

router.post('/upload',(req,res)=>{
    res.json({
        msg:"上传图片成功"
    })
   
})



// 磁盘存储数据 
var storage=multer.diskStorage({
    destination(req,file,cb){
        cb(null,'./public/upload') 
    },
    filename(req,file,cb){
        console.log(file)
        cb(null,Date.now()+'toutiao'+file.originalname)
    }
})

var upload=multer({storage:storage}).any() //接受任何格式的文件

router.post('/uploadImg',upload,(req,res)=>{
    console.log("卧槽")
    console.log(req.files)
    var path=req.files[0].path
    res.json({
        code:200,
        path
    })
})

//发表话题
router.post('/content',(req,res)=>{    
    console.log(req.body)
    var content={...req.body,comment:[],hot:0}
    console.log(content)
    Forum.insertMany(content).then(result=>{
        res.json({
            code:200,
            msg:"上传话题成功",
            result
        })
    })
})

module.exports = router;  


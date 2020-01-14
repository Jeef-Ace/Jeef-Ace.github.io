

// Schema主要用于定义MongoDB中集合Collection里文档document的结构
// Schema 表结构的定义 定义文档的结构和属性  
// 每个schema会映射到mongodb中的一个collection，schema不具备操作数据库的能力
// {username:String,age:Number}

// String      字符串
// Number      数字    
// Date        日期
// Buffer      二进制
// Boolean     布尔值
// Mixed       混合类型
// ObjectId    对象ID    
// Array       数组
// 如果需要在Schema定义后添加其他字段，可以使用add()方法



// Model 模型  
// Model是由Schema编译而成的假想（fancy）构造器，具有抽象属性和行为
// Model的每一个实例（instance）就是一个document，document可以保存到数据库和对数据库进行操作
// model是由schema生成的模型，可以对数据库的操作

var mongoose = require("mongoose");
var Schema =  mongoose.Schema;

var users_schema = new Schema({
    username:String,
    mobile:Number,
    password:String,
    dbpwd:String,
    time:Date,
    uid:Number,
    age:Number,
    word:String,
    address:String,
    pic:String,
})
 
exports.User = mongoose.model('user',users_schema);  


//城市定位
var city_schema = new Schema({
    cityId:Number,
    name:Object,
    pinyin:String,
    isHot:Number
})

// 如果需要在Schema定义后添加其他字段，可以使用add()方法

exports.City = mongoose.model('city',city_schema);  

//影院
var cinema_schema = new Schema({
    cinemaId: Number,
    name: String,
    address: String,
    longitude: Number,
    latitude: Number,
    gpsAddress: String,
    cityId: Number,
    cityName: String,
    districtId: Number,
    districtName: String,
    district:Object,
    phone: String,
    telephones:Array,
    logoUrl: String,
    businessTime:String ,
    notice: String,
    isVisited: Number,
    lowPrice: Number,
    Distance: Number,
    eTicketFlag: Number,
    seatFlag: Number,
    ticketTypes: Array,
   
})

// 如果需要在Schema定义后添加其他字段，可以使用add()方法

exports.Cinema = mongoose.model('cinema',cinema_schema);  

//评论
// var comment_schema = new Schema({
//     mobile:Number,
//     mid:Number,
//     msg:String,
//     countNum:Number,
//     time:Date
// })

// exports.Comment = mongoose.model('comment',comment_schema)

var comment_schema = new Schema({
    mobile:Number,
        mid:Number,
        msg:String,
        num:Number,
        time:Date,
        pic:String,
})

exports.Comment = mongoose.model('comment',comment_schema)





var movie_schema = new Schema({
    title:String,
    genres:Array,
    year:String,
    rating:Object,
    id:String,
    casts:Array,
    directors:Array,
    images:Object
})

exports.Movie = mongoose.model('movie',movie_schema);

var hot_schema = new Schema({
    title:String,
    genres:Array,
    year:String,
    rating:Object,
    id:String,
    casts:Array,
    directors:Array,
    images:Object
})

exports.Hot = mongoose.model('hot',hot_schema);


var uid_schema = new Schema({
    names:String,
    id:Number
})

exports.Uid = mongoose.model('uid',uid_schema);

var code_schema = new Schema({
    mobile:String,
    code:Number,
    time:Date
})

exports.Codes = mongoose.model('code',code_schema);


var place_schema = new Schema({
    name:String,
    city:Array
})

exports.Place = mongoose.model('place',place_schema);


var people_schema = new Schema({
    key: Number,
    name: String,
    sex: String,
    age: String,
    address: String,
    phone: String,
    email: String,
    website: String,
    createtime: String
})

exports.People = mongoose.model('people',people_schema);

var forum_schema = new Schema({
    title:String,
    news:String,
    img:String,
    hot:Number,
    comment:Array
})

exports.Forum = mongoose.model('forum',forum_schema);


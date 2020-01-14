
//公共的方法



const crypto = require("crypto");   // Node 自带API 

// 加密函数  data 需要加密的字段 
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;  // 密文  
}

// 解密 
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;  // 明文 
}

const keys = "wuhan1910";   //   zklabc ==> zklabcwuhan1910 

exports.aesEncrypt = aesEncrypt;   // 加密
exports.aesDecrypt = aesDecrypt;   // 解密
exports.keys = keys;        // 密钥 



exports.checkIsLogin = function(req,res,next){
    if(req.session.username){

    }else{
        
    }
}


exports.dateFormat = function(date){
    var value = new Date(date);
    var year = value.getFullYear();
    var month = value.getMonth() +1;
    var day = value.getDate();
    var hour= value.getHours();
    var min = value.getMinutes();
    var sec = value.getSeconds();
    // console.log( `${year}-${month}-${day} ${hour}:${min}:${sec}`)
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}   


// a.  请求头 没有 token  
// b.  前端 发送 的请求头的 token 与 存储 在后台 的token 不一样  
// c.  请求头 有 token    后端 存储 token 已经消失  

//1 通过后端发送给前端,存在sessionStorage里面
//2 每次发送请求,放在请求头里面
//3 后端通过session取后端token,通过req.headers取前端传过来的token
//4. 判断token,跨域会导致请求完毕断开连接,永远取不到前端token,要解决跨域

// exports.checkToken = function(req,res,next){
//     // console.log("middleware-中间件")
//     const client_token  = req.headers.token;  //客户端 跟着 请求 发送过来的
//     const server_token = req.session.token;   // 服务器 登陆成功存储 在 req.session   但是会因为请求成功前后端断开,拿不到服务端token
//     console.log("client_token ==== " + client_token)
//     console.log("server_token ==== " + server_token)
//     console.log(req.path);
//     if(req.path!=="/vue/login"&&req.path!=="/vue/register"){
//         if(client_token){  //跨域会造成前端token取不到
//             if(server_token){
//                 if(client_token==server_token){
//                     next();
//                 }else{
//                     res.json({
//                         msg:"token验证失败,请重新登录",
//                         code:"3000",
//                         type:0
//                     })
//                 }
//             }else{
//                 res.json({
//                     msg:"token已经过期,请重新登录",
//                     code:"3000",
//                     type:0
//                 })
//             }
//         }else{
//             res.json({
//                 msg:"token不存在,请重新登录",
//                 code:"3000",
//                 type:0
//             })
//         }
//     }else{
//         next();
//     }
    

// }
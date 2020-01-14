const Core = require('@alicloud/pop-core');

var client = new Core({
  accessKeyId: 'LTAI4FiRtz6Q9LDghTKj8pE7',
  accessKeySecret: 'J5A9n1DpH814Y7V7gDGmUbXO0iqvYx',
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25'
});

// 调用 阿里云 后台发送验证码到手机 
exports.sendCode = function(mobile,code){
    var params = {
        "RegionId": "cn-hangzhou",
        "PhoneNumbers":mobile,
        "SignName":"芒果之家",
        "TemplateCode":'SMS_181866476',
        "TemplateParam":'{code:'+code+'}'   // 最大bug
      }
      
      var requestOption = {
        method: 'POST'
      };

      return client.request('SendSms',params,requestOption)
}

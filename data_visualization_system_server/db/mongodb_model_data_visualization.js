const mongoose = require('mongoose') ;

mongoose.connect('mongodb://localhost:27017/data_visualization', {useNewUrlParser: true}) ;

const Schema = mongoose.Schema ;

// 定义文档结构，这个文档结构用于描述用户注册信息
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    department: {
        type: String,
    }

}) ;

// 定义model（与集合对应，可以操作集合）
// UserModel是一个构造函数
// 将文档发布为模型
var UserModel = mongoose.model('user', userSchema) ;


// 将UserModel导出
module.exports.userModel = UserModel ;

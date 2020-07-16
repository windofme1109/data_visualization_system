const mongoose = require('mongoose') ;

mongoose.connect('mongodb://localhost:27017/healthData', {useNewUrlParser: true,  useUnifiedTopology: true }) ;

mongoose.connection.on('connected', function() {
    console.log('数据库连接成功') ;
}) ;

const Schema = mongoose.Schema ;

const heartRateSchema = new Schema({
    userID: Number,
    dataType: String,
    data: Array
}) ;

const userInfoSchema = new Schema({
    'userID': Number,
    'dataType': String,
    'birthyear': Number,
    'age': Number,
    'height': Number,
    'weight': Number,
    'average_heartrate': Number,
    'average_diastolic': Number,
    'average_systolic': Number,
    'blood_oxygen': Number,
    'BMI': Number,
}) ;


var userHeartrateModel = mongoose.model('Heartrate', heartRateSchema, 'heartrate') ;
var userBloodOxygenModel = mongoose.model('Bloodoxygen', heartRateSchema, 'bloodoxygen') ;
var userBloodPressureModel = mongoose.model('Bloodpressure', heartRateSchema, 'bloodpressure') ;
var userStepModel = mongoose.model('Step', heartRateSchema, 'step') ;
var userInfoModel = mongoose.model('UserInfo', userInfoSchema, 'userInfo') ;



// 将userHeartrateModel导出
module.exports.userHeartrateModel = userHeartrateModel ;
module.exports.userBloodOxygenModel = userBloodOxygenModel ;
module.exports.userBloodPressureModel = userBloodPressureModel ;
module.exports.userStepModel = userStepModel ;
module.exports.userInfoModel = userInfoModel ;
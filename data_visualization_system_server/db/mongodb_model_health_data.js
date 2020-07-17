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
    'userID': {
        type: Number,
        required: true
    },
    'dataType': String,
    'birthyear': {
        type: Number,
        required: true
    },
    'age': {
        type: Number,
        required: true
    },
    'height': {
        type: Number,
        required: true
    },
    'weight': {
        type: Number,
        required: true
    },
    'average_heartrate': Number,
    'average_diastolic': Number,
    'average_systolic': Number,
    'blood_oxygen': {
        type: Number,
        required: true
    },
    'BMI': {
        type: Number,
        required: true
    },
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
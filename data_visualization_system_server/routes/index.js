var express = require('express');
var {random} = require('mathjs') ;
// 引入数据库操作模型
const {userModel} = require('../db/mongodb_model_data_visualization') ;

//
const {
    userHeartrateModel,
    userBloodOxygenModel,
    userBloodPressureModel,
    userInfoModel,
    userStepModel
} = require('../db/mongodb_model_health_data') ;


const md5 = require('blueimp-md5') ;

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register', function(req, res) {
    var {username, password, email} = req.body ;

    console.log('接收到请求了') ;

    // 在数据库中根据用户名或email进行查询
    userModel.findOne({$or: [
            {username: username},
            {email: email},
        ]}, function(err, ret) {
        if (err) {

            // console.log(err) ;

            return res.status(500).json({
                msg: '数据库读取异常'
            })
        }

        if (ret) {
            // 用户存在
            res.status(200).json({
                code: 1,
                msg: '该用户已存在'
            })
        } else {
            var md5Password = md5(password) ;
            // 新用户信息写入数据库
            new userModel({username, email, password: md5Password}).save(function(err, userInfo) {
                if (err) {
                    // console.log(err) ;
                    return res.status(500).json({
                        msg: '数据库写入异常'
                    })
                }

                // 设置cookies
                // cookie()接收三个参数：第一个是要设置的cookies的属性名，第二个是属性值
                // 第三参数是cookies的一些配置，是一个对象，如maxAge表示最大存活时间，单位是毫秒，属性值是数字
                res.cookie('user_id', userInfo._id, {maxAge: 1000*60*60*24*7}) ;

                // 返回响应
                res.status(200).json({
                    code: 0,
                    data: {
                        _id: userInfo._id,
                        username: userInfo.username,
                        email: userInfo.email
                    }
                })
            })
        }
    })


}) ;
/**
 * 处理登录的post请求
 */
router.post('/login', function(req, res) {
    var {username, password} = req.body ;

    console.log('接收到请求了') ;

    // 对密码进行加密
    var md5Password = md5(password) ;

    userModel.findOne({
        $or: [
            {email: username},
            {username: username},
        ],
        password: md5Password
    },{password: 0}, function(err, user) {
        if (err) {

            return res.status(500).json({
                msg: '数据库读取异常'
            })
        }

        if (user) {
            // 设置cookies
            res.cookie('user_id', user._id, {maxAge: 1000*60*60*24*7}) ;
            // console.log(user) ;
            res.status(200).json({
                code: 0,
                data: user
            })
        } else {
            res.status(200).json({
                code: 1,
                msg: '用户名或密码错误'
            })
        }
    })


}) ;

/**
 * 处理获取用户信息的get请求
 */
router.get('/user', function(req, res) {
    // 获取cookies中user_id
    var user_id = req.cookies.user_id ;
    if (!user_id) {
        // user_id不存在
        return res.status(200).json({
            code: 1,
            msg: '请先登录'
        })
    }

    // 指定第二个参数：projections，将password字段设置为0，表示不再结果中显示
    userModel.findOne({_id: user_id}, {password: 0}, function(err, user) {

        if (err) {
            return res.status(500).json({
                msg: '数据库查询异常'
            }) ;
        }

        if (user) {
            // 用户存在
            res.status(200).json({
                code: 0,
                data: user
            })
        } else {
            // 用户不存在
            res.status(200).json({
                code: 1,
                msg: '用户不存在，请先登陆'
            })
        }
    })

}) ;

router.get('/basedatashow', function(req, res) {
    const {userID, dataType} = req.query ;

    if (dataType === 'heartrate') {
        userHeartrateModel.findOne({userID}, function (err, userData) {
            if (err) {
                return res.status(500).json({
                    code: 1,
                    msg: '查询失败'
                })
            }

            var heartrateData = userData.data ;
            var showData = [] ;
            for (let i = heartrateData.length - 800; i < heartrateData.length; i++) {
                showData.push({name: heartrateData[i].time, value: heartrateData[i].value}) ;
            }

            res.status(200).json({
                code: 0,

                data: {
                    userID: userID,
                    dataType: dataType,
                    baseData: showData
                }
            })

        })
    } else if (dataType === 'bloodpressure') {
        userBloodPressureModel.findOne({userID}, function (err, userData) {
            if (err) {
                return res.status(500).json({
                    code: 1,
                    msg: '查询失败'
                })
            }

            var bloodpressureData = userData.data ;
            // 收缩压数据
            var systolicSeriesData = [] ;
            // 舒张压数据
            var diastolicSeriesData = [] ;

            for (let i = bloodpressureData.length - 800; i < bloodpressureData.length; i++) {
                systolicSeriesData.push({name: bloodpressureData[i].time, value: bloodpressureData[i]['systolic_value']}) ;
                diastolicSeriesData.push({name: bloodpressureData[i].time, value: bloodpressureData[i]['diastolic_value']}) ;

            }

            res.status(200).json({
                code: 0,

                data: {
                    userID: userID,
                    dataType: dataType,
                    baseData: {
                        systolicSeriesData,
                        diastolicSeriesData
                    }
                }
            })

        })
    } else if (dataType === 'bloodoxygen') {
        userBloodOxygenModel.findOne({userID}, function (err, userData) {
            if (err) {
                return res.status(500).json({
                    code: 1,
                    msg: '查询失败'
                })
            }

            var bloodoxygenData = userData.data ;
            var showBloodoxygenData = [] ;
            for (let i = bloodoxygenData.length - 800; i < bloodoxygenData.length; i++) {
                showBloodoxygenData.push({name: bloodoxygenData[i].time, value: bloodoxygenData[i].value}) ;
            }

            res.status(200).json({
                code: 0,

                data: {
                    userID: userID,
                    dataType: dataType,
                    baseData: showBloodoxygenData
                }
            })

        })
    } else if (dataType === 'step') {
        userStepModel.findOne({userID}, function (err, userData) {
            if (err) {
                return res.status(500).json({
                    code: 1,
                    msg: '查询失败'
                })
            }

            var stepData = userData.data ;
            var showStepData = [] ;
            for (let i = stepData.length - 800; i < stepData.length; i++) {
                showStepData.push({name: stepData[i].time, value: stepData[i].value}) ;
            }

            res.status(200).json({
                code: 0,

                data: {
                    userID: userID,
                    dataType: dataType,
                    baseData: showStepData
                }
            })

        })
    } else if (dataType === 'userInfo') {
        userInfoModel.findOne({userID}, {'_id': 0}, function (err, userData) {
            if (err) {
                return res.status(500).json({
                    code: 1,
                    msg: '查询失败'
                })
            }

            var {BMI} = userData ;
            userData.BMI = BMI.toFixed(2) ;

            res.status(200).json({
                code: 0,
                data: userData
            })

        })
    }

}) ;

router.get('/statisticsdata', function(req, res) {
    const {userID, statisticsDataType} = req.query ;
    console.log('接收到请求了') ;
    console.log(userID, statisticsDataType) ;
    if (statisticsDataType === 'correlation') {
        var heartrateWithDiastolic = random(0.2, 0.4).toFixed(3) ;
        var heartrateWithSystolic = random(0.3, 0.5).toFixed(3) ;
        var systolicWithDiastolic = random(0.8, 1.0).toFixed(3) ;


        res.status(200).json({
            code: 0,

            data: {
                userID,
                statisticsDataType,
                correlationData: {
                    heartrateWithDiastolic,
                    heartrateWithSystolic,
                    systolicWithDiastolic
                }
            }
        })
    }
}) ;

module.exports = router;

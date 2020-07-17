import {combineReducers} from 'redux'


import {
    AUTH_SUCCESS,
    AUTH_FAILURE,
    RESET_USER_INFO,
    RECEIVE_USER_INFO,
    GET_USER_HEARTRATE_HEALTH_DATA,
    GET_USER_BLOODOXYGEN_HEALTH_DATA,
    GET_USER_STEP_HEALTH_DATA,
    GET_USER_INFO_DATA,
    GET_USER_BLOODPRESSURE_HEALTH_DATA,
    GET_CORRELATION_DATA
} from './action-types'

// 初始的state
var initUserState = {
    username: '',
    _id: '',
    email: '',
    msg: '',
    // 重定向的目标路径
    redirectTo: ''
} ;

// 初始的健康数据state
var initUserHealthState = {
   userID: 0,
   userHealthInfo: {},
   heartrateData: [],
   bloodoxygenData: [],
   bloodpressureData: {
       diastolicData: [],
       systolicData: []
   },
   stepData: []
} ;

var initStatisticsDataState = {
    userID: 0,
    correlation: {}
}

function userStateReducer(state = initUserState, action) {
    switch (action.type) {

        case AUTH_SUCCESS:
            // 授权成功
            var {type, header} = action.data ;
            // var targetPath = getRedirectTo(type, header) ;
            var targetPath = '/home' ;
            return {...action.data, redirectTo: targetPath} ;

        case AUTH_FAILURE:
            // 授权失败
            return {...state, msg: action.data} ;
        case RECEIVE_USER_INFO:
            // 更新用户信息成功
            return {...action.data} ;
        case RESET_USER_INFO:
            // 更新用户信息失败
            // 所有信息清空
            return {...initUserState, msg: action.data} ;
        default:
            return state ;
    }
}

function userHealthDataReducer(state = initUserHealthState, action) {
    switch (action.type) {
        case GET_USER_HEARTRATE_HEALTH_DATA:
            const healthHeartrateData = action.data ;
            return {...state, userID: healthHeartrateData.userID, heartrateData: healthHeartrateData.baseData} ;
        case GET_USER_BLOODOXYGEN_HEALTH_DATA:
            const healthBloodoxygenData = action.data ;
            return {...state, userID: healthBloodoxygenData.userID, bloodoxygenData: healthBloodoxygenData.baseData} ;
        case GET_USER_STEP_HEALTH_DATA:
            const healthStepData = action.data ;
            return {...state, userID: healthStepData.userID, stepData: healthStepData.baseData} ;
        case GET_USER_BLOODPRESSURE_HEALTH_DATA:
            const healthBloodpressureData = action.data ;
            return {...state,
                userID: healthBloodpressureData.userID,
                bloodpressureData: {
                    diastolicData: healthBloodpressureData.baseData.diastolicSeriesData,
                    systolicData: healthBloodpressureData.baseData.systolicSeriesData
                },
            } ;
        case GET_USER_INFO_DATA:
            const userInfoData = action.data ;
            return {...state, userHealthInfo: userInfoData} ;
        default:
            return state ;

    }
}

function userStatisticsDataReducer(state = initStatisticsDataState, action) {
    switch (action.type) {
        case GET_CORRELATION_DATA:
            const statisticsData = action.data ;
            return {...state, userID: statisticsData.userID, correlation: {...statisticsData['correlationData']}}
        default:
            return state ;
    }
}

export default combineReducers({
    userState: userStateReducer,
    userHealthState: userHealthDataReducer,
    userStatisticsDataState: userStatisticsDataReducer
})
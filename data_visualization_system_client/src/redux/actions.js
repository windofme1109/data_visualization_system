import {reqGetStatisticsData, reqGetUser, reqGetUserHealth, reqLogin, reqRegister} from '../api/index'
import {
    AUTH_FAILURE,
    AUTH_SUCCESS,
    GET_CORRELATION_DATA,
    GET_USER_BLOODOXYGEN_HEALTH_DATA,
    GET_USER_BLOODPRESSURE_HEALTH_DATA,
    GET_USER_HEARTRATE_HEALTH_DATA,
    GET_USER_INFO_DATA,
    GET_USER_STEP_HEALTH_DATA,
    RECEIVE_USER_INFO,
    RESET_USER_INFO
} from './action-types'


const authSuccess = (userInfo) => {
    return {
        type: AUTH_SUCCESS,
        data: userInfo
    }
} ;


const authFailure = (errInfo) => {
    return {
        type: AUTH_FAILURE,
        data: errInfo
    }
} ;

const receiveUserInfo = (userInfo) => {
    return {
        type: RECEIVE_USER_INFO,
        data: userInfo
    }
}

export const resetUser = (msg) => {
    return {
        type: RESET_USER_INFO,
        data: msg
    }
}

const receivedUserHealthData = (actionType, healthData) => {
    return {
        type: actionType,
        data: healthData
    }
} ;

const receivedStatisticsData = (actionType, statisticsData) => {
    return {
        type: actionType,
        data: statisticsData
    }
} ;

// 实现登录的异步action
export const loginActionCreator = (user) => {

    var {username, password} = user ;

    // 对用户名和密码进行校验
    if (!username || !password) {
        return authFailure('用户名和密码不能为空！') ;
    }

    return (dispatch, getState) => {
        // 发起登录ajax请求
        reqLogin(user)
            .then(response => {
                var ret = response.data ;
                if (ret.code === 0) {
                    // 授权成功
                    // 分发一个同步action
                    console.log(ret) ;
                    dispatch(authSuccess(ret.data)) ;
                } else {
                    // 授权失败
                    dispatch(authFailure(ret.msg)) ;
                }
            }, err => {
                console.log('服务器出现异常', err) ;
            })
    }
}

// 实现注册的异步action
export const registerActionCreator = (userInfo) => {
    var {username, password, confirmedPassword, email} = userInfo ;
    // 对用户信息进行校验
    if (!username) {
        return authFailure('用户名不能为空！') ;
    } else if (password !== confirmedPassword) {
        return authFailure('两次密码不一致！') ;
    } else if (!email) {
        return authFailure('没有填写邮箱！') ;
    }

    return (dispatch, getState) => {

        reqRegister({username, password, email})
            .then(response => {
                var ret = response.data ;
                if (ret.code === 0) {
                    // 授权成功
                    // 分发一个同步action
                    console.log(ret) ;
                    dispatch(authSuccess(ret.data)) ;
                } else {
                    // 授权失败
                    dispatch(authFailure(ret.msg)) ;
                }
            }, err => {
                console.log('服务器出现异常', err) ;
            })
    }
} ;



// 获取登录用户信息
export const getUserInfoActionCreator = () => {
    return (dispatch, getState) => {
        reqGetUser()
            .then(response => {
                var ret = response.data ;

                if (ret.code === 0) {
                    // 成功
                    // 分发一个接收到用户信息的同步action
                    dispatch(receiveUserInfo(ret.data)) ;
                } else {
                    // 失败
                    // 分发一个重置用户信息的同步action

                }
            })
    }
}



export const getUserHealthActionCreator = (userID, dataType) => {
    if (dataType === 'heartrate') {
        return (dispatch, getState) => {
            reqGetUserHealth(userID, dataType)
                .then(response => {
                    var showData = response.data;
                    if (showData.code === 0) {
                        // 成功
                        // 分发一个接收到用户信息的同步action
                        dispatch(receivedUserHealthData(GET_USER_HEARTRATE_HEALTH_DATA, showData.data));

                    }
                }, err => {
                    console.log('获取数据失败');
                })
        }
    } else if (dataType === 'bloodoxygen') {
        return (dispatch, getState) => {
            reqGetUserHealth(userID, dataType)
                .then(response => {
                    var showData = response.data;
                    if (showData.code === 0) {
                        // 成功
                        // 分发一个接收到用户信息的同步action
                        dispatch(receivedUserHealthData(GET_USER_BLOODOXYGEN_HEALTH_DATA, showData.data));

                    }
                }, err => {
                    console.log('获取数据失败');
                })
        }
    } else if (dataType === 'step') {
        return (dispatch, getState) => {
            reqGetUserHealth(userID, dataType)
                .then(response => {
                    var showData = response.data;
                    if (showData.code === 0) {
                        // 成功
                        // 分发一个接收到用户信息的同步action
                        dispatch(receivedUserHealthData(GET_USER_STEP_HEALTH_DATA, showData.data));

                    }
                }, err => {
                    console.log('获取数据失败');
                })
        }
    } else if (dataType === 'bloodpressure') {
        return (dispatch, getState) => {
            reqGetUserHealth(userID, dataType)
                .then(response => {
                    var showData = response.data;
                    if (showData.code === 0) {
                        // 成功
                        // 分发一个接收到用户信息的同步action
                        dispatch(receivedUserHealthData(GET_USER_BLOODPRESSURE_HEALTH_DATA, showData.data));

                    }
                }, err => {
                    console.log('获取数据失败');
                })
        }
    } else if (dataType === 'userInfo') {
        return (dispatch, getState) => {
            reqGetUserHealth(userID, dataType)
                .then(response => {
                    var showData = response.data;
                    if (showData.code === 0) {
                        // 成功
                        // 分发一个接收到用户信息的同步action
                        dispatch(receivedUserHealthData(GET_USER_INFO_DATA, showData.data));

                    }
                }, err => {
                    console.log('获取数据失败');
                })
        }
    }

} ;

export const getStatisticsActionCreator = (userID, statisticsDataType) => {
    if (statisticsDataType === 'correlation') {
        return (dispatch, getState) => {
            reqGetStatisticsData(userID, statisticsDataType)
                .then(response => {
                    var showData = response.data;
                    if (showData.code === 0) {
                        dispatch(receivedStatisticsData(GET_CORRELATION_DATA, showData.data))
                    }
                }, err => {
                    console.log('获取数据失败') ;
                })
        }
    }
} ;







/**
 * 包含n个接口请求函数
 */
import ajax from './ajax'

/**
 *
 * @param username
 * @param password
 * @returns {Promise<AxiosResponse<T>> | Promise<AxiosResponse<T>> | undefined}
 */
export const reqLogin = ({username, password}) => {
    return ajax('/login', {username, password}, 'POST') ;
}

// 函数定义时，要求传入的参数是形参，必须是变量，不能是字符串，数字的具体的量
// 函数调用的传入的是实参，也就是具体的量
export const reqRegister = ({username, password, email}) => {
    return ajax('/register', {username, password, email}, 'POST') ;
}


/**
 * 请求用户的基础健康数据的接口
 * @param userID
 * @param dataType
 * @returns {Promise<AxiosResponse<T>> | Promise<AxiosResponse<T>> | undefined}
 */
export const reqGetUserHealth = (userID, dataType) => {
    return ajax('/basedatashow', {userID, dataType}) ;
}

/**
 *
 * @param userID
 * @param statisticsDataType
 * @returns {Promise<AxiosResponse<T>> | Promise<AxiosResponse<T>> | undefined}
 */
export const reqGetStatisticsData = (userID, statisticsDataType) => {
    return ajax('/statisticsdata', {userID, statisticsDataType}) ;
}
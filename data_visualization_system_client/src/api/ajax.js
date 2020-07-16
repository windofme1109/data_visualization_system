/**
 * 使用axios库封装一个ajax请求函数
 */
import axios from 'axios'

/**
 *
 * @param url 请求的url
 * @param params 请求参数，值是对象
 * @param method 请求方法
 */
export default function ajax(url, params={}, method='GET') {
    if (method === 'GET') {
        // 请求方法是GET
        //将请求参数以key=value的形式，多个参数使用&连接，附加到url后面，以？为分隔
        // {username: boss, password: 123}，url是：https://www.aaa.com/index.html
        // 则经过拼接后，形式是：https://www.aaa.com/index.html?username=boss&password=123
        // 取出params对象中的属性名（key），并放入一个数组中
        var keys = Object.keys(params) ;
        // 遍历keys数组，根据keys数组中的key，从params对象中取出属性值
        // 然后进行拼接
        var keyAndValue = keys.map(key => {
            var value = params[key] ;
            return key + '=' + value ;
        })

        // 以&符号为分隔符，将参数连接起来
        var getMethodParams = keyAndValue.join('&') ;
        // 拼接成新的url
        var newUrl = url + '?' + getMethodParams ;

        return axios.get(newUrl) ;

    } else if (method === 'POST') {
        return axios.post(url, params) ;
    }
}

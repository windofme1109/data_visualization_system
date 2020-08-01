/**
 *
 * @param chart echarts的图表实例
 */
function chartToImage(chart) {
    // 获取图片的base64编码
    var imageBase64Encode = chart.getDataURL() ;
    // 创建a标签
    var tag_anchor = document.createElement('a') ;
    // 将图片的base64编码设置为a标签的href属性值
    tag_anchor.href = imageBase64Encode ;

    // 将download属性设置为图表的标题，则可以指定下载的图片名称
    tag_anchor.download = chart.title ;

}

function initConnect() {

    // 创建Server
    var server = createServer();
    // 初始化WebSocket服务对象
    const io = require('socket.io')(server);

    // 客户端发起连接请求
    io.on('open', function () {
        // 同意连接后，触发open事件，调用onOpen()方法
        onOpen()
    })
}


function postMessage(isUpdate) {

    // 建立连接
    io.on('connection', function(socket) {

        if (isUpdate) {  // 数据库中的数据被更新了

            // 调用find()方法，从数据库中获取最新的数据
            updatedData = find() ;
            // 向浏览器发送最新的数据
            socket.emit('message', updatedData)

        } else {  // 数据库中的数据没有被更新，则监听浏览器发起的请求
            // 监听浏览器发来的请求
            socket.on('message', function () {

                // 收到浏览器发来的请求，调用find()方法，从数据库中获取最新的数据
                updatedData = find() ;

                // 向浏览器发送最新的数据
                socket.emit('message', updatedData)


            })
        }


    })
}



function handleMessage() {

    const io = require('socket.io-client') ;

// 发起连接请求
    var socket = io('ws://localhost:4000') ;
   // 建立连接后，监听mssage事件
    socket.on('message', function(data) {
        // data就是服务器发来的最新数据
        // 对数据进行处理

        return data ;
    }) ;
}

function disconnect() {
    // 触发close事件，即可关闭一个WebSocket连接
    socket.emit('close', function() {

    })
}
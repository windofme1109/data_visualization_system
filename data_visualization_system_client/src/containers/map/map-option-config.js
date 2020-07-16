import '../../../node_modules/echarts/map/js/china'

var {userData, geoCoordMap} = require('./simulate-user-location') ;



/*
这个文件用于生成中国地图的配置，并在地图上展示用户的分布情况
*/

// 这个函数是将两个对象数组组合到一起，得到一个新的包含城市名称、坐标和对应pm2.5值的新的对象数组
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        // 取出data数组中第i项的名字——城市名
        // 根据城市名从geoCoordMap中获取经纬度
        var geoCoord = geoCoordMap[data[i].name] ;
        // 如果geoCoordMap中存在这个城市的经纬度
        // geoCoord是一个数组
        if (geoCoord) {
            // 从data中取出城市名称作为新对象数组中的对象的name
            // 将data中的value取出，同geoCoord组合成一个新的数组
            res.push({
                name: data[i].name,
                // concat() 方法用于连接两个或多个数组，是数组的一个方法
                // 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
                value: geoCoord.concat(data[i].value)
            })
        }
    }
    return res
}


var chinaMapOption = {
    // backgroundColor: "#404a59",

    title: {
        text: "用户地理位置",
        show: false,
       // x: "center"
    },


    // toolbox: {
    //     show: true,
    //     showTitle: true,
    //     feature: {
    //         // 保存图片到本地
    //         saveImage: {
    //             // 图片格式
    //             type: 'png',
    //             // 保存图片的名称
    //             name: '用户地理位置分布',
    //             // 是否显示下载选项
    //             show: true,
    //             // 图片分辨率，默认根容器大小相同，如果需要分辨率更高，设置这个数值大于1，如2
    //             pixelRatio: 2
    //         }
    //     }
    // },

    toolbox: {
        showTitle: false,
        orient: 'vertical',
        top: 25,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },

    // 直接配置geo选项
    geo: {
        // 通过JavaScript引入的地图
        map: "china",
        label: {
            emphasis: {
                show: false
            }
        },
        // 允许缩放
        roam: true,
        // 设置地图的中心
        // center: [115.97, 29.71]
        // 配置地图区域的样式
        itemStyle: {
            normal: {
                borderColor: "rgba(147, 235, 248, 1)",
                borderWidth: 1,
                areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                        {
                            offset: 0,
                            color: "rgba(175,238,238, 0)"
                        },
                        {
                            offset: 1,
                            color: "rgba(47,79,79, .1)"
                        }
                    ],
                    globalCoord: false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: "#389bb7",
                borderWidth: 0
            }
        }

    },
    series: [
        {
            name: "用户分布",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(userData),
            // 标记的大小
            symbolSize: function(val) {
                return 8.5
            },
            // 圆点的样式
            itemStyle: {
                // normal是圆点在默认状态下的样式
                // 可以设置color,borderColor, borderWidth等一系列属性
                normal: {
                    color: "#c5f80e",
                    opacity: 0.7
                }
            }
        }
    ]
}

// console.log(convertData(userData))

export {chinaMapOption}

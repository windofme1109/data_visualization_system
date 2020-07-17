import echarts from 'echarts'

/**
 * 异常的心率数据
 * time：数据出现的时间
 * dis：异常值经过模型处理后，距离阈值的距离
 * value：异常的心率值
 * @type {{heartrate: [], time: [], value: []}}
 */
const anomalyMultiDimensionData = {
    time : ['2018-10-18 11:00:00', '2018-10-19 15:00:00',
        '2018-10-21 03:00:00', '2018-10-22 15:00:00',
        '2018-10-22 19:00:00', '2018-10-23 07:00:00',
        '2018-10-25 08:00:00'],
    dis: [13.90, 13.74, 15.36, 14.54, 18.96, 20.33, 19.22],
    value: [[77, 95, 94, 148], [84, 97, 71, 106], [87, 99, 86, 127], [82, 99, 76, 129 ], [80, 97, 83, 115], [65, 97, 73, 118], [68, 99, 80, 135]]
} ;

function convert(data) {
    // 从data中
    var {time, dis, value} = data ;
    var ret = time.map((item, index) => {
        return [item, dis[index], value[index]]
    }) ;

    return ret
}

var threshold = '12.30' ;


/**
 * 配置展示一维异常数据的散点图
 * @type {{}}
 */
var scatterChartOption = {
    // title: {
    //     text: "异常数据展示",
    //     left: 'center',
    //     top: 'bottom',
    //     textStyle: {
    //         color: "#fff",
    //         fontFamily: 'Microsoft Yahei'
    //     }
    // },

    dataZoom: {
        // 对图形的每一个坐标轴都设置区域缩放，这样实现对于每一个坐标轴的单独控制
        // 有几种缩放类型
        // inside表示内置于坐标系，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系
        // slider表示有单独的滑动条，用户在滑动条上进行缩放或漫游
        type: 'inside',
        // show: true,
        // 表示控制哪根x轴（x轴如果设置了gridIndex）
        // 如果x轴没有指定gridIndex，则默认是第一个x轴
        xAxisIndex: [0],
        // start表示数据窗口范围的起始百分比，范围是：0 ~ 100。表示 0% ~ 100%
        start: 1,
        // start表示数据窗口范围的结束百分比，范围是：0 ~ 100。表示 0% ~ 100%
        end: 100
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            console.log(params) ;
            var {seriesName, data, name} = params ;
            var date = data[0] ;
            var value = data[2] ;
            // 数据项的名称
            var dataItemName = '' ;
            if (params.name === '聚类模型阈值') {
                return `<div style="height: 30px; width:100%; display: flex;">
                            <p style="margin: auto; ">聚类模型阈值：${params.value}</p>
                        </div>`
            }
            var content = `
                            <div style="height: 110px; width:100%; display: flex; flex-direction: column;">
                                 <div style="margin: auto">采集日期: ${date}</div>
                                 <div style="margin: auto">心率：${value[0]}</div>                       
                                 <div style="margin: auto">血氧：${value[1]}</div>                       
                                 <div style="margin: auto">低压：${value[2]}</div>                       
                                 <div style="margin: auto">高压：${value[3]}</div>                       
                            </div>
                              ` ;

            return content
        }

    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        // splitLine: {
        //     lineStyle: {
        //         type: 'time'
        //     }
        // }
        axisLabel: {
            // rotate: 45,
            color: '#666'
        }
    },
    yAxis: {
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: false,
        min: 10,
        axisLabel: {
            color: '#666'
        }
    },
    series: [
        {
            name: 'multiDimensionData',
            data: convert(anomalyMultiDimensionData),
            type: 'scatter',
            markLine: {
                symbol: 'none',
                label: {
                    show: false,
                    // position: 'start'
                    color: '#666'
                },
                lineStyle: {
                    type: 'solid',
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        // color: 'rgb(251, 118, 123)'
                        color: '#1276db'
                    }, {
                        offset: 1,
                        // color: 'rgb(180, 120, 72)'
                        color: '#0c5acf'
                    }]),
                    width: 1.2
                },
                emphasis: {
                    label: {
                        show: false,
                        position: 'end',
                        color: '#666',
                        formatter: '{b}'
                    },
                    lineStyle: {
                        // color: '#666',
                        type: 'solid',
                        width: 1.2,
                        opacity: 0.5
                    }
                },
                data: [
                    // {type: 'min', name: '平均值'},
                    { yAxis: threshold, name: '聚类模型阈值'}
                ]
            },
            symbolSize: 25,
            emphasis: {
                label: {
                    show: false,
                    color: '#fff',
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(80, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    // color: 'rgb(251, 118, 123)'
                    color: '#1276db'
                }, {
                    offset: 1,
                    // color: 'rgb(180, 120, 72)'
                    color: '#0c5acf'
                }])
            },


        },
    ]
} ;


export default scatterChartOption


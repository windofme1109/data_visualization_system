import echarts from 'echarts'

import {random} from 'mathjs'

/**
 * 异常的心率数据
 * time：数据出现的时间
 * dis：异常值经过模型处理后，距离阈值的距离
 * value：异常的心率值
 * @type {{heartrate: [], time: [], value: []}}
 */
const anomalyHeartData = {
    time : ['2018-09-14 19:00:00', '2018-09-14 20:00:00',
            '2018-09-15 21:00:00', '2018-09-15 22:00:00',
            '2018-09-15 23:00:00', '2018-09-16 03:00:00',
            '2018-09-17 04:00:00'],
    dis: [0.0061, 0.0082, 0.0075, 0.0079, 0.0069, 0.0085, 0.0066],
    value: [47, 54, 55, 52, 54, 55, 59]
} ;


const anomalybloodoxygenData = {
    time : ['2018-09-14 17:00:00', '2018-09-15 07:00:00',
        '2018-09-15 23:00:00', '2018-09-16 03:00:00',
        '2018-09-16 05:00:00', '2018-09-17 11:00:00',
        '2018-09-17 01:00:00'],
    dis: [0.0047, 0.0055, 0.0063, 0.0045, 0.0059, 0.0069, 0.0042],
    value: [91, 89, 89, 90, 90, 89, 90]
} ;

const anomalybloodpressureData = {
    time : ['2018-09-14 14:00:00', '2018-09-15 17:00:00',
        '2018-09-15 19:00:00', '2018-09-15 23:00:00',
        '2018-09-16 19:00:00', '2018-09-17 03:00:00',
        '2018-09-18 08:00:00'],
    dis: [0.0085, 0.0071, 0.0075, 0.0074, 0.0080, 0.0069, 0.0073],
    value: [[94, 150], [71, 106], [86, 127], [73, 112 ], [79, 120], [75, 116], [79, 120]]
} ;

function convert(data) {
   // 从data中
   var {time, dis, value} = data ;
   var ret = time.map((item, index) => {
       return [item, dis[index], value[index]]
   }) ;

    return ret
}

var heartrateThreshold = '0.0058' ;
var bloodoxygenThreshold = '0.0041' ;
var bloodpressureThreshold = '0.0068' ;


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


    legend: {
        top: 20,
        right: 10,
        data: ['heartrate', 'bloodoxygen', 'bloodpressure'],
        textStyle: {
            color: '#666'
        }
    },
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
            if (name === '心率阈值') {
                return `<div style="height: 30px; width:100%; display: flex;">
                            <p style="margin: auto; ">心率阈值：${params.value}</p>
                        </div>` ;
            } else if (name === '血氧阈值') {
                return `<div style="height: 30px; width:100%; display: flex;">
                             <p style="margin: auto; ">血氧阈值：${params.value}</p>
                        </div>` ;
            } else if (name === '血压阈值') {

                return `<div style="height: 30px; width:100%; display: flex;">
                            <p style="margin: auto; ">血压阈值：${params.value}</p>
                        </div>` ;
            }

            if (seriesName === 'heartrate') {
                dataItemName = `<p style="text-align: center;">异常的心率值是：${value}</p>`
            } else if (seriesName === 'bloodoxygen') {
                dataItemName = `<p style="text-align: center;">异常的血氧值是：${value}</p>` ;
            } else if (seriesName === 'bloodpressure') {
                dataItemName = `<p style="text-align: center;">异常的血压值是：${value[0]} / ${value[1]}</p>`
            }

            var content = `<div style="height: 30px; width:100%;">
                                 <p style="margin-top: 10px;">采集日期: ${date}</p>                       
                            </div>
                            <div style="height: 30px; width:100%;">
                             ${dataItemName}    
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
        min: 0.0030,
        axisLabel: {
            color: '#666'
        }
    },
    series: [
        {
            name: 'heartrate',
            data: convert(anomalyHeartData),
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
                        color: '#7049ec'
                    }, {
                        offset: 1,
                        // color: 'rgb(204, 46, 72)'
                        color: '#5d2fe7'
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
                    { yAxis: heartrateThreshold, name: '心率阈值'}
                ]
            },
            symbolSize: function (data) {
                return data[2] / 3 ;
            },
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
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    // color: 'rgb(251, 118, 123)'
                    color: '#7049ec'
                }, {
                    offset: 1,
                    // color: 'rgb(204, 46, 72)'
                    color: '#5d2fe7'
                }])
            },


        },

        {
            name: 'bloodoxygen',
            data: convert(anomalybloodoxygenData),
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
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        // color: 'rgb(129, 227, 238)'
                        color: '#aa17eb'
                    }, {
                        offset: 1,
                        // color: 'rgb(25, 183, 207)'
                        color: '#9a11d5'
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
                    { yAxis: bloodoxygenThreshold, name: '血氧阈值'}
                ]
            },
            symbolSize: function (data) {
                return data[2] / 5;
            },
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
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    // color: 'rgb(129, 227, 238)'
                    color: '#aa17eb'
                }, {
                    offset: 1,
                    // color: 'rgb(25, 183, 207)'
                    color: '#9a11d5'
                }])
            }
        },
        {
            name: 'bloodpressure',
            data: convert(anomalybloodpressureData),
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
                    shadowColor: 'rgba(50, 180, 100, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        // color: 'rgb(70, 100, 200)'
                        color: '#25b4dc'
                    }, {
                        offset: 1,
                        // color: 'rgb(75, 200, 125)'
                        color: '#0b90bd'
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
                    { yAxis: bloodpressureThreshold, name: '血压阈值'}
                ]
            },
            symbolSize: function (data) {
                return (data[2][0] + data[2][1]) / 10;
            },
            emphasis: {
                label: {
                    show: false,
                    color: '#fff',
                    formatter: function (param) {
                        // return param.data[2];
                        return `${param.data[2][0]} / ${param.data[2][1]}`
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(50, 180, 100, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    // color: 'rgb(70, 100, 200)'
                    color: '#25b4dc'
                }, {
                    offset: 1,
                    // color: 'rgb(75, 200, 125)'
                    color: '#0b90bd'
                }])
            }
        },


    ]
} ;


export default scatterChartOption


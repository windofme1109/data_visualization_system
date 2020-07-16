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

// var data = [
//     [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
//     [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
// ];

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


import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'
import {connect} from "react-redux";

var {radarOption} = require('./radar-option-config') ;

class IndividualRadarChart extends Component {

    convertData = (originalData) => {
        var showProperties = ['age', 'height', 'weight',
            'average_heartrate', 'average_diastolic',
            'average_systolic', 'blood_oxygen', 'BMI'] ;
        var ret = [] ;
        for (let item of showProperties) {
                ret.push(originalData[item]) ;

        }


        return ret ;

    } ;

    render() {
        const radarChartStyle = {
            width: '100%',
            height: '100%'
        } ;
        const {userHealthState} = this.props ;
        const {userHealthInfo} = userHealthState ;
        var {userID} = userHealthInfo ;

        if (!userID) {
            userID = 0 ;
        }

        const lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        } ;

        var radarOption = {
            title: {
                show: true,
                text: `用户健康指标\n用户ID: ${userID}`,
                top: '35%',
                left: 6,
                subtext: '注：心率、血压和血氧数据\n均为最近十日数据的均值\n所有数据均经过归一化处理',
                textStyle: {
                    color: '#fff',
                    lineHeight: 30
                },
                subtextStyle: {
                    lineHeight: 25
                }

            },
            toolbox: {
                showTitle: false,
                // orient: 'vertical',
                // top: 25,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            // 原生图形元素组件
            // graphic:graphic,
            radar: {
                // 雷达图形状，可以是多边形：polygon，或者是圆形：circle
                shape: 'polygon',
                // shape: 'circle',
                // 雷达图每个指示器名称的配置项
                name: {
                    textStyle: {
                        // color: '#fff',
                        color: 'rgb(238, 197, 102)',
                        // 文字块背景色
                        // backgroundColor: '#999',
                        // 文字块的圆角
                        borderRadius: 3,
                        // 文字块的内边距
                        padding: [3, 5]
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                },

                center: ['68%', '50%'],
                // silent: true,
                // 雷达图的指示器，用来指定雷达图中的多个变量
                // 为了雷达图变得好看，将所有数据归一化处理
                indicator: [
                    {name: '年龄', max: 70},
                    {name: '身高', max: 195},
                    {name: '体重', max: 100},
                    {name: '心率', max: 150},
                    {name: '血压-低压', max: 100},
                    {name: '血压-高压', max: 200},
                    {name: '血氧', max: 99},
                    {name: 'BMI', max: 50},




                ],

            },
            splitNumber: 5,
            tooltip: {},
            series: [
                {
                    name: '健康指标',
                    type: 'radar',
                    symbol: 'none',
                    lineStyle: lineStyle,
                    itemStyle: {
                        color: '#f9713c'
                    },
                    areaStyle: {
                        opacity: 0.4,
                    },
                    data: [
                        {
                            // value: [0.5, 0.6, 0.99, 0.6, 0.8, 0.87, 0.55, 0.36]
                            value: this.convertData(userHealthInfo)
                        }
                    ]
                }
            ]

        } ;

        return (
            <ReactEcharts option={radarOption} style={radarChartStyle} />
        )
    }
}

function mapStateToProps(state) {
    return {
        userHealthState: state.userHealthState
    }
}
const mapDispatchToProps = {

} ;

export default connect(mapStateToProps, mapDispatchToProps)(IndividualRadarChart) ;
import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'
import {connect} from "react-redux";


class IndividualDataCorrelationBarChart extends Component {
    render() {
        const {correlation} = this.props.userStatisticsDataState ;

        const correlationData = Object.values(correlation) ;
        const barChartStyle = {
            width: '100%',
            height: '100%'
        } ;

        const correlationBarChartOption = {
            title: {
                show: true,
                text: '健康数据项之间的相互性',
                left: 'center',
                top: 'bottom',
                textStyle: {
                    color: '#fff',

                }
            },
            grid: {
                top: 40,
                left: '15%',
            },
            tooltip: {
                trigger: 'item'
            },

            // 因为要显示柱状图，所以要配置x轴和y轴的信息
            xAxis: {
                type: "category",
                axisLabel: {
                    // rotate: 45,
                    color: '#666'
                },
                // boundaryGap: false,
                data: ["心率-舒张压", "心率-收缩压", "舒张压-收缩压"]
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    // rotate: 45,
                    color: '#666'
                },
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: true,
                },
                axisTick: {
                    show: true,
                }
            },
            series: [
                {
                    type: "bar",
                    barWidth: 25,
                    itemStyle: {
                        color: '#1875f0',
                        opacity: 0.5
                    },
                    data: [
                        {name: "心率-舒张压", value: correlationData[0]},
                        {name: "心率-收缩压", value: correlationData[1]},
                        {name: "舒张压-收缩压", value: correlationData[2]},
                    ]
                }
            ]
        } ;
        return (
            <ReactEcharts option={correlationBarChartOption} style={barChartStyle} />
    )
    }
}

function mapStateToProps(state) {
    return {
        userStatisticsDataState: state.userStatisticsDataState
    }
}
const mapDispatchToProps = {

} ;

export default connect(mapStateToProps, mapDispatchToProps)(IndividualDataCorrelationBarChart) ;
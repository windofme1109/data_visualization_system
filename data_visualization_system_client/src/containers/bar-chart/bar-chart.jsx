import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'

var {barOption} = require('./bar-option-config') ;

export default class BarChart extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {chartTitle} = this.props ;
        const {menChartData} = this.props ;
        const {womenChartData} = this.props ;

        // 修改图标的标题
        barOption.title.text = chartTitle ;
        barOption.series[0].data = menChartData ;
        barOption.series[1].data = womenChartData ;

        const barChartStyle = {
            width: '100%',
            height: '100%'
        }

        return (
            <ReactEcharts option={barOption} style={barChartStyle}></ReactEcharts>
        )
    }
}
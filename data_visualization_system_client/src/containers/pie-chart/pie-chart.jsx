import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'

import {pieChartOption} from './pie-option-config'

export default class PieChart extends Component {
    render() {
        const pieChartStyle = {
           width: '100%',
           height: '100%'
        } ;
        return (
            <ReactEcharts option={pieChartOption} style={pieChartStyle}></ReactEcharts>
        )
    }
}
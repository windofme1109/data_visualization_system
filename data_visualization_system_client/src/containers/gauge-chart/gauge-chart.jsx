import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'

var {gaugeOption} = require('./gauge-option-config') ;

export default class GaugeChart extends Component {
    render() {
        const gaugeChartStyle = {
            width: '100%',
            height: '100%'
        } ;
        return (
            <ReactEcharts option={gaugeOption} style={gaugeChartStyle} />
        )
    }
}
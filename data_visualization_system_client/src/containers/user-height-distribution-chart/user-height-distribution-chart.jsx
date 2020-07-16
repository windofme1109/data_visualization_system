import React, {Component} from 'react'

import ReactEcharts from 'echarts-for-react'


var {heightBarOption} = require('./height-bar-option-config')

export default class UserHeightDistributionChart extends Component {
    render() {

        const barChartStyle = {
            width: '100%',
            height: '100%'
        } ;

        return (
            <ReactEcharts option={heightBarOption} style={barChartStyle} />
        )
    }
}
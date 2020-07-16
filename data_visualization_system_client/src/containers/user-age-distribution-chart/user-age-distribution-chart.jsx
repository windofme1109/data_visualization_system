import React, {Component} from 'react'

import ReactEcharts from 'echarts-for-react'

var {ageBarOption} = require('./age-bar-option-config') ;



export default class UserAgeDistributionChart extends Component {
    render() {


        const barChartStyle = {
            width: '100%',
            height: '100%'
        } ;


        return (
            <ReactEcharts option={ageBarOption} style={barChartStyle} />
        )
    }
}
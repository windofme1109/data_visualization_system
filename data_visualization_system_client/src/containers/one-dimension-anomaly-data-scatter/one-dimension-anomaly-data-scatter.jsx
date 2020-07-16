import React, {Component} from 'react'

import ReactEcharts from 'echarts-for-react'
import scatterChartOption from './one-dimension-scatter-chart-config'

export default class OneDimensionAnomalyDataScatter extends Component {
    render() {

        const scatterChartStyle = {
            width: '100%',
            height: '100%'
        } ;

        return (
            <ReactEcharts option={scatterChartOption} style={scatterChartStyle}/>
        )
    }
}
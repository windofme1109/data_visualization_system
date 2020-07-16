import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'

import scatterChartOption from './multi-dimension-scatter-chart-config'

export default class MultiDimensionAnomalyDataScatter extends Component {
    render() {

        const scatterChartStyle = {
            width: '100%',
            height: '100%'
        } ;

        return (
            <ReactEcharts style={scatterChartStyle} option={scatterChartOption} />
        )
    }
}
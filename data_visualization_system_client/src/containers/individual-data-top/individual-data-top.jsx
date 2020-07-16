import React, {Component} from 'react'

import ReactEcharts from 'echarts-for-react'

import IndividualRadarChart from '../individual-radar-chart/individual-radar-chart'
import IndividualHeartRateLineChart from '../individual-heart-rate-line-chart/individual-heart-rate-line-chart'
import IndividualBloodOxygenLineChart from '../individual-blood-oxygen-line-chart/individual-blood-oxygen-line-chart'

import './individual-data-top-style.css'

var {radarOption} = require('../individual-radar-chart/radar-option-config') ;

export default class IndividualDataTop extends Component {
    render() {
        const radarChartStyle = {
            width: '100%',
            height: '100%'
        } ;
        return (
            <div className="individual-data-top">
                <div className="data-top-left">
                    <div className="center_text">
                        {/* 左上边框*/}
                        <div className="t_line_box">
                            <i className="t_l_line"></i>
                            <i className="l_t_line"></i>
                        </div>
                        {/* 右上边框*/}
                        <div className="t_line_box">
                            <i className="t_r_line"></i>
                            <i className="r_t_line"></i>
                        </div>
                        {/* 左下边框*/}
                        <div className="t_line_box">
                            <i className="l_b_line"></i>
                            <i className="b_l_line"></i>
                        </div>
                        {/* 左上边框*/}
                        <div className="t_line_box">
                            <i className="r_b_line"></i>
                            <i className="b_r_line"></i>
                        </div>
                        <IndividualRadarChart />
                    </div>
                </div>
                <div className="data-top-center">
                    <div className="center_text">
                        {/* 左上边框*/}
                        <div className="t_line_box">
                            <i className="t_l_line"></i>
                            <i className="l_t_line"></i>
                        </div>
                        {/* 右上边框*/}
                        <div className="t_line_box">
                            <i className="t_r_line"></i>
                            <i className="r_t_line"></i>
                        </div>
                        {/* 左下边框*/}
                        <div className="t_line_box">
                            <i className="l_b_line"></i>
                            <i className="b_l_line"></i>
                        </div>
                        {/* 左上边框*/}
                        <div className="t_line_box">
                            <i className="r_b_line"></i>
                            <i className="b_r_line"></i>
                        </div>
                        <IndividualHeartRateLineChart />
                    </div>
                </div>
                <div className="data-top-right">
                    <div className="center_text">
                        {/* 左上边框*/}
                        <div className="t_line_box">
                            <i className="t_l_line"></i>
                            <i className="l_t_line"></i>
                        </div>
                        {/* 右上边框*/}
                        <div className="t_line_box">
                            <i className="t_r_line"></i>
                            <i className="r_t_line"></i>
                        </div>
                        {/* 左下边框*/}
                        <div className="t_line_box">
                            <i className="l_b_line"></i>
                            <i className="b_l_line"></i>
                        </div>
                        {/* 左上边框*/}
                        <div className="t_line_box">
                            <i className="r_b_line"></i>
                            <i className="b_r_line"></i>
                        </div>
                        <IndividualBloodOxygenLineChart />
                    </div>
                </div>
        </div>
        )
    }
}
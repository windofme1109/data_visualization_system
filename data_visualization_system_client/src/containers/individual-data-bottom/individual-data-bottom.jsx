import React, {Component} from 'react'
import './individual-data-bottom-style.css'

import IndividualBloodPressureLineChart from '../individual-blood-pressure-line-chart/individual-blood-pressure-line-chart'
import IndividualSportsLineChart from '../individual-sports-line-chart/individual-sports-line-chart'
import IndividualDataCorrelationBarChart from '../individual-data-correlation-bar-chart/individual-data-correlation-bar-chart'

export default class IndividualDataBottom extends Component {
    render() {
        return (
            <div className="individual-data-bottom">
                <div className="data-bottom-left">
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
                        <IndividualDataCorrelationBarChart />
                    </div>
                </div>
                <div className="data-bottom-center">
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
                        <IndividualBloodPressureLineChart />
                    </div>
                </div>
                <div className="data-bottom-right">
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
                            <IndividualSportsLineChart />
                    </div>
                </div>
            </div>
        )
    }
}
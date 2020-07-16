import React, {Component} from 'react'

import chartLogo from '../../assets/images/chart-logo.png'

import PieChart from '../pie-chart/pie-chart'
import GaugeChart from '../gauge-chart/gauge-chart'
import UserAgeDistributionChart from '../user-age-distribution-chart/user-age-distribution-chart'
import UserHeightDistributionChart from '../user-height-distribution-chart/user-height-distribution-chart'


import './platform-data-display-style.css'

export default class PlatformDataDisplay extends Component {
    render() {


        return (
            <div className="platform-data-container">
                {/*左上边框*/}
                <div className="t_line_box">
                    <i className="t_l_line"></i>
                    <i className="l_t_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box">
                    <i className="t_r_line"></i>
                    <i className="r_t_line"></i>
                </div>
                {/*左下边框*/}
                <div className="t_line_box">
                    <i className="l_b_line"></i>
                    <i className="b_l_line"></i>
                </div>
                {/*右上边框*/}
                <div className="t_line_box">
                    <i className="r_b_line"></i>
                    <i className="b_r_line"></i>
                </div>
                <div className="main_title">
                    <img src={chartLogo} alt=""/>
                    平台数据展示
                </div>
                <div className="platform-data-chart-1">
                    <div id="age-distribution">
                        <UserAgeDistributionChart />
                    </div>
                    <div id="height-distribution">
                        <UserHeightDistributionChart />
                    </div>
                </div>
                <div className="platform-data-chart-2">
                    <div id="weight-distribution">
                        <PieChart />
                    </div>
                    <div id="user-amount">
                        <GaugeChart />
                    </div>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react'
import mapLogo from '../../assets/images/china-map-logo.png'

import ReactEcharts from 'echarts-for-react'

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import './map-style.css'

import {chinaMapOption} from './map-option-config'

export default class Map extends Component {
    render() {



        const chartStyle = {
            width: '100%',
            height: '100%',
        }



        return (
            <div className="data_main">
                <div className="main_left fl">
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
                        <div className="main_title">
                            <img src={mapLogo} alt=""/>
                                可视化地图展示
                        </div>
                        <ReactEcharts option={chinaMapOption} style={chartStyle}></ReactEcharts>
                    </div>
                </div>
            </div>
        )
    }
}
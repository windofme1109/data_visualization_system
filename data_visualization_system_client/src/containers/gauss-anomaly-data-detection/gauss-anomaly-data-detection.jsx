import React, {Component} from 'react'

import OneDimensionAnomalyDataScatter from '../one-dimension-anomaly-data-scatter/one-dimension-anomaly-data-scatter'

import './gauss-anomaly-data-detection-style.css'


export default class GaussAnomalyDataDetection extends Component {
    render() {
        return (
            <div className="gauss-anomaly-data-container">
                <h1 style={{color: '#666'}}>高斯概率分布模型</h1>
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
                        <div className="scatter-contaier">
                            <OneDimensionAnomalyDataScatter />
                        </div>
                        <div className="data-instruction">
                            <p>图示说明：</p>
                            <p>1. x轴表示异常数据出现的时间</p>
                            <p>2. y轴表示模型根据样本数据计算出的数值，可以衡量数据的异常程度</p>
                            <p>3. 气泡的大小表示异常数据值的大小</p>
                        </div>
                    </div>
            </div>
        )
    }
}
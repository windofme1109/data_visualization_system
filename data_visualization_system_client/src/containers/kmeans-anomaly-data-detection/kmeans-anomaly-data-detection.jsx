import React, {Component} from 'react'

import MultiDimensionAnomalyDataScatter from '../multi-dimension-anomaly-data-scatter/multi-dimension-anomaly-data-scatter'

import './kmeans-anomaly-data-detection-style.css'

export default class KmeansAnomalyDataDetection extends Component {
    render() {
        return (
            <div className="kmeans-anomaly-data-container">
                <h1 style={{color: '#666'}}>改进的Kmeans聚类模型</h1>
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
                        <MultiDimensionAnomalyDataScatter />
                    </div>
                    <div className="data-instruction">
                        <p>图示说明：</p>
                        <p>1. x轴表示异常数据出现的时间</p>
                        <p>2. y轴表示样本数据与聚类中心的距离，可以衡量数据的异常程度</p>
                        <p>3. 气泡均为一样大小，不代表任何数值</p>
                    </div>
                </div>
            </div>
        )
    }
}
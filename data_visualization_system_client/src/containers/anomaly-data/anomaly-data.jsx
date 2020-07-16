import React, {Component} from 'react'

import KmeansAnomalyDataDetection from '../kmeans-anomaly-data-detection/kmeans-anomaly-data-detection'
import GaussAnomalyDataDetection from '../gauss-anomaly-data-detection/gauss-anomaly-data-detection'

import './anomaly-data-style.css'


export default class AnomalyData extends Component {
    render() {
        return (
            <div className='anomaly-data-container'>

                <GaussAnomalyDataDetection />
                <KmeansAnomalyDataDetection />
            </div>
        )
    }
}
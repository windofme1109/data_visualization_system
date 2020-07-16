import React, {Component} from 'react'

import './home-page-header-style.css'

export default class HomePageHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="bg_header">
                    <div className="header_nav fl t_title">
                        大数据可视化平台
                    </div>
                </div>
            </div>
        )
    }
}
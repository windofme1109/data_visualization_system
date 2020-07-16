import React, {Component} from 'react'

import './individual-page-header-style.css'

export default class IndividualPageHeader extends Component {
    render() {
        return (
            <div className="individual-header">
                <div className="bg_header">
                    <div className="header_nav fl t_title">
                        数据展示
                    </div>
                </div>
            </div>
        )
    }
}
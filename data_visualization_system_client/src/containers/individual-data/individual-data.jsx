import React, {Component} from 'react'

import IndividualPageHeader from '../../components/individual-page-header/individual-page-header'
import IndividualDataTop from '../individual-data-top/individual-data-top'
import IndividualDataBottom from '../individual-data-bottom/individual-data-bottom'

import './individual-data-style.css'


export default class IndividualData extends Component {
    render() {
        return (
            <div className='individual-data-container'>
                <IndividualPageHeader />
                <IndividualDataTop />
                <IndividualDataBottom />
            </div>
        )
    }
}
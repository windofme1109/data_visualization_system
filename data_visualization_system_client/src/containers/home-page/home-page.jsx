import React, {Component} from 'react'
import HomePageHeader from '../../components/home-page-header/home-page-header'
import Map from '../map/map'
import PlatformDataDisplay from '../platform-data-display/platform-data-display'

export default class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <HomePageHeader />
                <div className="data-left">
                    <Map />
                </div>
                <div className="data-right">
                    <PlatformDataDisplay />
                </div>
            </div>
        )
    }
}
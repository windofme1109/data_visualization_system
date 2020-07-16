import React, {Component} from 'react'
import { Modal, Button } from 'antd';


export default class LogoutModal extends Component {
    render() {

        var {logoutVisible, logoutHandleOk, logoutHandleCancel} = this.props ;

        return (
            <div>
                <Modal
                    title="提示"
                    visible={logoutVisible}
                    onOk={logoutHandleOk}
                    onCancel={logoutHandleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>确定要退出吗</p>
                </Modal>
            </div>
        )
    }
}
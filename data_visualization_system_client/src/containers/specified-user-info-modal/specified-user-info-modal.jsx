import React, {Component} from 'react'
import {Modal, Form, Input} from 'antd'

import {connect} from 'react-redux'

import {getUserHealthActionCreator, getStatisticsActionCreator} from '../../redux/actions'

import './specified-user-info-modal-style.css'


const FormItem = Form.Item ;



class SpecifiedUserInfoModal extends Component {

    state = {
        visible: this.props.visible
    } ;

    getInputUserInfo = () => {
       const userId = this.props.form.getFieldValue('userID') ;
       // const userPhone = this.props.form.getFieldValue('userPhone') ;
       const userInfo = {
           userId,
       } ;
       // 将输入框清空
       this.props.form.setFieldsValue({'userID': ''}) ;

       this.props.getUserHealthActionCreator(userId, 'heartrate') ;
       this.props.getUserHealthActionCreator(userId, 'bloodoxygen') ;
       this.props.getUserHealthActionCreator(userId, 'step') ;
       this.props.getUserHealthActionCreator(userId, 'bloodpressure') ;
       this.props.getUserHealthActionCreator(userId, 'userInfo') ;
       this.props.getStatisticsActionCreator(userId, 'correlation') ;
    } ;


    render() {
        const { getFieldDecorator } = this.props.form;
        const {visible, handleCancel, handleOk} = this.props ;
        const formItemLayout = {
            // 控制标签的位置和长度
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            // 控制列的长度和位置
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        return (
            <div>
                <Modal
                    title="请输入被展示的用户的信息"
                    visible={visible}
                    onOk={() => {
                        this.getInputUserInfo() ;
                        handleOk() ;
                    }}
                    onCancel={handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <Form {...formItemLayout} className="specified-user-info-form">
                        <FormItem label="用户ID"  hasFeedback>
                            {getFieldDecorator('userID', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                        whitespace: true
                                    },

                                ],
                            })(<Input placeholder="必选"/>)}
                        </FormItem>
                        <FormItem label="用户手机号码" hasFeedback>
                            {getFieldDecorator('userPhone', {
                                rules: [
                                    {
                                        required: false
                                    }
                                ]
                            })(<Input placeholder="可选"/>)}
                        </FormItem>
                    </Form>

                </Modal>
            </div>
        )
    }
}


SpecifiedUserInfoModal = Form.create({name: 'specified-user-info'})(SpecifiedUserInfoModal) ;

function mapStateToProps(state) {
    return {
        userHealthState: state.userHealthState,
        userStatisticsDataState: state.userStatisticsDataState
    }
}

const mapDispatchToProps = {
    getUserHealthActionCreator,
    getStatisticsActionCreator
} ;

export default connect(mapStateToProps, mapDispatchToProps)(SpecifiedUserInfoModal)
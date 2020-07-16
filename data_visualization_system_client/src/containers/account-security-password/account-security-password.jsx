import React, {Component} from 'react'
import {Button, Form, Input} from "antd";

import './account-security-password.css'

class AccountSecurityPassword extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        // 表单布局
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
            <div className="password">
                <Form {...formItemLayout} >
                    <Form.Item label="旧密码" style={{color: '#fff'}} hasFeedback>
                        {getFieldDecorator('oldPassword', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    message: '密码长度必须在6位到16位之间',
                                    min: 6,
                                    max: 16
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="新密码" hasFeedback>
                        {getFieldDecorator('newPassword', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    message: '密码长度必须在6位到16位之间',
                                    min: 6,
                                    max: 16
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="再次输入密码" hasFeedback>
                        {getFieldDecorator('confirmNewPassword', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    message: '密码长度必须在6位到16位之间',
                                    min: 6,
                                    max: 16
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item wrapperCol={{span: 24, offset: 8}}>
                        <Button type="primary" htmlType="submit">
                            提交修改
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Form.create({ name: 'account-security-password' })(AccountSecurityPassword);
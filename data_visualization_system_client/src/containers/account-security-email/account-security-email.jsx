import React, {Component} from 'react'
import {Button, Form, Input} from "antd";

import './account-security-email-style.css'
import {connect} from "react-redux";

class AccountSecurityEmail extends Component {
    render() {

        const { getFieldDecorator } = this.props.form;

        const {email} = this.props.userState ;

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
            <div className="email">
                <Form {...formItemLayout}>
                    <Form.Item label="当前邮箱" hasFeedback>
                        <Input value={email} />
                    </Form.Item>
                    <Form.Item label="新邮箱" hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: '请输入有效的邮箱地址',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item wrapperCol={{span: 24, offset: 8}}>
                        <Button type="primary" htmlType="submit">
                            确定修改
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

AccountSecurityEmail = Form.create({ name: 'account-security-email' })(AccountSecurityEmail) ;


function mapStateToProps(state) {
    return {
        userState: state.userState
    } ;
}

const mapDispatchToProps = {

} ;

export default connect(mapStateToProps, mapDispatchToProps)(AccountSecurityEmail) ;
import React, {Component} from 'react'
import {Button, Form, Input, Radio} from "antd";

import './account-security-authority.css'

export default class AccountSecurityAuthority extends Component {
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            color: '#666'
        };
        return (
            <div className="authority">
                <Form>
                    <Form.Item wrapperCol={{span: 24, offset: 8}}>
                        <Radio.Group >
                            <Radio style={radioStyle} value={1}>
                                权限等级 1
                            </Radio>
                            <Radio style={radioStyle} value={2}>
                                权限等级 2
                            </Radio>
                            <Radio style={radioStyle} value={3}>
                                权限等级 3
                            </Radio>
                            <Radio style={radioStyle} value={4}>
                                权限等级 4
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="" wrapperCol={{span: 12, offset: 8}}>
                        <Input placeholder="请输入授权码"/>
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
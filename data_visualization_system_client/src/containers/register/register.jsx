import React, {Component} from 'react'
import {
    AutoComplete,
    Button,
    Form,
    Select,
    Tooltip,
    Icon,
    Input,
} from 'antd'
import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'


import {registerActionCreator} from "../../redux/actions";


import './register-style.css'



const ButtonGroup = Button.Group ;
const {Option} = Select ;
const AutoCompleteOption = AutoComplete.Option ;



class Register extends Component {


    register = () => {

        const username = this.props.form.getFieldValue('username') ;
        const email = this.props.form.getFieldValue('email') ;
        const password = this.props.form.getFieldValue('password') ;
        const confirmedPassword = this.props.form.getFieldValue('confirm') ;

        const user = {username, email, password, confirmedPassword} ;

        this.props.registerActionCreator(user) ;

    } ;



    render() {
        const { getFieldDecorator } = this.props.form ;

        const {msg, redirectTo} = this.props.userState ;

        if (redirectTo) {
            return <Redirect to={redirectTo} />
        }

        // 表单布局
        const formItemLayout = {
            // 控制标签的位置和长度
            labelCol: {
                xs: { span: 24 },
                sm: { span: 0 },
            },
            // 控制列的长度和位置
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18, offset: 3 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 8,
                    offset: 8,
                },
            },
        } ;


        return (
            <div className="register">
                <div className="title">大数据可视化平台</div>
                <div className="form">
                <Form {...formItemLayout} >
                    <Form.Item
                        label={
                            <span>
                                Username&nbsp;
                                <Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                    >
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                    min: 6,
                                    max: 16,
                                    whitespace: true
                                }
                                ],
                        })(<Input placeholder="请输入用户名" />)}
                    </Form.Item>
                    <Form.Item label="E-mail">
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
                        })(<Input placeholder="请输入电子邮箱地址" />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                message: '密码长度必须在6位到16位之间',
                                min: 6,
                                max:16
                            },
                            {
                                message: '密码必须是数字和字母的组合',
                                pattern: /^\w{6,16}$/g
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                            ],
                    })(<Input.Password placeholder="请输入密码"/>)}
                </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                       {getFieldDecorator('confirm', {
                           rules: [
                               {
                                   required: true,
                                   message: 'Please confirm your password!',
                               },
                               {
                                 validator: this.compareToFirstPassword,
                               },
                           ],
                       })(<Input.Password placeholder="请确认密码"/>)}
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary"  block="true" onClick={() => {this.register()}}>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
                    <div className="">
                        已有账号？
                        <a href="#login">点击登录</a>
                    </div>
              </div>

            </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = {
    registerActionCreator: registerActionCreator
} ;
Register = Form.create({name: 'register'})(Register);
export default connect(mapStateToProps,mapDispatchToProps)(Register)

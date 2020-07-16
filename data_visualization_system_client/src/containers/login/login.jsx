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

import {loginActionCreator} from '../../redux/actions'

import './login-style.css'

const ButtonGroup = Button.Group ;
const {Option} = Select ;
const AutoCompleteOption = AutoComplete.Option ;

class Login extends Component {

    login = () => {
       const username = this.props.form.getFieldValue('username') ;
       const password = this.props.form.getFieldValue('password') ;
       const userInfo = {username, password} ;
       this.props.loginActionCreator(userInfo) ;

    } ;

    render() {

        const {msg, redirectTo} = this.props.userState ;

        if (redirectTo) {
            return <Redirect to={redirectTo} />
        }

        const { getFieldDecorator } = this.props.form;
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
                <div className="login">
                    {msg ? <div style={{color: 'red'}}>{msg}</div>:null}
                    <div className="title">大数据可视化平台</div>
                    <div className="form">
                        <Form {...formItemLayout}>
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
                                            whitespace: true
                                        },

                                        ],
                                })(<Input placeholder="用户名/邮箱"/>)}
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
                                            max: 16
                                        },
                                        {
                                            message: '用户名或密码错误',
                                            // pattern: /^520yan1314$/
                                        },
                                        {
                                            validator: this.validateToNextPassword,
                                        },
                                    ],
                                })(<Input.Password placeholder="请输入密码"/>)}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={() => {this.login()}} block="true">
                                   登录
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className="">
                            没有账号？
                            <a href="#/register">立即注册</a>
                        </div>
                    </div>


                </div>
            )
        }
    }

Login = Form.create({ name: 'login' })(Login);

function mapStateToProps(state) {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = {
    loginActionCreator: loginActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;
import React, {Component} from 'react'
import { Menu, Icon } from 'antd'

import {withRouter} from 'react-router-dom'


const {SubMenu} = Menu ;

class NavSide extends Component {


    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];


    state = {
        // openKeys 当前展开的 SubMenu 菜单项 key 数组
        // openKeys只有一个元素，保证只要一个二级导航栏菜单被打开
        openKeys: ['sub1']
    }

    handleSettingItem = () => {

    } ;



    handleMenuItemClick = (e) => {
        const {key, keyPath} = e ;
        // console.log(key) ;
        console.log(e) ;
        const currentPath = this.props.location.pathname ;
        var path = '' ;
        // console.log(currentPath) ;
        if (keyPath[1] === 'sub1') {
            path = currentPath === '/setting/admin-info' ? currentPath : '/setting/admin-info' ;
            this.props.history.push(path) ;
        } else if (key >= 6 && key <= 9) {
            // console.log(key) ;
            switch (key) {
                case '6':
                    // console.log(key) ;
                    path = `/setting/account-security/password` ;
                    // console.log(path) ;
                    return this.props.history.push(path) ;
                case '7':
                    path = `/setting/account-security/email` ;
                    return this.props.history.push(path) ;
                case '8':
                    path = `/setting/account-security/avatar` ;
                    return this.props.history.push(path) ;
                case '9':
                    path = `/setting/account-security/authority` ;
                    return this.props.history.push(path) ;

            }

        }

    } ;

    /**
     * 保证导航栏中，始终只有一个二级菜单打开，其余关闭
     * @param openKeys
     */
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                style={{ width: 256, borderRadius: '15px 0 0 15px', height: 'auto'}}
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                onClick={this.handleMenuItemClick}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>个人信息</span>
                    }
                >

                    <Menu.Item key="1" >用户名</Menu.Item>
                    <Menu.Item key="2" >头像</Menu.Item>
                    <Menu.Item key="3" >邮箱</Menu.Item>
                    <Menu.Item key="4" >所属部门</Menu.Item>
                    <Menu.Item key="5" >管理权限</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>账户安全</span>
                    }
                >
                    <Menu.Item key="6">修改密码</Menu.Item>
                    <Menu.Item key="7">修改邮箱</Menu.Item>
                    <Menu.Item key="8">修改头像</Menu.Item>
                    <Menu.Item key="9">变更权限</Menu.Item>
                </SubMenu>
                {/*<SubMenu*/}
                {/*    key="sub3"*/}
                {/*    title={*/}
                {/*        <span>用户管理</span>*/}
                {/*    }*/}
                {/*>*/}
                {/*    <Menu.Item key="10">Option 9</Menu.Item>*/}
                {/*    <Menu.Item key="11">Option 10</Menu.Item>*/}
                {/*    <Menu.Item key="12">Option 11</Menu.Item>*/}
                {/*    <Menu.Item key="13">Option 12</Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*<SubMenu*/}
                {/*    key="sub4"*/}
                {/*    title={*/}
                {/*        <span>系统设置</span>*/}
                {/*    }*/}
                {/*>*/}
                {/*    <Menu.Item key="14">系统背景</Menu.Item>*/}
                {/*    <Menu.Item key="15">系统主题</Menu.Item>*/}
                {/*    <Menu.Item key="16">图片导出</Menu.Item>*/}
                {/*    <Menu.Item key="17">数据统计</Menu.Item>*/}
                {/*</SubMenu>*/}
            </Menu>
        )
    }
}

export default withRouter(NavSide)
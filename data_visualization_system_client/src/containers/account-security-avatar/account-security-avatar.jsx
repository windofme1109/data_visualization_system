import React, {Component} from 'react'
import {Form, Icon, message, Upload} from "antd";

import './account-security-avatar.css'

var avatar = require('../../assets/images/avatar_middle.jpg') ;




function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}



export default class AccountSecurityAvatar extends Component {

    state = {
        loading: false,
        value: 1
    } ;

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const { imageUrl } = this.state;

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">点击上传</div>
            </div>
        );

        return (
            <div className="avatar">
                <Form>
                    <Form.Item label="当前头像" labelCol={{sm: { span: 10 }}} wrapperCol={{span: 24, offset: 10}}>
                        <img src={avatar} alt="avatar"/>
                    </Form.Item>
                    <Form.Item label="设置头像" labelCol={{sm: { span: 10 }}} wrapperCol={{span: 20, offset: 10}}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {/*{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}*/}
                            {uploadButton}
                        </Upload>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
import { Button, Checkbox, Form, FormInstance, Input, message, Space } from 'antd';
import React, { Component, createRef, RefObject } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../static/css/login.css';
// import { login } from '../api/login';
import { set } from '../utils/storage';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { validPhone } from '../utils/validate';

//antd form

const layout = {
    labelCol:{span:8},
    wrapperCol:{span:16},
};

const tailLayout = {
    wrapperCol:{offset:8,span:16},
};

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

class Login_yan extends Component {
    formRef:RefObject<FormInstance>

    
    constructor(props:any, context:any) {
        super(props,context);
        this.formRef = createRef<FormInstance>()
        
    }

    

    render() {
        return (
            <>
                <Form id='login-form'
                    {...layout}
                    ref={this.formRef}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        rules={
                            [
                                {type:'string', required: true, message: 'Please input your Username!' },
                                {pattern:validPhone ,message:'手机号不正确'}
                            ]
                        }
                    >
                    
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={
                            [
                                {type:'string', required: true, message: 'Please input your Phone!' },
                                {len:6,message:'请输入6位验证码'},
                            ]
                        }
                    >
                        <Input
                        prefix={<LockOutlined className="input-yan" />}
                        type="password"
                        placeholder="请输入短信验证码"
                        />
                        
                    </Form.Item>
                    <Form.Item>
                        <a>获取验证码</a>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        验证码登录
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default Login_yan;
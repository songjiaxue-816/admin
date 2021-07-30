import { Button, Checkbox, Form, FormInstance, Input, message, Space } from 'antd';
import React, { Component, createRef, RefObject } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../static/css/login.css';
import { login } from '../api/login';
import { set } from '../utils/storage';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

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

    login = (form:any) =>{
        login(form.name,form.password).then(response=>{
            const {code,msg,data} = response.data;
            if(code===0){
                set('token',data.token)
                window.location.href = '/'
                message.success(msg)
            }else{
                message.error(msg)
            }
        })
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
                    onFinish={this.login}
                >
                    <Form.Item
                        name="name"
                        rules={[{type:'string', required: true, message: 'Please input your Username!' },
                        {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/ ,message:'手机号不正确'}
                    ]}
                    >
                    
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{type:'string', required: true, message: 'Please input your Phone!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="input-yan" />}
                        type="password"
                        placeholder="请输入短信验证码"
                        />
                        <a className="input-btn">获取验证码</a>
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
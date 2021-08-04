import { Button, Form, FormInstance, Input, message, Space } from 'antd';
import React, { Component, createRef, RefObject } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../static/css/login.css';
import { validPhone } from '../utils/validate';
import {Yan} from '../api/login'

const layout = {
    labelCol:{span:8},
    wrapperCol:{span:16},
};

const tailLayout = {
    wrapperCol:{offset:8,span:16},
};

class Login_yan extends Component <any,any>{
    formRef:RefObject<FormInstance>

    
    constructor(props:any, context:any) {
        super(props,context);
        this.formRef = createRef<FormInstance>()

        this.state={
            count:60,
            flag:true
        }
        
    }


    onFinish=(form:any)=>{
        Yan(form.mobile,form.code).then(response =>{
            const {code,msg} = response.data;
            if (code === 1000){
                message.success(msg)
            }else{
                message.error(msg)
            }
        })
    }
    
    countDown() {
        const {count} = this.state;
        if (count === 1) {
        this.setState({
            count: 60,
            flag: true,
        });
        } else {
        this.setState({
            count: count - 1,
            flag: false,
        });
        setTimeout(this.countDown.bind(this), 1000);
        }
    }
    
    handleClick = () => {
        const {flag} = this.state;
        if (!flag) {
        return;
        }
        this.countDown();
    };

    render() {
        return (
            <>
                <Form id='login-form'
                    {...layout}
                    ref={this.formRef}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="mobile"
                        rules={
                            [
                                {type:'string', required: true, message: 'Please input your Username!' },
                                {pattern:validPhone ,message:'手机号不正确'}
                            ]
                        }
                    >
                    
                        <Input  placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={
                            [
                                {type:'string', required: true, message: 'Please input your Phone!' },
                                {len:6,message:'请输入6位验证码'},
                            ]
                        }
                    >
                        <Input
                        type="password"
                        placeholder="请输入短信验证码"
                        suffix={
                            <Button id='getYan' 
                            size='small'
                            onClick={  () => this.handleClick()} type="text" >
                                    {
                                    this.state.flag
                                        ? '获取验证码'
                                        : `${this.state.count} 秒后重发`
                                    }
                            </Button>
                        }
                        />
                        
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
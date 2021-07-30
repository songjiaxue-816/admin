import { Button, Checkbox, Form, FormInstance, Input, message, Space } from 'antd';
import React, { Component, createRef, RefObject } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../static/css/login.css';
import { login } from '../api/login';
import { set } from '../utils/storage';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

// const {getFieldProps} = this.props.form;

//antd form

const layout = {
    labelCol:{span:8},
    wrapperCol:{span:16},
};
// const {getFieldDecorator} = this.props.form;

const tailLayout = {
    wrapperCol:{offset:8,span:16},
};

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

class Login_phone extends Component {
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
        // const {form} = this.props
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
                        // label="phone"
                        rules={[{type:'string',  required: true, message: 'Please input your Username!' },
                        {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/ ,message:'手机号不正确'}
                    ]}
                        // validateStatus="error"
                        // help="Should be combination of numbers & alphabets"  
                    >
                        {/* {form.getFieldDecorator('name', 
                        {
                            rules: [
                            { required: true, message: '请输入名称' },
                            { max:20, message: '名称不超过20个字符' },
                            { pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, "g") , message: '名称只允许包含数字、字母和下划线' }
                            ]
                        }
                        )
                        (<Input />)
                        } */}

                        <Input 
                        
                        type="tel"
                        
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{type:'string', required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="请输入登录密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button">
                        登录
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default Login_phone;
import { Button, Checkbox, Form, FormInstance, Input, message, Space } from 'antd';
import React, { Component, createRef, RefObject } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../static/css/login.css';
import { Login } from '../api/login';
import { validPsw , validPhone} from '../utils/validate';

// const {getFieldProps} = this.props.form;

//antd form

const layout = {
    labelCol:{span:8},
    wrapperCol:{span:16},
};
// const {getFieldDecorator} = this.props.form;

// const tailLayout = {
//     wrapperCol:{offset:8,span:16},
// };

// const onFinish = (values: any) => {
//     console.log('Received values of form: ', values);
//   };

class Login_phone extends Component {
    formRef:RefObject<FormInstance>

    
    constructor(props:any, context:any) {
        super(props,context);
        this.formRef = createRef<FormInstance>()
        
    }
    onFinish=(form:any)=>{
        Login(form.mobile,form.password).then(response =>{
            const {code,msg} = response.data;
            if (code === 1000){
                message.success(msg)
            }else{
                message.error(msg)
            }
        })
    }

    // login = (form:any) =>{
    //     login(form.name,form.password).then(response=>{
    //         const {code,msg,data} = response.data;
    //         if(code===0){
    //             set('token',data.token)
    //             window.location.href = '/'
    //             message.success(msg)
    //         }else{
    //             message.error(msg)
    //         }
    //     })
    // }

    
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
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="mobile"
                        // label="phone"
                        rules={
                            [
                                {type:'string',  required: true, message: 'Please input your Username!' },
                                {pattern:validPhone ,message:'??????????????????'}
                            ]
                        }
                    >
                        <Input 
                        type="tel"
                        placeholder="??????????????????" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={
                            [
                                {type:'string', required: true, message: 'Please input your Password!' },
                                // {min:6,message:'????????????6???'},
                                // {max:15,message:'????????????15???'}
                                {pattern:validPsw,message:'?????????6-20?????????????????????'}                     ]
                        }
                    >
                        <Input.Password
                        type="password"
                        placeholder="?????????????????????"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button">
                        ??????
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default Login_phone;
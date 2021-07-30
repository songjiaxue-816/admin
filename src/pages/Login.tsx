import { Button, Checkbox, Form, FormInstance, Input, message, Space, } from 'antd';
import React, { Component, createRef, RefObject } from 'react';
import { DownOutlined } from '@ant-design/icons';
import '../static/css/login.css';
// import { login } from '../api/login';
// import { set } from '../utils/storage';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import  ReactDOM  from 'react-dom';
// import Login_phone from '../routers/Login_phone';
import Login_yan from '../components/Login_yan';
import Login_phone from '../components/Login_phone';


 class Login extends Component<any,any> {
    // formRef:RefObject<FormInstance>

    
    constructor(props:any, context:any) {
        
            super(props,context);
            this.state={
                flag: true
            }
        
        
    }

    moveonHandle1(){
        
        let top = document.querySelector('#paswLogin') as HTMLElement;

        top.style.color = 'black' 
        
    }

    // leaveHandle1(){
    //     let top = document.querySelector('#paswLogin') as HTMLElement;

    //     top.style.color = 'rgb(162, 173, 199)' 
    // }
    // moveonHandle2(){
        
    //     let top = document.querySelector('#yanLogin') as HTMLElement;

    //     top.style.color = 'black' 
        
    // }

    // leaveHandle2(){
    //     let top = document.querySelector('#yanLogin') as HTMLElement;

    //     top.style.color = 'rgb(162, 173, 199)' 
    // }
    clickHandle(){
        let top = document.querySelector('#paswLogin') as HTMLElement;
        let top1 = document.querySelector('#yanLogin') as HTMLElement;
        let foot = document.querySelector('#jiantou') as HTMLElement;
        let foot1 = document.querySelector('#jiantou1') as HTMLElement;

        foot.style.display=this.state.flag?'inline':'none'
        foot1.style.display=this.state.flag?'none':'inline'
        top.style.color =this.state.flag? 'black':'rgb(162, 173, 199)' 
        top1.style.color =this.state.flag? 'rgb(162, 173, 199)':'black' 
        
        console.log(this.state.flag)
       
    }
    clickHandle2(){
        let top = document.querySelector('#yanLogin') as HTMLElement;
        let top1 = document.querySelector('#paswLogin') as HTMLElement;
        let foot = document.querySelector('#jiantou') as HTMLElement;
        let foot1 = document.querySelector('#jiantou1') as HTMLElement;

        foot.style.display=this.state.flag?'inline':'none'
        foot1.style.display=this.state.flag?'none':'inline'
        top.style.color =this.state.flag? 'rgb(162, 173, 199)':'black' 
        top1.style.color =this.state.flag? 'black':'rgb(162, 173, 199)'
        // top.style.color =this.state.flag? 'black':'rgb(162, 173, 199)' 
        // top1.style.color =this.state.flag? 'rgb(162, 173, 199)':'black' 
        console.log(this.state.flag)
    }
    

    render() {
        return (
            <div id="box">
            <div id="login-chart">
                <Space>
            <div className="login-method">
                <button 
                style={{color:'black'}}
                className="login-method-btn" 
                id="paswLogin"
                onClick={()=>{ this.setState({flag:true},
                            this.clickHandle) }}

                // onMouseOver={this.moveonHandle1}
                // onMouseLeave={this.leaveHandle1}
                >
                    密码登陆
                </button>
                <DownOutlined id="jiantou"  style={{color:'blue'}} />
            </div>
            <div className="login-method">
                <button 
                className="login-method-btn"
                id="yanLogin"
                onClick={()=>{ this.setState({flag:false},
                    this.clickHandle2) }}

                // onMouseOver={this.moveonHandle2}
                // onMouseLeave={this.leaveHandle2}
                
                >
                    验证码登录
                </button>
                <DownOutlined id="jiantou1"  style={{color:'blue'}} />
            </div>
            </Space>
            
            <div className="login-comp">
            {this.state.flag?<Login_phone/>:<Login_yan/>}
            </div>
            </div>
            </div>
        )
    }
}

export default Login;
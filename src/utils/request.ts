import axios from "axios";
import { message,Modal } from "antd";
import NProgress from "nprogress";
import { clear,get } from "./storage";
import { Header } from "antd/lib/layout/layout";

//创建实例
const service = axios.create({
    baseURL: '/devApi',

    timeout:5000,
    // headers:{'X-Custom-Header':'foobar'}
});

//请求拦截
// service.interceptors.request.use(
//     config => {//onFulfilled: 
//         NProgress.start();
//         config.headers['Authorization'] = get('token');//key:
//         return config;
//     },
    
//     error =>{//onRejected: 
//         NProgress.done();
//         return Promise.reject(error)
//     }
// )
service.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});
//响应拦截
// service.interceptors.response.use(
//     response =>{
//         NProgress.done();
//         if(response.status === 200){
//             const{code} = response.data
//             if(code === 4003){
//                 message.warning('你的登录状态已经丢失，请退出后重新登录！')
//                 return Promise.reject('请登录')
//             }else if(code === 4000){
//                 clear()
//                 return Promise.reject('认证失败')
//             }
//             return response;
//         }else{
//             Modal.error({
//                 title:'网络请求错误'
//             });
//             return Promise.reject('网络请求错误')
//         }
//     },
//     error =>{
//         Modal.error({
//             title:'请求错误'
//         });
//         NProgress.done();
//         return Promise.reject(error)
//     }
// )
service.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});

export default service;
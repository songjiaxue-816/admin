import { config } from "process";
import service from "../utils/request";

// export const login = (name:string,password:string) =>{
//     return request({
//         url:'/api/user/password/login',
//         method:'post',
        
//         data:{name:name, password:password}
//         //然后再在代码里调用一下
//     })
// }

//登录接口
export function Login(data:any){
    return service.request({
        url:"/login/",
        method:"post",
        data:data,//请求类型为post
        //params:data//请求类型为get

    })
}
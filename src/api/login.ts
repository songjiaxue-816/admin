import request from "../utils/request";

export const login = (name:string,password:string) =>{
    return request({
        url:'/api/user/password/login',
        method:'post',
        
        data:{name:name, password:password}
        //然后再在代码里调用一下
    })
}
import service from "../utils/request";


//登录接口
export function Login(mobile:string,password:string){
    return service.request({
        url:"/login/",
        // url:"/usr/password/login",
        method:"post",
        
        data:{mobile:mobile, password:password}
        // data:data,//请求类型为post
        //params:data//请求类型为get

    })
}

export function Yan(mobile:string,code:string){
    return service.request({
        // url:"/login/",
        url:"/usr/password/login",
        method:"post",
        data:{mobile:mobile, code:code}
        // data:data,//请求类型为post
        //params:data//请求类型为get

    })
}
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(createProxyMiddleware('/devApi',{
        // target:"http://www.web-jshtml.cn/api/react",
        target:"http://yapi.smart-xwork.cn/mock/82038/api",
        changeOrigin:true,
        pathRewrite:{
            "^/devApi":"",
        }
    }))
    // app.use(proxy('/meassage',{
    //     target:"http:/admintest.happymmal.com:7000",
    //     changeOrigin:true,
    // }))
};

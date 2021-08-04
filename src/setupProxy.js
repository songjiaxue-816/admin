const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(createProxyMiddleware('/devApi',{
        target:"http://www.web-jshtml.cn/api/react",
        // target:"http://yapi.smart-xwork.cn/mock/82038/api",
        // token:'864986a5ce0b2d31a0ca08afd89508627396abfd7c3d83cb9b748ebaa9f580ed',
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

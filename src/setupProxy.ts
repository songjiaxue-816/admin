export const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app:any){
    app.use(createProxyMiddleware('devApi',{
        target:"http://apidoc.web-jshtml.cn/api/react",
        changeOrigin:true,
    }))
    // app.use(proxy('/meassage',{
    //     target:"http:/admintest.happymmal.com:7000",
    //     changeOrigin:true,
    // }))
};
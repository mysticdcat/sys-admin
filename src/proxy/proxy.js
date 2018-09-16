//http代理配置 上线时服务器依据此文件进行nginx
module.exports = {
  "/hcsys": {
    target: "http://localhost:8090/hcsys/",
    changeOrigin: true,
    pathRewrite: {
      "^/hcsys": ""
    }
  }
};

import axios from "axios";

export const server = axios.create()
server.defaults.timeout = 6000
server.interceptors.request.use(
    function (config) {
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    err => Promise.reject(err)
)
server.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error) {
            const msg = error.response.data || "请求失败"
            console.log(msg);
            return Promise.reject(error);
        } else {
            console.log('网络异常')
        }
    }
);


import axios, {InternalAxiosRequestConfig} from "axios";

axios.defaults.timeout = 6000
axios.interceptors.request.use(
    function (config) {
        config.headers["Content-Type"]="application/json";
        return config;
    },
    err =>Promise.reject(err)
)
axios.interceptors.response.use(
    response=>{
        return response;
        },
    error => {
        if (error){
            console.log(error);
            return Promise.reject(error);
        }else {
            console.log('网络异常')
        }
    }
);
export const request = axios;
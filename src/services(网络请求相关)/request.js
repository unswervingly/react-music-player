import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
})

// 可以在这里添加拦截
// 添加请求拦截
instance.interceptors.request.use(config => {
    // 在发送请求前要做的事儿

    // 1. 发送网络请求时，在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token，如果没有携带，那么直接跳转到登录页面

    // 3.params/dta序列化的操作

    return config;
}, err => {
    // 在请求错误时要做的事儿
    
})

// 添加响应拦截
instance.interceptors.response.use(res => {
    // 请求成功对响应数据做处理

    return res.data;
}, err => {
    // 在请求错误时要做的事儿
    if(err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求失败");
                break;
            case 401:
                console.log("未授权访问");
                break;
            default:
                console.log("其他错误信息");
                break;
        }
    }

})

export default instance;
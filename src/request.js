import axios from 'axios'


const service = axios.create({
    baseURL: "http://192.168.0.105:8089",
    //配置请求超时时间
    timeout: 5000
})



export default service
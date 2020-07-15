import axios from '../request'

/**
 * 注册
 * @param {*} phone 
 * @param {*} pwd 
 * @param {*} name 
 */
export const registerApi = (phone,pwd,name) => axios.post("/api/v1/pri/user/register",{
    phone,
    pwd,
    name
})

/**
 * 登录
 * @param {*} phone 
 * @param {*} pwd 
 */
export const loginApi = (phone,pwd) => axios.post("/api/v1/pri/user/login",{
    phone,
    pwd
})

/**
 * 轮播图列表
 */
export const videoBannderListApi = () => axios.get("/api/v1/pub/video/banner/list")

/**
 * 视频列表
 */
export const videoListApi = () => axios.get("/api/v1/pub/video/list")

/**
 * 获取视频详细信息
 * @param {*} videoId 
 */
export const videoInfoByIdApi = (videoId) => axios.get("/api/v1/pub/video/find_video_info_by_id/"+videoId)

/**
 * 下单操作
 * @param {*} videoId 
 * @param {*} token 
 */
export const saveOrderInfoApi = (videoId,token) => axios.post("/api/v1/pri/order/save",{
        videoId
},{
    headers:{
        token
    }
  })

/**
* 用户订单列表
* @param {*} token 
*/
export const userVideoOrderListApi = (token) => axios.get("/api/v1/pri/order/list",{
    headers:{token}
})

/**
 * 获取用户个人信息
 * @param {*} token 
 */
export const userInfoByIdApi = (token) => axios.get("/api/v1/pri/user/find_user_info_by_id",{
    headers:{token}
})
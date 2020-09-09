import axios from 'axios'
// 配置请求的跟路径
// axios.defaults.baseURL = process.env.API_ROOT
// console.log(process.env.API_ROOT, 'url')
// #  配置 超时时间
axios.defaults.timeout = 2500
// home栏
export const homeGoodsApi = (params) => {
  return axios.get('/goods', params)
}

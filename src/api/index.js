import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://localhost:8080/'
// #  配置 超时时间
axios.defaults.timeout = 2500
// home栏
export const homeGoodsApi = (params) => {
  return axios.get('/api/goods', params)
}

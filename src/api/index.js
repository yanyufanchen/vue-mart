import axios from 'axios'
// 配置请求的跟路径

let baseUrl = '';
if (location.hostname == 'localhost') { //测试环境
  baseUrl = 'http://localhost:8080';
} else if (location.hostname == '192.168.10.175') { //正式环境
  baseUrl = ' http://192.168.10.175:8080';
} else if (location.hostname == 'yanyufanchen.gitee.io') { //正式环境
  baseUrl = 'https://www.easy-mock.com/mock/5f587287d5906660c22dae4d/example';
}
axios.defaults.baseURL = baseUrl
console.log(location.hostname, baseUrl, 'url')
// #  配置 超时时间
axios.defaults.timeout = 2500
// home栏
export const homeGoodsApi = (params) => {
  return axios.get('/goods', params)
}

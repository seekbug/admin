
import axios from 'axios'
import qs from 'qs'

// 后期所有请求地址都会加这个前缀
axios.defaults.baseURL = 'http://kg.zhaodashen.cn/v2/'

// 通过请求拦截器统一设置token
axios.interceptors.request.use(function (config) {
    config.headers['token'] = localStorage.getItem('token') || 'adf7cbdcdc62b07d94f86339e5687ca51'
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 方法名统一 HTTP请求动词 + 模块名 + Api
// 导出
// 4. 导出
// axios.get('请求路径', {headers: {}, params: {键:值,...,键:值}})
// axios.delete('请求路径', {headers: {}, params: {键:值,...,键:值}})
// axios.post('请求路径', 数据对象)
// axios.put('请求路径', 数据对象)
// -----------------------------
//得导入import qs from 'qs'
// axios.post('请求路径', qs.stringify(数据对象))
// axios.put('请求路径', qs.stringify(数据对象))

// export const getUsersApi = (params) => {
export const getUsersApi = params => { // params 是一个对象 {pagenum, pagesize, uname, start_time, end_time}
    // return axios.get('http://kg.zhaodashen.cn/v2/users/index.php', {params:params, headers:{token:'sdfadsdf'}}).then(res => res.data)
    // 问题1：请求网址非常长
    // 问题2：后期其他请求都得单独传递token麻烦
    // 解 决：使用axios的拦截器
    // 拦截器：拦截所有请求 给他统一加token
    // return axios.get('users/index.php', {params:params}).then(res => res.data)
    return axios.get('users/index.php', { params }).then(res => res.data)
}


export const getRolesApi = params => {
    return axios.get('roles/index.php', { params }).then(res => res.data)
}



//没有参数就不用写params
export const getAuthApi = params => {
    return axios.get('auth/index.php').then(res => res.data)
}


// axios.put('请求路径', qs.stringify(数据对象))
export const putUserGoodsApi = params => {
    return axios.put('users/state.php', qs.stringify(params)).then(res => res.data)
}

//用户删除
export const deleteusersApi = params => {
    return axios.delete('users/delete.php', { params }).then(res => res.data)
}

//角色列表删除
export const deleteRolesApi = params => {
    return axios.delete('roles/delete.php', { params }).then(res => res.data)
}

//用户创建
// export const postUsersApi = postData => {
//     return axios.post('users/create.php', qs.stringify(postData)).then(res => res.data)
// }

//角色创建
export const postRolesApi = postData => {
    return axios.post('roles/create.php', qs.stringify(postData)).then(res => res.data)
}

//登录创建
export const postLoginApi = postData => {
    return axios.post('/users/login.php', qs.stringify(postData)).then(res => res.data)
}

//订单统计
export const getTotalApi = params => {
    return axios.get('/orders/total.php', { params }).then(res => res.data)
}





// export const getUsersHistoryApi = params => { // params obj  {pagenum, pagesize, uname, start_time, end_time}
//   return axios.get('users/history.php', {params}).then(res => res.data)
// }

// // 用户删除
// export const deleteUsersApi = params => { // params {user_id:数字}
//   return axios.delete('users/delete.php', {params}).then(res => res.data)
// }




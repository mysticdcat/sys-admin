import http from './../http/http.js'

export function getUser(params) {
    return http({
        url: '/search/user',
        method: 'get',
        params: { name }
    })
}
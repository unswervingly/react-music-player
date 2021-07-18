import request from './request'


// header
export function getDjRadioCatelist() {
    return request({
        url: "/dj/catelist"
    })
}

// 优秀新电台
export function getDjRadioRecommend(type) {
    return request({
        url: "/dj/recommend",
        params: {
            type,
        }
    })
}

// 电台排行榜
export function getDjRadios(cateId, limit, offset) {
    return request({
      url: "/dj/radio/hot",
      params: {
        cateId,
        limit,
        offset
      }
    })
}
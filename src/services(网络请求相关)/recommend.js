import request from './request';

// 轮播图
export function getTopBanners() {
    return request({
        url: '/banner'
    })
}


// 热门推荐
export function getHOTRecommends(limit) {
    return request({
        // 截取 /personalized里面的数据8个    三种方法
        
        // url: '/personalized?limit=8'

        // url: '/personalized',
        // params: {
        //     limit: 8,
        // },

        url: '/personalized',
        params: {
            limit,
        },
    })
}

// 新碟上架
export function getNewAlbum(limit) {
    return request({
        url: '/top/album',
        params: {
            limit,
        },
    })
}


// 榜单
export function getTopList(idx) {
    return request({
        url: '/top/list',
        params: {
            // idx: indx,
            // 相当于
            idx,
        }
    })
}

// 入驻歌手
export function getArtistList(limit, cat) {
    return request({
        url: "/artist/list",
        params: {
            limit,
            cat,
        }
    })
}
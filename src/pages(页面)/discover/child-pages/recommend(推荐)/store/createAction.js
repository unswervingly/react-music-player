import {
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMENDS,
    CHANGE_MEW_ALBUM,
    
    CHANGE_UP_RANKING,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING,

    CHANGE_SETTLE_SINGER,
} from './constants'

import { 
    getTopBanners,
    getHOTRecommends, 
    getNewAlbum,
    getTopList,
    getArtistList,
} from '../../../../../services(网络请求相关)/recommend';



// 轮播图和推荐action
const changeTopBannersAction = (topBanners) => {
    return {
        type: CHANGE_TOP_BANNERS,
        topBanners: topBanners
    }
}

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(response => {
            // console.log(response);
            dispatch(changeTopBannersAction(response.banners))
        })
    }
}


// 热门推荐action
const changeHotRecommendsAction = (hotRecommends) => {
    return {
        type: CHANGE_HOT_RECOMMENDS,
        hotRecommends: hotRecommends
    }
}

export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHOTRecommends(limit).then(response => {
            // console.log(response);
            dispatch(changeHotRecommendsAction(response.result))
        })
    }
}


// 新碟上架action
const changeNewAlbumAction = (newAlbums) => {
    return {
        type: CHANGE_MEW_ALBUM,
        newAlbums: newAlbums
    }
}

export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(response => {
            dispatch(changeNewAlbumAction(response.albums))
        })
    }
}


// 榜单action
// 飙升榜action
const changeUpRankingAction = (upRankings) => {
    return {
        type: CHANGE_UP_RANKING,
        upRankings: upRankings,
    }
}

// 新歌榜action
const changeNewRankingAction = (newRankings) => {
    return {
        type: CHANGE_NEW_RANKING,
        newRankings: newRankings,
    }
}

// 原创榜action
const changeOriginRankingAction = (originRankings) => {
    return {
        type: CHANGE_ORIGIN_RANKING,
        originRankings: originRankings,
    }
}


export const getTopListsAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(response => {
            switch (idx) {
                case 0:
                    dispatch(changeUpRankingAction(response.playlist))
                    break;
                case 2:
                    dispatch(changeNewRankingAction(response.playlist))
                    break;
                case 3:
                    dispatch(changeOriginRankingAction(response.playlist))
                    break;
                default:
                    break;
            }
        })
    }
}


// 入驻歌手
const changeSettleSingsAction = (settleSings) => {
    return {
        type: CHANGE_SETTLE_SINGER,
        settleSings: settleSings
    }
}

export const getSettleSingersAction =(limit, cat) => {
    return dispatch => {
        getArtistList(limit, cat).then(response => {
            dispatch(changeSettleSingsAction(response.artists))
        })
    }
}
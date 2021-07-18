import { Map } from 'immutable'

import {
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMENDS,
    CHANGE_MEW_ALBUM,
    
    CHANGE_UP_RANKING,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING,

    CHANGE_SETTLE_SINGER,
} from './constants'

// import * as actionTypes from './constants';  actionTypes.CHANGE_TOP_BANNERS


/* const defaultState = {
    topBanners: [],
}

function recommendReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            return {...state, topBanners: action.topBanners}
    
        default:
            return state;
    }
} */


// 使用 immutable库优化 
const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],

    upRankings: {},
    newRankings: {},
    originRankings: {},

    settleSings: [],
})

function recommendReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.topBanners);
        case CHANGE_HOT_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends);
        case CHANGE_MEW_ALBUM:
            return state.set('newAlbums', action.newAlbums);

        case CHANGE_UP_RANKING:
            return state.set('upRankings', action.upRankings);
        case CHANGE_NEW_RANKING:
            return state.set('newRankings', action.newRankings);
        case CHANGE_ORIGIN_RANKING:
            return state.set('originRankings', action.originRankings);

        case CHANGE_SETTLE_SINGER:
            return state.set('settleSings', action.settleSings);
        default:
            return state;
    }
}

export default recommendReducer;
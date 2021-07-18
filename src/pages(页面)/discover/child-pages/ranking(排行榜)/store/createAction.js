import { 
    getTopList,
    getRankingList,
} from '../../../../../services(网络请求相关)/ranking'

import {
    CHANGE_TOP_LIST,
    CHANGE_PLAY_LIST,
    CHANGE_CURRENT_INDEX,
} from './constants'


// 左边排行榜action
const changeTopListAction = (res) => {
    return {
        type: CHANGE_TOP_LIST,
        topLists: res.list,
    }
}

export const getTops = () => {
    return dispatch => {
        getTopList().then(res => {
            // console.log(res.list);
            dispatch(changeTopListAction(res))
        })
    }
}

// 
export const changeCurrentIndex = (index) => ({
    type: CHANGE_CURRENT_INDEX,
    currentIndex: index
}) 


// 右边
const changePlayListAction = (res) => ({
    type: CHANGE_PLAY_LIST,
    playLists: res.playlist
})


export const getRanking = (id) => {
    return dispatch => {
      getRankingList(id).then(res => {
        // console.log(res.playlist);
        dispatch(changePlayListAction(res))
      })
    }
}
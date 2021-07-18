import {
    CHANGE_CURRENT_ID,
    CHANGE_RADIO_CATEGORY,
    CHANGE_RECOMMENDS,
    CHANGE_RADIOS
} from './constants'
import {
    getDjRadioCatelist,
    getDjRadioRecommend,
    getDjRadios,
} from '../../../../../services(网络请求相关)/djradio'


export const changeCurrentIdAction = (id) => {
    return {
        type: CHANGE_CURRENT_ID,
        currentId: id
    }
}

// header action
const changeCategoryAction = (categories) => ({
    type: CHANGE_RADIO_CATEGORY,
    categories: categories
})

export const getRadioCategories = () => {
    return dispatch => {
        getDjRadioCatelist().then(res => {
            dispatch(changeCategoryAction(res.categories));
            const currentId = res.categories[1].id;
            console.log(currentId);
            dispatch(changeCurrentIdAction(currentId));
        })
    }
}
// 优秀新电台 action
const changeRecommendsAction = (recommends) => {
    return {
        type: CHANGE_RECOMMENDS,
        recommends: recommends
    }
}

export const getRadioRecommend = (currentId) => {
    return dispatch => {
        getDjRadioRecommend(currentId).then(res => {
            dispatch(changeRecommendsAction(res.djRadios));
        })
    }
}


// 电台排行榜 action
const changeRadiosAction = (radios) => {
    return {
        type: CHANGE_RADIOS,
        radios: radios
    }
}

export const getRadios = (currentId, offset) => {
    return dispatch => {
        getDjRadios(currentId, 30, offset).then(res => {
            dispatch(changeRadiosAction(res.djRadios));
        })
    }
}
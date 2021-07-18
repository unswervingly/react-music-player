import { getSongCategory, getSongCategoryList } from '../../../../../services(网络请求相关)/songs'

import { handleSongsCategory } from '../../../../../utils(自己封装工具)/handle-data'

import {
    CHANGE_CATEGORY,
    CHANGE_CURRENT_CATEGORY,
    CHANGE_CATEGORY_SONGS,
    PER_PAGE_NUMBER,
} from './constants'

// songHeader show action
const changeCategoryAction = (category) => {
    return {
        type: CHANGE_CATEGORY,
        category: category
    }

}

export const getCategory = () => {
    return dispatch => {
        getSongCategory().then(res => {
            const categoryData = handleSongsCategory(res);
            console.log(categoryData);
            dispatch(changeCategoryAction(categoryData))
        })
    }
}


// 改变左上角 全部
export const changeCurrentCategoryAction = (name) => {
    return {
        type: CHANGE_CURRENT_CATEGORY,
        currentCategory: name
    }
}

//list action
const changeSongListAction = (categorySongs) => {
    return {
        type: CHANGE_CATEGORY_SONGS,
        categorySongs: categorySongs
    }
}

export const getSongList = (page) => {
    return (dispatch, getState) => {
        // 1.获取currentCategory
        const name = getState().get("songs").get("currentCategory")

        // 2.获取数据
        getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
            dispatch(changeSongListAction(res));
        })
    }
}
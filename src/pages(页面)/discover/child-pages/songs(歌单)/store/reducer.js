import { Map } from 'immutable'


import { 
    CHANGE_CATEGORY, 
    CHANGE_CURRENT_CATEGORY,
    CHANGE_CATEGORY_SONGS,
} from './constants';

const defaultState = Map({
    category: [],
    currentCategory: "全部",
    categorySongs: {}
})


function songsReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return state.set("category", action.category)
        case CHANGE_CURRENT_CATEGORY:
            return state.set("currentCategory", action.currentCategory)
        case CHANGE_CATEGORY_SONGS:
            return state.set("categorySongs", action.categorySongs)
        default:
            return state;
    }
    
}


export default songsReducer;
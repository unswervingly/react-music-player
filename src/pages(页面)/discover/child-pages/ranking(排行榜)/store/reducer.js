import { Map } from 'immutable'




import {
    CHANGE_TOP_LIST,
    CHANGE_CURRENT_INDEX,
    CHANGE_PLAY_LIST,
} from './constants.js'


const defaultState = Map({
    topLists: [],
    currentIndex: 0,
    playLists: {},
})

function rankingReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_TOP_LIST:
            return state.set("topLists", action.topLists)
        case CHANGE_CURRENT_INDEX:
            return state.set("currentIndex", action.currentIndex)
        case CHANGE_PLAY_LIST:
            return state.set("playLists", action.playLists)
        default:
            return state
    }
}

export default rankingReducer;
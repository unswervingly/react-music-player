import { Map } from "immutable";


import {
    CHANGE_CURRENT_ID,
    CHANGE_RADIO_CATEGORY,
    CHANGE_RECOMMENDS,
    CHANGE_RADIOS,
} from './constants'

const defaultState = Map({
    currentId: 0,
    categories: [],
    recommends: [],
    radios: [],
})


function djRadioReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_CURRENT_ID:
            return state.set("currentId", action.currentId);
        case CHANGE_RADIO_CATEGORY:
            return state.set("categories", action.categories);
        case CHANGE_RECOMMENDS:
            return state.set("recommends", action.recommends);
        case CHANGE_RADIOS:
            return state.set("radios", action.radios);
        default:
            return state;
    }
}


export default djRadioReducer;
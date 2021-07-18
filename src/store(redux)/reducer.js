// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

// 导入 recommend里面reducer
import { recommendReducer } from '../pages(页面)/discover/child-pages/recommend(推荐)/store/index';
import { rankingReducer } from '../pages(页面)/discover/child-pages/ranking(排行榜)/store/index';
import { songsReducer } from '../pages(页面)/discover/child-pages/songs(歌单)/store/index';
import { djRadioReducer } from '../pages(页面)/discover/child-pages/djradio(主播电台)/store/index';
import { playerReducer } from '../pages(页面)/player/store/index';


// 前提，就是 State 的属性名必须与子 Reducer 同名。
// const reducer = combineReducers({
//     recommend: recommendReducer,
// });
// 相当于
// function reducer(state = {}, action) {
//     recommend: recommendReducer(state.recommend, action),
// }


// 使用了 immutable
const reducer = combineReducers({
    recommend: recommendReducer,
    ranking: rankingReducer,
    songs: songsReducer,
    djradio: djRadioReducer,
    player: playerReducer,
});


export default reducer;
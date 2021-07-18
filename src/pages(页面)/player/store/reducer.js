import {Map} from 'immutable'


import { 
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_LYRICS,
    CHANGE_SIMI_PLAYLIST,
    CHANGE_SIMI_SONGS,
    CHANGE_PLAY_LIST,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_SEQUENCE,
    CHANGE_CURRENT_LYRIC_INDEX,
 } from './constants';
const defaultState = Map({
    // 当前歌曲
    currentSong: {},
    // 当前歌曲的索引值
    currentSongIndex: 0,
    // 当前歌词
    currentLyrics: [],
    // 包含当前歌曲歌单
    simiPlaylist: [],
    // 相似歌曲
    simiSongs: [],
    // 所有用户播放过的歌曲（播放列表）
    // 我先把一些歌曲保存在playList方便我们测试，你可以把歌曲保存到localStorage，刷新页面就不会丢失
    playList: [
        {
            "a": null,
            "al": {
                "id": 126996669,
                "name": "呼吸之野",
                "pic": 109951165954048750,
                "pic_str": "109951165954048759",
                "picUrl": "https://p2.music.126.net/EepVxZ_7Z0qAiW_UYcC7EA==/109951165954048759.jpg",
                "tns": []
            },
            "alia": [],
            "ar": [
                {
                    "alias": [],
                    "id": 5771,
                    "name": "许嵩",
                    "tns": []
                }
            ],
            "cd": "01",
            "cf": "",
            "copyright": 1,
            "cp": 22036,
            "crbt": null,
            "djId": 0,
            "dt": 329130,
            "fee": 0,
            "ftype": 0,
            "h": {
                "br": 320001,
                "fid": 0,
                "size": 13167848,
                "vd": -45292
            },
            "id": 1842784921,
            "l": {
                "br": 128001,
                "fid": 0,
                "size": 5267165,
                "vd": -40958
            },
            "m": {
                "br": 192001,
                "fid": 0,
                "size": 7900726,
                "vd": -42671
            },
            "mark": 0,
            "mst": 9,
            "mv": 14286362,
            "name": "乌鸦",
            "no": 1,
            "noCopyrightRcmd": null,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "pop": 100,
            "pst": 0,
            "publishTime": 1620576000000,
            "resourceState": true,
            "rt": "",
            "rtUrl": null,
            "rtUrls": [],
            "rtype": 0,
            "rurl": null,
            "s_id": 0,
            "single": 0,
            "st": 0,
            "t": 0,
            "v": 7,
            "version": 7
        },
        {
            "name": "有何不可",
            "id": 167876,
            "pst": 0,
            "t": 0,
            "ar": [
              {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
              }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600902000007916021",
            "fee": 8,
            "v": 49,
            "crbt": null,
            "cf": "",
            "al": {
              "id": 16953,
              "name": "自定义",
              "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
              "tns": [],
              "pic_str": "18590542604286213",
              "pic": 18590542604286212
            },
            "dt": 241840,
            "h": {
              "br": 320000,
              "fid": 0,
              "size": 9675799,
              "vd": -21099
            },
            "m": {
              "br": 192000,
              "fid": 0,
              "size": 5805497,
              "vd": -18400
            },
            "l": {
              "br": 128000,
              "fid": 0,
              "size": 3870346,
              "vd": -16900
            },
            "a": null,
            "cd": "1",
            "no": 3,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "mst": 9,
            "cp": 14026,
            "rtype": 0,
            "rurl": null,
            "publishTime": 1231516800000
        },
        {
            "a": null,
            "al": {
                "id": 16951,
                "name": "寻雾启示",
                "pic": 34084860473122,
                "picUrl": "https://p1.music.126.net/3hqcQrXZ39kDCCzV7QbZjA==/34084860473122.jpg",
                "tns": []
            },
            "alia": [],
            "ar": [
                {
                    "alias": [],
                    "id": 5771,
                    "name": "许嵩",
                    "tns": []
                }
            ],
            "cd": "1",
            "cf": "",
            "copyright": 1,
            "cp": 14026,
            "crbt": null,
            "djId": 0,
            "dt": 255000,
            "fee": 8,
            "ftype": 0,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 10223324,
                "vd": -19800
            },
            "id": 167850,
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4089355,
                "vd": -15900
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6134012,
                "vd": -17100
            },
            "mark": 8192,
            "mst": 9,
            "mv": 0,
            "name": "庐州月",
            "no": 4,
            "noCopyrightRcmd": null,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "pop": 100,
            "pst": 0,
            "publishTime": 1262707200007,
            "resourceState": true,
            "rt": "600902000009209219",
            "rtUrl": null,
            "rtUrls": [],
            "rtype": 0,
            "rurl": null,
            "s_id": 0,
            "single": 0,
            "st": 0,
            "t": 0,
            "v": 46
        },
        {
            "a": null,
            "al": {
                "id": 16953,
                "name": "自定义",
                "pic": 18590542604286212,
                "pic_str": "18590542604286213",
                "picUrl": "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
                "tns": []
            },
            "alia": [],
            "ar": [
                {
                    "alias": [],
                    "id": 5771,
                    "name": "许嵩",
                    "tns": []
                }
            ],
            "cd": "1",
            "cf": "",
            "copyright": 2,
            "cp": 14026,
            "crbt": null,
            "djId": 0,
            "dt": 219000,
            "fee": 8,
            "ftype": 0,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 8797039,
                "vd": -22800
            },
            "id": 167882,
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3518841,
                "vd": -18900
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5278240,
                "vd": -20100
            },
            "mark": 8192,
            "mst": 9,
            "mv": 0,
            "name": "清明雨上",
            "no": 5,
            "noCopyrightRcmd": null,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "pop": 100,
            "pst": 0,
            "publishTime": 1231516800000,
            "resourceState": true,
            "rt": "600902000009525656",
            "rtUrl": null,
            "rtUrls": [],
            "rtype": 0,
            "rurl": null,
            "s_id": 0,
            "single": 0,
            "st": 0,
            "t": 0,
            "v": 43
        },
        
    ],
    // 播放的顺序
    sequence: 0, // 0 循环 1 随机 2 单曲
    // 获取唱到的解析的歌词的index
    currentLyricIndex: 0,
});

function playerReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case CHANGE_CURRENT_LYRICS:
            return state.set("currentLyrics", action.currentLyrics);
        case CHANGE_SIMI_PLAYLIST:
            return state.set("simiPlaylist", action.simiPlaylist);
        case CHANGE_SIMI_SONGS:
            return state.set("simiSongs", action.simiSongs);
        case CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.currentSongIndex);
        case CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence);
        case CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.currentLyricIndex);
        default:
            return state;
    }
}

export default playerReducer;
import { getLyric, getSimiPlaylist, getSimiSong, getSongDetail } from '../../../services(网络请求相关)/player'
import { parseLyric } from '../../../utils(自己封装工具)/lrc-parse'


import {
    CHANGE_CURRENT_LYRICS,
    CHANGE_CURRENT_LYRIC_INDEX,
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_PLAY_LIST,
    CHANGE_SEQUENCE,
    CHANGE_SIMI_PLAYLIST,
    CHANGE_SIMI_SONGS,
} from './constants'

// 获取一首歌的信息
const changeCurrentSongAction = (currentSong) => {
    return {
        type: CHANGE_CURRENT_SONG,
        currentSong: currentSong,
    }
}

// 获取歌词
const changeLyricsAction = (currentLyrics) => {
    return {
        type: CHANGE_CURRENT_LYRICS,
        currentLyrics: currentLyrics
    }
}

// 获取播放列表
const changePlayListAction = (playList) => {
    return {
        type: CHANGE_PLAY_LIST,
        playList: playList,
    }
}

// 该歌曲的index
const changeCurrentSongIndexAction = (currentSongIndex) => {
    return {
        type: CHANGE_CURRENT_SONG_INDEX,
        currentSongIndex: currentSongIndex
    }
}

// 播放顺序
export const changeSequenceAction = (sequence) => {
    return {
        type: CHANGE_SEQUENCE,
        sequence: sequence
    }
}

// 歌曲的上一首和下一首
export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        const playList = getState().get("player").get("playList");
        const sequence = getState().get("player").get("sequence");
        let currentSongIndex = getState().get("player").get("currentSongIndex");

        switch (sequence) {
            case 1: // 随机播放
                let randomIndex = Math.floor(Math.random() * playList.length);
                // 判断随机歌曲是否还是刚才的歌曲
                while (randomIndex === currentSongIndex) {
                    randomIndex = Math.floor(Math.random() * playList.length);
                }
                currentSongIndex = randomIndex;
                break;
            default: // 因为顺序和单曲点击下一首都会切换下一首
                currentSongIndex += tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0;
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        }

        // 根据最新歌曲在播放列表的index
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));

        // 请求当前的歌词,并且解析
        dispatch(getLyricAction(currentSong.id));
    }
}

// 利用ids获取
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 1. 根据id查找playList中是否已经有了该歌曲
        // 拿到播放列表
        const playList = getState().get("player").get("playList");
        // 根据歌曲的id是否和ids一样，利用findIndex() (一样说明有该歌曲返回该歌曲的index，不一样返回-1)
        const songIndex = playList.findIndex(song => song.id === ids);


        // 2.判断是否找到歌曲
        let song = null;
        if (songIndex !== -1) {  // 找到歌曲
            // 改变成当前最新的歌曲数据
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));
            // 修改该歌曲的index
            dispatch(changeCurrentSongIndexAction(songIndex));
            // 请求当前的歌词
            dispatch(getLyricAction(song.id));
        } else {  // 没有找到歌曲
            // 请求歌曲数据
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0];
                if (!song) return;

                // 1. 将最新请求到的歌曲添加到播放列表中
                const newPlayList = [...playList]; // 因为我们reducer使用Map不是fromjs
                // 把歌曲push到最新的播放列表中
                newPlayList.push(song);

                // 2.更新redux中的值
                // 更新最新的播放列表
                dispatch(changePlayListAction(newPlayList));
                // 更新最新的歌曲index
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                // 更新最新的歌曲的数据
                dispatch(changeCurrentSongAction(song))

                // 3.请求当前的歌词
                dispatch(getLyricAction(song.id));
            })
        }
    }
}

// 获取歌曲，并且解析
export const getLyricAction = (id) => {
    return dispatch => {
        // 获取当前的歌词,并且解析
        getLyric(id).then(res => {
            const lrcString = res.lrc.lyric;
            const lyrics = parseLyric(lrcString);
            dispatch(changeLyricsAction(lyrics));
        })
    }
}

// 获取唱到的解析的歌词的index
export const changeCurrentLyricIndexAction = (currentLyricIndex) => {
    return {
        type: CHANGE_CURRENT_LYRIC_INDEX,
        currentLyricIndex: currentLyricIndex,
    }
}


// 获取包含这首歌的歌单
const changeSimiPlaylistAction = (simiPlaylist) => {
    return {
        type: CHANGE_SIMI_PLAYLIST,
        simiPlaylist: simiPlaylist,
    }
}

export const getSimiPlaylistAction = () => {
    return (dispatch, getState) => {
        const id = getState().get("player").get("currentSong").id;
        if (!id) return;

        getSimiPlaylist(id).then(res => {
            dispatch(changeSimiPlaylistAction(res.playlists))
        })
    }
}

// 相似歌曲
const changeSimiSongsAction = (simiSongs) => {
    return {
        type: CHANGE_SIMI_SONGS,
        simiSongs: simiSongs
    }
}

export const getSimiSongAction = () => {
    return (dispatch, getState) => {
        const id = getState().get("player").get("currentSong").id;
        if (!id) return;

        getSimiSong(id).then(res => {
            dispatch(changeSimiSongsAction(res.songs))
        })
    }
}





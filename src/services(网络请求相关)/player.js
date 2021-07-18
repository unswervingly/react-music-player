import request from './request';

// 得到歌曲细节
export function getSongDetail(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids,
        }
    })
}

// 得到歌词
export function getLyric(id) {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}

// 得到id 包含这首歌的歌单信息
export function getSimiPlaylist(id) {
    return request({
        url: "/simi/playlist",
        params: {
            id
        }
    })
}

// 得到id 获取相似歌曲
export function getSimiSong(id) {
    return request({
        url: "/simi/song",
        params: {
            id
        }
    })
}
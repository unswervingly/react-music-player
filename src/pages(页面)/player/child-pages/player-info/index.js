import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { getSizeImageY } from '../../../../utils(自己封装工具)/format-utils'

import WYSongOperationBar from '../../../../components(共享组件)/song-operation-bar/index'
import {
    InfoWrapper,
    InfoLeft,
    InfoRight
} from './style'
export default memo(function WYPlayerInfo() {

    // props and hooks
    const [isSpread, setIsSpread] = useState(false);

    // redux-hooks
    const state = useSelector(state => {
        return {
            currentSong: state.get("player").get("currentSong"),
            currentLyrics: state.get("player").get("currentLyrics"),
        }
    }, shallowEqual)
    const currentSong = state.currentSong;
    const currentLyrics = state.currentLyrics;
    ;
    // other hooks


    // other handle
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
    const songsName = (currentSong.al && currentSong.al.name) || "";
    const totalLyricCount = isSpread ? currentLyrics.length : 13;

    return (
        <InfoWrapper>
            <InfoLeft>
                <div className="image">
                    <img src={getSizeImageY(picUrl, 130)} alt="" />
                    <span className="cover image_cover"></span>
                </div>
                <div className="link">
                    <i className="sprite_icon2"></i>
                    <a href="#/">生成外联播放器</a>
                </div>
            </InfoLeft>
            <InfoRight isSpread={isSpread}>
                <div className="header">
                    <i className="sprite_icon2"></i>
                    <h3 className="title">{currentSong.name}</h3>
                </div>
                <div className="singer">
                    <span className="label">歌手：</span>
                    <a href="/#" className="name">{singerName}</a>
                </div>
                <div className="album">
                    <span className="label">所属专辑：</span>
                    <a href="/#" className="name">{songsName}</a>
                </div>

                <WYSongOperationBar favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)" />

                <div className="lyric">
                    <div className="lyric-info">
                        {
                            currentLyrics.slice(0, totalLyricCount).map((item, index) => {
                                return <p key={item.time} className="text">{item.content}</p>
                            })
                        }
                    </div>
                    <button className="lyric-control" onClick={e => setIsSpread(!isSpread)}>
                        {isSpread ? "收起": "展开"}
                        <i className="sprite_icon2"></i>
                    </button>
                    
                    <div className="lrc-user">
                        <p><a href="/#">报错</a></p>
                    </div>
                </div>
            </InfoRight>
        </InfoWrapper>
    )
})

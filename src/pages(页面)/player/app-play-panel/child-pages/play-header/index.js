import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
} from './style'
export default memo(function WYPlayHeader() {

    const state = useSelector(state => {
        return {
            currentSong: state.get("player").get("currentSong"),
            playList: state.get("player").get("playList"),
        }
    }, shallowEqual)
    const currentSong = state.currentSong;
    const playList = state.playList;


    return (
        <HeaderWrapper>
            <HeaderLeft>
                <h3>播放列表({playList.length})</h3>
                <div className="operator">
                    <button>
                        <i className="sprite_playlist icon favor"></i>
                        收藏全部
                    </button>
                    <span>|</span>
                    <button>
                        <i className="sprite_playlist icon remove"></i>
                        清除
                    </button>
                </div>
            </HeaderLeft>
            <HeaderRight>
                {currentSong.name}
            </HeaderRight>
        </HeaderWrapper>
    )
})

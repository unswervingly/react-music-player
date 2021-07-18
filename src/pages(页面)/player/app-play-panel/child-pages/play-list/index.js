import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import { formatMinuteSecond } from '../../../../../utils(自己封装工具)/format-utils'

import {
    PlayListWrapper,
} from './style'
export default memo(function WYPlayList() {

    const state = useSelector(state => {
        return {
            playList: state.get("player").get("playList"),
            currentSongIndex: state.get("player").get("currentSongIndex"),
        }
    }, shallowEqual)
    const playList = state.playList || [];
    const currentSongIndex = state.currentSongIndex;


    return (
        <PlayListWrapper>
            {
                playList.map((item, index) => {
                    return (
                        <div key={item.id} 
                             className={classNames("play-item", {"active": currentSongIndex === index})}>
                            <div className="left">{item.name}</div>
                            <div className="right">
                                <span className="singer">{item.ar[0].name}</span>
                                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                                <span className="sprite_playlist link"></span>
                            </div>
                            <div className="line"></div>
                        </div>
                    )
                })
            }
        </PlayListWrapper>
    )
})

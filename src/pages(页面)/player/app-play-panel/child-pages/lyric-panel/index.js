import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'


import {
    PannelWrapper,
} from './style'
export default memo(function WYLyricPanel() {

    const state = useSelector(state => {
        return {
            currentLyrics: state.get("player").get("currentLyrics"),
            currentLyricIndex: state.get("player").get("currentLyricIndex"),
        }
    })
    const currentLyrics = state.currentLyrics;
    const currentLyricIndex = state.currentLyricIndex;

    return (
        <PannelWrapper>
            <div className="lrc-content">
                {
                    currentLyrics.map((item, index) => {
                        return (
                            <div key={item.time} 
                                 className={classNames("lrc-item", {"active": currentLyricIndex === index})}>
                                {item.content}
                            </div>
                        )
                    })
                }
            </div>
        </PannelWrapper>
    )
})

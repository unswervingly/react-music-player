import React, { memo } from 'react'


import WYPlayerInfo from './child-pages/player-info/index'
import WYPlayerComment from './child-pages/player-comment/index'
import WYPlayerSongs from './child-pages/player-songs/index'
import WYPlayerRelevant from './child-pages/player-relevant/index'
import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight,
} from './style'
export default memo(function WYPlayer() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <WYPlayerInfo/>
                    <WYPlayerComment/>
                </PlayerLeft>
                <PlayerRight>
                    <WYPlayerSongs/>
                    <WYPlayerRelevant/>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})

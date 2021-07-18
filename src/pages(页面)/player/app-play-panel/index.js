import React, { memo } from 'react'


import WYPlayHeader from '../app-play-panel/child-pages/play-header/index'
import WYPlayList from '../app-play-panel/child-pages/play-list/index'
import WYLyricPanel from '../app-play-panel/child-pages/lyric-panel/index'
import {
    PanelWrapper,
} from './style'
export default memo(function WYAppPlayPanel() {
    return (
        <PanelWrapper>
            <WYPlayHeader/>
            <div className="main">
                <WYPlayList/>
                <WYLyricPanel/>
            </div>
        </PanelWrapper>
    )
})



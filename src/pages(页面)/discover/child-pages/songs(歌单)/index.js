import React, { memo } from 'react'


import WYSongsHeader from './child-cpns(子组件)/1.songs-header/index'
import WYSongsList from './child-cpns(子组件)/2.songs-list/index'


import { SongsWrapper } from './style'
export default memo(function WYSongs() {

    return (
        <SongsWrapper className="wrap-v2">
            <WYSongsHeader/>
            <WYSongsList/>
        </SongsWrapper>
    )
})

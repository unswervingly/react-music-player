import React, { memo } from 'react'



import { HeaderWrapper } from './style'
export default memo(function WYThemeHeaderSong(props) {

    const { info } = props;

    return (
        <HeaderWrapper>
            <div className="left">
                <h3 className="title">歌曲列表</h3>
                <div className="count">{info.trackCount}首歌</div>
            </div>
            <div className="right">
                <span>播放：</span>
                <span className="count">{info.playCount}</span>
                <span>次</span>
            </div>
        </HeaderWrapper>
    )
})

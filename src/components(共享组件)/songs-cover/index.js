import React, { memo } from 'react'
import classNames from 'classnames'

import { getCount, getSizeImageX } from '../../utils(自己封装工具)/format-utils'
import { SongsCoverWrapper } from './style'

export default memo(function WYSongsCover(props) {
    
    return (
        <SongsCoverWrapper right={props.right}>
            <div className='cover-top'>
                <img src={getSizeImageX(props.info.picUrl || props.info.coverImgUrl, 140)} alt={props.info.name}/>
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(props.info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className='cover-bottom'>
                <div className={classNames("cover-bottom", {"text-nowrap": (window.location.hash !== '#/discover/recommend')})}>
                    {props.info.name}
                </div>
            </div>
            <div className={classNames("cover-source", {"text-nowrap": (window.location.hash !== '#/discover/recommend')})}>
                
                {(window.location.hash === '#/discover/recommend') ? '' : ("by " + (props.info.copywriter || props.info.creator.nickname))}
            </div>
        </SongsCoverWrapper>
    )
})

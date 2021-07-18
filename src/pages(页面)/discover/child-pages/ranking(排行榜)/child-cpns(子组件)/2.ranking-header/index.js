import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import WYSongOperationBar from '../../../../../../components(共享组件)/song-operation-bar/index'

import { formatMonthDay } from '../../../../../../utils(自己封装工具)/format-utils'
import { RankingHeaderWrapper } from './style'
export default memo(function WYRankingHeader() {

    const state = useSelector(state => {
        return {
            playLists: state.get("ranking").get("playLists"),
        }
    }, shallowEqual)
    const topInfo = state.playLists;
    console.log(topInfo);

    return (
        <RankingHeaderWrapper>
            <div className="image">
                <img src={topInfo.coverImgUrl} alt="" />
                <span className="image_cover">封面</span>
            </div>
            <div className="info">
                <div className="title">{topInfo.name}</div>
                <div className="time">
                    <i className="clock sprite_icon2"></i>
                    <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
                    <div className="update-f">（{"每日更新:TODO"}）</div>
                </div>

                <WYSongOperationBar  favorTitle={`(${topInfo.subscribedCount})`}
                                     shareTitle={`(${topInfo.shareCount})`}
                                     commentTitle={`(${topInfo.commentCount})`} 
                                     downloadTitle="下载"/>
            </div>    
        </RankingHeaderWrapper>
    )
})

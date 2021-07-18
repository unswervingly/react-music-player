import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'


import WYThemeHeaderSong from '../../../../../../components(共享组件)/theme-header-song'

import { getSizeImageY, formatMinuteSecond } from '../../../../../../utils(自己封装工具)/format-utils'
import { RankingListWrapper } from './style'
export default memo(function WYRankingList() {

    const state = useSelector(state => {
        return {
            playLists: state.get("ranking").get("playLists"),
        }
    }, shallowEqual)
    const playLists = state.playLists
    const tracks = playLists.tracks || [];

    return (
        <RankingListWrapper>
            <WYThemeHeaderSong info={playLists} />
            <div className="play-list">
                <table>
                    <thead>
                        <tr className="header">
                            <th className="ranking"></th>
                            <th className="title">标题</th>
                            <th className="duration">时长</th>
                            <th className="singer">歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tracks.map((item, index) => {
                                return (
                                    <tr key={item.id} className="item">
                                        <td>
                                            <div className="rank-num">
                                                <span className="num">{index + 1}</span>
                                                <span className="new sprite_icon2"></span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="song-name">
                                                {
                                                    index < 3 ?
                                                        (<img src={getSizeImageY(item.al.picUrl, 50)} alt={item.al} />) : null
                                                }
                                                <span className="play sprite_table" ></span>
                                                <span className="name text-nowrap">{item.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="info">
                                                <div className="time">{formatMinuteSecond(item.dt)}</div>
                                                <div className="operate">
                                                    <button className="btn sprite_icon2 add"></button>
                                                    <button className="btn sprite_table collection"></button>
                                                    <button className="btn sprite_table share"></button>
                                                    <button className="btn sprite_table download"></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.ar[0].name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </RankingListWrapper>
    )
})

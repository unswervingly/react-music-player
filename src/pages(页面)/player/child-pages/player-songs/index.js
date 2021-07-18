import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import WYThemeHeaderPlayer from '../../../../components(共享组件)/theme-header-player/index'
import { getSizeImageY } from '../../../../utils(自己封装工具)/format-utils'
import { getSimiPlaylistAction } from '../../store/createAction'
import {
    PlayerSongsWrapper,
} from './style'
export default memo(function WYPlayerSongs() {

    // props and state

    // redux hooks
    const state = useSelector(state => {
        return {
            simiPlaylist: state.get("player").get("simiPlaylist")
        }
    }, shallowEqual)
    const simiPlaylist = state.simiPlaylist;
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getSimiPlaylistAction())
    }, [dispatch])

    // other handle
    

    return (
        <PlayerSongsWrapper>
            <WYThemeHeaderPlayer title="包含这首歌的歌单"/>
            <div className="songs">
                {
                    simiPlaylist.map((item, index) => {
                        return (
                            <div className="song-item" key={item.id}>
                                <a href="/#" className="image">
                                    <img src={getSizeImageY(item.coverImgUrl, 50)} alt=""/>
                                </a>
                                <div className="info text-nowrap">
                                    <a href="/#" className="name">{item.name}</a>
                                    <div className="auchor">
                                        <span>by</span>
                                        <a href="/#" className="nickname">{item.creator.nickname}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </PlayerSongsWrapper>
    )
})

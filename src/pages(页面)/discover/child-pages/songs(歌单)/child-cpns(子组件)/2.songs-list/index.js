import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import WYSongsCover from '../../../../../../components(共享组件)/songs-cover/index'
import WYPagination from '../../../../../../components(共享组件)/pagination/index'

import { getSongList } from '../../store/createAction';
import { SongListWrapper } from './style'
import { PER_PAGE_NUMBER } from '../../store/constants';

export default memo(function WYSongsList() {

    const [currentPage, setCurrentPage] = useState(1);


    const state = useSelector(state => {
        return {
            categorySongs: state.get("songs").get("categorySongs")
        }
    }, shallowEqual)
    const songList = state.categorySongs.playlists || [];
    const total = state.categorySongs.total || 0;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSongList(0))
    }, [dispatch])


    function onPageChange(page, pageSize) {
        setCurrentPage(page)
        dispatch(getSongList(page))
    }
    return (
        <SongListWrapper>
            <div className="songs-list">
                {
                    songList.map((item, index) => {
                        return (
                            <WYSongsCover info={item} key={item.id} right= "30px"/>
                        )
                    })
                }
            </div>
            <WYPagination currentPage={currentPage}
                          total={total}
                          pageSize={PER_PAGE_NUMBER}
                          onPageChange={onPageChange}/>
        </SongListWrapper>
    )
})

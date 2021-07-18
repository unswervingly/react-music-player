import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'


import WYSongsCategory from '../3.songs-category/index'

import { 
    changeCurrentCategoryAction,
} from "../../store/createAction.js";

import { 
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
 } from './style'
export default memo(function WYSongsHeader() {

    const [showCategory, setShowCategory] = useState(false);
    
    const state = useSelector(state => {
        return {
            currentCategory: state.get("songs").get("currentCategory")
        }
    }, shallowEqual)

    const dispatch = useDispatch();
    const cat = useLocation().cat || "全部";

    useEffect(() => {
        dispatch(changeCurrentCategoryAction(cat));
    }, [dispatch, cat])

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <span className="title">{state.currentCategory}</span>
                <button className="select sprite_button" onClick={e => setShowCategory(!showCategory)}>
                    <div className="ic sprite_button">
                        <span>选择分类</span>
                        <i className="sprite_icon2"></i>
                    </div>
                </button>
                {showCategory ? <WYSongsCategory /> : null}
            </HeaderLeft>
            <HeaderRight>
                <div className="hot-bg sprite_button2">
                    <a href="/todo" className="hot">热门</a>
                </div>
            </HeaderRight>
        </HeaderWrapper>
    )
})

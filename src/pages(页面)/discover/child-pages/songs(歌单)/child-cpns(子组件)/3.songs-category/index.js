import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import {
    changeCurrentCategoryAction,
    getCategory,
    getSongList,
} from "../../store/createAction.js";
import { CategoryWrapper } from './style'
export default memo(function WYSongsCategory(props) {
    const state = useSelector(state => {
        return {
            category: state.get("songs").get("category")
        }
    }, shallowEqual)
    const category = state.category;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch])


    function selectCategory(name) {
        dispatch(changeCurrentCategoryAction(name))
        dispatch(getSongList(0));
    }

    return (
        <CategoryWrapper>
            <div className="arrow sprite_icon"></div>
            <div className="all">
                <a href="/#/discover/songs" className="link" onClick={e => selectCategory("全部")}>全部风格</a>
            </div>
            <div className="category">
                {
                    category.map((item, index) => {
                        return (

                            <dl key={item.name} className={"item" + index}>
                                <dt>
                                    <i className="icon sprite_icon2"></i>
                                    <span>{item.name}</span>
                                </dt>
                                <dd>
                                    {
                                        item.subs.map(itey => {
                                            return (
                                                <div className="item" key={itey.name}>
                                                    <span className="link" onClick={e => selectCategory(itey.name)}>{itey.name}</span>
                                                    <span className="divider">|</span>
                                                </div>
                                            )
                                        })
                                    }
                                </dd>
                            </dl>


                        )
                    })
                }
            </div>
        </CategoryWrapper>
    )
})

import React, { memo } from 'react'
import PropsTypes from 'prop-types'

import {
    HeaderWrapper,
} from './style';

const WYThemeHeaderRCM = memo(function(props) {

    // 解构 可以给个默认值
    // const [title, keywords = []] = props;

    // 可以用 prop-types库 .propTypes判断父组件传过来的属性 是否是我们要的类型 .defaultProps默认值

    return (
        <HeaderWrapper className='sprite_02'>
            <div className='left'>
                <a href="todo" className='title'>{props.title}</a>
                <div className='keyword'>
                    {
                        props.keywords.map((item, index) => {
                            return (
                                <div key={item} className='item'>
                                    <a href="todo">{item}</a>
                                    {(index + 1) !==  props.keywords.length && <span className='divider'>|</span>}
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a href="#/discover/songs">更多</a>
                <i className='icon sprite_02'></i>
            </div>
        </HeaderWrapper>
    )
})

WYThemeHeaderRCM.propTypes = {
    title: PropsTypes.string.isRequired,
    keywords: PropsTypes.array,
}


WYThemeHeaderRCM.defaultProps = {
    keywords: [],
}


export default WYThemeHeaderRCM;
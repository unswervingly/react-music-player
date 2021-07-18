import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd';

import { getTopBannerAction } from '../../store/createAction'

import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from '../1.top-banner/style'

export default memo(function WYTopBanner() {

    // 组件和redux关联：获取数据和进行操作

    // 获取数据
    const topRecommendData = useSelector(state => {
        return {
            // topBanners: state.recommend.topBanners,
            topBanners: state.get("recommend").get('topBanners'),
        }
    }, shallowEqual)
    // shallowEqual 是优化做浅层比较 useSelector 没有shallowEqual是用 == 比较

    // 进行操作
    const dispatch = useDispatch();

    // 发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    // 获取组件实例对象或者是DOM对象
    const bannerRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const bannerChang = useCallback((from, to) => {
        // console.log(to);  // 轮播图的索引
        setCurrentIndex(to);
    }, [])

    const bgImage = topRecommendData.topBanners[currentIndex] && (topRecommendData.topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay beforeChange={bannerChang} ref={bannerRef}>
                        {
                            topRecommendData.topBanners.map((item, index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTitle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
                    <button className='btn right' onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})





// function WYTopBanner(props) {

//     const { getBanners } = props;

//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             <h2>WYTopBanner: {props.topBanners.length}</h2>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         topBanners: state.recommend.topBanners,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getBanners: () => {
//             dispatch(getTopBannerAction())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(memo(WYTopBanner));
import React, { memo } from 'react'


import WYTopBanner from '../recommend(推荐)/child-cpns(子组件)/1.top-banner/index'
import WYHotRecommend from '../recommend(推荐)/child-cpns(子组件)/2.hot-recommend/index'
import WYNewAlbum from '../recommend(推荐)/child-cpns(子组件)/3.new-album/index'
import WYRecommendRanking from '../recommend(推荐)/child-cpns(子组件)/4.recommend-ranking/index'
import WYUserLogin from '../recommend(推荐)/child-cpns(子组件)/5.user-login/index'
import WYSettleSinger from '../recommend(推荐)/child-cpns(子组件)/6.settle-singer/index'
import WYHotRadio from '../recommend(推荐)/child-cpns(子组件)/7.hot-radio/index'


import {
    Content,
    RecommendWrapper,
    RecommendLeft,
    RecommendRight,
} from '../recommend(推荐)/style'

// 使用hooks
function WYRecommend(props) {
    return (
        <RecommendWrapper>
            <WYTopBanner/>

            <Content className='wrap-v2'>
                <RecommendLeft>
                    <WYHotRecommend/>
                    <WYNewAlbum/>
                    <WYRecommendRanking/>
                </RecommendLeft>
                <RecommendRight>
                    <WYUserLogin/>
                    <WYSettleSinger/>
                    <WYHotRadio/>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}


export default memo(WYRecommend);




// function WYRecommend(props) {

//     const { getBanners } = props;

//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             <h2>WYRecommend：{props.topBanners.length}</h2>
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

// export default connect(mapStateToProps, mapDispatchToProps)(memo(WYRecommend));
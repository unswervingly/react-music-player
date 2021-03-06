import React, { Fragment, memo } from 'react'
import { footerImages, footerLinks } from '../../common(公共)/local-data'

import {
    AppFooterWrapper,
    FooterLeft,
    FooterRight
} from './style'
export default memo(function WYAppFooter() {


    return (
        <AppFooterWrapper>
            <div className="content wrap-v2">
                <FooterLeft className="left">
                    <div className="link">
                        {
                            footerLinks.map((item, index) => {
                                return (
                                    <Fragment key={item.title}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                                        <span className="line">|</span>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="copyright">
                        <span>网易公司版权所有©1997-2020</span>
                        <span>
                            杭州乐读科技有限公司运营：
                            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
                        </span>
                    </div>
                    <div className="report">
                        <span>违法和不良信息举报电话：0571-89853516</span>
                        <span>
                            举报邮箱：
                            <a href="mailto:ncm5990@163.com" rel="noopener noreferrer" target="_blank">ncm5990@163.com</a>
                        </span>
                    </div>
                    <div className="info">
                        <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
                        粤B2-20090191-18  工业和信息化部备案管理系统网站 
                        </a>
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank" className="alink">
                            <span className="police-logo"></span>
                            <span>浙公网安备 33010902002564号</span>
                        </a>
                    </div>
                </FooterLeft>
                <FooterRight className="right">
                        {
                            footerImages.map((item, index) => {
                                return (
                                    <li className="item" key={item.link}>
                                        <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                                        <span className="title">{item.title}</span>
                                    </li>
                                )
                            })
                        }
                </FooterRight>
            </div>
        </AppFooterWrapper>
    )
})

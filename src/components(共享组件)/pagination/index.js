import React, { memo } from 'react'
import { Pagination } from 'antd';


import { PaginationWrapper } from './style'
export default memo(function WYPagination(props) {

    const { currentPage, total, pageSize,onPageChange } = props;

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <button className="control prev"> &lt; 上一页</button>;
        }
        if (type === 'next') {
            return<button className="control next">上一页 &gt;</button>;
        }
        return originalElement;
    }

    return (
        <PaginationWrapper>
            <Pagination className="pagination"
                size="small"
                defaultCurrent={1}
                pageSize={pageSize}
                showSizeChanger={false}
                current={currentPage}
                total={total}
                onChange={onPageChange}
                itemRender={itemRender}
            />
        </PaginationWrapper>
    )
})

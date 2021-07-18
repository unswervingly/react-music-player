import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';



import { 
    getRadioCategories,
 } from '../../store/createAction';
import { 
    CategoryWrapper,
    CategoryContent,
    CategoryItemImage,
} from './style'
export default memo(function WYRadioCategory() {


    const state = useSelector(state => {
        return {
            categories: state.get("djradio").get("categories")
        }
    }, shallowEqual)
    const {categories} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRadioCategories());
    }, [dispatch])

    return (
        <CategoryWrapper>
            <CategoryContent>
            1
            </CategoryContent>
        </CategoryWrapper>
    )
})

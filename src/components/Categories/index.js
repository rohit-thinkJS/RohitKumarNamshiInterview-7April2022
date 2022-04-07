import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList } from '../../redux/FetchItemsList/action'
import './index.css'

const Categories = () => {

    const categoriesList = useSelector(state => state.shopReducer.categoriesList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesList())
    }, [])

    console.log({ categoriesList })

    return (
        <div>
            <p style={{ fontWeight: "600", fontSize: "22px" }}>Categories</p>
            {
                categoriesList?.map(item => {
                    return (
                        <p>{item}</p>
                    )
                })
            }

        </div>
    )
}

export default Categories
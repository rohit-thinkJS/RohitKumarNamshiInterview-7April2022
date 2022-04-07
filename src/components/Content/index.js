import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchItemsList } from '../../redux/FetchItemsList/action'
import './index.css'

const Content = () => {
    const itemsList = useSelector(state => state.shopReducer.itemsList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItemsList())
    }, [])

    const handleAddCart = (item) => {

        dispatch(addToCart(item))
    }

    return (
        <div>
            <p style={{ fontWeight: "600", fontSize: "22px" }}>All Items <span className='items-list-total-items'>({itemsList?.length} items)</span></p>
            {
                itemsList?.map(item => {
                    return (
                        <div className="item-list-view">
                            <img src={item?.image} className="item-list-image" />
                            <div className='item-list-details'>
                                <p>{item.title}</p>
                                <p>&#8377;{item.price}</p>
                                <p>{item.description}</p>
                            </div>
                            { }
                            <Button className='item-list-button' onClick={() => handleAddCart(item)}>Add</Button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Content
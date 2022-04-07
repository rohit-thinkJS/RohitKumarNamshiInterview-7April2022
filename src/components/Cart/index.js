import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../../redux/FetchItemsList/action'

import './index.css'

const Cart = () => {
    const cartList = useSelector(state => state.shopReducer.cartList)
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        let totalPrice = 0
        for (let i = 0; i < cartList.length; i++) {
            totalPrice += cartList[i]?.price
        }
        setTotal(totalPrice)
    }, [cartList])

    return (
        <div className='my-cart-wrapper'>
            <div className='my-cart-header'>
                <span style={{ fontWeight: "600", fontSize: "20px" }}>
                    My Cart
                    <span style={{ marginLeft: "10px", color: "gray" }}>{cartList?.length} item(s)</span>
                </span>
                <span className='my-cart-clear' onClick={() => dispatch(emptyCart())}>Clear Cart</span>
            </div>
            <hr />

            {
                cartList?.map(item => {
                    return (
                        <div>
                            <div className='my-cart-list'>
                                <span style={{ fontWeight: "600" }}>{item?.title}</span>
                                <span>&#8377;{item?.price}</span>
                            </div>
                        </div>
                    )
                })
            }
            {
                cartList?.length ?
                    <>
                        <hr />
                        <div className='my-cart-total'>
                            <span>Items Total:</span>
                            <span>&#8377;{total}</span>
                        </div>
                    </>
                    : ''
            }
        </div>
    )
}

export default Cart
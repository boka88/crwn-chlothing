import React from 'react'
import { addItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ( {cartItem:{ imageUrl, name, price, quantity } } ) => (

    <div className='checkout-item'>
        <div className='image-contact'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
   </div>

)

export default CheckoutItem
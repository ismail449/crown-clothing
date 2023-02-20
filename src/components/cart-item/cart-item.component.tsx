import React from 'react'
import './cart-item.styles.scss'

type CartItemProps = {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string
}

const CartItem = ({name, quantity, imageUrl, price}:CartItemProps) => {
  return (
    <div className='cart-item-container ' >
      <img src={imageUrl} alt={name} />
      <div className='item-details' >
      <span className='name'>{name}</span>
      <span>{quantity} x ${price}</span>
      </div>
      
    </div>
  )
}

export default CartItem
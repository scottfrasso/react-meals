import React from 'react'

import classes from './CartItem.module.css'

type Props = {
  name: string
  price: number
  amount: number
  onRemove: (e: React.MouseEvent) => void
  onAdd: (e: React.MouseEvent) => void
}

const CartItem = ({ name, price, amount, onRemove, onAdd }: Props) => {
  const fixedPrice = `$${price.toFixed(2)}`

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{fixedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  )
}

export default CartItem

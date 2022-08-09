import { useState, useContext } from 'react'

import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

import classes from './Cart.module.css'

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false)

  const cartContext = useContext(CartContext)

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
  const hasItems = cartContext.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const orderHandler = (event) => {
    setIsCheckout(true)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, { ...item })}
          />
        )
      })}
    </ul>
  )

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  )
}

export default Cart

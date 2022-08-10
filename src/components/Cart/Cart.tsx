import React, { useState, useContext } from 'react'

import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import {
  CartContextProviderType,
  CartItem as ItemInCart,
} from '../../store/types'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { UserData } from './types'

import classes from './Cart.module.css'

type Props = {
  onClose: (event: React.MouseEvent) => void
}

const Cart = (props: Props) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const cartContext = useContext(CartContext) as CartContextProviderType

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
  const hasItems = cartContext.items.length > 0

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id)
  }

  const cartItemAddHandler = (item: ItemInCart) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const orderHandler = (event: React.MouseEvent) => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData: UserData) => {
    setIsSubmitting(true)
    await fetch(
      'https://react-meals-69a9e-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    )

    setIsSubmitting(false)
    setDidSubmit(true)
    cartContext.clearCart()
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

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart

import React, { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import { CartContextProviderType, CartItem } from '../../store/types'

import classes from './HeaderCartButton.module.css'

type Props = {
  onClick: (e: React.MouseEvent) => void
}

const HeaderCartButton = (props: Props) => {
  const [buttonIsHighlited, setButtonIsHighlited] = useState<boolean>()
  const { items } = useContext(CartContext) as CartContextProviderType

  const numberOfCartItems = items.reduce(
    (currentNumber: number, item: CartItem) => {
      return currentNumber + item.amount
    },
    0
  )

  const buttonClasses = `${classes.button} ${
    buttonIsHighlited ? classes.bump : ''
  }`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setButtonIsHighlited(true)

    const timer = setTimeout(() => {
      setButtonIsHighlited(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton

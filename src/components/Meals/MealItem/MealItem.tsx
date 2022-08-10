import { useContext } from 'react'

import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
import { CartContextProviderType } from '../../../store/types'

import classes from './MealItem.module.css'

type Props = {
  id: string
  name: string
  description: string
  price: number
}

const MealItem = ({ id, name, description, price }: Props) => {
  const cartContext = useContext(CartContext) as CartContextProviderType
  const fixedPrice = `$${price.toFixed(2)}`

  const addToCartHandler = (amount: number) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  )
}

export default MealItem

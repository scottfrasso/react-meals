import React from 'react'

import { CartContextProviderType } from './types'

const CartContext = React.createContext<CartContextProviderType | null>(null)

export default CartContext

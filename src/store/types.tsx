import React from 'react'

export type CartProviderProps = {
  children?: React.ReactNode
}

export interface CartItem {
  id: string
  name: string
  price: number
  amount: number
}

export interface CartState {
  items: CartItem[]
  totalAmount: number
}

export const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
}

export enum CartActionType {
  ADD,
  REMOVE,
  CLEAR,
}

export interface CartAddAction {
  type: CartActionType.ADD
  item: CartItem
}

export interface CartRemoveAction {
  type: CartActionType.REMOVE
  id: string
}

export interface CartClearAction {
  type: CartActionType.CLEAR
}

export type CartActions = CartAddAction | CartRemoveAction | CartClearAction

export type CartContextProviderType = {
  items: CartItem[]
  totalAmount: number
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

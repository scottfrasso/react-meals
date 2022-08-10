import React from 'react'

import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'

type Props = {
  onShowCart: (e: React.MouseEvent) => void
}

const Header = ({ onShowCart }: Props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of food' />
      </div>
    </React.Fragment>
  )
}

export default Header

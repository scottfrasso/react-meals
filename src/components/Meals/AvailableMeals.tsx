import { useEffect, useState } from 'react'

import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import { AvailableMealItem } from './types'

import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
  const [meals, setMeals] = useState<AvailableMealItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [httpError, setHttpError] = useState<string | undefined>()

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await fetch(
        'https://react-meals-69a9e-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      )

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const responseData = await response.json()

      const loadedMeals: AvailableMealItem[] = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch((error) => {
      setIsLoading(false)
      setHttpError(error.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <h1>Loading...</h1>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map((meal: AvailableMealItem) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    )
  })

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals

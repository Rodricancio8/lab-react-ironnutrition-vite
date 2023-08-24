import React from "react"


function FoodBox(props) { /// PROPS AS AN PARAMETER

    const { id, name, calories, image, servings} = props.food
    const totalCalories = servings * calories
    
    const handleDelete = () => {
        props.deleteOne(id)
      }

return (
<div>
  <p>{name}</p>

  <img src={image} />

  <p>Calories: {calories}</p>
  <p>Servings {servings}</p>

  <p>
    <b>Total Calories: {totalCalories} </b> kcal
  </p>

    <button onClick={() => handleDelete()}>Delete</button>
</div>

   )

}

export default FoodBox
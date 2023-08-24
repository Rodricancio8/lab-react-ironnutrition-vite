import "./App.css"
import foodsJson from "./foods.json"
import { useState } from 'react'
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"



function App() {

  const [foods, setFoods] = useState(foodsJson)

  const CreateFood = (newFood) => {
    setFoods([...foods, newFood]);
  };
  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id)
    setFoods(updatedFoods)

  }
  return (

    

    <div className="App">
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} deleteOne={deleteFood} /> /// PROPS
        ))}
        <AddFoodForm key={name} createFood={CreateFood} />
      
    </div>
  );
}

export default App;


import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(5);
  const [servings, setServings] = useState(0);

  function resetInputs(){
    setName("");
    setImage("");
    setCalories(5);
    setServings(0);
  }

  const handleSubmit = (e) => {
  
    e.preventDefault();
    
    const newForm = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    }

    // I want to change the array of movies that it's in the parent component

    props.createFood(newForm);
   
    resetInputs();
  }

  return (
    <div className="AddFoodForm">

      <form>
        <label>Title: </label>
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <label>Image: </label>
        <input
          type="text"
          name="image"
          onChange={(event) => setImage(event.target.value)}
          value={image}
        />

        <label>Calories</label>
        <input
          type="number"
          name="calories"
          onChange={(event) => setCalories(event.target.value)}
          value={calories}
        />

        <label>Servings</label>
        <input
          type="number"
          name="servings"
          onChange={(event) => setServings(event.target.checked)}
          checked={servings}
        />
        <button onClick={(e) => handleSubmit(e)} type="submit">Create</button>
      </form>
    </div>
  );

}

export default AddFoodForm
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {
const [food, setFood] = useState([]); 

const getFood = async () => {
  const response = await axios.get('https://localhost:5000/api/Foods/GetFood1');
  setFood(response.data);
  console.log("a");
}

useEffect(() => {
  getFood();
}, []);

// const getFood = async () => {
//   const response = await axios.get('https://localhost:5000/api/Foods/GetFood1');
//   console.log(response);
//   setFood(response.data);
// }

// useEffect(() => {
//    axios.get('https://localhost:5000/api/Foods/GetFood1').then(response => {
//     setFood(response.data);
//     console.log(response.data);
//   }, [])
// })

// useEffect(() => {
//   getFood();
//   console.log("1")
// }, []);

  return (
    <div className="App">
      <h1>{food.foodName}</h1>
    </div>
  );
}

export default App;

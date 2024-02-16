import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
   //create piece of state but I'll call it puppies
  //set Puppies -setter function
  //inset in the useState (initial value: array of data)
  //equal to the puppy list in data.js - actual value to assign
  const [featPupId, setFeatPupId] = useState(null);
  //null is helpful with conditional rendering 
  //Array.find = Line 15 
  const featuredPup = puppies.find((puppy) => puppy.id === featPupId)

  //what should we do in handleclick? 
  //components reload and show additoinal information
  //change the featured puppy id


  return (
      <div className="App">
        <p>Featured puppy: {featPupId}</p>
      
       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    


      {
        puppies.map((puppy) => {
        return <p onClick={() => {
      setFeatPupId(puppy.id)
     }} key={puppy.id}>{puppy.name}</p>;
   })
} 
      </div>
  );
}
export default App

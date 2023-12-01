import { useState } from 'react';
import { data } from './data';
import './App.css';

function App () {
  const [country, setCountry] = useState(0);
  const {id, location, image, interest} = data [country];
  console.log(data[country])
  const previousCountry = () => {
    setCountry((country => {
      country --;
      if(country<0){
        return data.length-1;
      }
      return country;
    }))
  }
  const nextCountry = () => {
    setCountry((country => {
      country ++;
      if(country>data.length-1){
        country = 0;
      }
      return country;
    }))
  }
  return (
    <div>
     <div className='container'>
      <h1>My list of must-visit countries in 2024</h1>
     </div>
     <div className='container'>
      <button onClick={previousCountry}>Previous</button>
      <img src={image} width="400px" alt="country"/>
      <button onClick={nextCountry}>Next</button>
     </div>
     <div className='container'>
      <h3>{id} - {location}</h3>
     </div>
     <div className='container'>
      <p><b>Reasons to go:</b> {interest}</p>
     </div>
    </div>
  )
}
export default App;

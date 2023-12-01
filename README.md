### An alternative way to realise the project with more functionality, which I didn't come up with personally but had to use help. Saving it here for future reference and learning purposes.

```bash
#This version of App.js code allows to display only one element from the array to begin with, with the rest of the elements being accessible via Previous and Next buttons. The user can also remove the country which has been ticked off the list and it will be removed from the new array, also changing the total number of countries listed in the <h1> heading.  

import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
# Step 1: Initialize state variables using the useState hook
  const [countries, setCountries] = useState(data);
  const [selectedCountry, setSelectedCountry] = useState(0);
# Step 2: Define a function to navigate to the previous country
  const previousCountry = () => {
    setSelectedCountry((prevCountry) =>
      prevCountry === 0 ? countries.length - 1 : prevCountry - 1
    );
  };
  # Step 3: Define a function to navigate to the next country
  const nextCountry = () => {
    setSelectedCountry((prevCountry) =>
      prevCountry === countries.length - 1 ? 0 : prevCountry + 1
    );
  };
  # Step 4: Define a function to remove a country by its ID
  const removeCountry = (id) => {
    // Use filter to create a new array without the specified country
    const updatedCountries = countries.filter((country) => country.id !== id);
    # Update the state with the new array of countries
    setCountries(updatedCountries);
    # If the removed country is the selected country, clear the selection
    if (selectedCountry >= updatedCountries.length) {
      setSelectedCountry(0);
    }
  };
  # Step 5: Check if there are any countries left before trying to destructure
  const currentCountry =
    countries.length > 0 ? countries[selectedCountry] : null;
  # Step 6: Render the UI
  return (
    <div>
      # Display the total number of countries
      <div className='container'>
        <h1>List of {countries.length} must-visit countries in 2024</h1>
      </div>
      #Render the navigation buttons, country details, and remove button
      {currentCountry && (
        <div className='container'>
          <button onClick={previousCountry}>Previous</button>
          <img src={currentCountry.image} width='400px' alt='country' />
          <button onClick={nextCountry}>Next</button>
        </div>
      )}
      {currentCountry && (
        <div className='container'>
          <h3>
            {currentCountry.id} - {currentCountry.location}
          </h3>
        </div>
      )}
      {currentCountry && (
        <div className='container'>
          <p>
            <b>Reasons to go:</b> {currentCountry.interest}
          </p>
        </div>
      )}
      {currentCountry && (
        <div className='container'>
          # Button to remove the current country
          <button onClick={() => removeCountry(currentCountry.id)}>
            Visited!
          </button>
        </div>
      )}
    </div>
  );
}
export default App;

```

import { useState, useEffect } from 'react';
import './App.css';
import countries from 'i18n-iso-countries';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

function App() {
  // Stato
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('tamilnadu');
  const [state, setState] = useState('tamilnadu');

  // API KEY AND URL
  const apiKey = "71c406cd0696048af1069afda7277927";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

 

  return (
    <div className="App">
   
      <div className="container">
       
          
          
            <input
              type="text"
              id="location-name"
              class="form-control"
              onChange={inputHandler}
              value={getState}
            />
         
          <button className="btn btn-primary mt-2" onClick={submitHandler}>
            Search
          </button>
       


          {apiData.main ? (
           
              <p className="h2">
                {apiData.main.temp- 273.15}&deg; C
              </p>

    
          ) : (
            <h1>Loading</h1>
          )}      
      </div>
    </div>
  );
}

export default App;
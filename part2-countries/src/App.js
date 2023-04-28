import { useState, useEffect } from 'react';
import countriesService from './services/countries';
import CountryList from './components/CountryList';
import Search from './components/Search';

function App() {
    const [countries, setCountries] = useState([]);
    const [newSearch, setNewSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Making call to retrieve the countries from API
    useEffect(() => {
        console.log("Callin getAll from country service");
        countriesService
            .getAllCountries()
            .then(countriesRetrieved => {
                console.log("Countries: ", countriesRetrieved);
                setCountries(countriesRetrieved);
            })
    }, []);

    // Creating event handler for search functionality
    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
      }

    // Dynamically change the list of countries based on search  
    useEffect(() => {
        console.log(countries)
        const result = countries.filter((country) => 
        country.name.common.toLowerCase().includes(newSearch.toLowerCase()));
        setFilteredData(result);
      }, [countries, newSearch]);

    return (
        <div>
            <h1>Countries</h1>
            <Search newSearch={newSearch} change={handleSearchChange}/>
            <CountryList filteredCountries={filteredData}/>
        </div>
    )
}

export default App;

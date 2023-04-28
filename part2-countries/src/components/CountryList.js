import Country from './Country'
import { useState, useEffect } from 'react'

const CountryList = (props) => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const countryListStyle = {
        listStyleType: "none",
        margin: 0,
        padding: 0,
    } 

    const onButtonClickShow = (country) => {
        setSelectedCountry(country);
    }

    if (props.filteredCountries.length > 10) {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    } else if (props.filteredCountries.length === 1) {

        const country = props.filteredCountries[0];
        console.log(country);
        return (
            <div>
                <Country country={country}/>
            </div>
        )

    } else {
        return (
            <>
            <ul style={countryListStyle}>
            {props.filteredCountries.map((country) =>
                <li key={country.name.common} className="countryList">
                    {country.name.common}
                <button onClick={() => onButtonClickShow(country)}>show</button>
                </li>
            )}
            </ul>
            {selectedCountry && <Country country={selectedCountry} />}
            </>
        )
    }
}

export default CountryList
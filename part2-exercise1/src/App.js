import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import phoneService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // Code to get the data from the db.json file
  useEffect(() => {
    console.log('effect')
    phoneService
      .getAll()
      .then(initialPersons => {
        console.log("initialPersons: ", initialPersons)
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    // I think this is where I should add the code to prevent people from adding names that already exist. if exists = use alert, else = do normal code
    if (persons.some(person => person.name === newName)) {
      // Set alert
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    } else {
      // Post the new person to the db.json and persons state
      phoneService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  // Function to delete a person on button click
  const deleteButtonClick = (person) => {
    console.log("Type of persons: ", typeof(persons))
    if (window.confirm(`Delete ${person.name} ?`)) {
      phoneService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
    } 
  }

  // Function to return filtered phonebook
  // const filteredPersons = newSearch ? persons.filter(person => person.name.toLowerCase().search(newSearch) >= 0) : persons

  useEffect(() => {
    console.log(persons)
    const result = persons.filter((person) => 
    person.name.toLowerCase().includes(newSearch.toLowerCase()));
    setFilteredData(result);
  }, [persons, newSearch]);

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} change={handleSearchChange}/>
      <AddPersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PersonsList deletePerson={deleteButtonClick} filteredData={filteredData} />
    </div>
  )
}

export default App
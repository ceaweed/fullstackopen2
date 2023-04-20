import { useEffect, useState } from 'react'
import Search from './components/Search'
import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '8675309', id: 1 },
    { name: 'Jim Hellas', number: '777777', id: 2 },
    { name: 'Caleb Hellas', number: '8888888', id: 3 },
    { name: 'Matt Hellas', number: '999999', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

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
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  // Function to return filtered phonebook
  // const filteredPersons = newSearch ? persons.filter(person => person.name.toLowerCase().search(newSearch) >= 0) : persons

  useEffect(() => {
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
      <PersonsList filteredData={filteredData}/>
    </div>
  )
}

export default App
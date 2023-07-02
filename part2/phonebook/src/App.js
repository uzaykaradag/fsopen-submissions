import {useEffect, useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const hook = () => {
        console.log('effect')
        axios.get('http://localhost:3001/persons').then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
            console.log(response.data)
        })
    }

    useEffect(hook, [])

    const isPresent =
        persons.some(person => person.name === newName)

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        if (isPresent) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }


    }

    const handleNameChange = (event) => {
        console.log(event.target.value, 'NAME')
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value, 'NUMBER')
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        console.log(event.target.value, 'FILTER')
        setFilter(event.target.value)
    }

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilter={handleFilter}/>
            <h3>Add new</h3>
            <PersonForm addPerson={addPerson} newNumber={newNumber} newName={newName}
                        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
            <h3>Numbers</h3>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App

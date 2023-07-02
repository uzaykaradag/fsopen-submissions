import {useEffect, useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from "./services/personService";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const hook = () => {
        console.log('effect')
        personService.getAll()
            .then(response => {
                setPersons(response)
                console.log(response)
            })
    }

    useEffect(hook, [])

    const addPerson = (event) => {
        event.preventDefault()

        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        const matchingPerson = persons.find(person => person.name === newName)

        if (matchingPerson) {
            if (window.confirm(`Do you want to change ${newName}'s number`)) {
                personService.update(matchingPerson.id, personObject)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== matchingPerson.id ? person : returnedPerson))
                    })
                    .catch(error => {
                        console.error('Error:', error)
                    })
            }
        } else {
            personService.create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))

                })
                .catch(error => {
                    console.error('Error:', error)
                })
        }
        setNewName('')
        setNewNumber('')
    }


    const deleteContact = (id) => {
        if (window.confirm("Do you really want to delete this contact?")) {
            personService.remove(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                    setNewName('')
                    setNewNumber('')
                })
                .catch(error => {
                    console.error('Error:', error);
                });
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
            <Persons persons={personsToShow} deleteContact={deleteContact}/>
        </div>
    )
}

export default App

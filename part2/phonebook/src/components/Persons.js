const Persons = ({persons, deleteContact}) => {
    return (
        <div>
            {persons.map(person =>
                <p key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => deleteContact(person.id)}>Delete Contact</button>
                </p>
            )}
        </div>
    );
}


export default Persons
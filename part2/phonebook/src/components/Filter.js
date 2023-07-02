const Filter = ({filter, handleFilter}) => {
    return (
        <div>
            Filter Phonebook: <input value={filter} onChange={handleFilter}/>
        </div>
    )
}

export default Filter
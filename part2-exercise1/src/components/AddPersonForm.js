const AddPersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        <div>
         <p>name: <input value={props.newName} onChange={props.handleNameChange}/></p>
         <p>number: <input value={props.newNumber} onChange={props.handleNumberChange} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddPersonForm
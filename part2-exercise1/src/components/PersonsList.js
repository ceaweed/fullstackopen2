import Person from './Person'

const PersonsList = (props) => {
    return (
        <div>
        {props.filteredData.map((person) =>
        <p key={person.name}>
          <Person name={person.name} number={person.number} />
        </p>)}
      </div>
    )
}

export default PersonsList
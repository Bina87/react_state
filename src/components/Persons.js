import React from 'react'

const Persons = ({person}) => {

  
  return (
  
    <div>
    <h1>hallo</h1>
   {person.filter(person => person.isDone ==true).map(filteredPerson => (
     <ul>
    <li>Name :
      {filteredPerson.fullName}</li>
      <li>IsDone:<img src="https://www.citypng.com/public/uploads/preview/-316225804095zek9ufozk.png" width='25px' height='25px'/></li>
      <li> Bio:{filteredPerson.bio} </li>
      <li>Metier:{filteredPerson.profession}</li>
      <img src={filteredPerson.imgSrc} width='250px' height='250px'/>

    
    </ul>
  ))}
  
    </div>

    

    
  )
}

export default Persons

import React, { useContext, useState } from 'react'
import Component2 from './Component2';




export default function Contextex(){

    const firstName = useContext();
    const lastName = useContext();

    const [fName, setFname] = useState("Animesh");
    const [lName, setLName] = useState("Pandey");

  return (
    <div>
      <firstName.provider value={fName}>
        <lastName.provider value={lName}>
            <Component2 />
        </lastName.provider>
      </firstName.provider>
    </div>
  )
}

export{firstName, lastName};



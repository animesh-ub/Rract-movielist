import React from 'react'
import { firstName,lastName } from './Contextex'

export default function Component3(firstName, lastName) {

  return (
    <div>
        <firstName.Consumer>
            {(fname)=>{
                return (
                    <lastName.Consumer>
                        {(lname)=>{
                            return (
                                <h1> 
                                    My name is {fname} {lname};
                                </h1>
                            );
                        }}
                    </lastName.Consumer>
                );
            }}
        </firstName.Consumer>
      
    </div>
  )
}

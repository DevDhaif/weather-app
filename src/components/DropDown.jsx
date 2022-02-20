import React, { useEffect, useState } from 'react'
import { Country, State, City }  from 'country-state-city';

export const DropDown = ({countries}) => {
  const [states,setStates]=useState([])


    
  
    // const handleState=()=>{
    //     setStates(State.getStatesOfCountry(`YE`))
    // }
  return (
    <div className='flex felx-row w-full mt-4'>
            <div id='countries' className='inline-flex w-full '>
                <label htmlFor="countries">Choose a country:</label>
            
                    <select className=' w-12' name="countries" id="countries">
                    {countries.map((country)=>(
                        
                        
                        <option key={country.name} value={country.name} onChange={() =>setStates(State.getStatesOfCountry(`${country.isoCode}`))}>{country.name}</option>
                        ))
                    }
                    </select> 
            </div>

            <div>
                <label htmlFor="states">Choose a state:</label>

                <select name="states" id="states">
                        {states.map((state)=>(
                            
                    
                    <option key={state.name} value="volvo">{state.name}</option>
                ))
                }
                </select> 
            </div>
      </div>
  )
}

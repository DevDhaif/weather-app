import React, { useEffect, useState } from 'react'
import { Country, State, City }  from 'country-state-city';

export const DropDown = ({countries}) => {
  const [states,setStates]=useState([])


    
  useEffect(()=>{
    console.log(countries);
    
  },[])
    
  return (
    
   <h1>sd</h1>
      
  )
}

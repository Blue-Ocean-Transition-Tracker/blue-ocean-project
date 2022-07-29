import {React, useContext, useState, useEffect} from 'react';
import AppContext from '../../../Context/AppContext'; 
import { NavItems } from './NavItems';
import StudentContext from '../../../Context/StudentPageContext';

export const Nav = () => {
  
  const { allUsersData } = useContext(AppContext)
  const {selected , setSelected, student, setStudent} = useContext(StudentContext)
  
  useEffect(() => {
    setSelected([])
    allUsersData.map((user)=> {
      if (user.cohort_id == 2) {
        setSelected((data) => { return [...data, user]})
      }
    })
  }, []);  

  useEffect(() => {
    if(selected.length > 0) setStudent(selected[0])
  }, [selected])

  const changeStudent = (e) => {
    selected.forEach(element => {
      if(element.user_id == parseInt(e.target.id)) setStudent(element)
    });
  }
  return (
    <div> 
      <h1>MCSP-16</h1>
      <ul>
      {selected.map((user) => {
        return(
          <NavItems user={user} key={user.user_id} changeStudent={changeStudent}  />
        )
        
    })}
      </ul>

    </div>
  )
}

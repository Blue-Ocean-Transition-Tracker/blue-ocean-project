import {React, useContext, useState, useEffect} from 'react';
import AppContext from '../../../Context/AppContext'; 
import StudentContext from '../../../Context/StudentPageContext';
import Loading from '../../LoadingDisplay/Loading';
import { NavItems } from './NavItems';

export const Nav = () => {
  
  const { allUsersData, setLoading } = useContext(AppContext);
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
  if (selected.length <= 0) {
    setLoading(true);
    return <Loading />;

  } else {
    setLoading(false)
    return (
      <div className='sideNav'> 

        <h1>MCSP-16</h1>
        
        <div>
        {selected.map((user) => {
          return(
            <NavItems 
            user={user} 
            key={user.user_id} 
            changeStudent={changeStudent}  />
            ) 
          })}
        </div>
  
      </div>
    )
  }
}

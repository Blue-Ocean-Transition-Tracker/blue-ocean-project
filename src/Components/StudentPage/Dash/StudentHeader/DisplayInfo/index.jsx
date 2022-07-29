import {React, useContext} from 'react';
import StudentContext from '../../../../../Context/StudentPageContext';

export const DisplayInfo = () => {
  const {student} = useContext(StudentContext)
  return(
    <div>
      <h1>{student.first} {student.last}</h1>
      <h3>{student.cohort_name}</h3>
    </div>
  )
}

export default DisplayInfo;
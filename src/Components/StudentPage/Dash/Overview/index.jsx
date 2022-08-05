import {React, useContext} from 'react';
import StudentContext from '../../../../Context/StudentPageContext';

/**Personal Details box on student page */
export const Overview = () => {

  const {student} = useContext(StudentContext)

  return (
    <div className="SDash--Info-card">
      <div className="infoCard--container">
        <h1 className="text-left"> Personal Info </h1>
        <p>Email: {student.email}</p>
        <p>{student.branch}</p>
        <p>{student.duty_station}</p>
        <p>Terminal Leave: {student.leave_start_date}</p>
        <p>ETS: {student.ets_date}</p>
      </div>

      <div>
        <h1> Dependents </h1>
        <p>{student.has_dependents}</p>
      </div>

      <div>
        <h1> Education </h1>
        <p>Degree: {student.highest_education}</p>
        <p>Pursuing Degree: {student.seeking_further_education}</p>
      </div>

      <div>
        <h1>Relocation</h1>
        <p>{student.planning_to_relocate}</p>
        <p>{student.city}, {student.state}</p>
      </div>

    </div>
  )
}

export default Overview

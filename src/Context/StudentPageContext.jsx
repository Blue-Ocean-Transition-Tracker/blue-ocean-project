import { useState, createContext } from "react";

const StudentContext = createContext()

export const StudentContextProvider = ({children}) => {
  const [selected, setSelected] = useState([])
  const [student, setStudent] = useState([])

  /** Selected Cohort */
  const invokeSetSelected = (data) => {
    setSelected(data)
  }

  /** Selected Student */
  const invokeSetStudent = (data) => {
    invokeSetStudent(data)
  }

  return <StudentContext.Provider value ={{
    selected,
    setSelected,
    invokeSetSelected,
    student,
    setStudent,
    invokeSetStudent
  }}>

    {children}
  </StudentContext.Provider>
}

export default StudentContext
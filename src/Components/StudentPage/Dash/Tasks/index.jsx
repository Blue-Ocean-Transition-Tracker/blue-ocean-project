import { useEffect } from 'react'
import {React, useState, useContext} from 'react'
import StudentContext from '../../../../Context/StudentPageContext'

export const Tasks = () => {
  const {student} = useContext(StudentContext)
  const [tasks, setTasks] = useState([])

  
  const getStudentTasks =  (studentId) => {
    fetch(`https://hacking-transition.herokuapp.com/api/tasks/student/${studentId}`).then(res => res.json()).then(data => setTasks(data))
  }
  
  useEffect(() => {
    if(student[0]){
      let studentId = parseInt(student.user_id);
      getStudentTasks(studentId)
    }
    
  }, [student])

  return (
    <ul>
      <h1>Tasks</h1>
      {tasks.map((task)=> {return <li>{task.title}</li>}
      )}
    </ul>
  )
}

export default Tasks;
import { useContext, useState, React } from 'react'
import AppContext from "../../Context/AppContext"
import { FiEdit } from 'react-icons/fi'

export default function EditableCohort({ name, start, end, id }) {
  const { allCohortsData } = useContext(AppContext)
  const [ cohortData ] = useState(allCohortsData.find(x => x.cohort_id == id))
  const [ currentName, updateName ] = useState(name)
  const [ currentStartDate, updateStartDate ] = useState(start)
  const [ currentEndDate, updateEndDate ] = useState(end)
  const [ editing, edit ] = useState(false)
  const toggleEditing = () => edit(!editing)
  const checkName = e => updateName(e.currentTarget.value)
  const checkStartDate = e => updateStartDate(e.currentTarget.value)
  const checkEndDate = e => updateEndDate(e.currentTarget.value)
  const checkKey = e => {
    if (e.keyCode === 13) {
      cohortData.cohort_name = currentName
      cohortData.start_date = currentStartDate
      cohortData.end_date = currentEndDate
      console.log(JSON.stringify(cohortData))
      toggleEditing()
      fetch(`http://hacking-transition.herokuapp.com/api/update/cohort/${id}`, {
        method: 'PATCH',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cohortData)
      })
      console.log("ran the thing")
    }
  }

  if (editing) return <>
    <input
      type="text"
      placeholder="Cohort name can't be blank"
      value={currentName}
      onChange={checkName}
      onKeyDown={checkKey}
      />
    <br/>
    <input
      type="text"
      placeholder="Start date can't be blank"
      value={currentStartDate}
      onChange={checkStartDate}
      onKeyDown={checkKey}
      />
    <br/>
    <input
      type="text"
      placeholder="End date can't be blank"
      value={currentEndDate}
      onChange={checkEndDate}
      onKeyDown={checkKey}
      />
  </>
  else return <>
    {currentName}<br/>
    Starts: {currentStartDate}<br/>
    Ends: {currentEndDate}
    <button onClick={toggleEditing}>
      <FiEdit/>
    </button>
  </>
}

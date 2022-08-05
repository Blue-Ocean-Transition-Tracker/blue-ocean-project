import { React, useState } from 'react'

export default function CohortActiveToggler({ initial, cohortID }) {
  const [activeStatus, setActiveStatus] = useState(!!initial)
  const handleToggle = () => {
    setActiveStatus(!activeStatus)
    fetch(`http://hacking-transition.herokuapp.com/api/archive/cohort/${cohortID}`, {
      method: 'PATCH',
      headers: { "content-type": "application/json" },
      body: { "active": activeStatus }
    })
    console.log(`Should've set cohort with id of ${cohortID} to be active = ${activeStatus}`)
  }

  return <input type="checkbox"
    onChange={handleToggle}
    checked={activeStatus}
  />
}
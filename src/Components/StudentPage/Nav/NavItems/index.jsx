import React from 'react'

export const NavItems = ({user, changeStudent}) => {
  return (
    <button className='sideNav--StudentBtn'
    id={user.user_id} onClick={changeStudent}>
      { user.first } { user.last }
    </button>
  )
}

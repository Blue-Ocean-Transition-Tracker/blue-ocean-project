import React from 'react'

export const NavItems = ({user, changeStudent}) => {
  return (
    <li id={user.user_id} onClick={changeStudent}>{ user.first } { user.last }</li>
  )
}

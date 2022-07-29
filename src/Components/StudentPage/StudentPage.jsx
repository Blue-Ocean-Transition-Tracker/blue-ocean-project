import {React, useState} from "react";
import { Nav } from "./Nav";
import { Dash } from './Dash'

export default function StudentPage({ userData }) {

   return <>
      {userData.admin ?
         <>
            <h1>Admin view</h1>
            <Nav />
            <Dash />
         </>
         :
         <h1>Student view</h1>
      }
   </>
}

import {React, useContext, useState} from 'react';
import AppContext from '../../Context/AppContext';
import AddAdmin from './AddAdmin';
import AdminListItems from './AdminListItems';
import '../../StyleSheets/Settings.css'

/** 
 * View All Admins
 *          Get all admins
 *          
 * 
 * Remove Admin
 * Create Admin
 * 
 *  */
 

function Settings() {


 const {allUsersData} = useContext(AppContext);
 const [currentAdmin, setCurrentAdmin] = useState();

    return (
        <>
        <div className='admin--container'>
            <div className='addAdmin--container'>
                <AddAdmin />
            </div>
            <div className='adminList--container'>
                <h1 id='adminList--title'>Current Admins</h1>
            {allUsersData.map((user) => {
                if(user.admin){
                    console.log(user)
                    return <AdminListItems user={user} key={user.user_id}/>
                }
            })}
            </div>
        </div>
        </>
    )
}

export default Settings
import React from 'react'

const Profile = () => {
    const userObj = JSON.parse(localStorage.getItem('userObj'))
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-4 gap-3" style={{height:"60vh"}}>

            <h1>User First Name : {userObj.firstName}</h1>
            <h1>User Last Name : {userObj.lastName}</h1>
            <h1>User Email : {userObj.email}</h1>
            
        </div>
    )
}

export default Profile
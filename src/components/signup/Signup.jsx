import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setmessage] = useState('')

    const navigate = useNavigate();

    const handleSubmit = ()=>{
        if (firstName==='' || lastName === '' || password==='' || email === '') {
            setmessage("Please fill all fields.")
        }else{
            let userObj = {
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
            }
            localStorage.setItem('userObj',JSON?.stringify(userObj));
            navigate('/')
        }
    }
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-4 gap-3" style={{height:"60vh"}}>
        <h2>Sign Up</h2>
        <input className="form-control" type="text" 
        onChange={(e)=>setFirstName(e.target.value)}
        placeholder="First Name" />
        <input className="form-control" type="text"
         onChange={(e)=>setLastName(e.target.value)} 
        placeholder="Last Name" />
        <input className="form-control" type="email"
         onChange={(e)=>setEmail(e.target.value)} 
        placeholder="Email" />
        <input className="form-control" type="password"
         onChange={(e)=>setPassword(e.target.value)} 
        placeholder="Password" />
        <Link to="/" className='text-primery'>Go to login page</Link>
        <p className='text-danger'>{message}</p>
        <button type="button" 
        onClick={handleSubmit}
        className="btn btn-primary" 
        style={{width:"100%"}}>SUBMIT</button>
    </div>
  )
}

export default Signup
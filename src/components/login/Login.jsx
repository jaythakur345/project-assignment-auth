import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setmessage] = useState('')

    const navigate = useNavigate();

    const userObj = localStorage.getItem('userObj')

    const handleSubmit = ()=>{
        if (email === JSON.parse(userObj).email && password === JSON.parse(userObj).password) {
            navigate('/profile')
        }else{
            setmessage("Invalid email or password")
        }
    }
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-4 gap-3" style={{height:"60vh"}}>
        <h2>Login</h2>
        <input className="form-control" type="email"
         onChange={(e)=>setEmail(e.target.value)} 
         value={email}
        placeholder="Email" />
        <input className="form-control" type="password"
        value={password}
         onChange={(e)=>setPassword(e.target.value)} 
        placeholder="Password" />
        <Link to="/signup" className='text-primery'>Go to Signup</Link>
        <p className='text-danger'>{message}</p>
        <button type="button" 
        onClick={handleSubmit}
        className="btn btn-primary" 
        style={{width:"100%"}}>SUBMIT</button>
    </div>
  )
}

export default Login
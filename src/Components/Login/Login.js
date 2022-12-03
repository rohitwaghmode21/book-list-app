import React, { useState } from 'react'
import "../Login/Login.css"

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.prevetDefault();
    }

    return(
        <div className='container'>
            <div className = "form">
                <h1>Register the Form</h1>
                <form method = "post" onSubmit = {handleSubmit} className = "main-form" >
                    <div>
                        <input 
                            name = "email" 
                            className='input-text'
                            placeholder='User ID' 
                            value = {userName} 
                            onChange = {(e) => setUserName(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <input 
                            name = "password" 
                            placeholder='password' 
                            className='input-password'
                            value = {password} 
                            onChange = {(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <button type = "submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;
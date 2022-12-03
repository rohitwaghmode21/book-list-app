import React, { useState } from 'react'
import "../SignUp/SignUp.css"

const SignUp = () => {

    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleForm = (e) => {
        e.preventDefault();

        const Data = {
            email : email,
            password : password
        }
        localStorage.setItem(Data);
        

    }

    return(
        <div>
            <div className='Container'>
                <form className='Total-form-content' method='post' onSubmit = {handleForm}>
                    <h2>New User Register Here</h2>
                    <div>
                        <input 
                            name = "Email" 
                            placeholder='Email ID' 
                            className='Username-text'
                            value={email} 
                            onChange = {(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <input 
                            name = "password" 
                            placeholder='Password' 
                            className='Username-password'
                            value={password} 
                            onChange = {(e) => setPassword(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <input 
                            name = "Confirm Password" 
                            placeholder='Confirm Password' 
                            className='Username-confirm'
                            value={confirmPassword} 
                            onChange = {(e) => setConfirmPassword(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <button className='Username-button' type = "submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;
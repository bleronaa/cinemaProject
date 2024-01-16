import React, {useState} from 'react'
import signInAPI from './signInAPI'
import '../App.css';
import Films from './films'
import {FaUser, FaLock} from 'react-icons/fa'

export default function SignIn() {
    const [formData,setFormData] = useState({username: "", password: ""})
    const [loggedInUser,setLoggedInUser] = useState(null)
    const [isError, setIsError] = useState(null)

    const handleOnChange = (e) => {
        const {value, name} = e.target
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const {username, password} = formData
        if (username.length < 2) {
            console.log("Username is too short")
            return;
        }
        if (password.length < 4) {
            console.log("Password is too short")
            return;
        }
        signInAPI
            .login({username, password})
            .then((res) => setLoggedInUser(res))
            .catch((error) => setIsError(error))
    }
    if (loggedInUser) {
        return <div>
            <Films/>
        </div>
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <form action="" onSubmit={handleLogin}>
                    <h1>LogIn</h1>
                    <div className='input-box'>
                        <input
                            value={formData.username}
                            name='username'
                            type='text'
                            placeholder="Username"
                            onChange={handleOnChange}/>
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input
                            value={formData.password}
                            name='password'
                            type='password'
                            placeholder="password"
                            onChange={handleOnChange}/>
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember'>
                        <label><input type="checkbox"/>Remember</label>
                        <a href='#'>Forgot password</a>

                    </div>
                    <button type="submit">Login</button>
                    <div className='register'>
                        <p>Don't have an account?
                            <a href="signUp">Register</a>
                        </p>
                    </div>
                    {isError && <p
                        style={{
                        color: 'tomato',
                        textAlign: 'center'
                    }}>{isError}</p>
}

                </form>
            </div>
        </div>
    )
}
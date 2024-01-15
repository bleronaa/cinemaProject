import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import '../App.css';
import '../components/Navbar.css';
import Films from './films';

export default function SignIn() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [showFilms, setShowFilms] = useState(null);

    const {register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data)

    const handleClick = () => {
        if (!firstname || !lastname || !username || !password) {
          alert("Please fill in all fields");
        } 
      };
      if(firstname && lastname && username && password ){
        return <div>
            <Films/>
        </div>
      }


    return (
        <section>
            <div className='wrapper'>
                <div
                    className='form'
                    style={{
                    height: 620
                }}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h1>Sign Up</h1>
                        <div className='input-box'>
                            <input
                                {...register("firstname")}
                                name='firstname'
                                type='text' id='firstname' 
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder="First Name"/>
                        </div>
                        <div className='input-box'>
                            <input
                                {...register("lastname")}
                                name='lastname'
                                type='text' id='lastname'
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder="Last Name"/>

                        </div>
                        <div className='input-box'>
                            <input
                                {...register("username")}
                                name='username'
                                type='text' id='username'
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"/>
                        </div>
                        <div className='input-box'>
                            <input
                                {...register("password")}
                                name='password'
                                type='password'id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"/>
                        </div>

                        <button type="submit" onClick={handleClick}>Sign Up</button>
                        <div className='register'>
                            <p>Already a member?
                                <a href="signIn">LogIn</a>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
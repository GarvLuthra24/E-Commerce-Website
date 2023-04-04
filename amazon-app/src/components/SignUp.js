import React from 'react'
import './Login.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from '../node_url'





const Login = () => {

    const [name,setName] = useState(""); 
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("")
    const navigate= useNavigate();

 let handleSubmit = async (e) => {
    console.log('tup')
    
        e.preventDefault();
        

        // alert(name + " " + password + " " + email)

        await axios.post(url + "/login/new-user", {
            name: name,
            email: email,
            password: password
        }
        )
            .then(msg => {
                
                alert('user account created successfully. You may now proceed to login!')
            })
            .catch(err => {
                console.log(err);
                alert('server side error !! Please try again after some time.')
            })
       

}


    return (

        
    <div className='Login'>
        <div className='login_field'>
        <div className='login_container '>
            <h1>Sign Up!</h1>
            <br></br>
            <form onSubmit={handleSubmit} method={'post'} >
            <label>
                    <h2>Name</h2>
                    <input type={'text'} id={"name"}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => {setName(e.target.value)}}
                    ></input>
                </label>
         
                <br></br>
                <br></br>


                <label>
                    <h2>Email</h2>
                    <input type={'text'} id={"email"}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => {setEmail(e.target.value)}}></input>
                </label>
         
                <br></br>
                <br></br>
                <label>
                    <h2>Password</h2>
                    <input type={'password'} id={"password"}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => {setPassword(e.target.value)}}></input>
                </label>
                <br></br>
                <br></br>
                <div className='SubmitButton'>
                      <button type={"submit"} id={'submit'}> Create Account</button>
                </div>
               
            </form>
        </div>
        </div>
       
    </div>
  )
}

export default Login
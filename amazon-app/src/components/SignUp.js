import React from 'react'
import './Login.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const Login = () => {

    const [name,setName] = useState(""); 
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("")
    const navigate= useNavigate();

 let handleSubmit = async (e) => {
    console.log('tup')
    
        e.preventDefault();
        

        // alert(name + " " + password + " " + email)

        await axios.post("http://127.0.0.1:4444/login/new-user", {
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
        <div className='login_container'>
            <h1>Sign Up!</h1>
            <br></br>
            <form onSubmit={handleSubmit} method={'post'} >
            <label>
                    <h2>Name</h2>
                    <input type={'text'} id={"name"}
                    onChange={(e) => {setName(e.target.value)}}
                    ></input>
                </label>
         
                <br></br>
                <br></br>


                <label>
                    <h2>Email</h2>
                    <input type={'text'} id={"email"}
                    onChange={(e) => {setEmail(e.target.value)}}></input>
                </label>
         
                <br></br>
                <br></br>
                <label>
                    <h2>Password</h2>
                    <input type={'password'} id={"password"}
                    onChange={(e) => {setPassword(e.target.value)}}></input>
                </label>
                <br></br>
                <br></br>
                <div className='SubmitButton'>
                      <input type={"submit"} id={'submit'}></input>
                </div>
               
            </form>
        </div>
        </div>
       
    </div>
  )
}

export default Login
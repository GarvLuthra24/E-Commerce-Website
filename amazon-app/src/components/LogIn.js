import React from 'react'
import './Login.css'
import {useState, useEffect} from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom';
import url from '../node_url'




function setToken(userToken){
    sessionStorage.setItem('token' , JSON.stringify(userToken))
  }


  function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString)
    return userToken?.token;
  }




const Login = () => {

    const [name,setName] = useState(""); 
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("")

 let handleSubmit = async (e) => {
        e.preventDefault();
        

        // alert(name + " " + password + " " + email)

        await axios.post(url+"/login", {
            email: email,
            password: password
        }
        )
            .then(msg => {
                let val = msg.data;
                console.log(val);
                if(val.signal == 0){
                    alert('Email/Password credentials Incorrect !!');
                }
                else{
                    setToken(val);
                    // let headerElement = document.getElementsByClassName('userName')[0];
                    // console.log(headerElement)
                    // headerElement.innerHTML = `Hey, ${val.name}`
                    alert('Welcome back, ' + val.name  + ' (' + val.email + ' )')
                    window.location.reload()
                }
            })
            .catch(err => console.log(err))
       

}


    return (

        
    <div className='Login '>
        <div className='login_field'>
        <div className='login_container shadow appearance-none border rounded leading-tight'>
            <h1>Log In!</h1>
            <br></br>
            <form onSubmit={handleSubmit} method={'post'} >
            {/* <label>
                    <h2>Name</h2>
                    <input type={'text'} id={"name"}
                    onChange={(e) => {setName(e.target.value)}}
                    ></input>
                </label>
          */}
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
                    className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                    onChange={(e) => {setPassword(e.target.value)}}></input>
                </label>
                <br></br>
                <br></br>
                <div className='SubmitButton'>
                      <button type={"submit"} id={'submit'}>Submit</button>
                </div>
               
            </form>
        </div>
        </div>
       
    </div>
  )
}

export default Login
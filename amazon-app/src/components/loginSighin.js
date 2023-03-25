import React from 'react'
import './Loginsighin.css'
import SignUp from './SignUp'
import {useState} from 'react'
import LogIn from './LogIn'


 
const LoginSighin = () => {
    const [count, setCount] = useState(0);

    const checkType = () => {
        if(count == 1)
             return <SignUp/>
        else
            return <LogIn/>
    }
    

    
    
  return (
    <div>

        
        
        
        <div className='tabs'>
            <button className='btnstyle' onClick={(e)=>{
             setCount(0);
             
            }}>LOG IN</button>
            <button className='btnstyle'onClick={(e)=>{
              setCount(1);
            }}>SIGN UP</button>
        </div>

        {checkType()}


    </div>
  )
}

export default LoginSighin
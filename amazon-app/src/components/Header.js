import React from 'react'
import "./header.css"
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import signInOptions from'./loginSighin'

// import SearchIcon from '@mui/icons-material/Search'



// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const Header = () => {

    const [cartCount , changeCount] = useState(0);
    const [userName , setUserName] = useState('Guest');
    const [userEmail , setUserEmail] = useState('guest@gmail.com')

    
  function setToken(userToken){
    sessionStorage.setItem('token' , JSON.stringify(userToken))
  }


  function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString)
    // console.log(userToken)
    return userToken;
  }


  




    // module.exports.cartCountCurrent = cartCount;
    // module.exports.cartCountChanger = changeCount;

    useEffect( () => {
        const val = getToken();
        console.log(val);
        if(val != null){
            setUserName(val.name);
            setUserEmail(val.email);
            console.log(val);
        }
        


        fetch('http://127.0.0.1:4444/cart/itemCount')
        .then(data => data.json())
        .then((data => {
            // console.log(data)
            // console.log("found "+ data + " items in cart")
            changeCount(data)
        }))
    }, []  )


  return (
    <div className="Header">
    {/* Header */}
    <Link to='/'>
    <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png   '></img>
    </Link>


    <div className='header_search'>
        <input type='text' className='header_searchInput'/>
        {/* <SearchIcon className='header_searchIcon'/> */}
        <button type='submit' className='searchButton'>Search</button>
         
    </div>

    {/* <div></div> */}
    {/* <SearchIcon/> */}


    <div className='headerNav'>
    <div className='header_option'>
        <Link to="/logon"  className='hyperLink userName'>
        
          Hey, {userName}
        
        </Link>
        </div>
      
        <div className='header_option'>
            Orders
        </div>

        <div className='header_option'>
            Prime
        </div>
        {/* <Link to='/cart'> */}
        <div className='header_option'>
            <Link to="/cart" className='hyperLink'>
            Cart
            <div className='cartItemCount'>{cartCount}</div>
            </Link>
            
            
        </div>
        
        {/* </Link> */}
    </div>

    </div>
  )
}

export default Header
import React from 'react'
// import "./header.css"
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import signInOptions from'./loginSighin'
import url from '../node_url'

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
            fetch(url + `/cart/itemCount?user_id=${val.user_id}`)
            .then(data => data.json())
            .then(data => {
                // console.log(data)
                // console.log("found "+ data + " items in cart")
                changeCount(data)
            })
        }
        


       
    }, []  )


  return (
    <div className="Header flex flex-row flex-wrap justify-around  items-center bg-[#131921] text-sm text-white ">
    {/* Header */}
    <Link to='/'>
    <img className='header_logo   max-h-7 px-5 pt-1  m  ' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
    </Link>


    <div className='header_search ml-5 w-2/4 flex flex-row max-w-5xl  items-baseline  bg-white rounded-sm'>
        <input type='text' className='header_searchInput w-9/12 max-h-5 '/>
        {/* <SearchIcon className='header_searchIcon'/> */}
        <button type='submit' className='searchButton w-3/12 text-xs max-w-xs rounded-sm  bg-[#ffd288] py-1 text-black'>Search</button>
         
    </div>

    {/* <div></div> */}
    {/* <SearchIcon/> */}


    <div className='headerNav flex flex-row ml-2 my-1  justify-around px-3'>
    <div className='header_option'>
        <Link to="/logon"  className='hyperLink userName mr-3'>
        
          Hey, {userName}
        
        </Link>
        </div>
      
        <div className='header_option mr-3'>
            Orders
        </div>

        <div className='header_option mr-3'>
            Prime
        </div>
        {/* <Link to='/cart'> */}
        <div className='header_option text-center'>
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
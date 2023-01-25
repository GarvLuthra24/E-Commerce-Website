import React from 'react'
import "./header.css"
import { Outlet, Link } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search'

// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const Header = () => {
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
            Sign In
        </div>

        <div className='header_option'>
            Orders
        </div>

        <div className='header_option'>
            Prime
        </div>
        {/* <Link to='/cart'> */}
        <div className='header_option'>
            <Link to="/cart">
            Cart
            </Link>
            
        </div>
        {/* </Link> */}
    </div>

    </div>
  )
}

export default Header
import React, {useState , useEffect} from 'react';
import ProductCart from './Product_cart'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import url from '../node_url'


const Cart = () => {

    const [productArray , setProductArray] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate();


    function setToken(userToken){
      sessionStorage.setItem('token' , JSON.stringify(userToken))
    }
  
  
    
    function getToken(){
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.parse(tokenString)
      // console.log(userToken)
      return userToken;
    }
    useEffect( () => {
      const user = getToken()?.user_id
      // console.log(user)
      // console.log(getToken().token)
      if(user){
        fetch(url+`/cart?token=${getToken().token}`)
        .then(data => data.json())
        .then((data => {
            // console.log(data)
            setProductArray(oldarr => ([...oldarr , ...data]))
            setLoading(false);
        }))
        .catch((err) => {
          navigate('/logon')
        })
      }
      else{
        navigate('/logon')
      }
    }, []  )

    if(isLoading){
      return <div className="App">User made too many request..... Either try again later or try refreshing the page</div>;
    }

  return (
    <div className='CartPage'>

      <div className='cartHead text-9xl w-full flex flex-row justify-center text-white font bg-gradient-to-tl from-[#269784] to-[#0b1524] '>CART</div>







<div className=' flex flex-row flex-wrap-reverse'>

<div className='home_row w-8/12 '>
          {
          productArray.map(product => 
          (
     
            <ProductCart
            price={product[0].price}
            title={product[0].name}
            rating = {product[0].rating}
            imageUrl={product[0].imageURL}
            id = {product[0]._id}
           />
           

          ))}
          </div>

  <div className='checkout mx-auto align-top max-w-fit border-1 border-solid w-1/4 '> 

    <form className='  min-w-fit max-w-xs m-auto p-5 '>
    <div className=' text-xl m-auto flex flex-row justify-center pt-2 pb-4'>Checkout</div>
      <ul>
            <li className=' py-2'>
              <label for="addField1">Flat, House No.</label>
              <br></br>
              <input type="address" id="addField1"></input>
            </li>
      
          <li className=' py-2'>
            <label for="addField2">Area, Locality, Sector, Village</label>
            <br></br>
            <input type="address" id="addField2"></input>
          </li>

          <li className=' py-2'>
            <label for="addField3">Locality</label>
            <br></br>
            <input type="address" id="addField3"></input>
          </li>

          <li className=' py-2'>
            <label for="addField4">Pincode</label>
            <br></br>
            <input type="address" id="addField4"></input>
          </li>
          <li className=' flex flex-row justify-center'>
            <button type='Submit' className=' bg-[#ffd814] min-w-max p-2 w-28 my-2 rounded-md'>Submit</button>
          </li>

      </ul>
            

    </form>


  </div>
  </div>
  </div>
  

  )
  
}

export default Cart
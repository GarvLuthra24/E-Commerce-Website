import React, {useState , useEffect} from 'react';
import ProductCart from './Product_cart'
import './Cart.css'
import { useNavigate } from 'react-router-dom';


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
      if(user){
        fetch(`http://127.0.0.1:4444/cart?user_id=${user}`)
        .then(data => data.json())
        .then((data => {
            // console.log(data)
            setProductArray(oldarr => ([...oldarr , ...data]))
            setLoading(false);
        }))
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

      <div className='pacTitle'>
      <div className='cartHead'>CART</div>
      

      <div class="pacman">
        
      <div class="pacman-top"></div>
      <div class="pacman-bottom"></div>
      <div class="feed"></div>
      </div>
      
      </div>




<div className='home_row'>
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
          </div>
  )
  
}

export default Cart
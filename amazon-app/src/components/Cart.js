import React, {useState , useEffect} from 'react';
import ProductCart from './Product_cart'
import './Cart.css'


const Cart = () => {

    const [productArray , setProductArray] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect( () => {
        fetch('http://127.0.0.1:4444/cart')
        .then(data => data.json())
        .then((data => {
            // console.log(data)
            setProductArray(oldarr => ([...oldarr , ...data]))
            setLoading(false);
        }))
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
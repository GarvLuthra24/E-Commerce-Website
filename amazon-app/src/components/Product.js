import React from 'react'
import { useEffect , useState } from 'react';
import  './Product_cart.css'




const Product = ({title , price , imageUrl , rating, id}) => {



  return (
    


    
    <div className='Product_main'>
    <div className='Product'>
    <div className='image'>

{/* https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg */}
          <img className='product_image'src={imageUrl} alt='product image'></img>

        </div>
        <div className='product_info'>

          <p className='title'>
            {title}
          {/* The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback */}
          </p>

          <p className='price'>
              <small>₹</small>
              <strong>
                {price}
                {/* 1000 */}
                </strong>
          </p>

          <p className='rating'>

            {Array(rating)
            .fill()
            .map( (_,i) => (
              <p>⭐</p>
            )  )}
          </p>

            


        </div>

        <div className='Cart'>
        <div className='imput-hidden'>
              <input value={id} className='hidden-input'></input> 
            </div>
            <button className='addToCart' 
              onClick={ (ev) => {
                // console.log(ev)
                const target = ev.target.parentElement
                const stringValue = target.getElementsByClassName('hidden-input')
                console.log(stringValue)
                const stringVal = stringValue[0].value
                console.log(stringVal)
                fetch(`http://127.0.0.1:4444/addToCart?product_id=${stringVal}`)
                .catch((err) => {console.log(err)})
                
              }   }
            >Add To Cart
            
            
            </button>
        </div>
        


    </div>

    
    </div>
    
  )
}

export default Product
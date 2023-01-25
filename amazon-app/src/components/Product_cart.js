import React from 'react'
import { useEffect , useState } from 'react';
import './Product_cart2.css'




const Product = ({title , price , imageUrl , rating, id}) => {



  return (
    


    <div className='page'>
    <div className='Product_main1'>
    <div className='Product1'>
    <div className='image1'>

{/* https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg */}
          <img className='product_image1'src={imageUrl} alt='product image'></img>

        </div>
        <div className='product_info1'>

          <p className='title1'>
            {title}
          {/* The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback */}
          </p>

          <p className='price1'>
              <small>₹</small>
              <strong>
                {price}
                {/* 1000 */}
                </strong>
          </p>

          <p className='rating1'>

            {Array(rating)
            .fill()
            .map( (_,i) => (
              <p>⭐</p>
            )  )}
          </p>
          <br>
          </br>
          <br></br>
          <br></br>
          <button className='addToCart1' 
              onClick={ (ev) => {
                // console.log(ev)
                const target = (ev.target.parentElement)
                console.log(target)
                const val = (target.getElementsByClassName('hidden-input'))[0].value
                console.log(val)

                fetch(`http://127.0.0.1:4444/cart/removeitem?product_id=${val}`)
                .catch((err) => {console.log(err)})
                console.log(ev.target.parentElement.parentElement)
                const parent = ev.target.parentElement.parentElement
                parent.remove();

                
              }   }
            >
            <div className='cartText'>Remove From Cart</div>
              
        
              
            
            
            </button>

                
            


        </div>

        <div className='Cart1'>
        <div className='imput-hidden1'>
              <input value={id} className='hidden-input'></input> 
            </div>
           
        </div>


        


    </div>

    
    </div>
    </div>  
    
  )
}

export default Product
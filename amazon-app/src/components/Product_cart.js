import React from 'react'
import { useEffect , useState } from 'react';
import './Product_cart2.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Product = ({title , price , imageUrl , rating, id}) => {

  const notify = () => toast("Product Removed From Cart !");

  return (
    
   


    <div className='page1'>
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
                const target = (ev.target.parentElement.parentElement.parentElement)
                console.log(target)
                const val = (target.getElementsByClassName('Cart1'))[0].getElementsByClassName('imput-hidden1')[0].getElementsByClassName('hidden-input')[0].value
                
                console.log(val)

                fetch(`http://127.0.0.1:4444/cart/removeitem?product_id=${val}`)
                .then(() => {
                  console.log(ev.target.parentElement.parentElement)
                  const parent = ev.target.parentElement.parentElement.parentElement.parentElement
                  parent.remove();
                  console.log('product deleted successfully')
                  let val =  document.getElementsByClassName('cartItemCount')[0]
                  // console.log(val);
                  // console.log("hi")
                  val.innerHTML = Number(val.innerHTML) - 1;
                  notify()
                })
                .catch((err) => {console.log(err)})
               

                
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
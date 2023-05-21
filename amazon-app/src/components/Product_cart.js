import React from 'react'
import { useEffect , useState } from 'react';
import './Product_cart2.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import url from '../node_url'




const Product = ({title , price , imageUrl , rating, id}) => {

  const notify = () => toast("Product Removed From Cart !");
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

  return (
    
   


    <div className='page1  px-1'>
    <div className='Product_main1 '>

    

    <div className='Product1   flex flex-row min-w-full flex-wrap justify-start items-start '>
    <div className='image1 w-2/5  max-w-md px-5 py-2 mx-10  '>
 
{/* https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg */}
          <img className='product_image1  max-w-xs w-44'src={imageUrl} alt='product image'></img>

        </div>
        <div className='product_info1 px-25 w-2/5  m-5 '>

          <p className='title1 text-2xl pb-8 bg-red mb-5'>
            {title}
          {/* The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback */}
          </p>

          <p className='price1 text-2xl '>
              <small>₹</small>
              <strong>
                {price}
                {/* 1000 */}
                </strong>
          </p>

          <p className='rating1 text-base mb-4'>

            {Array(rating)
            .fill()
            .map( (_,i) => (
              <p>⭐</p>
            )  )}
          </p>
          {/* <br>
          </br>
          <br></br>
          <br></br> */}
          <button className='addToCart1 text-sm w-1/4 min-w-max max-w-xs px-5 ' 
              onClick={ (ev) => {
                // console.log(ev)
                const target = (ev.target.parentElement.parentElement.parentElement)
                console.log(target)
                const val = (target.getElementsByClassName('Cart1'))[0].getElementsByClassName('imput-hidden1')[0].getElementsByClassName('hidden-input')[0].value
                
                console.log(val)

                const user = getToken().user_id;

                if(user){
                  fetch(url + `/cart/removeitem?product_id=${val}&token=${getToken().token}`)
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
                }
                else{
                  navigate('/logon')
                }

                
               

                
              }   }
            >
            <div className=' text-sm'>Remove</div>
              
        
              
            
            
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
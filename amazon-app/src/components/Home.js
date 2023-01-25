import React , {useState,useEffect} from 'react'
import './Home.css'
import Product from './Product'



const Home = () => {

  const [productArray , setArray] = useState([]);

    useEffect(() => {
      fetch("http://127.0.0.1:4444/")
      .then( (data ) => data.json())
      .then( (arr) => {
        console.log('render...')
        console.log(arr)
        setArray(arr);
        // console.log(productArray);
      } )
      .catch((err) => {console.log(err)})
    }       , [true] );

  return (
    <div className='home'>
    <div className='Home_container'>
    <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />



<div className='home_row'>
          {
          productArray.map(product => 
          (
     
            <Product
            price={product.price}
            title={product.name}
            rating = {product.rating}
            imageUrl={product.imageURL}
            id = {product._id}
           />
           

          ))}
          </div>


        

    {/* <div className='home_row'>  
      <Product 
      price={7500} 
      title={'FitBit Pulse Wave 5 (2023)'}
      imageUrl={'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'}
      rating={5}
      />

<Product 
      price={90000} 
      title={'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'}
      imageUrl={'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'}
      rating={4}
      />
   
    </div>

    <div className='home_row'>  
    <Product 
      price={9500} 
      title={'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'}
      imageUrl={'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'}
      rating={5}
      />
 <Product 
      price={1500} 
      title={'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'}
      imageUrl={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'}
      rating={3}
      />
 <Product 
      price={11499} 
      title={'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer '}
      imageUrl={'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'}
      rating={2}
      />

    </div>

    // <div className='home_row'>  
    // {/* <Product/> */}
     {/* <Product/> */}
     </div>

  

    
     </div>
      
    // </div>

    //  */}
    
  )
}

export default Home
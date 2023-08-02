import { useParams } from 'react-router-dom';
import React, { useRef } from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import delivery from './icons/Delivery.svg'
import chekmark from './icons/Checkmark.svg'
import purchase from './icons/Purchase.svg'
import sprout from './icons/Sprout.svg'
import CheckmarkFilled from './icons/Checkmark--filled.svg'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveData } from './action';
import Suggesting from './suggesting'
function ProductPage() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const { pathname } = useLocation()
    const [quantity, setQuantity] = useState(1);


    const dispatch = useDispatch();
   
  
    const handleClick = () => {

      const dataToSave = {
        quantity:quantity,
        product:product
        
      };
  
      
      dispatch(saveData(dataToSave));
    };

  const handleSaveData = () => {
    const data = {  };
    dispatch({ type: 'SET_DATA', payload: data });
  };

  

    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
  
    const handleIncrease = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);



    useEffect(() => {
      const fetchProductData = async () => {
        try {
          const response = await axios.get('/eComerceData.json');
          const data = response.data;
  
          const foundProduct = data.find((product) => product.id === parseInt(id));
  
          setProduct(foundProduct);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };
  
      fetchProductData();
    }, [id]);
  
    return (
      <section className="product-page">
        <div className="product-page__main">
          <img src={product.image} alt="Product" />
          <div className="product-page_info">
            <h2>{product.name}</h2>
            <p className="product_price">£{product.price}</p>
            <div className="product_description">
              <h3>Descripton</h3>
              <p className="description_text">{product.description}</p>
            </div>
            {product.dimensions && (
              <div className="product_dimensions">
                <h3>Dimensions</h3>
                <div className="Dimension__items">
                  {Object.entries(product.dimensions).map(([key, value]) => (
                    <div className="Dimension__item" key={key}>
                      <h4>{key}</h4>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

         <div className='product_activites'>

            <h3>Quantity</h3>
                  <div className="quantity-input">
        <button onClick={handleDecrease}><p>-</p></button>
        <input className='quantity_input'  type="number" min="1" value={quantity} readOnly />
        <button onClick={handleIncrease}> <p>+</p></button>
      </div>

            <button className='Basket_add__quantity' onClick={handleClick}>Add to cart</button>

         </div>
          </div>
        </div>

        <Suggesting></Suggesting>


        <div className="homepage_benefits">
                    <h2>What makes our brand different</h2>
                    <div className="homepage_benefits__items">
                        <div className="homepage_benefits__item">
                           
                                <span className="betefits_icon"><img src={delivery}/> </span>
                                <h3>Next day as standard</h3>
                                <p>Order before 3pm and get your order the next day as standard</p>
                             

                        </div>


                        <div className="homepage_benefits__item">
                           
                           <span className="betefits_icon"><img src={chekmark}/> </span>
                           <h3>Made by true artisans</h3>
                           <p>Handmade crafted goods made with real passion and craftmanship</p>
                        

                   </div>


                   <div className="homepage_benefits__item">
                           
                           <span className="betefits_icon"><img src={purchase}/> </span>
                           <h3>Unbeatable prices</h3>
                           <p>For our materials and quality you won’t find better prices anywhere</p>
                        

                   </div>




                   <div className="homepage_benefits__item">
                           
                           <span className="betefits_icon"><img src={sprout}/> </span>
                           <h3>Recycled packaging</h3>
                           <p>We use 100% recycled to ensure our footprint is more manageable</p>
                        

                   </div>
                    </div>
            </div>

            <div className='contact_block'>
                <div className='contact_block__text'>
                        <h2>Join the club and get the benefits</h2>

                        <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>

                        <div className='offers'>
                        <span> <img src={CheckmarkFilled}/><p>Exclusive offers</p></span>

                        <span> <img src={CheckmarkFilled}/><p>Free events</p></span>

                        <span> <img src={CheckmarkFilled}/><p>Large discounts</p></span>
                        </div>

                        <form> 
                            <input placeholder='your@email.com' type='text'></input> 
                            <button type='submit'>Sign up</button>
                        </form>
                        
                </div>


            </div>
      </section>
    );
  }
  
  export default ProductPage;
  
import delivery from './icons/Delivery.svg'
import chekmark from './icons/Checkmark.svg'
import purchase from './icons/Purchase.svg'
import sprout from './icons/Sprout.svg'
import aboutIMG from './images/CollectionIntro.jpg'
import CheckmarkFilled from './icons/Checkmark--filled.svg'
import { Link } from 'react-router-dom'
import Suggesting from './suggesting'
function Homepage() {
    

    return(

       <section className="homepage">


            <div className="homepage_introduce">


                <div className="homepage_introduce__text">
                        <h2>Luxury homeware for people who love timeless design quality</h2>

                        <p>Shop the new Spring 2022 collection today</p>


                        <Link to='/Products'> <button>View collection</button></Link>

                </div>

            
            </div>

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

        <Suggesting></Suggesting>
         

            <div className='homepage_about'>
                <div className='homepage_about__text'>
                        <h2>It started with a small idea</h2>

                        <p>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                        

                       <Link to='/About'><button>About us</button></Link> 

                </div>

                <img src={aboutIMG} /> 

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
    )
}



export default Homepage
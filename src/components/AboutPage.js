import AboutfirstImage from './images/AboutImage.jpg'
import AboutsecondImage from './images/AboutImage(2).jpg'
import delivery from './icons/Delivery.svg'
import chekmark from './icons/Checkmark.svg'
import purchase from './icons/Purchase.svg'
import sprout from './icons/Sprout.svg'
import CheckmarkFilled from './icons/Checkmark--filled.svg'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'

function AboutPage() {

const { pathname } = useLocation()
useEffect(() => {
                window.scrollTo(0, 0);
              }, [pathname]);
        

    return(
        <section className="About">

                <h2>A brand built on the love of craftmanship,quality and outstanding customer service</h2>

                <div className="About_sections">

                        <div className="About_first__section about-item">

                            <div className="About_first__section_text">

                                    <h3>From a studio in London to a global brand withover 400 outlets</h3>

                                    <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br/><br/> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

                                    <button>Get in touch</button>


                            </div>

                            <img src={AboutfirstImage}></img>

                        </div>

                        <div className="About_second__section about-item">

                            <div className="About_first__section_text">

                                    <h3>Our service isn’t just personal, it’s actuallyhyper personally exquisite</h3>

                                    <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br/><br/> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

                                    <button>Get in touch</button>


                            </div>

                            <img src={AboutsecondImage}></img>

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

export default AboutPage
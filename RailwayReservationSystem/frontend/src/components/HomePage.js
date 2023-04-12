import React from 'react'
import { Wave } from "react-animated-text";
import './homePage.scss';
import { Typewriter } from 'react-simple-typewriter'

const Showcase = () => {
  return (
    <section className='showcase section-box'>
      <div className='showcase-overlay box'>
        <div className='head'>

        <h1> Welcome to PRRS</h1>
        <h3>Pakistan Railway Reservation System</h3>
        </div>
        
        <div className='bottom'>
          
          <Typewriter 
          words={["Get to tour the India in style" ,"Select a destination" , "book your train and off you go"]}
          loop = {false}
          cursorStyle='!'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

            />

        {/* // <p className=''>
        //   Get to tour the India in style. Select a destination, book your
        //   train, and off you go!
        // </p>  */}
        </div>
      </div>
    </section>)}

export default Showcase

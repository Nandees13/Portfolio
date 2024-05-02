import React from 'react'
import './contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import  facebook from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import linked from '../../assets/linked.png'; 

const Contact = () => {
  return (
    <section id='contactpage'>
        <div id='experience'>
            <h1 className='exptitle'>Experience</h1>
            <p className='expdes'>I'm currently pursuing my undergraduate studies at KCT, where I'm actively exploring new horizons and nurturing my passion for learning.</p>
            <div className='expimgs'>
                <img src={walmart} alt='' className='expimg'></img>
                <img src={adobe} alt='' className='expimg'></img>
                <img src={microsoft} alt='' className='expimg'></img>
                <img src={facebook} alt='' className='expimg'></img>
            </div>
        </div>
        <div id='contact'>
          <h1 className='exptitle'>Contact me</h1>
          <span className='condesc'>Please fill out the form below to discuss about opporunities.</span>
          <form className='conform'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your Email'/>
            <textarea name='message' rows={5} className='message' placeholder='Your Message'/>
            <button type='submit' value='send' className='submitbtn'>Submit</button>
            <div className='links'>
            <img src={insta} alt='insta' onClick={() => window.location.href = "https://www.instagram.com/nandees_13/"} className='link'/>
            <img src={linked} alt='linked' onClick={() => window.location.href = "https://www.linkedin.com/in/nandeeswaran-k/"} className='link'/>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact

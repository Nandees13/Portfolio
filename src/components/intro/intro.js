import React from 'react'
import './intro.css';
import intro from '../../assets/intro.png';
import btnimg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I am <span className='introname'>Nandeeswaran</span><br/>Aspiring Project Manager</span>
            <p className='intropara'>I am a highly motivated individual who is passionate about learning and eager to acquire new knowledge. With my passion for continuous learning and efficient management, I am committed to driving personal and professional growth.</p>
            {/* <a href="/hireme"><button className="btn"><img src={btnimg} alt="Hire me" className='btnimg' />Hire me</button></a> */}

            </div>
         {/* <img src={intro} alt='' className='bg'/>  */}
    
    </section>
  )
}

export default Intro

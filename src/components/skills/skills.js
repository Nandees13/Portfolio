import React from 'react'
import './skills.css';
import uidesign from '../../assets/ui-design.png';
import webdesign from '../../assets/website-design.png';
import appdesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>What I do</span>
        <span className='skilldes'>
I'm currently pursuing my undergraduate studies at KCT, where I'm actively exploring new horizons and nurturing my passion for learning. I'm a self-driven individual with a strong desire to expand my knowledge. My commitment to personal and professional growth drives me to seek out opportunities for skill development and stay updated on industry trends and best practices.</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={uidesign} alt='' className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Leadership</h2>
                    <p>I'm actively involved in the<span className='re'> Ré Forum</span> at KCT, where I contribute as a dedicated management intern. Being part of this dynamic forum allows me to engage in various aspects of management, gaining practical experience in decision-making, team coordination, and problem-solving. </p>
                </div>
            </div>
        </div>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={webdesign} alt='' className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Website design</h2>
                    <p>I'm passionate about web development, exploring new programming languages and technologies. I also enjoy web design, where I blend technical expertise with creativity to craft user-friendly, visually appealing websites. This fusion of development and design fuels my motivation to excel in the dynamic world of web development</p>
                </div>
            </div>
        </div>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={appdesign} alt='' className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Project Based Learning</h2>
                    <p>Thrived in a collaborative environment that encouraged active learning and problem-solving. Demonstrated exceptional multitasking abilities, effectively allocating time and resources to meet both academic and project deadlines. Developed strong project management skills, ensuring the successful completion of projects while maintaining high academic standards.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills

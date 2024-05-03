import React from 'react'
import './works.css';
// import portfolio1 from "../../assets/portfolio-1.png";
// import portfolio2 from "../../assets/portfolio-2.png";
// import portfolio3 from "../../assets/portfolio-3.png";



const Works = () => {
  return (
    <section id='works'>
        <h2 className='worktitle'>Projects</h2>
        <span className='workdes'>Through this portfolio, I invite you to explore a collection of my works, ranging from web development projects to design endeavors. With a dedication to innovation and a commitment to excellence, I strive to create meaningful solutions that not only meet but exceed expectations. Whether you're a potential client, collaborator, or simply an admirer of creativity, I hope you find inspiration within these pages. Let's connect and bring your ideas to life!</span>      
        {/* <div className='workimgs'>
            <img src={portfolio1} alt='' className='workimg'></img>
            <img src={portfolio2} alt='' className='workimg'></img>
            <img src={portfolio3} alt='' className='workimg'></img>
        </div> */}
        {/* <button className='workbtn'>See more</button> */}
        <table border='3'>
          <tr>
          
          <th>Project Title</th>
          <th>Project Description</th>
          </tr>
          <tr>
            
            <td>Weather Monitoring System</td>
            <td>Designed and developed a weather monitoring
system for the college, overseeing all aspects from
inception to execution. Integrated IoT technology
and crafted a user-friendly weather monitoring
website</td>
          </tr>
          <tr>
            
            <td>Project Management System</td>
            <td>Studied DevOps principles for project management,
gaining insights into optimizing software delivery</td>
          </tr>
          <tr>
            
            <td>Faculty Management System</td>
            <td>Currently developing a faculty management system
for the department, aimed at enhancing
administrative processes and improving efficiency.</td>
          </tr>
          <tr>
            <td>Increasing the efficiency of solar panel</td>
            <td>We developed a solution to increase the efficiency of solar panel by tracking the sun and also integrated the cooling system.</td>
          </tr>
        </table>
    </section>
  );
}

export default Works

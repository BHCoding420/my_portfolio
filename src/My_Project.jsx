import React,{useState} from 'react'
import "./Project.css";
const My_Project = ({proj_props}) => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div>

           <h1 style={{fontSize:'2.5rem',marginBottom: '1rem'}}>{proj_props.name}</h1>
           <div style={{minHeight: width > 500 ? '400px' : '1200px', width: '100%',margin:"0 auto",display: 'flex',flexWrap: 'wrap'}}>
           {proj_props.img.map((img) =>{
            return <div style={{backgroundImage: 'url(' + img + ')',border: '4px solid #f9004d',borderRadius: '20px',
            minWidth: width > 500 ? '25%' : '100%',
            marginTop: '0.5rem',
            marginRight:'2rem',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '90% 90%'}} >

            </div>})}
            </div>

           <h2 style={{fontSize:'1.5rem',marginTop: '1rem'}}>{proj_props.description}</h2>
           <h4 className="project__tech">{proj_props.technologies.map( (tech,id) => {
            return <div className="curr_tech"> {tech}</div>
        })}</h4>
        <p style={{marginTop:'4.5rem'}}><i class="fas fa-globe" style={{color:"#DDDDDD"}}><a href={proj_props.link} style={{marginLeft:"10px"}}>Link to Project</a></i></p>
        </div>
    )
}

export default My_Project

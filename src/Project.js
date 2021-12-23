import React,{useState} from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import movies1 from './img/movies-project/1.PNG';
import movies2 from './img/movies-project/2.PNG';
import movies3 from './img/movies-project/3.PNG';
import physics1 from './img/physikill/1.jpg';
import physics2 from './img/physikill/2.jpg';
import physics3 from './img/physikill/3.jpg';
import physics4 from './img/physikill/4.jpg';
import My_Project from "./My_Project";

function Project() {
    const [moreDetails, setmoreDetails] = useState(false);
    const [proj_props, setproj_props] = useState({
        id: 0,
        name:"",
        description:"",
        img:[],
        technologies:[],
        link:""
    })
  const my_projects = [{
      id: 1,
      name:"Movies-Ranking",
      description:"This Website allows you to discuss your Movies,Series,Anime and rate them with multiple users,as each rating affects the overall score of the movie.Search for movies posted by Users and filter them according to your liking",
      img:[movies1,movies2,movies3],
      technologies:["Node JS","Express JS","React JS","Material UI","MongoDB","HTML","CSS"],
      link:"https://movies-ranking.netlify.app"
  },{
    id: 2,
    name:"PhysiKILL (3D Game)",
    description:"PhysiKILL is a game that I worked on during my first year getting into Computer Science,as I had motivation at the time to become a Game developer,until I decided to focus on other fields of CS and so I sadly stopped my game dev journey(for now).The game is a 3D puzzle platformer that has you using Physics and Objects around you to knock down an enemy that's scratching a sacred Physics book",
    img:[physics1,physics2,physics3,physics4],
    technologies:["Unity","C#","Blender"],
    link:"https://drive.google.com/file/d/1YtwKxbwGIwMr_8C0ODleQkSATQPxOtSY/view?usp=sharing"
}
    ]
  return (

    <div className="project component__space" id="Portfolio">

      <div className="heading">
        <h1 className="heading">My Projects</h1>
        <p className="heading p__color">
          Below is a collection of my
        </p>
        <p className="heading p__color">
          Personal Projects
        </p>
      </div>
       <div className="container">
           <div className="row">
           {!moreDetails && my_projects.map((proj) => {

                return <div id={proj.id} className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={proj.img[0]} alt="" className="project__img" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                    <h5 className="project__text first_text">{proj.name}</h5>
                    <h4 className="project__text description">{proj.description.slice(0,150)}...</h4>
                    <h4 className="project__tech">{proj.technologies.map( (tech,id) => {
                        return <div className="curr_tech"> {tech}</div>
                    })}</h4>
                    <p style={{marginTop:'4.5rem'}}><i class="fas fa-globe" style={{color:"#DDDDDD"}}><a href={proj.link} style={{marginLeft:"10px"}}>Link to Project</a></i></p>
                    <a onClick={() =>{setproj_props(proj);setmoreDetails(true)}} className="project__btn">View Details</a>
                    </div>
                </div>
            </div>

            }) }

            {moreDetails && <My_Project proj_props={proj_props}/>}


             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             {moreDetails && <button onClick={() =>{setmoreDetails(false)}} className="view__more pointer btn">Back to Projects</button>}
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;

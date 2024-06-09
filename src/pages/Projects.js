import ProjectCard from '../components/ProjectCard/ProjectCard';
import { cards } from '../state/state';


const Projects=()=>{
  return(
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {cards.map((card,index)=>{
                    return <ProjectCard key={index} title={card.title} index={index} img={card.img}/>
                })}
            </ul>
        </div>
    </main>
  )
}
export default Projects;
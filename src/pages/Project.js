import {useParams} from "react-router-dom";

import { cards } from "../state/state";
import ButtonGitHub from '../components/ButtonGitHub/ButtonGitHub';




const  Project= () => {
    const {id}=useParams();
    const card=cards[id];
   
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">{card.title}</h1>
                <img src={card.imgBig} alt={card.title} className="project-details__cover" />
                <div className="project-details__desc">
                    <p>{card.skills}</p>
                </div>
                {card.gitHubLink && (<ButtonGitHub link="https://github.com"/>)}

            </div>
        </div>
    </main>
     );
}
 
export default Project;
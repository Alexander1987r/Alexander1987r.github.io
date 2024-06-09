//импорт NavLink
import { NavLink } from 'react-router-dom';
import ButtonDarkMode from '../ButtonDarkMode/ButtonDarkMode';

import './navigation.css';

const Navigation = () => {
    let activeLink="nav-list__link--active";
    let normalLink="nav-list__link";
    return ( 
        <nav className="nav">
        <div className="container">
            <div className="nav-row">

                <NavLink to="/"  className="logo">
                <strong>Freelancer</strong> portfolio
                </NavLink>
                <ButtonDarkMode/>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive})=>isActive ? activeLink : normalLink}>
                           Home
                        </NavLink>                    
                    </li>
                    <li className="nav-list__item">
                      <NavLink to="/projects" className={({isActive})=>isActive ? activeLink : normalLink}>
                        Projects
                      </NavLink>                          
                    </li>
                    <li className="nav-list__item">
                       <NavLink to="/contacts" className={({isActive})=>isActive ? activeLink : normalLink}>
                         Contacts
                       </NavLink>                         
                    </li>
                </ul>
            </div>
        </div>
        </nav>
     );
}
 
export default Navigation;
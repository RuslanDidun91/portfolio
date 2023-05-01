import { Link } from 'react-scroll';
import pdf from '../Assets/resume/Resume.pdf';
import style from './Nav.module.scss';

export const Nav = () => {
      return (
            <div className={style.nav}>
                  <Link to='main' spy={true} smoth='true'
                        offset={1} duration={1000}><strong>Main</strong></Link>
                  <Link to='aboutMe' spy={true} smoth='true'
                        offset={1} duration={1000}><strong>About</strong></Link>
                  <Link to='skills' spy={true} smoth='true'
                        offset={1} duration={1000}><strong>Skills</strong></Link>
                  <Link to='projects' spy={true} smoth='true'
                        offset={1} duration={1000}><strong>Projects</strong></Link>
                  <a href={pdf} target="_blank" rel="noreferrer">Resume</a>
                  <Link to='contacts' spy={true} smoth='true'
                        offset={1} duration={1000}><strong>Contacts</strong></Link>
            </div>
      );
};
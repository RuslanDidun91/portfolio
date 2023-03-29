import style from './MySkills.module.scss'
import styleContainer from '../common/styles/container.module.css'
import {Title} from "../common/components/title/Title"
import {Skill} from "./Skill/Skill"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faGithub,
    faHtml5,
    faJs,
    faMdb,
    faNode,
    faPython,
    faReact,
    faChrome
} from "@fortawesome/free-brands-svg-icons"
import {Fade} from "react-awesome-reveal"


export const MySkills = () => {
    const skill = [
        {
            title: 'HTML',
            description: 'It is the fifth and last major HTML version. ' +
                'Using markup language for structuring, ' +
                'presenting content and create semantic layout.',
            icon: <FontAwesomeIcon icon={faHtml5} size={"4x"}/>
        },
        {
            title: 'CSS/SCSS',
            description: 'Using CSS to create the style of site, ' +
                'Use a variety of libraries and animations.' +
                'Mixins, extensions, grid, variables.',
            icon: <FontAwesomeIcon icon={faCss3} size={"4x"}/>
        },
        {
            title: 'Java Script | Type Script',
            description: 'Understanding the structure of the DOM tree. ' +
                'Knowledge of the OOP principles, MVC architecture. ' +
                'Understanding of TypeScript helps to avoid errors during development.',
            icon: <FontAwesomeIcon icon={faJs} size={"4x"}/>

        },
        {
            title: 'React | Redux',
            description: 'FLUX Cycle, HOC, Hook, Thunks, REST API, AJAX, AXIOS.' +
                'Understanding the component life cycle, asynchronous queries and operations.' +
                'Using Redux as state management library.',
            icon: <FontAwesomeIcon icon={faReact} size={"4x"}/>
        },
        {
            title: 'Python3 | Django',
            description: 'My second lovely programming language. ' +
                'Using Django - high level Python web framework for ' +
                'rapid and secure development.',
            icon: <FontAwesomeIcon icon={faPython} size={"4x"}/>
        },
        {
            title: 'Git | Github',
            description: 'Ability to Use a hosting platform for version control ' +
                'and collaboration with other players.',
            icon: <FontAwesomeIcon icon={faGithub} size={"4x"}/>
        },
        {
            title: 'MongoDB | Mongoose',
            description: 'Using Mongoose as a ODM to a MongoDB during MERN stack ' +
                'development. Full CRUD operations, M:M, 1:M, 1:1 relationships.',
            icon: <FontAwesomeIcon icon={faMdb} size={"4x"}/>
        },
        {
            title: 'Node.js | Express',
            description: 'Used Node_js for both front-end and back-end development. ' +
                'Created full stack, dynamic web app using Express_js and EJS template.',
            icon: <FontAwesomeIcon icon={faNode} size={"4x"}/>
        },
        {
            title: 'Cypress | Unit test',
            description: 'e2e automation testing with Cypress, Unit tests, TDD. ' +
                'API testing through postman, regression testing, Chrome dev tools for debugging.',
            icon: <FontAwesomeIcon icon={faChrome} size={"4x"}/>
        }
    ]

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}> {/*присваиваем два класса*/}
                <div>
                    <Fade direction={"up"}>
                        <Title text={'Skills'}/>
                    </Fade>
                </div>
                <div className={style.skills}>
                    {skill.map((s, idx) => (
                        <Fade direction={'up'}>
                            <Skill title={s.title}
                                   description={s.description}
                                   icon={s.icon}
                                   key={idx.id}/>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    )
}


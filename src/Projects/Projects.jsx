import style from './Projects.module.scss'
import styleContainer from '../common/styles/container.module.css'
import {Title} from '../common/components/title/Title'
import {Fade} from "react-awesome-reveal"
import {Project} from './Project/Project'


export const MyProjects = () => {
    //projects state
    const projects = [
        {
            title: 'Mongoose Lakes Blog',
            hrefToProps: 'https://github.com/RuslanDidun/mongoose-lakes-blog',
            image: "https://i.imgur.com/51DGJsE.png",
            description: 'Full Stack web application, where I used Express_js, ' +
                'Mongoose, JavaScript, OAuth, GitHub, heroku HTML and Css.'
        },
        {
            title: 'Spider-Keeper',
            hrefToProps: 'https://github.com/RuslanDidun/django_spiderkeeper',
            image: "https://i.imgur.com/zi9uFsf.png",
            description: 'Full CRUD web application written on Python and Django. ' +
                'Allows users to create own spider, feed them and put decorations.'
        },
        {
            title: 'MineSweeper',
            hrefToProps: 'https://github.com/RuslanDidun/mineSweeper_JS',
            image: "https://i.imgur.com/xDfWDFl.png",
            description: 'Funny game, written with Vanilla JavaScript and MVC architecture. ' +
                'Implemented HTML, CSS, sound effects, recursion, DOM manipulation. '
        },
        {
            title: 'Yard Barker',
            hrefToProps: 'https://github.com/RuslanDidun/yardbarker',
            image: "https://i.imgur.com/5s17U1A.png",
            description: 'Do not waste time anymore, join the Yard Barker community. ' +
                'Full Stack Web application written with Python and Django. ' +
                'CRUD operations, API, GitHub team workflow and lots of collaborations.'
        },
        {
            title: 'Organizer',
            hrefToProps: 'https://github.com/RuslanDidun/new-todoListProjec',
            image: "https://i.imgur.com/DDsBmfS.jpg",
            description: 'Front End web application, which helps you to make own todo list. ' +
                'Used TypeScript, React, Redux, Yarn, Material_ui, Formik, Ant Design.'
        },
        {
            title: 'Social Network',
            hrefToProps: 'https://github.com/RuslanDidun/mySocialNetworkProject',
            image: "https://i.imgur.com/REj0cdz.jpg",
            description: 'Front End Web application, functional social network. ' +
                'Used React + Redux. Hooks, Reducers, Thunks, Socket io, Ant Design.'
        }
    ]

    return (
        <div id='projects' className={style.mainProjectBlock}>
            <div className={`${styleContainer.container} ${style.blockContainer}`}>
                <div>
                    <Fade direction={"up"} delay={0}>
                        <Title text={'Projects'}/>
                    </Fade>
                </div>
                <div className={style.myProjects}>
                    {projects.map((p, idx) => (
                        <Fade direction={"up"} delay={0}>
                            <Project key={idx.id}
                                     title={p.title}
                                     hrefToProps={p.hrefToProps}
                                     description={p.description}
                                     image={p.image}
                            />
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    )
}
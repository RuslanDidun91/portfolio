import style from './Projects.module.scss'
import styleContainer from '../common/styles/container.module.css'
import {Title} from '../common/components/title/Title'
import {Fade} from "react-awesome-reveal"
import {Project} from './Project/Project'

export const MyProjects = () => {
    //projects state
    const projects = [
        {
            title: 'mySpotify 2.0',
            hrefToProps: 'https://ruslan-didun-myspotify-2.netlify.app',
            image: "https://i.imgur.com/r153XjC.png",
            description: 'Front End web application, used React + Redux flow. ' +
                'Consumed Shazam and geo.Apify API through Rapid API, Tailwind CSS  '
        },
        {
            title: 'myTube 2.0',
            hrefToProps: 'https://ruslandidun91.github.io/my-youtube/',
            image: "https://i.imgur.com/pgKBvwQ.png",
            description: 'Front End web application, used React and Material UI. ' +
                'Consumed YouTube API through RapidAPI,  '
        },
        {
            title: 'MERN Ecommerce',
            hrefToProps: 'https://mern-ecommerse-project.herokuapp.com/orders/new',
            image: "https://i.imgur.com/2ptIgNp.png",
            description: 'Full Stack web application, Used MongoDB, Express_js, React, ' +
                'Node_js, Material_Ui, AntDesign. Consumed 3rd party API and JWT ' +
                'based auth.'
        },
        {
            title: 'Canadian Lakes Blog',
            hrefToProps: 'https://mongoose-lakes-blog.herokuapp.com/lakes/login',
            image: "https://i.imgur.com/51DGJsE.png",
            description: 'Full Stack web application, where I used Express_js, ' +
                'Mongoose, JavaScript, OAuth, GitHub, heroku HTML and Css.'
        },
        {
            title: 'Spider-Keeper',
            hrefToProps: 'https://spider-keeper.herokuapp.com/about/',
            image: "https://i.imgur.com/zi9uFsf.png",
            description: 'Full CRUD web application written on Python and Django. ' +
                'Allows users to create own spider, feed them and put decorations.'
        },
        {
            title: 'Yard Barker',
            hrefToProps: 'https://yardbarker.herokuapp.com',
            image: "https://i.imgur.com/5s17U1A.png",
            description: 'Full Stack Web application written with Python and Django. ' +
                'CRUD operations, API, GitHub team workflow and lots of collaborations.'
        },
        {
            title: 'MineSweeper',
            hrefToProps: 'https://ruslandidun91.github.io/mineSweeper_js/',
            image: "https://i.imgur.com/xDfWDFl.png",
            description: 'Funny game, written with Vanilla JavaScript and MVC architecture. ' +
                'Implemented HTML, CSS, sound effects, recursion, DOM manipulation. '
        },
        {
            title: 'Organizer',
            hrefToProps: 'https://ruslandidun91.github.io/react-todoList-ts/',
            image: "https://i.imgur.com/DDsBmfS.jpg",
            description: 'Front End web application, which helps you to make own todo list. ' +
                'Used TypeScript, React, Redux, Yarn, Material_ui, Formik, Ant Design.'
        },
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
                                     image={p.image}/>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    )
}



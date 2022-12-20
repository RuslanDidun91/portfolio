import style from './Project.module.scss'

export const Project = ({title, hrefToProps, description, image}) => {

    return (
        <a href={hrefToProps} target="_blank" rel="noreferrer">
            <div className={style.myProjects} >
                <div className={style.icon} style={{backgroundImage: `url(${image})`}}>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{title}</h3>
                    <span className={style.description}>{description}</span>
                </div>
            </div>
        </a>
    )
}

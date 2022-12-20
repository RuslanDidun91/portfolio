import style from './Skill.module.scss'

export const Skill = ({title, description, icon}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <div className={style.skillIcon}>{icon}</div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{title}</h3>
                <span className={style.projectDescription}>{description}</span>
            </div>
        </div>
    )
}

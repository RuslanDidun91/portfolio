import style from './Title.module.scss'

export const Title = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}


import style from './Button.module.scss';

export const Button = (props) => {
    return (
        <a href="//" className={style.button}>{props.text}</a>
    )
}


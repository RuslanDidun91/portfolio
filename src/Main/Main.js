import style from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {
    return (
        <div id='main' className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.bgImage}/>
                <div className={style.mainText}>
                    <span> Hi There!</span>
                    <span>I am Ruslan <span>Didun</span></span>
                    <ReactTypingEffect text=" Full Stack Web Developer "
                                       speed={100}/>
                </div>
            </div>
        </div>
    )
}


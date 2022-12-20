import {Nav} from "../Nav/Nav"
import style from './Header.module.scss'
import {Fade} from "react-awesome-reveal"

export const Header = () => {
    return (
        <div className={style.header}>
            <Fade cascade direction={"right"}>
                <Nav/>
                {/*<BurgerMenu/>*/}
            </Fade>
        </div>
    )
}
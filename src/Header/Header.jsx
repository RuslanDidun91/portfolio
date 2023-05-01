import { Fade } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";
import style from './Header.module.scss';

export const Header = () => {
    return (
        <div className={style.header}>
            <Fade cascade direction={"right"}>
                <Nav />
            </Fade>
        </div>
    );
};
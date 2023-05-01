import { useState } from 'react';
import { Link } from 'react-scroll';
import style from './BurgerMenu.module.scss';

export const BurgerMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    let onBurgerButtonClick = () => {
        setMenuIsOpen(
            !menuIsOpen
        );
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen
                ? `${style.burgerNavItems} ${style.show}`
                : style.burgerNavItems}>
                <Link to='main' spy={true} smoth={true}
                    offset={1} duration={1000}>Main</Link>
                <Link to='skills' spy={true} smoth={true}
                    offset={1} duration={1000}>Skills</Link>
                <Link to='projects' spy={true} smoth={true}
                    offset={1} duration={1000}>Projects</Link>
                <Link to='contacts' spy={true} smoth={true}
                    offset={1} duration={1000}>Contacts</Link>
            </div>
            <div onClick={onBurgerButtonClick} className={style.burgerButton}> </div>
        </div>
    );
};
import style from './Footer.module.scss'
import styleContainer from "../common/styles/container.module.css"
import {Title} from "../common/components/title/Title"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {fab} from '@fortawesome/free-brands-svg-icons'
import {Fade} from "react-awesome-reveal"
import {useState} from "react";
import {SocialIcon} from "./SocialIcon/SocialIcon";

library.add(fab)

export const Footer = () => {
    const [icon] = useState([
        {
            socialIcon: <a href='https://www.instagram.com/wanderlust_unlimited_/'
                           target='_blank'
                           rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']}
                                                             size='2x' color={'white'}/></a>
        },
        {
            socialIcon: <a href='https://t.me/Romanovych_Rus'
                           target='_blank'
                           rel="noreferrer"><FontAwesomeIcon icon={['fab', 'telegram-plane']}
                                                             size='2x' color={'white'}/></a>
        },
        {
            socialIcon: <a href='https://www.facebook.com/profile.php?id=100010465055493'
                           target='_blank'
                           rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']}
                                                             size='2x' color={'white'}/></a>
        },
        {
            socialIcon: <a href='https://github.com/RuslanDidun91'
                           target='_blank'
                           rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']}
                                                             size='2x' color={'white'}/></a>
        },
        {
            socialIcon: <a href='https://www.linkedin.com/in/Ruslan-Didun'
                           target='_blank'
                           rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']}
                                                             size='2x' color={'white'}/></a>
        }
    ])

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <Fade cascade={false} direction={"up"} delay={0}>
                        <Title text={'Ruslan Didun'}/>
                    </Fade>
                    <Fade direction={"left"} delay={0}>
                        <div className={style.icons}>
                            {icon.map((i, idx) => (
                                <SocialIcon icon={i.socialIcon} key={idx.id}/>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>
            <Fade direction={"left"} delay={0}>
                <span className={style.rightsReserved}>©2023 All rights reserved</span>
            </Fade>
        </div>
    )
}
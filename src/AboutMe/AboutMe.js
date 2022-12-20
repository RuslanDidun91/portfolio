import styles from './AboutMe.module.scss'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';


export const AboutMe = () => {

    return (
        <div id={"aboutMe"} className={styles.mainAboutMe}>
            <Fade direction={"up"}>
                <Title text={'About me'}/>
            </Fade>
            <div className={styles.aboutMe}>
                <div className={styles.textSpan}>
                    <span>
                        I've always had a passion for web development and software engineering.
                        As a General Assembly graduate I have successfully demonstrated my
                        abilities with multiple programming languages and technologies such
                        as JavaScript, HTML, CSS, React, Express, MongoDB, Python, Django.
                        <br/>
                        <br/>
                        For some period of time I was part of another super friendly
                        Canadian team but at some point I've realized, It isn't that
                        challenging for me. Always a bit uncomfortable, but going out of my
                        comfort zone. I want to be a software developer because
                        designing computer programs lets me to use creative, problem-solving
                        skills and all abilities that I gained from my previous places.
                    </span>
                    <br/>
                    <br/>
                    <span>
                        Until then, I see my self as a part of start-up or organisation that
                        values teamwork with a positive atmosphere and where I can grow
                        as a developer. I am friendly, results oriented, highly motivated, passionate in coding
                        and active sport, flexible and always open to adequate criticism.
                        I love to collaborate with others to create something wonderful
                        and useful and, if that's a passion of yours as well, let's connect!
                        Would be happy to hear from you!
                    </span>
                </div>
                <div className={styles.photo}>
                    <Tilt className="parallax-effect-glare-scale"
                          perspective={1000}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1}>
                        <div className={styles.image}>
                        </div>
                    </Tilt>
                    <Fade cascade direction={"up"}>
                        <div className={styles.quoteDiv}>
                            <blockquote>
                                "Simplicity is the soul of efficiency"
                            </blockquote>
                            <cite> ~ Austin Freeman</cite>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
import {Title} from '../common/components/title/Title';
import {Fade} from "react-awesome-reveal";
import {Form} from './Form';
import style from './Contacts.module.scss';


export const ContactForm = () => {
    return (
        <div id='contacts' className={style.contactBlock}>
            <div className={style.container}>
                <Fade cascade={true} direction={"up"} delay={0}>
                    <Title text={'Contacts'}/>
                </Fade>
                <Fade cascade={true} direction={"left"} delay={1}>
                    <Form/>
                </Fade>
            </div>
        </div>
    );
};

import { Form } from 'react-router-dom';

import classes from "./MagicForm.module.css";
import Container from "../UI/Container/Container";
import magicAvatar from "../assets/magic-avatar.jpg";

const MagicForm = () => {
    return ( <Container>
        <div className={classes.wrapper}>
            <div className={classes.form}>
                <p className={classes["form-title"]}>Форма волшебства</p>
                <Form method="post" className={classes.inputs}>
                    <p className={classes.paragraphs}>
                        <label htmlFor="name">Имя</label>
                        <input id="name" type="text" name="title" placeholder="Как Вас зовут?"/>
                    </p>
                    <p className={classes.paragraphs}>
                        <label htmlFor="tel">Номер телефона</label>
                        <input id="tel" type="tel" name="tel" placeholder="Номер телефона"/>
                    </p>
                    <label>Если есть инста поделитесь с нами</label>
                    <p className={classes.paragraphs}>
                        <label htmlFor="text">Instagram</label>
                        <input id="text" type="text" name="text" placeholder="Никнейм в Instagram"/>
                    </p>
                    <button className={classes["form-button"]}>Оставить заявку</button>
                </Form>
            </div>
            <div className={classes.avatar}>
                <img src={magicAvatar} width="200px" height="250px"/>
            </div>
        </div>
    </Container>
    );
};

export default MagicForm;
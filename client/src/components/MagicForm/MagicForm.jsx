import { Form, useNavigation } from 'react-router-dom';

import classes from "./MagicForm.module.css";
import Container from "../UI/Container/Container";
import magicAvatar from "../assets/magic-avatar.jpg";

const MagicForm = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return ( <Container>
        <div className={classes.wrapper}>
            <div className={classes.form}>
                <p className={classes["form-title"]}>Форма волшебства</p>
                <Form method="patch" className={classes.inputs}>
                    <p className={classes.paragraphs}>
                        <label htmlFor="name">Имя</label>
                        <input id="name" type="text" name="name" placeholder="Как Вас зовут?"/>
                    </p>
                    <p className={classes.paragraphs}>
                        <label htmlFor="tel">Телефон</label>
                        <input id="tel" type="tel" name="tel" placeholder="Номер телефона"/>
                    </p>
                    <p className={classes.paragraphs}>
                        <label htmlFor="inst">Instagram<p className={classes.info}>(Если есть инста поделитесь с нами)</p></label>
                        <input id="inst" type="text" name="inst" placeholder="Никнейм в Instagram"/>
                    </p>
                    <div>
                        {!isSubmitting && <button className={classes["form-button"]}>Оставить заявку</button>}
                    </div>
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

export const action = async ({request, params}) => {

    const data = await request.formData();
    const eventData = {
        name: data.get('name'),
        tel: data.get('tel'),
        inst: data.get('inst')
    };
    debugger;

  
    let url = 'http://localhost:5000/api/user';
    // if(method === "PATCH") {
    //   const eventId = params.eventId;
    //   url = 'http://localhost:8080/events/' + eventId;
    // }
  
    const response = await fetch(url);
    const datas = await response.json();
    debugger
  
    // if(response.status === 422) {
    //     return response;
    // };
    
    // if (!response.ok) {
    //     throw new Response(
    //         JSON.stringify({
    //           message: "new fail!",
    //         }),
    //         { status: 500 }
    //       );
    // }
    // return redirect("/events");
  
  };
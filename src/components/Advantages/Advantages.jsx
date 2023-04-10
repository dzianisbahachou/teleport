import classes from "./Advantages.module.css";
import Container from "../UI/Container/Container";
import { useState } from "react";
import Transition from "react-transition-group/Transition";

const DUMMY_ADV = [
    {id: 1, name: "one", pic: "/assets/mini1.png", title:"Костюмы ручной работы", text: "Для сказочного проведения детских праздников мы проводим сотни часов в поиске того самого воплощения образа героя. Нам важно не просто создать внешнюю копию персонажа, а передать его характер и настроение. Поэтому с большим вниманием мы относимся даже к самым маленьким деталям в образе."},
    {id: 2, name: "two", pic: "/assets/logo/eventLogo/sky.png", title: "Захватывающие сценарии", text: "Мы адаптируем программы под возраст и количество участников и подбираем такие форматы, которые понравятся всем гостям праздника. Это и театрализованные представления, шоу и конкурсы, дополнения к празднику, количество которых может быть ограничено только вашей фантазией"},
    {id: 3, name: "three", pic: "/assets/mini1.png", title: "Молодые и веселые актеры", text: "Наши актеры — это люди, которые делают то, что любят и любят то, что делают. Они не только волшебно отыграют роли, но и смогут найти подход к каждому ребенку: вовлечь в игру робких и витающих в облаках, утереть слезы ранимым и впечатлительным и даже разнять драчунов. А еще мастерски смогут вовлечь в игру самых требовательных зрителей – Вас родителей "},
    {id: 4, name: "four", pic: "/assets/logo/eventLogo/sky.png", title: "Репетиции каждую неделю", text: "Чтобы создать волшебную атмосферу, наша команда каждую неделю собирается на офисе и начинается волшебство. Ведь вжиться в роль непросто! Актеры изучают сценарий программы, поют, танцуют и импровизируют, чтобы праздник прошел как в сказке."},
    {id: 5, name: "five", pic: "/assets/logo/eventLogo/mickeyMouse.png", title: "Качество не привязано к стоимости", text: "Наша главная задача – создать праздник, о котором Ваш малыш и его гости вспоминали бы с удовольствием. Ради этого мы будем выкладываться по полной. И совсем неважно, что организуем для вас – экспресс-поздравление на 30 минуток или праздник на 5 часов. Все пройдет безупречно!"}
];

const Advantages = () => {

    const [picture, setPicture] = useState(DUMMY_ADV[0].pic)
    const [text, setText] = useState(DUMMY_ADV[0].text);
    const [title, setTitle] = useState(DUMMY_ADV[0].title);
    const [isShow, setIsShow] = useState(true);
    const [defaultIndex, setDefaultIndex] = useState(0);

    const advantagesHandler = (index, a) => {
        if (index === defaultIndex) {
            return
        }
        setDefaultIndex(index);
        setIsShow(false);
        setTimeout(()=> {
            const selectedItem = DUMMY_ADV.find(item => item.id === index+1).pic;
            const selectedTitle = DUMMY_ADV.find(item => item.id === index+1).title;
            const selectedText = DUMMY_ADV.find(item => item.id === index+1).text;
            setPicture(selectedItem);
            setTitle(selectedTitle);
            setText(selectedText);
        }, 250)

        setTimeout(()=> setIsShow(true), 250);
    }

    return (<div className={classes.back}>
    <Container>
        <div className={classes.wrapper}>
            <div className={classes.title}>Праздник в деталях </div>
            <div className={classes.advantages}>
                <ul className={classes.list}>
                    {DUMMY_ADV.map((item,index) => (
                        <li key={index} type="button" onClick={advantagesHandler.bind(item, index)}>
                            <img src={item.pic} width="190vw" style={{cursor: "pointer"}}/></li>
                        ))}
                </ul>
                <div className={classes.description}>
                <Transition in={isShow} timeout={1000} mountOnEnter unmountOnExit>
                    {state => (
                        <div style={{ 
                        width: "65vw", 
                        height: 100, 
                        margin: "auto",
                        transform: state === "entering" ? "scale(1)" : state === "exited" ? "scale(0.9)" : state === "entered" ? "scale(1)": state === "exiting" ? "scale(0.9)" : "",
                        transition: "all 1s ease",
                    }}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "3rem"}}>
                            <div>
                                <p className={classes["sub-title"]}>{title}</p>
                                <p className={classes["sub-description"]}>{text}</p>
                            </div>
                            <img src={picture} width="500rem"/></div>
                        </div>
                    )}
                    </Transition>
                </div>
            </div>
        </div>
    </Container>
    </div>);
};

export default Advantages;
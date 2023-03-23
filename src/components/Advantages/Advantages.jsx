import classes from "./Advantages.module.css";
import Container from "../UI/Container/Container";
import avatar1 from "../assets/magic-avatar.jpg";
import avatar2 from "../assets/banner.jpg";
import { useState } from "react";
import Transition from "react-transition-group/Transition";


const DUMMY_ADV = [
    {id: 1, name: "one", pic: avatar1, text: "YOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRSTYOU ARE FIRST"},
    {id: 2, name: "two", pic: avatar2, text: "YOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECONDYOU ARE SECOND"},
    {id: 3, name: "three", pic: avatar1, text: "YOU ARE THIRD YOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRDYOU ARE THIRD"},
    {id: 4, name: "four", pic: avatar2, text: "YOU ARE FOURTH YOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTHYOU ARE FOURTH"},
    {id: 5, name: "five", pic: avatar1, text: "YOU ARE FIVTH YOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTHYOU ARE FIVTH"}
];

const Advantages = () => {

    const [picture, setPicture] = useState(avatar1)
    const [text, setText] = useState(DUMMY_ADV[0].text);
    const [isShow, setIsShow] = useState(true);
    const [defaultIndex, setDefaultIndex] = useState(0);

    const onA = (index, a) => {
        if (index === defaultIndex) {
            return
        }
        setDefaultIndex(index);
        setIsShow(false);
        setTimeout(()=> {
            const selectedItem = DUMMY_ADV.find(item => item.id === index+1).pic;
            const selectedText = DUMMY_ADV.find(item => item.id === index+1).text;
            setPicture(selectedItem);
            setText(selectedText);
        }, 250)

        setTimeout(()=> setIsShow(true), 250);
    }

    return (<Container>
        <div className={classes.wrapper}>
            <div className={classes.title}>Праздник в деталях</div>
            <div className={classes.advantages}>
                <div className={classes.list}>
                    {DUMMY_ADV.map((item,index) => (
                        <p><button type="button" onClick={onA.bind(item, index)}>{item.name}</button></p>
                        ))}
                </div>
                <div className={classes.description}>
                <Transition in={isShow} timeout={1000} mountOnEnter unmountOnExit
                    onEnter={()=> console.log("enter")} onEntering={()=> console.log("entering")}>
                    {state => (
                        <div style={{ 
                        width: 1300, 
                        height: 100, 
                        margin: "auto",
                        transform: state === "entering" ? "scale(1)" : state === "exited" ? "scale(0.9)" : state === "entered" ? "scale(1)": state === "exiting" ? "scale(0.9)" : "",
                        transition: "all 1s ease",
                    }}>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <p>{text}</p>
                            <img src={picture} width="200px" style={{borderRadius:"40px"}} height="250px"/></div>
                        </div>
                    )}
                    </Transition>
                </div>
            </div>
        </div>
    </Container>);
};

export default Advantages;
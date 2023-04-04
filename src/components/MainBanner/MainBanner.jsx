import { useState } from "react";
import classes from "./MainBanner.module.css";
import Container from "../UI/Container/Container";

const MainBanner = () => {
    const [modalIsOpened, setModalIsOpened] = useState(false);

    const showModal = () => {
        setModalIsOpened(true);
    }
    const closeModal = () => {
        setModalIsOpened(false);
    }

    return (<>
        {/* <Modal show={modalIsOpened} closed={closeModal}/>
        <Backdrop show={this.state.modalIsOpen} /> */}
        <div className={classes.welcome}>
            {/* <img src="/icons/banner.webp" alt="Banner" className={classes.banners}/> */}
            <Container>
                <h1 className={classes.title}>СТУДИЯ ДЕТСКИХ ПРАЗДНИКОВ В БРЕСТЕ</h1>
                <p className={classes.description}>
                Детские праздники в Бресте и Брестской области.<br/>
                Наши герои создадут веселье где угодно: в квартире, <br/>загородном доме, кафе, школе или детский саду.<br/> 
                Забронировать волшебный праздник с нашей студией легко.
                </p>
                <button className={classes["main-button"]}><a href="#magicForm">Вызвать волшебников</a></button>
            </Container>
        </div>
    </>);
};

export default MainBanner;
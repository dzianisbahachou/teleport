import { useState } from 'react';
import classes from './MainBanner.module.css';
import Container from '../UI/Container/Container';
import MainButton from '../UI/MainButton/MainButton';
import Wave from '../UI/Wave/Wave';

const MainBanner = () => {
    return (<div className={classes.welcome}>
            <img src='/assets/mainBanner.webp' alt='Banner' className={classes.banner}/>
            <img src='/assets/baner.webp' alt='Banner' className={classes['baner-mobile']}/>
            <div className={classes.info}>
                <Container>
                    <h1 className={classes.title}>СТУДИЯ ДЕТСКИХ ПРАЗДНИКОВ В БРЕСТЕ</h1>
                    <span className={classes.description}>
                    Детские праздники в Бресте и Брестской области.<br/>
                    Наши герои создадут веселье где угодно: в квартире, <br/>загородном доме, кафе, школе или детский саду.<br/> 
                    Забронировать волшебный праздник с нашей студией легко.
                    </span>
                    <MainButton><a href='#magicForm'>Вызвать волшебников</a></MainButton>
                </Container>
            </div>
            <Wave />
        </div>);
};

export default MainBanner;
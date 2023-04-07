import cl from './EventLogo.module.css';

export default function EventLogo({imgPath}) {
    return (
        <div className={cl['image-container']}>
            <img className={cl.image} src={imgPath} alt="" />
        </div>
    );
}
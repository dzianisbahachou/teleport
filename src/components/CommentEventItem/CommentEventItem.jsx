import cl from './CommentEventItem.module.css';


export default function CommentEventItem({data}) {
    
    return (
        <div className={cl.item}>
            <div className={cl['img-container']}>
                <img src="https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart" alt="" className={cl.img}/>
            </div>
            <div>
                Спайдер Мен
            </div>
        </div>
    );
}
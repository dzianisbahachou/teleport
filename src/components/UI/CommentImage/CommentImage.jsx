import cl from './CommentImage.module.css';

export default function CommentImage() {
    return (
        <div className={cl['image-container']}>
            <img className={cl.image} src="https://www.ixbt.com/img/n1/news/2022/5/5/0c3c20a8d8514501524a0859461f391572ea6e61_large.jpg" alt="" />
        </div>
    );
}
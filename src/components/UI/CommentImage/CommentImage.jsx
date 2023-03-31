import cl from './CommentImage.module.css';

export default function CommentImage({imgPath}) {
    return (
        <div className={cl['image-container']}>
            <img className={cl.image} src={imgPath} alt="" />
        </div>
    );
}
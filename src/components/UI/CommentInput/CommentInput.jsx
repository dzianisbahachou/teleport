import cl from './CommentInput.module.css';

export default function CommentInput({...props}) {
    return (
        <input {...props} type="text" className={cl.input}/>
    );
}
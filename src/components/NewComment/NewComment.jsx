import { Form } from 'react-router-dom';
import cl from './NewComment.module.css';
import CommentInput from '../UI/CommentInput/CommentInput';

export default function NewComment() {
    return (
        <Form method='POST' className={cl.form}>
            <CommentInput name='name' placeholder='Ваше имя'/>
            <CommentInput name='eventType' placeholder='Евент тип'/>
            <div className={cl['text-container']}>
                <textarea 
                    name='comment' 
                    rows={4} className={cl.textarea}
                    placeholder='Пару слов...'>
                </textarea>
                <button className={cl.button}>
                    <img width={60} src="/icons/6492707.png" alt="Отправить" />
                </button> 
            </div>
        </Form>
    );
}
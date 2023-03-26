import { Form } from 'react-router-dom';
import cl from './NewComment.module.css';
import CommentInput from '../UI/CommentInput/CommentInput';
import useInput from '../../hooks/use-input';

export default function NewComment() {

    const validateName = value => {
        return value.lenght > 0;
    };

    const validateComment = value => {
        return value.lenght > 0;
    };

    const validateEventType = value => {
        return true;
    };

    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        inputChangeHandler: onNameChange,
        inputBlurHandler: onNameBlur,
        reset: resetName
    } = useInput(validateName);

    const {
        value: eventTypeValue,
        isValid: eventTypeIsValid,
        hasError: eventTypeHasError,
        inputChangeHandler: onEventTypeChange,
        inputBlurHandler: onEventTypeBlur,
        reset: resetEventType
    } = useInput(validateEventType);

    const {
        value: commentValue,
        isValid: commentIsValid,
        hasError: commentHasError,
        inputChangeHandler: onCommentChange,
        inputBlurHandler: onCommentBlur,
        reset: resetComment
    } = useInput(validateComment);

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
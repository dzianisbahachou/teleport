import { Form, useSubmit, useNavigation } from 'react-router-dom';
import { useRef, useState } from 'react';
import cl from './NewComment.module.css';
import CommentInput from '../UI/CommentInput/CommentInput';
import useInput from '../../hooks/use-input';
import CommentTextarea from '../UI/CommentTextarea/CommentTextarea';
import CommentEventTypeModal from '../CommentEventTypeModal/CommentEventTypeModal';
import { convertEventType } from '../../util/firebaseResponseHandler';

export default function NewComment() {
    const [isEventTypeActive, setIsEventTypeActive] = useState(false);
    const [selectedEventType, setSelectedEventType] = useState('');
    const sub = useSubmit();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const nameInputRef = useRef();
    const eventTypeInputRef = useRef();
    const commentInputRef = useRef();

    const validateName = value => {
        return value.length > 0;
    };

    const validateComment = value => {
        return value.length > 0;
    };

    const validateEventType = value => {
        return value.length > 0;
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

    const formIsValid = commentIsValid && eventTypeIsValid && nameIsValid;

    const submitHandler = (event) => {
        event.preventDefault();
  
        if (!commentIsValid) {
            onCommentBlur();
            commentInputRef.current.focus();
        }

        if (!eventTypeIsValid) {
            onEventTypeBlur();
        }
  
        if (!nameIsValid) {
            onNameBlur();
            nameInputRef.current.focus();
        }
  
        if (formIsValid) {
            const formData = {
                name: nameValue,
                eventSubType: selectedEventType,
                comment: commentValue
            };

            sub(formData, {method: "post"});
    
            resetName();
            resetEventType();
            resetComment();
        }
    };

    const openEventTypeModal = () => {
        setIsEventTypeActive(true);
    };

    const closeEventTypeModal = () => {
        setIsEventTypeActive(false);
    };

    const onEventTypeClick = (eventSubType) => {
        const userFriendlyEventType = convertEventType(eventSubType);
        const dummy = {
            target: {
                value: userFriendlyEventType
            }
        };

        setSelectedEventType(eventSubType);
        onEventTypeChange(dummy);
        closeEventTypeModal();
    };

    return (
        <>
            {isEventTypeActive && <CommentEventTypeModal closeModal={closeEventTypeModal} onEventTypeClick={onEventTypeClick}/>}
            <Form method='POST' className={cl.form}>         
                <div className={cl['info-container']}>
                    <CommentInput
                        ref={nameInputRef}
                        name='name' 
                        placeholder='Ваше имя'
                        value={nameValue}
                        isInvalid={nameHasError}
                        onChange={onNameChange}
                        onBlur={onNameBlur}/>
                    <CommentInput
                        ref={eventTypeInputRef}
                        name='eventType' 
                        placeholder='Евент тип'
                        value={eventTypeValue}
                        isInvalid={eventTypeHasError}
                        onChange={onEventTypeChange}
                        onBlur={onEventTypeBlur}
                        onClick={openEventTypeModal}
                        autocomplete="off"
                        onKeyDown={e => e.preventDefault()}
                        inputmode='none'/> 
                    <CommentTextarea 
                        ref={commentInputRef}
                        name='comment' 
                        rows={4} className={cl.textarea}
                        placeholder='Пару слов...'
                        value={commentValue}
                        isInvalid={commentHasError}
                        onChange={onCommentChange}
                        onBlur={onCommentBlur}>
                    </CommentTextarea>
                </div>
                <div className={cl.action}>
                    <button className={cl.button}>
                        <img className={cl['button-img']} src="/assets/icons/6492707.png" alt="Отправить" onClick={submitHandler}/>
                    </button> 
                </div>
            </Form>
        </>
    );
}
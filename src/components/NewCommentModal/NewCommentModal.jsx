import { Form, useSubmit, useNavigation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import cl from './NewCommentModal.module.css';
import CommentInput from '../UI/CommentInput/CommentInput';
import useInput from '../../hooks/use-input';
import CommentTextarea from '../UI/CommentTextarea/CommentTextarea';
import CommentEventTypeModal from '../CommentEventTypeModal/CommentEventTypeModal';
import { convertEventType } from '../../util/firebaseResponseHandler';
import MainButton from '../UI/MainButton/MainButton';
import Transition from 'react-transition-group/Transition';

export default function NewCommentModal({show, closeModal}) {
    const [isEventTypeActive, setIsEventTypeActive] = useState(false);
    const [selectedEventType, setSelectedEventType] = useState('');
    const sub = useSubmit();

    const nameInputRef = useRef();
    const eventTypeInputRef = useRef();
    const commentInputRef = useRef();

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        }
    }, []);

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
    } = useInput(validateName);

    const {
        value: eventTypeValue,
        isValid: eventTypeIsValid,
        hasError: eventTypeHasError,
        inputChangeHandler: onEventTypeChange,
        inputBlurHandler: onEventTypeBlur,
    } = useInput(validateEventType);

    const {
        value: commentValue,
        isValid: commentIsValid,
        hasError: commentHasError,
        inputChangeHandler: onCommentChange,
        inputBlurHandler: onCommentBlur,
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
    
            closeModal();
        }
    };

    const openEventTypeModal = (e) => {
        e.stopPropagation();
        setIsEventTypeActive(true);
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
        setIsEventTypeActive(false);
    };

    const onContentClick = (e) => {
        e.stopPropagation();
        setIsEventTypeActive(false);
    };

    const contentClasses = [cl.content];

    if (show === 'entering') {
        contentClasses.push(cl['opened']);
    } else if (show === 'exiting') {
        contentClasses.push(cl['closed']);
    }

    return (
        <div className={cl.wrapper} onClick={closeModal}>
            <div className={contentClasses.join(' ')} onClick={onContentClick}>
                <div className={cl.header}>
                    <div>
                        <span className={cl.title}>Ваши впечатления</span>
                    </div>
                    <div className={cl.close} onClick={closeModal}>
                        +
                    </div>

                </div>
                <Form method='POST' className={cl.form}>  
                    <CommentInput
                        ref={nameInputRef}
                        name='name' 
                        placeholder='Ваше имя'
                        autoComplete="off"
                        value={nameValue}
                        isInvalid={nameHasError}
                        onChange={onNameChange}
                        onBlur={onNameBlur}/>
                    <div className={cl['event-type-container']}>
                        <CommentInput
                            ref={eventTypeInputRef}
                            name='eventType' 
                            placeholder='Кто подарил радость'
                            value={eventTypeValue}
                            isInvalid={eventTypeHasError}
                            onChange={onEventTypeChange}
                            onClick={openEventTypeModal}
                            autoComplete="off"
                            onKeyDown={e => e.preventDefault()}
                            inputMode='none'/> 
                        <Transition in={isEventTypeActive} timeout={300} mountOnEnter unmountOnExit>
                            { state => <CommentEventTypeModal show={state} onEventTypeClick={onEventTypeClick}/> }
                        </Transition>
                    </div>
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
                    <div className={cl.action}>
                        <MainButton onClick={submitHandler}>
                            Поделиться
                        </MainButton> 
                    </div>
                </Form>
            </div>
        </div>
    );
}
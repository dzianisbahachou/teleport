import { json, useLoaderData, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import cl from './CommentsPage.module.css';
import APICalls from "../../API/API";
import { convertResponse } from '../../util/firebaseResponseHandler';
import { convertResponseErrorMessage } from '../../util/firebaseResponseHandler';

import LoginLoader from '../../components/UI/LoginLoader/LoginLoader';
import CommentsList from '../../components/CommentsList/CommentsList';
import NewCommentModal from '../../components/NewCommentModal/NewCommentModal';
import MainButton from '../../components/UI/MainButton/MainButton';
import Container from '../../components/UI/Container/Container';
import Transition from 'react-transition-group/Transition';

const CommentsPage = () => {
    const data = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';
    const [isNewCommentDisplayed, setIsNewCommentDisplayed] = useState(false);

    const openNewCommentModal = () => {
        setIsNewCommentDisplayed(true);
    };

    const closeNewCommentModal = () => {
        setIsNewCommentDisplayed(false);
    };

    return (
        <div className={cl.page}>
            <Container>
                <Transition in={isNewCommentDisplayed} timeout={300} mountOnEnter unmountOnExit>
                    {state => <NewCommentModal show={state} closeModal={closeNewCommentModal}/>}
                </Transition>
                <CommentsList comments={data}/>
                <div className={cl.actions}>
                    <MainButton onClick={openNewCommentModal}>Оставить отзыв</MainButton>    
                </div>   
            </Container>
            {isLoading && <LoginLoader />}
        </div>
    );
};

export default CommentsPage;

export async function loader() {
    try {
        const snapshot = await APICalls.getComments();
        
        if (!snapshot.exists()) {
            throw new Error('snapshot/comments-doesnot-exist');
        }

        const value = snapshot.val();
        const comments = convertResponse(value);
        const sortedComments = comments.reverse();

        return sortedComments;
    } catch(e) {
        const message = convertResponseErrorMessage(e.message);

        throw json(
            { message },
            { status: 500 }
        );
    }
}

export async function action({request}) {
    const data = await request.formData();
    const commentData = {
        text: data.get('comment'),
        name: data.get('name'),
        eventSubType: data.get('eventSubType'),
    };

    try {
        await APICalls.createComment(commentData);
    } catch(e) {
        throw json(
            { message: "Произошла ошибка!" },
            { status: 500 }
        );
    }

    return null;
}
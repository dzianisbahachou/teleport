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
                {isLoading && <LoginLoader />}
                {isNewCommentDisplayed && <NewCommentModal closeModal={closeNewCommentModal}/>}
                <CommentsList comments={data}/>
                <div className={cl.actions}>
                    <MainButton onClick={openNewCommentModal}>Оставить отзыв</MainButton>    
                </div>   
            </Container>
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

        return comments;
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
    const date = Date.now();
    const commentData = {
        text: data.get('comment'),
        name: data.get('name'),
        eventSubType: data.get('eventSubType'),
        date
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
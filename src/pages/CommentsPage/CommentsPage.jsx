import { json, useLoaderData, useNavigation } from 'react-router-dom';
import cl from './CommentsPage.module.css';
import APICalls from "../../API/API";
import { convertResponse } from '../../util/firebaseResponseHandler';
import { convertResponseCode } from '../../util/firebaseResponseHandler';

import LoginLoader from '../../components/UI/LoginLoader/LoginLoader';
import CommentsList from '../../components/CommentsList/CommentsList';
import NewComment from '../../components/NewComment/NewComment';
import Container from '../../components/UI/Container/Container';

const CommentsPage = () => {
    const data = useLoaderData();
    const isLoading = useNavigation().state === 'loading';

    return (
        <Container>
            {isLoading && <LoginLoader />}
            <div className={cl.comments}>
                <CommentsList comments={data}/> 
                <NewComment />       
            </div>   
        </Container>
    );
};

export default CommentsPage;

export async function loader() {
    try {
        const snapshot = await APICalls.getComments();
        
        if (!snapshot.exists()) {
            throw new Error();
        }

        const value = snapshot.val();
        const comments = convertResponse(value);

        return comments;
    } catch(e) {
        const message = convertResponseCode(e.message);

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
        event_type: data.get('eventType')
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
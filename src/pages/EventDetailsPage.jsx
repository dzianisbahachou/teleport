import AnimatorDetails from "../components/AnimatorDetails/AnimatorDetails";
import { useLoaderData, json } from "react-router-dom";
import APICalls from "../API/API";
import { convertResponse, convertResponseErrorMessage } from "../util/firebaseResponseHandler";
import Gallery from "../components/Gallery/Gallery";
import CommentsList from "../components/CommentsList/CommentsList";
import classes from "./EventDetailsPage.module.css";
import Container from "../components/UI/Container/Container";
import { useState } from "react";
import MainButton from "../components/UI/MainButton/MainButton";
import { Transition } from "react-transition-group";
import NewCommentModal from "../components/NewCommentModal/NewCommentModal";

export default function EventDetailsPage() {
    const [isNewCommentDisplayed, setIsNewCommentDisplayed] = useState(false);

    const openNewCommentModal = () => {
        setIsNewCommentDisplayed(true);
    };

    const closeNewCommentModal = () => {
        setIsNewCommentDisplayed(false);
    };

    const data = useLoaderData();
    return (
        <div className={classes.wrapper}>
            <AnimatorDetails/>
            <Container>
                <Gallery imgPath={data.eventType}/>
                <Transition in={isNewCommentDisplayed} timeout={300} mountOnEnter unmountOnExit>
                    {state => <NewCommentModal show={state} closeModal={closeNewCommentModal}/>}
                </Transition>
                <div className={classes.comments}>
                    <CommentsList comments={data.sortedComments}/>
                    <div className={classes.actions}>
                        <MainButton onClick={openNewCommentModal}>Оставить отзыв</MainButton>
                    </div>  
                </div>
            </Container>
        </div>  
    );
}

export async function loader({params}) {
    const eventType = params.eventType;
    try {
        const snapshot = await APICalls.getComemntsForEvent(eventType);
        
        if (!snapshot.exists()) {
            throw new Error('snapshot/comments-doesnot-exist');
        }

        const value = snapshot.val();
        const comments = convertResponse(value);
        const sortedComments = comments.reverse();
        return {
            sortedComments: sortedComments,
            eventType: eventType
        }
    } catch(e) {
        const message = convertResponseErrorMessage(e.message);
        throw json(
            { message },
            { status: 500 }
        );
    }
}
import AnimatorDetails from "../../components/AnimatorDetails/AnimatorDetails";
import { useLoaderData, json, useLocation } from "react-router-dom";
import APICalls from "../../API/API";
import { convertResponse, convertResponseErrorMessage } from "../../util/firebaseResponseHandler";
import Gallery from "../../components/Gallery/Gallery";
import CommentsList from "../../components/CommentsList/CommentsList";
import classes from "./EventDetailsPage.module.css";
import Container from "../../components/UI/Container/Container";
import { useState } from "react";
import MainButton from "../../components/UI/MainButton/MainButton";
import { Transition } from "react-transition-group";
import NewCommentModal from "../../components/NewCommentModal/NewCommentModal";
import EmptyListMessage from "../../components/UI/EmptyListMessage/EmptyListMessage";
import AdditionChoice from "../../components/AdditionChoice/AdditionChoice";

export default function EventDetailsPage() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    const [isNewCommentDisplayed, setIsNewCommentDisplayed] = useState(false);
    const location = useLocation();
    const route = location.pathname.split("/")[1];

    const openNewCommentModal = () => {
        setIsNewCommentDisplayed(true);
    };

    const closeNewCommentModal = () => {
        setIsNewCommentDisplayed(false);
    };

    const data = useLoaderData();
    return (
        <div className={classes.wrapper}>
            <Container>
                { data.addition 
                    ? <AnimatorDetails data={data}/>
                    : <EmptyListMessage text='Информация об услуге отсутствуeт:('/>
                }
                { data.addition?.addition && <AdditionChoice location={route} data={data.addition}/>}
                <Gallery imgPath={data.eventType}/>
                <Transition in={isNewCommentDisplayed} timeout={300} mountOnEnter unmountOnExit>
                    {state => <NewCommentModal show={state} closeModal={closeNewCommentModal}/>}
                </Transition>
                <div className={classes.comments}>
                    { data.sortedComments 
                        ? <CommentsList comments={data.sortedComments}/>
                        : <EmptyListMessage text='Отзывы отсутствуют. Оставь первый!'/>
                    }
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
        const resultData = await Promise.allSettled([
            APICalls.getEventByEventSubType(eventType),
            APICalls.getComemntsForEvent(eventType)
        ]);

        if (!resultData[0].value.exists()) {
            return {
                sortedComments: null,
                eventType: eventType,
                addition: null
            }
        }

        const eventDetailsValue = resultData[0].value.val();
        const eventDetails = convertResponse(eventDetailsValue);
        const selectedItem = eventDetails[0];

        if (!resultData[1].value.exists()) {
            return {
                sortedComments: null,
                eventType: eventType,
                addition: selectedItem
            }
        }

        const commentsValue = resultData[1].value.val();
        const comments = convertResponse(commentsValue);
        const sortedComments = comments.reverse();

        return {
            sortedComments: sortedComments,
            eventType: eventType,
            addition: selectedItem
        }
    } catch(e) {
        const message = convertResponseErrorMessage('snapshot/event-details-doesnot-exist');
        throw json(
            { message },
            { status: 500 }
        );
    }
}

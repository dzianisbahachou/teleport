import AnimatorDetails from "../components/AnimatorDetails/AnimatorDetails";
import { useLoaderData, json } from "react-router-dom";
import APICalls from "../API/API";
import { convertResponse, convertResponseErrorMessage } from "../util/firebaseResponseHandler";
import Gallery from "../components/Gallery/Gallery";
import CommentsList from "../components/CommentsList/CommentsList";
import classes from "./EventDetailsPage.module.css";
import Container from "../components/UI/Container/Container";

export default function EventDetailsPage() {
    const data = useLoaderData();
    return (
        <div className={classes.wrapper}>
            <AnimatorDetails/>
            <Container>
                <Gallery imgPath={data.eventType}/>
                <CommentsList comments={data.sortedComments}/>
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
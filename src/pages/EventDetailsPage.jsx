import AnimatorDetails from "../components/AnimatorDetails/AnimatorDetails";
import { useLoaderData, json } from "react-router-dom";
import APICalls from "../API/API";
import { convertResponse, convertResponseErrorMessage } from "../util/firebaseResponseHandler";

export default function EventDetailsPage() {
    const data = useLoaderData();

    return (
        <>
            <AnimatorDetails/>
        </>  
    );
}

export async function loader({params}) {
    debugger
    // try {
    //     const snapshot = await APICalls.getEvents('animators');
        
    //     if (!snapshot.exists()) {
    //         throw new Error('snapshot/animators-doesnot-exist');
    //     }

    //     const value = snapshot.val();
    //     const animators = convertResponse(value);

    //     return animators;
    // } catch(e) {
    //     const message = convertResponseErrorMessage(e.message);

    //     throw json(
    //         { message },
    //         { status: 500 }
    //     );
    // }
    const eventType = params.eventType;
    return eventType

}
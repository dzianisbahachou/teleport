import { useLoaderData } from "react-router-dom";

export default function EventDetailsPage() {
    const data = useLoaderData();

    return (
        <>
            <h1>details</h1>
            <p>{data}</p>
        </>  
    );
}

export async function loader({params}) {
    const eventType = params.eventType;
    return eventType

}
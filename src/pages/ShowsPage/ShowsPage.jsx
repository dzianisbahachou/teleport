import EventsList from "../../components/EventsList/EventsList";
import { useLoaderData, useNavigation, json } from "react-router-dom";
import LoginLoader from "../../components/UI/LoginLoader/LoginLoader";
import APICalls from "../../API/API";
import { convertResponse, convertResponseErrorMessage } from "../../util/firebaseResponseHandler";
import cl from './ShowsPage.module.css';
import Container from "../../components/UI/Container/Container";
import EmptyListMessage from "../../components/UI/EmptyListMessage/EmptyListMessage";

const ShowsPage = () => {
    const data = useLoaderData();
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading';
    return (
        <div className={cl.wrapper}>
            <Container>
                {data?.length 
                    ? <EventsList events={data} title='ШОУ-ПРОГРАММЫ'/>
                    : <EmptyListMessage text='Не удалось загрузить список Шоу-Программ. Попробуйте позже'/>
                }
            </Container>
            {isLoading && <LoginLoader />}
        </div>
    );
};

export default ShowsPage;

export async function loader() {
    try {
        const snapshot = await APICalls.getEvents('shows');
        
        if (!snapshot.exists()) {
            throw new Error('snapshot/shows-doesnot-exist');
        }

        const value = snapshot.val();
        const shows = convertResponse(value);

        return shows;
    } catch(e) {
        const message = convertResponseErrorMessage(e.message);

        throw json(
            { message },
            { status: 500 }
        );
    }
}
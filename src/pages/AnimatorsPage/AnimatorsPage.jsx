import EventsList from "../../components/EventsList/EventsList";
import { useLoaderData, useNavigation, json } from "react-router-dom";
import LoginLoader from "../../components/UI/LoginLoader/LoginLoader";
import APICalls from "../../API/API";
import { convertResponse, convertResponseErrorMessage } from "../../util/firebaseResponseHandler";
import cl from './AnimatorsPage.module.css';
import Container from "../../components/UI/Container/Container";
import HelpForm from "../../components/HelpForm/HelpForm";
import EmptyListMessage from "../../components/UI/EmptyListMessage/EmptyListMessage";

const AnimatorsPage = () => {
    const data = useLoaderData();
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading';
    return (
        <div className={cl.wrapper}>
            <Container>
                {data?.length 
                    ? <EventsList events={data} title='Аниматоры на день рождения и детский праздник'/>
                    : <EmptyListMessage text='Не удалось загрузить список Аниматоров. Попробуйте позже'/>
                }
            </Container>
            <HelpForm/>
            {isLoading && <LoginLoader />}
        </div>
    );
};

export default AnimatorsPage;

export async function loader() {
    try {
        const snapshot = await APICalls.getEvents('animators');
        
        if (!snapshot.exists()) {
            throw new Error('snapshot/animators-doesnot-exist');
        }

        const value = snapshot.val();
        const animators = convertResponse(value);
        return animators;
    } catch(e) {
        const message = convertResponseErrorMessage(e.message);

        throw json(
            { message },
            { status: 500 }
        );
    }
}
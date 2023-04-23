import EventsList from "../../components/EventsList/EventsList";
import { useLoaderData, useNavigation, json } from "react-router-dom";
import LoginLoader from "../../components/UI/LoginLoader/LoginLoader";
import APICalls from "../../API/API";
import { convertResponse, convertResponseErrorMessage } from "../../util/firebaseResponseHandler";
import cl from './AdditionPage.module.css';
import Container from "../../components/UI/Container/Container";
import HelpForm from "../../components/HelpForm/HelpForm";
import EmptyListMessage from "../../components/UI/EmptyListMessage/EmptyListMessage";
import { useEffect } from "react";

const AdditionPage = () => {
    const data = useLoaderData();
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading';
    return (
        <div className={cl.wrapper}>
            <Container>
                {data?.length 
                    ? <EventsList events={data} title='Дополнительные услуги для вашего праздника'/>
                    : <EmptyListMessage text='Не удалось загрузить список Дополнительных услуг. Попробуйте позже'/>
                }
            </Container>
            {isLoading && <LoginLoader />}
        </div>
    );
};

export default AdditionPage;

export async function loader() {
    try {
        const snapshot = await APICalls.getEvents('addition');
        
        if (!snapshot.exists()) {
            throw new Error('snapshot/addition-doesnot-exist');
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
import EventsList from '../../components/EventsList/EventsList';
import { useLoaderData, useNavigation, json } from 'react-router-dom';
import LoginLoader from '../../components/UI/LoginLoader/LoginLoader';
import APICalls from '../../API/API';
import { convertResponse, convertResponseErrorMessage } from '../../util/firebaseResponseHandler';
import cl from './AdditionPage.module.css';
import Container from '../../components/UI/Container/Container';
import EmptyListMessage from '../../components/UI/EmptyListMessage/EmptyListMessage';

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
            throw new Error('snapshot/additional-doesnot-exist')
        }

        const value = snapshot.val();
        const addition = convertResponse(value);
        return addition;
    } catch(e) {
        const message = convertResponseErrorMessage(e.message);

        throw json(
            { message },
            { status: 500 }
        );
    }
}
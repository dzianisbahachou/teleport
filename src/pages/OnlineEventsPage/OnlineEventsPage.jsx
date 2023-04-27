import OnlineDetails from '../../components/OnlineDetails/OnlineDetails';
import { useLoaderData, json, useLocation, useNavigation } from 'react-router-dom';
import APICalls from '../../API/API';
import { convertResponse, convertResponseErrorMessage } from '../../util/firebaseResponseHandler';
import Gallery from '../../components/Gallery/Gallery';
import CommentsList from '../../components/CommentsList/CommentsList';
import classes from './OnlineEventsPage.module.css';
import Container from '../../components/UI/Container/Container';
import MainButton from '../../components/UI/MainButton/MainButton';
import { Transition } from 'react-transition-group';
import NewCommentModal from '../../components/NewCommentModal/NewCommentModal';
import EmptyListMessage from '../../components/UI/EmptyListMessage/EmptyListMessage';
import AdditionChoice from '../../components/AdditionChoice/AdditionChoice';

const OnlineEventsPage = () => {
    const dataArray = useLoaderData();
    const data = dataArray[0];
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';
    debugger

    // const openNewCommentModal = () => {
    //     setIsNewCommentDisplayed(true);
    // };

    // const closeNewCommentModal = () => {
    //     setIsNewCommentDisplayed(false);
    // };

    return (
        <div className={classes.wrapper}>
            <Container>
                 { data
                    ? <OnlineDetails data={data}/>
                    : <EmptyListMessage text='Информация об услуге отсутствуeт:('/>
                }
                {/* <Gallery imgPath={data.eventType}/>
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
                </div> */}
            </Container>
        </div>  
    );
};

export default OnlineEventsPage;

export async function loader() {
    debugger;
    try {
        const snapshot = await APICalls.getEvents("online");
        
        if (!snapshot.exists()) {
            return null;
        }

        const value = snapshot.val();
        const comments = convertResponse(value);
        const sortedComments = comments.reverse();
        debugger;
        return sortedComments;
    } catch(e) {
        const message = convertResponseErrorMessage('snapshot/online-doesnot-exist');
        throw json(
            { message },
            { status: 500 }
        );
    }
}
import { messageToast } from '../util/toast';
import About from '../components/About/About';
import MagicForm from '../components/MagicForm/MagicForm';
import MainBanner from '../components/MainBanner/MainBanner';
import APICalls from '../API/API';
import Advantages from '../components/Advantages/Advantages';

const HomePage = () => {
    return <>
        <MainBanner/>
        <Advantages/>
        <About/>
        <MagicForm/>
    </>
};

export default HomePage;

export const action = async ({request, params}) => {
    const data = await request.formData();
    const date = new Date().toISOString().split('T')[0].split('-').reverse().join('/');
    const eventData = {
        name: data.get('name'),
        tel: data.get('tel'),
        inst: data.get('inst'),
        date
    };

    try {
        await APICalls.createUser(eventData);
    } catch(e) {
        messageToast('Во время отправки произошла ошибка. Попробуйте позже');
    }

    return null;
};
import { redirect, json } from "react-router";
import About from "../components/About/About";
import MagicForm from "../components/MagicForm/MagicForm";
import MainBanner from "../components/MainBanner/MainBanner";
import APICalls from "../API/API";

const HomePage = () => {
    return <>
        <MainBanner/>
        <About/>
        <MagicForm/>
    </>
};

export default HomePage;

export const action = async ({request, params}) => {
    debugger
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
        throw json(
            { message: "Произошла ошибка!" },
            { status: 500 }
        );
    }

    return null;
};
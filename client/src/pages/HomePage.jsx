import { redirect, json } from "react-router";
import About from "../components/About/About";
import MagicForm from "../components/MagicForm/MagicForm";
import MainBanner from "../components/MainBanner/MainBanner";

const HomePage = () => {
    return <>
        <MainBanner/>
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

    let url = 'https://teleport-2ae52-default-rtdb.firebaseio.com/users.json';
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    if(response.status === 422) {
        return response;
    };

    if (!response.ok) {
        throw json(
            { message: "Произошла ошибка!" },
            { status: 500 }
        );
    };

    return redirect("");
};
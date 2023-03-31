import AnimatorsList from "../components/AnimatorsList/AnimatorsList";
import { useLoaderData, useNavigation, json, Outlet } from "react-router-dom";
import LoginLoader from "../components/UI/LoginLoader/LoginLoader";
import APICalls from "../API/API";
import { convertResponse, convertResponseCode } from "../util/firebaseResponseHandler";

const AnimatorsPage = () => {
    const data = useLoaderData();
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'loading';
    return (
        <>
            <h1>I LOVE TO LUNTIK</h1>
            <AnimatorsList animators={data}/>
            {isSubmitting && <LoginLoader />}
            <Outlet />
        </>
    );
};

export default AnimatorsPage;

export async function loader() {
    try {
        const snapshot = await APICalls.getEvents('animators');
        
        if (!snapshot.exists()) {
            throw new Error();
        }

        const value = snapshot.val();
        const animators = convertResponse(value);

        return animators;
    } catch(e) {
        const message = convertResponseCode(e.message);

        throw json(
            { message },
            { status: 500 }
        );
    }
}
import { useRouteError } from "react-router";
import PageContent from "../components/UI/PageContent/PageContent";

function ErrorPage() {
    const error = useRouteError();

    let title = "Упс!";
    let message = "somethis";

    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        message= "Страница не найдена!";
    }
    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}
  
export default ErrorPage;
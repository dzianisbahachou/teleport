import classes from './PageContent.module.css';
import {useNavigate} from "react-router-dom";

function PageContent({ title, children }) {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("..");
  };

  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
      <button onClick={navigateToMainPage}>На главную страницу!</button>
    </div>
  );
}

export default PageContent;
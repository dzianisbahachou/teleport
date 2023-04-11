import classes from './PageContent.module.css';
import {useNavigate} from "react-router-dom";
import MainButton from '../MainButton/MainButton';

function PageContent({ title, children }) {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("..");
  };

  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
      <MainButton onClick={navigateToMainPage}>На главную страницу!</MainButton>
    </div>
  );
}

export default PageContent;
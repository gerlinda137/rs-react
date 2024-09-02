import { useRouteError, NavLink } from 'react-router-dom';
import './notFound.scss';
import backArrow from '../../assets/back-arrow.svg';
interface ErrorResponse {
  data: string;
  error: string;
  internal: boolean;
  status: number;
  statusText: string;
}

const NotFound = () => {
  const error = useRouteError() as ErrorResponse;
  console.error(error);
  return (
    <div className="not-found">
      <h1>{error.status}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
      <NavLink className="not-found__link" to="/">
        <img src={backArrow} alt="back error icon" />
        Go to the main page
      </NavLink>
    </div>
  );
};

export default NotFound;

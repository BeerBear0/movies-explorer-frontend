import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

export function PageNotFound() {

  const history = useHistory();

  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <div className="page-not-found__header-container">
          <h1 className="page-not-found__header">404</h1>
          <p className="page-not-found__message">Страница не найдена</p>
        </div>
        <button className="page-not-found__goback-link"
          onClick={() => history.goBack()}
        >Назад</button>
      </div>
    </section>
  )
}
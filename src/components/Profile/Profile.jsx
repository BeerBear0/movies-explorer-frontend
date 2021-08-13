import { Header } from '../Header/Header';
import './Profile.css';

export const Profile = ({ isLoginIn }) => {
  return (
    <>
      <Header isLoginIn={isLoginIn} />
      <section className="profile">
        <div className="profile__container">
          <form className="profile__form">
            <h2 className="profile__header">Привет, Виталий!</h2>
            <div className="profile__inputs-wrapper">
              <label className="profile__input-container">
                Имя
                <input className="profile__text-input" type="text" name="" id="" value="Виталий" />
              </label>
              <label className="profile__input-container">
                E-mail
                <input className="profile__text-input" type="text" name="" id="" value="pochta@yandex.ru" />
              </label>
            </div>
            <button type="submit" className="profile__edit-button">
              Редактировать
            </button>
            <button className="profile__logout-button">
              Выйти из аккаунта
            </button>

          </form>
        </div>
      </section>
    </>
  )
}
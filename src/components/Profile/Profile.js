import Header from "../Header/Header";
function Profile (props){
    return (
        <>
          <Header
            linkNum1='Фильмы'
            linkNum2='Сохраненные фильмы'
          />
            <div className='profile'>
                <h2 className='profile__title'>Привет, Человек!</h2>

                <div className='profile__container'>
                    <p className='profile__description profile__description_name'>Имя</p>
                    <input className='profile__edit profile__edit-name'>Человек</input>
                </div>

                <div className='profile__container'>
                    <p className='profile__description profile__description_email'>E-mail</p>
                    <input className='profile__edit profile__edit-email'>chelovek@chelovek.ru</input>
                </div>
                    <button type='button' className='profile__btn profile__btn_edit'>Редактировать</button>
                    <button type='button' className='profile__btn profile__btn_exit'>Выйти из аккаунта</button>

            </div>
        </>
    )
}

export default Profile;
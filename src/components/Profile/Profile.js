import Header from "../Header/Header";
function Profile (props){
    return (
        <>
            <Header
                linkNum1='Фильмы'
                linkNum2='Сохраненные фильмы'
            />
            <div className='Profile'>
                <h2 className='profile__title'>Привет, Человек!</h2>

                <div className='profile__container'>
                    <p className='profile__description profile__description_name'>Имя</p>
                    <p className='profile__edit profile__edit-name'>Человек</p>
                </div>

                <div className='profile__container'>
                    <p className='profile__description profile__description_email'>E-mail</p>
                    <p className='profile__edit profile__edit-email'>chelovek@chelovek.ru</p>
                </div>
                {/*<div className='profile__container_btn'>*/}
                    <button className='profile__edit-btn'>Редактировать</button>
                    <button className='profile__exit-btn'>Выйти из аккаунта</button>
                {/*</div>*/}
            </div>
        </>
    )
}

export default Profile;
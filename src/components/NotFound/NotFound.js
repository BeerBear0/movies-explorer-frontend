import {NavLink} from "react-router-dom";

function NotFound () {
    return (
        <div className='notfound'>
            <h1 className='notfound__error'>404</h1>
            <p className='notfound__message'>Страница не найдена</p>
            <NavLink to='/' className='notfound__btn'>Назад</NavLink>
        </div>
    )
}

export default NotFound

import './UserAuthForm.css'
import { NavLink } from 'react-router-dom';

export const UserAuthForm = ({ name, headerText, children, submitButtonText, additionalText, linkText, linkUrl }) => {
  return (
    <form className="user-auth-form" name={name}>
      <h2 className="user-auth-form__header">{headerText}</h2>
      {children}
      <button className="user-auth-form__button" type="submit">{submitButtonText}</button>
      <p className="user-auth-form__additional-text">{additionalText}&nbsp;
        <NavLink className="user-auth-form__additional-link" to={linkUrl}>{linkText}</NavLink></p>
    </form>
  )
}
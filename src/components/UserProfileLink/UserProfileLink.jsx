import { NavLink } from 'react-router-dom';
import './UserProfileLink.css'


export const UserProfileLink = () => {
  return (
    <NavLink className="user-profile-link" to="/profile">Аккаунт</NavLink>
  )
}
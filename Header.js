import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { AuthActions } from './store';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispact=useDispatch()

  const isAuthencated = useSelector(state=> state.auth.isAuth);
  const logoutHandler=()=>{
    dispact(AuthActions.logout())
      }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { isAuthencated &&(
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;

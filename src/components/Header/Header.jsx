import Greetings from '../Greetings/Greetings';
import Time from '../Time/Time';
import HeaderCSS from './Header.module.css';

function Header ({name}){

    return <header className={HeaderCSS.header}>
    My first react App
    <Greetings name={name} />
    <Time />
  </header>;

}

export default Header;
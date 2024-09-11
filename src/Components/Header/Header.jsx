import { useEffect, useState } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import { CreditCard2Front, Search, ChevronDown, Telephone, List } from 'react-bootstrap-icons';
import flagAz from './../../assets/images/flags/azerbaijan.png';
import flagRu from './../../assets/images/flags/russia.png';
import Logo from './../../assets/images/logo.svg'
import axios from 'axios';
import './Header.css'

function Header() {
  const options = [
    {
      value: 'az',
      label: <img src={flagAz} width="18" alt="Azerbaijan Flag" />
    },
    {
      value: 'ru',
      label: <img src={flagRu} width="18" alt="Russia Flag" />
    }
  ];

  

  const [lang, setLang] = useState('az');
  const [langLabel, setLangLabel] = useState(options[0].label);
  const [navLink, setnavLink] = useState([]);
  const [searchParam, setsearchParam] = useState('')
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); 
  };

  const handleLangChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    const selectedOption = options.find((option) => option.value === selectedLang);
    setLangLabel(selectedOption.label);
  };

  const inputValueChanger = (event) => {
    const writtenText = event.target.value;
    setsearchParam(writtenText)
  }

  useEffect(() => {
    const getData = async () => {
        const resp = await axios.get('http://localhost:3000/navLinks');
        setnavLink(resp.data)
    };
    
    getData()
  }, [])

  return (
    <header className='header__main'>
      <div className="container">
      <div className="header__top">
        <div className="header__top_left">
          <NavLink to=''  className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Fərdi Müştərilər</NavLink>
          <NavLink to='/corporative' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Korporativ Müştərilər</NavLink>
        </div>

        <div className="header__top_right">
          <div className="header__top_payment">
            <CreditCard2Front />
            <span>Onlayn ödəniş</span>
          </div>
          <div className="header__top_lang">
          <div className="lang-label">
              {langLabel}
            </div>
            <select
              name="selectLang"
              value={lang}
              onChange={handleLangChange}
              className="lang-select"
            >
              {options.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.value.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      </div>

      <div className="header__bottom">
        <div className="container">
        <div className="header__logo">
              <img src={Logo} alt="" />
        </div>

        <div className="header__nav">
            <div className="header__search">
            <Search />
            <input type="text" name="header__search_inp" onChange={inputValueChanger} placeholder='Search'/>
            </div>

            <nav className="header__nav_links">
                {navLink.map((links, index) => (
                    <Link key={index} to={links.multiple ? '' : links.link}>{links.header} {links.multiple ? <ChevronDown /> : '' }</Link>
                ))}
            </nav>

            <div className="header__bookc">
                <Link to=''>
                <Telephone />
                <span>Book a call</span>
                </Link>
            </div>

            <div className="header__mobile_btn"  onClick={toggleMenu}>
            <List className='header__menu_btn' /> 
            </div>
        </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`header__mobile_menu ${isMenuOpen ? 'active' : ''}`}>
         <div className="container">
          <div className="header__mobile__nav">
            <div className="header__mobile_search">
            <Search />
            <input type="text" name="mobile_search_inp" onChange={inputValueChanger} placeholder="Search" />
          </div>

          <nav className="header__mobile_nav_links">
            {navLink.map((links, index) => (
              <Link key={index} to={links.multiple ? '' : links.link}>
                {links.header} {links.multiple ? <ChevronDown /> : ''}
              </Link>
            ))}
          </nav>

          <div className="header__mobile_bookc">
            <Link to="">
              <Telephone />
              <span>Book a call</span>
            </Link>
          </div>
          </div>
         </div>
        </div>
      )}
      
    </header>
  );
}

export default Header;

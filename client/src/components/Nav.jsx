import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { getByName } from '../actions';
import style from '../styles/Nav.module.scss';
import earth from '../images/mundo.png';


function Nav() {
    const dispatch = useDispatch();
    const location = useLocation();

    const error = useSelector(state => state.error)
    // Busca lo que contenga el search Country
    function handleChange(e) {
        dispatch(getByName(e.target.value))
        
    }

    return (
        <div>
        
            <div className={style.topnav}>
                {location.pathname === '/countries/' ?
                    <>
                        <Link to='/countries/' >
                            <img src={earth} className={style.img} alt='earth' />
                        </Link>
                        <Link to='/activity' className={style.activity}>
                            Add Activity
                        </Link>
                        <div className={style.search}>
                            <input type="text" placeholder="Search Country..." onChange={handleChange} />
                           
                        </div>
                    </>
                    : location.pathname === '/activity' ?
                        <div className={style.pathActivity}>
                            <Link to='/countries/' >
                                <img src={earth} className={style.img} alt='earth' />
                            </Link>
                            <Link to='/countries/' className={style.home}>
                                Countries
                            </Link>
                        </div>
                        :
                        <>
                            <Link to='/countries/' >
                                <img src={earth} className={style.img} alt='earth' />
                            </Link>
                            {/* <Link to='/countries/' className={style.home}>
                                Welcome
                            </Link> */}
                            <Link to='/activity' className={style.activity}>
                                Add Activity
                            </Link>
                        </>
                }
                {error !== "" && <p className={style.error}  >{error}</p>}
            </div>
            
              
           
        </div>
    )
}

export default Nav

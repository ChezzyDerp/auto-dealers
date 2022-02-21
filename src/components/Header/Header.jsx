import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faCar } from '@fortawesome/free-solid-svg-icons'


const Header = () =>{
    
    const navigate = useNavigate()
    const [windowYPos, setWindowYPos] = useState(0)

    useEffect(() =>{
        window.addEventListener('scroll', () => setWindowYPos(window.pageYOffset))
    }, [windowYPos])
    
    return(

        <div className={ windowYPos === 0  ?
                        `${ style.Header}` :
                        `${style.Header} ${style.headerOpacity}`}>

            <div className={style.navIcons}>

                <FontAwesomeIcon onClick={() => navigate('/')} className={style.houseIcon} icon={faHouse} />

                <FontAwesomeIcon onClick={() => navigate('/dealers')} className={style.carIcon}  icon={faCar} />
                
            </div>

            <div onClick={() => navigate('/')} className={style.logo}>
                <span>🔥largest list</span> Mega Dealers <span>of dealers💧</span>
            </div>
            
            <a target="_blank" rel="noreferrer"  href="https://github.com/ChezzyDerp/auto-dealers">
                <FontAwesomeIcon className={style.questionIcon} icon={faQuestion} />
            </a>
          

        </div>
    )
}

export default Header
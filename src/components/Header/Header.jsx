import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from './Header.module.css'
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = () =>{
    
    const navigate = useNavigate()

    return(
        <div  className={style.Header}>

            <FontAwesomeIcon onClick={() =>{
                navigate('/dealers')
            }} className={style.houseIcon} icon={faHouse} />

            <div onClick={() => navigate('/')} className={style.logo}>
                <span>largest list</span> Mega Dealers <span>of dealers</span>
            </div>
            
            <a target="_blank" rel="noreferrer"  href="https://github.com/ChezzyDerp/auto-dealers">
                <FontAwesomeIcon className={style.questionIcon} icon={faQuestion} />
            </a>
          

        </div>
    )
}

export default Header
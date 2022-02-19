import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './MainPage.module.css'

const MainPage = () =>{

    const navigate = useNavigate()

    return (
        <div className={style.MainPage}>

            <div className={style.title}>
                <h2>Посмотреть список автомобильных дилеров </h2>
                <h2>можно нажав кнопку ниже  </h2>
                <h3>или нажав на иконку домика </h3>
            </div>

            <button onClick={() => navigate('/dealers')}>
                Посмотреть список автомобильных дилеров
            </button>

        </div>
    )
}


export default MainPage

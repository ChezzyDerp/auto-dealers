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
                <h2>или нажав на иконку машинки </h2>
            </div>

            <button onClick={() => navigate('/dealers')}>
                Посмотреть список автомобильных дилеров 🚘🚔🚖
            </button>


            Для поиска автосалона можно изменить url(/dealer?name=) страницы,<br />
            или воспользоваться поиском на странице /dealers

        </div>
    )
}


export default MainPage

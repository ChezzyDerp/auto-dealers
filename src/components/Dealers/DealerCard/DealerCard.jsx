import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './DealerCard.module.css'

const DealerCard = ({name, img, id}) =>{

    let navigate = useNavigate()

    return(
        <div className={style.DealerCard}>

            <img src={img} alt="" />
            
            <div className={style.name}>
                {name}
            </div>

            <button className={style.more} onClick={() => navigate(`/dealers/${id}`)}>
                Подробнее
            </button>

        </div>
    )
}

export default DealerCard
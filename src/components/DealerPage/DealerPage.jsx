import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDealersById } from "../../api/api"
import style from './DealerPage.module.css'
import preloader from '../../media/images/preloader.gif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const DealerPage = () =>{

    const params = useParams()
    const [dealer, setDealer] = useState(null)
    const [modalImg, setModalImg] = useState(false)
    const navigate = useNavigate()

    const escFunction = (e) => e.key === 'Escape' ? setModalImg(false) : null

    useEffect(() =>{
        
        getDealersById(params.id).then(data => setDealer(data))

        document.addEventListener("keydown", escFunction, false);

    }, [params.id])

    return(
        <div className={style.DealerPage}>

            {modalImg ? 

                <div onClick={() => setModalImg(false)}
                     className={style.wrapModalImg}>

                    <img onClick={(event) => event.stopPropagation()} 
                         className={style.modalImg} 
                         src={dealer.img} 
                         alt="Dealer"/>

                </div>

            : null}


            {dealer 
            ?   <div className={style.wrap}>

                    <div className={style.wrapImg}>
                        <img className={style.img} onClick={() => setModalImg(true)} src={dealer.img} alt={dealer.name}/>
                    </div>

                   <div className={style.wrapBtn}>

                        <div className={style.wrapData}>
                            <div className={style.name}>
                                Автосалон - <span>{dealer.name}</span> 
                            </div>

                            <div className={style.address}>
                                Адрес : {dealer.address}
                            </div>

                            <div className={style.description}>
                                {dealer.description}
                            </div>
                        </div>

                        <button onClick={() => navigate('/dealers')}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                            Вернуться назад
                        </button>

                   </div>

                </div>  
                 
            :  <img src={preloader} alt="preloader" />}
                
        </div>
    )
}

export default DealerPage
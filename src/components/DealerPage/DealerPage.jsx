import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDealersById } from "../../api/api"
import style from './DealerPage.module.css'
import preloader from '../../media/images/preloader.gif'

const DealerPage = () =>{

    const params = useParams()
    const [dealer, setDealer] = useState(null)
    const [modalImg, setModalImg] = useState(false)
    
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

                    <div className={style.name}>
                        Автосалон -  {dealer.name}
                    </div>

                    <div className={style.address}>
                        Адрес : {dealer.address}
                    </div>

                </div>  
                 
            :  <img src={preloader} alt="preloader" />}
                
        </div>
    )
}

export default DealerPage
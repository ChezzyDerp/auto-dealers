import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDealersById } from "../../api/api"
import style from './DealerPage.module.css'
import preloader from '../../media/images/preloader.gif'

const DealerPage = () =>{

    const params = useParams()
    const [dealer, setDealer] = useState(null)

    useEffect(() =>{
        let id = params.id

        getDealersById(id).then((data) =>{
            setDealer(data)
        })

    }, [params.id])

    return(
        <div className={style.DealerPage}>
            {dealer ? 

                <div className={style.wrap}>

                    <div className={style.wrapImg}>
                        <img className={style.img} src={dealer.img} alt={dealer.name}/>
                    </div>

                    <div className={style.name}>
                         Автосалон -  {dealer.name}
                    </div>

                    <div className={style.address}>
                        Адрес : {dealer.address}
                    </div>

                </div>  
                 
             :  <img src={preloader} alt="" />}
                
        </div>
    )
}

export default DealerPage
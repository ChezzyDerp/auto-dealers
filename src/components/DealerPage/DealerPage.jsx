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

    }, [0])

    return(
        <div className={style.DealerPage}>
            {dealer ? 

                <div className={style.wrap}>

                    <div className={style.name}>
                            {dealer.name}
                    </div>

                    <img src={dealer.img} alt="" />

                    <div className={style.address}>
                        Адрес : {dealer.address}
                    </div>

                </div>  
                 
             :  <img src={preloader} alt="" />}
                
        </div>
    )
}

export default DealerPage
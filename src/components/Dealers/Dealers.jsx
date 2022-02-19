import React from 'react'
import style from './Dealers.module.css'
import preloader from '../../media/images/preloader.gif'
import Search from './Search/Search'
import DealersList from './DealersList'

const Dealers = ({dealers = []}) =>{
    

    return(
        <div className={style.Dealers} >
            
            <Search />

            {dealers.length ? <DealersList dealers={dealers}/> : <img src={preloader}/> }  
                   
        </div>
    )
}
export default Dealers
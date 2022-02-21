import React from 'react'
import style from './Dealers.module.css'
import preloader from '../../media/images/preloader.gif'
import Search from './Search/Search'
import DealersList from './DealersList'
import ToUpButton from '../ToUpButton/ToUpButton'

const Dealers = ({dealers = []}) =>{
    
   

    return(
        <div className={style.Dealers} >
            
            <ToUpButton/>

            <Search />
           
            
            {dealers.length 
                ?
                    <div className={style.wrap}>
                        <DealersList dealers={dealers}/>
                    </div> 
                :
                    <img src={preloader} alt="preloader"/>  }      
           
            
        </div>
    )
}
export default Dealers
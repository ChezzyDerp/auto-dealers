import React, { useMemo, useState } from 'react'
import DealerCard from './DealerCard/DealerCard'
import style from './Dealers.module.css'
import preloader from '../../media/images/preloader.gif'
import Search from './Search/Search'
import {useSearchParams } from 'react-router-dom'

const Dealers = ({dealers = []}) =>{
    
    const [query] = useSearchParams()

    const [filter, setFilter] = useState('')

    

    return(
        <div className={style.Dealers} >
            
            <Search />

             
           {
                dealers.length ? 

                    dealers.filter(e => e.name
                        .toLowerCase()
                        .includes((query.get('name') || '').toLocaleLowerCase())).map((dealer) =>{
                            return (
                                <DealerCard 
                                    key={dealer.id} 
                                    name={dealer.name}
                                    img={dealer.img}
                                    id={dealer.id}
                                />
                            )
                        })
                        
   
                : <img src={preloader}/> 
           }
            
            
            
                   
        </div>
    )
}
export default Dealers
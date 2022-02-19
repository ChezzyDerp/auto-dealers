import {useSearchParams } from 'react-router-dom'
import DealerCard from './DealerCard/DealerCard'

const DealersList = ({dealers}) =>{

    const [query] = useSearchParams()

    let isEquals = (name) => name.toLowerCase()
                                 .includes((query.get('name') || '')
                                 .toLowerCase())

                          
    return(
        dealers.filter(e => isEquals(e.name)).map((dealer) =>{
            return (
                <DealerCard 
                    key={dealer.id} 
                    name={dealer.name}
                    img={dealer.img}
                    id={dealer.id}
                />
            )
        })
    )
}

export default DealersList
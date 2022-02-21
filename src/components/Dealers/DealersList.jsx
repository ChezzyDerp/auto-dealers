import {useSearchParams } from 'react-router-dom'
import DealerCard from './DealerCard/DealerCard'

const DealersList = ({dealers}) =>{

    const [query] = useSearchParams()


    // We translate the URL and the text in the search tag to lowercase, 
    //and use the include method to check if there are any matches, otherwise show all
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
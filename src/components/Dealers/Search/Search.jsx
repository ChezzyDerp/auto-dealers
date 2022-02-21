import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Search.module.css'

const Search = () =>{

    const [value, setValue] = useState('')
    const navigate = useNavigate()
    
    const handleValue = event =>{

        setValue(event.target.value)

        if(event.target.value === '')  navigate(`/dealers`)

        else navigate(`/dealers?name=${event.target.value}`)        

    }

    return (
        <input 
            className={style.Search}
            value={value} 
            onChange={handleValue} 
            placeholder='Поиск...'
            type="text"
        />
    )
    
}

export default Search
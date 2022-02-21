import React, { useEffect, useState } from 'react'
import style from './ToUpButton.module.css'

const ToUpButton = () =>{

    const [upButton, setUpButton] = useState(false)

    const toUp = () =>{
        window.scrollTo(0,0)
    }

    useEffect(() =>{

        window.addEventListener('scroll', () => window.pageYOffset > 5 
                                                      ? setUpButton(true)
                                                      : setUpButton(false))

    }, [])

    return(
        <>
        {upButton 
                ?<div onClick={toUp} className={style.upButton}>🏹</div> 
                : null
            }
        </>
    )

}
export default ToUpButton
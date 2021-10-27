import React from 'react'
import AppState from '../AppState';

import { deleteParam, addParam } from './FinctionField'


function MoreParams(props, id) {
    if(props === 'edit'){
        AppState.setTempParam(AppState.getWithIdFieldState(id).possbleValues)
    }
    const [additionalParams, setAdditionalParams] = React.useState(AppState.getTempParam())


    
    React.useEffect(() => {
        additionalParams.map((params) => {
           params.title = document.querySelector(`.param${params.id}`).value
        })
        AppState.setTempParam(additionalParams)
    })
    return (
        <div className='MoreParams'>
            <button onClick={() => {setAdditionalParams(addParam(additionalParams))}}>+</button>
            <button onClick={() => {setAdditionalParams(deleteParam(additionalParams))}}>-</button>
            <br/>
            Колличество и заголовок:
            <br/>
             {additionalParams.map((params) => {
                return(
                    <div key={params.id}>
                        <input 
                        type='text' 
                        id={`param${params.id}`} 
                        className={`param${params.id}`}/>
                        <br/>
                    </div>
                )
             })}
             <br/>
        </div>
    ) 
}

export default MoreParams
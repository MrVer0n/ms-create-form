import React from 'react'
import propTypes from 'prop-types'

import { clickAddForm } from './FunctionForm'


function AddForm(props) {
    
    return (
        <div>
            <h3>Создать форму</h3>
            <label id="nameForm">Название формы:
                <br/>
                <input className="nameForm" id="nameForm" type="text"/>
            </label>
            <br/>

            <label id="nameForm">Описание формы:
                <br/>
                <input className="titleForm" id="titleForm" type="text"/>
            </label>
            <br/>
            
            <button onClick={()=> props.history.goBack()}>Отмена</button>
            <button onClick={()=> {clickAddForm();props.history.goBack()}}>Добавить форму</button>
        </div>
    )
}

AddForm.propTypes = {
    history: propTypes.object.isRequired
}

export default AddForm
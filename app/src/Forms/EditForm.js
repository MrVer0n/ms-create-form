import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import { editForm } from './FunctionForm'
import { useParams } from 'react-router-dom'


function EditForm(props) {
    const form = AppState.getWithIdFormState(Number(useParams().idForm))

    React.useEffect(()=>{
        document.querySelector('.newNameForm').value = form.name
        document.querySelector('.newTitleForm').value = form.title
    })

    return (
        <div>
            <h2>Изменить форму</h2>
            <label id="newNameForm">Название формы:
                <br/>
                <input className="newNameForm" id="newNameForm" type="text"/>
            </label>
            <br/>

            <label id="newNameForm">Описание формы:
                <br/>
                <input className="newTitleForm" id="newTitleForm" type="text"/>
            </label>
            <br/>
            
            <button onClick={()=> props.history.goBack()}>Отмена</button>
            <button onClick={()=> {editForm(form);props.history.goBack()}}>Изменить</button>
        </div>
    )
}

EditForm.propTypes = {
    history: propTypes.object.isRequired
}

export default EditForm
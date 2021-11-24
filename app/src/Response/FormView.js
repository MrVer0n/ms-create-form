import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import '../Css/App.css'
import { useParams } from 'react-router-dom'
import { MoreParams, defParams, TextArea, Rating } from './FuctionView'
import FormState from './FormState'
import { setAddResponse } from '../Fetch'

function FormView(props) {
    const formId = Number(useParams().idForm)
    const form = AppState.getFieldState()
    FormState.setFormState(form)
    //let Title = /.*(?=\s.*$)/;
    //let id = /\w+$/;
    const writeForm = (event) => {
        event.preventDefault()
        const dateNow = new Date().toLocaleString()
        const data = new FormData(event.target)
        for (const key of data.keys()) {
            FormState.setResponseState({
                id: Number(key),
                data: dateNow,
                value: data.get(key)
            })
        }
        FormState.setResponseFormState()
        console.log(FormState.getFormState());
        setAddResponse(FormState.getFormState())
    }

    return (
        <div>
            <h2>Предпросмотр формы</h2>
            <button onClick={() => props.history.goBack()}>Вернуться к редактирования</button>
            <form onSubmit = {writeForm} >
                {form.map((field) => {
                    if (field.isActive) {
                        switch (field.inputType) {

                        case 'checkbox':
                        case 'radio':
                            return MoreParams(field)
                        
                        case 'textarea':
                            return TextArea(field)

                        case 'rating':
                            return (
                                Rating(field)
                            )
                        default:
                            return defParams(field)

                        }
                    } else { return null }
                })}
                <br />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

FormView.propTypes = {
    history: propTypes.object.isRequired
}

export default FormView
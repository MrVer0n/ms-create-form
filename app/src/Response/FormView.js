import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import '../Css/App.css'
import { useParams } from 'react-router-dom'
import { MoreParams, defParams, TextArea, Rating } from './FuctionView'
import FormState from './FormState'

function FormView(props) {
    const formId = Number(useParams().idForm)
    const form = AppState.getWhithIdFormFiledState(formId)
    FormState.setFormState(form)
    //let Title = /.*(?=\s.*$)/;
    //let id = /\w+$/;
    const writeForm = (event) => {
        event.preventDefault()
        const dateNow = new Date().toLocaleString()
        const data = new FormData(event.target)
        
        for (const key of data.keys()) {
            FormState.setResponseState({
                id:Number(key),
                data: dateNow,
                value: data.get(key)
            })
        }
        FormState.setResponseFormState()
    }

    return (
        <div>
            <h2>Предпросмотр формы</h2>
            <button onClick={() => props.history.goBack()}>Вернуться к редактирования</button>
            <form onSubmit = {writeForm} >
                {form.map((field) => {
                    if (field.activ) {

                        switch (field.type) {

                        case 'text':
                            switch (field.typeRes) {
                                case 'checkbox':
                                case 'radio':
                                    return MoreParams(field)
                                    
                                default:
                                    return defParams(field)
                            }

                        case 'textarea':
                            return TextArea(field)

                        case 'rating':
                            return (
                                Rating(field)
                            )

                        default:
                            break
                        }
                    } else { return null }
                    return null
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
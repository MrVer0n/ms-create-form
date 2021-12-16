import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import '../Css/App.css'
import { useParams } from 'react-router-dom'
import { MoreParams, defParams, TextArea, Rating } from './FuctionView'
import FormState from './FormState'
import { getFieldForm, setAddResponse } from '../Fetch'

function FormView(props) {
    const formId = Number(useParams().idForm)
    AppState.setIdForm(formId)
    const [form, setForm] = React.useState(AppState.getFieldState())
    FormState.setFormState(form)
    //let Title = /.*(?=\s.*$)/;
    //let id = /\w+$/;
    async function writeForm(event) {
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
        await setAddResponse(FormState.getFormState())
        //props.history.goBack()
    }

    React.useEffect(() => {

        async function getDataField() {
            const data = await getFieldForm(AppState.getIdForm())
            AppState.setAllFieldState(data);setForm(AppState.getFieldState())
        }
        getDataField()

}, [])

    return (
        <div>
            <div>
                <i className="float-left medium material-icons">assignment</i>
                <h2 className='margin-t text-cursor-off'>Предпросмотр</h2>
                <hr />
                <div className='linkblock card-panel add-field nav-bord'>
                    <nav className='nav-bord'>
                        <div className="nav-wrapper">
                            <div className="col s12 #009688 teal nav-bord text-pad">
                                <a href={`/form/${Number(useParams().idForm)}`} className="breadcrumb teal-text text-lighten-4">Поля</a>
                                <a href={`/form/${Number(useParams().idForm)}/view`} className="breadcrumb teal-text white-text">Предпросмотр</a>
                                <a href={`/form/${Number(useParams().idForm)}/response`} className="breadcrumb teal-text text-lighten-4">Ответы</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/*<button onClick={() => props.history.goBack()}>Вернуться к редактирования</button>*/}
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
                <button className="sub btn waves-effect waves-light" name="action" onClick={()=>{}} type="submit">Отправить</button>
            </form>
        </div>
    )
}

FormView.propTypes = {
    history: propTypes.object.isRequired
}

export default FormView
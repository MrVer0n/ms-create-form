import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import { editForm } from './FunctionForm'
import { useParams } from 'react-router-dom'


function EditForm(props) {
    const [form, setForm] = React.useState(AppState.getWithIdFormState(Number(useParams().idForm)))

    const inputName = (value) => {
        const result = { ...form, name: value }
        return result
    }
    const inputTitle = (value) => {
        const result = { ...form, title: value }
        return result
    }

    return (
        <div>
            <div>
                <i className="float-left medium material-icons">edit</i>
                <h2 className='margin-t text-cursor-off'>Редактирование формы</h2>
                <hr />
            </div>
            <div className="card-panel hoverable add-form col s12 m2 z-depth-4">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <label className='input-form form-text' id="newNameForm">Название формы:
                                <input
                                    className="newNameForm white-text"
                                    id="newNameForm"
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => { setForm(inputName(e.target.value)) }} />
                            </label>
                        </div>
                        <div className="card-action">
                            <label className='input-form form-text' id="newNameForm">Описание формы:
                                <br />
                                <input
                                    className="newTitleForm white-text"
                                    id="newTitleForm"
                                    type="text"
                                    value={form.title}
                                    onChange={(e) => { setForm(inputTitle(e.target.value)) }} />
                            </label>
                        </div>
                        <div className="card-action right-button">
                            <button className='waves-effect waves-light btn #009688 teal' onClick={() => props.history.goBack()}>Отмена</button>
                            <button className='waves-effect waves-light btn left-pad #009688 teal' onClick={async () => { await editForm(form); props.history.goBack() }}>Изменить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

EditForm.propTypes = {
    history: propTypes.object.isRequired
}

export default EditForm
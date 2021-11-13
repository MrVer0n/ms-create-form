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
            <h2>Изменить форму</h2>
            <label id="newNameForm">Название формы:
                <br />
                <input
                    className="newNameForm"
                    id="newNameForm"
                    type="text"
                    value={form.name}
                    onChange={(e) => { setForm(inputName(e.target.value)) }} />
            </label>
            <br />

            <label id="newNameForm">Описание формы:
                <br />
                <input
                    className="newTitleForm"
                    id="newTitleForm"
                    type="text"
                    value={form.title}
                    onChange={(e) => { setForm(inputTitle(e.target.value)) }} />
            </label>
            <br />

            <button onClick={() => props.history.goBack()}>Отмена</button>
            <button onClick={() => { editForm(form); props.history.goBack() }}>Изменить</button>
        </div>
    )
}

EditForm.propTypes = {
    history: propTypes.object.isRequired
}

export default EditForm
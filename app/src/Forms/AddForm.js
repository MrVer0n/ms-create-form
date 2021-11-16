import React from 'react'
import propTypes from 'prop-types'

import { clickAddForm } from './FunctionForm'


function AddForm(props) {
    const [form, setForm] = React.useState({
        //id: '',
        name: '',
        title: '',
    })
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
            <h3>Создать форму</h3>
            <label id="nameForm">Название формы:
                <br />
                <input
                    className="nameForm"
                    id="nameForm"
                    type="text"
                    value={form.name}
                    onChange={e => setForm(inputName(e.target.value))} />
            </label>
            <br />

            <label id="nameForm">Описание формы:
                <br />
                <input
                    className="titleForm"
                    id="titleForm"
                    type="text"
                    value={form.title}
                    onChange={e => setForm(inputTitle(e.target.value))} />
            </label>
            <br />

            <button onClick={() => props.history.goBack()}>Отмена</button>
            <button onClick={() => { clickAddForm(form); props.history.goBack() }}>Добавить форму</button>
        </div>
    )
}

AddForm.propTypes = {
    history: propTypes.object.isRequired
}

export default AddForm
import React from 'react'
import propTypes from 'prop-types'

import { addForm } from './FunctionForm'


function AddForm(props) {
    const [form, setForm] = React.useState({
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
            <div>
                <i className="float-left medium material-icons">create_new_folder</i>
                <h2 className='margin-t text-cursor-off'>Создание формы</h2>
                <hr />
            </div>
            <div className="card-panel hoverable add-form col s12 m2 z-depth-4">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <label id="nameForm">Название формы:
                                <input
                                    className="nameForm white-text"
                                    id="nameForm"
                                    type="text"
                                    value={form.name}
                                    onChange={e => setForm(inputName(e.target.value))} />
                            </label>
                        </div>

                        <div className="card-action">
                            <label id="nameForm">Описание формы:
                                <input
                                    className="titleForm white-text"
                                    id="titleForm"
                                    type="text"
                                    value={form.title}
                                    onChange={e => setForm(inputTitle(e.target.value))} />
                            </label>
                        </div>
                        <div className="card-action right-button">
                            <button className='waves-effect waves-light btn #009688 teal' onClick={() => props.history.goBack()}>Отмена</button>
                            <button className='waves-effect waves-light btn left-pad #009688 teal' onClick={async () => { await addForm(form); props.history.goBack() }}>Добавить форму</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddForm.propTypes = {
    history: propTypes.object.isRequired
}

export default AddForm
import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import { SortField, lockMoreParam, lockResp, lockPlaceHold } from './FinctionField'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FieldCreate from './FieldCreate'


function EditFieldWin(props) {
    const id = Number(useParams().idField)
    const [field, setField] = React.useState(id !== undefined ? AppState.getWithIdFieldState(id) : {
        id: Math.floor(Date.now() / 100),
        idForm: AppState.getIdForm(),
        activ: false,
        text: '',
        isNeed: false,
        type: 'text',
        typeRes: 'checkbox',
        priority: '1',
        placeholder: '',
        possbleValues: []
    })
    React.useEffect(() => { lockResp(field.type); lockPlaceHold(field.type,field.typeRes); lockMoreParam(field.type,field.typeRes) })

    return (
        <div>
            <h2>Изменить поле</h2>
            {FieldCreate(field, setField)}
            <div>
                <button ><Link to={`/form/${Number(useParams().idForm)}`}>Отмена</Link></button>
                <button onClick={() => { AppState.editFieldState(field); SortField(); props.history.goBack() }}>Изменить</button>
            </div>
        </div>
    )

}

EditFieldWin.propTypes = {
    history: propTypes.object.isRequired
}

export default EditFieldWin
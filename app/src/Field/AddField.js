import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import { SortField, lockResp, lockPlaceHold, lockMoreParam } from './FinctionField'
import FieldCreate from './FieldCreate'


function AddField(props) {
    const [field, setField] = React.useState({
        id: Math.floor(Date.now() / 10),
        idForm: AppState.getIdForm(),
        activ: false, 
        text: '',
        isNeed: false,
        type: 'text',
        typeRes: 'text',
        priority: '1',
        placeholder: '',
        possbleValues: []
    })
    React.useEffect(() => { lockResp(field.type); lockPlaceHold(field.type,field.typeRes); lockMoreParam(field.type,field.typeRes) })

    return (
        <div>
            <h2>Добавить поле</h2>
            {FieldCreate(field, setField)}
            <div>
                <button onClick={() => props.history.goBack()}>Отмена</button>
                <button onClick={() => { AppState.setFieldState(field); SortField(); props.history.goBack() }}>Подтвердить</button>
            </div>
        </div>
    )
}

AddField.propTypes = {
    history: propTypes.object.isRequired
}

export default AddField
import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import { SortField, lockResp, lockPlaceHold, lockMoreParam } from './FinctionField'
import FieldCreate from './FieldCreate'
import { setAddField } from '../Fetch'


function AddField(props) {
    const [field, setField] = React.useState({
        //id: Math.floor(Date.now() / 10),
        idForm: AppState.getIdForm(),
        isActive: false, 
        title: '',
        isRequire: false,
        inputType: 'text',
        priority: '1',
        placeHolder: '',
        possbleValues: []
    })
    React.useEffect(() => { 
        console.log(field.inputType);
        lockResp(field.inputType); lockPlaceHold(field.inputType); lockMoreParam(field.inputType) })

    return (
        <div>
            <h2>Добавить поле</h2>
            {FieldCreate(field, setField)}
            <div>
                <button onClick={() => props.history.goBack()}>Отмена</button>
                <button onClick={() => { setAddField(field); AppState.setFieldState(field); SortField(); props.history.goBack() }}>Подтвердить</button>
            </div>
        </div>
    )
}

AddField.propTypes = {
    history: propTypes.object.isRequired
}

export default AddField
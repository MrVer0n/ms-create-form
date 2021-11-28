import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import { useParams } from 'react-router-dom'
import FieldCreate from './FieldCreate'
import { lockResp, lockPlaceHold, lockMoreParam, addField } from './FinctionField'


function AddField(props) {

    const formId = Number(useParams().idForm)
    const [field, setField] = React.useState({
        formId,
        isActive: false,
        title: '',
        isRequire: false,
        inputType: 'text',
        priority: '1',
        placeHolder: '',
        possbleValues: []
    })
    React.useEffect(() => {
        lockResp(field.inputType); lockPlaceHold(field.inputType); lockMoreParam(field.inputType)
    })
    return (
        <div>
            <h2>Добавить поле</h2>
            {FieldCreate(field, setField)}
            <div>
                <button onClick={() => props.history.goBack()}>Отмена</button>
                <button onClick={async () => { await addField(field); props.history.goBack() }}>Подтвердить</button>
            </div>
        </div>
    )
}

AddField.propTypes = {
    history: propTypes.object.isRequired
}

export default AddField
import React from 'react'
import propTypes from 'prop-types'

import { newField, lockResp, lockPlaceHold } from './FinctionField'
import FieldCreate from './FieldCreate'

function AddField(props) {

    React.useEffect(() => { lockResp()})

    return (
        <div>
            <h2>Добавить поле</h2>
            {FieldCreate(props)}
            <div>
                {/*
                <button onClick={() => props.history.goBack()}>Отмена</button>
                <button onClick={() => { newField(); props.history.goBack()}}>Подтвердить</button>
                */}
            </div>
        </div>
    )
}

AddField.propTypes = {
    history: propTypes.object.isRequired
}

export default AddField
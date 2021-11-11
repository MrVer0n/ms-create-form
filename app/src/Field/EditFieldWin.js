import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import { lockMoreParam, lockResp, editField, lockPlaceHold } from './FinctionField'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FieldCreate from './FieldCreate'


function EditFieldWin(props) {
    const field = AppState.getWithIdFieldState(Number(useParams().idField))

    React.useEffect(() => {
        /*
        document.querySelector('.zagp').value = field.text
        document.querySelector('.typeP').value = field.type
        document.querySelector('.typeR').value = field.typeRes
        document.querySelector('.priority').value = field.priority
        // field.possbleValues.map((params) => {
        //     document.querySelector(`.param${params.id}`).value = params.title
        //  })
        
        if (field.isNeed) {
            document.querySelector('.needz').checked = true
        } else {
            document.querySelector('.needz').checked = false
        }
        lockResp()
        lockPlaceHold()
        */
    })

    return (
        <div>
            <h2>Изменить поле</h2>
            {FieldCreate(props,Number(useParams().idField))}
            <div>
                {/*
                <button ><Link to={`/form/${Number(useParams().idForm)}`}>Отмена</Link></button>
                <button onClick={() => {editField(field,true); props.history.goBack()}} >Подтвердить</button>
                */}
            </div>
        </div>
    )

}

EditFieldWin.propTypes = {
    history: propTypes.object.isRequired
}

export default EditFieldWin
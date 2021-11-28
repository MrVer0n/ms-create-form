import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import FieldCreate from './FieldCreate'
import { lockMoreParam, lockResp, lockPlaceHold, updataField } from './FinctionField'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getFieldForm } from '../Fetch'


function EditFieldWin(props) {
    const id = Number(useParams().idField)
    const formId = Number(useParams().idForm)
    AppState.setIdForm(formId)
    const [field, setField] = React.useState( {
        id: id,
        formId: AppState.getIdForm(),
        isActive: false,
        title: '',
        isRequire: false,
        inputType: 'text',
        priority: '1',
        placeHolder: '',
        possbleValues: []
    })
    field.formId = AppState.getIdForm()
    React.useEffect(() => {

            async function getDataField() {
                const data = await getFieldForm(AppState.getIdForm())
                AppState.setAllFieldState(data); setField(AppState.getWithIdFieldState(id))
            }
            getDataField()

    }, [])
    React.useEffect(() => {
        if (AppState.getFieldState().length === 0) {
            async function getDataField() {
                const data = await getFieldForm(AppState.getIdForm())
                AppState.setAllFieldState(data); setField(AppState.getWithIdFieldState(id))
            }
            getDataField()
        }
        lockResp(field.inputType)
        lockPlaceHold(field.inputType)
        lockMoreParam(field.inputType)
    }, [field.inputType, id])

    return (
        <div>
            <h2>Изменить поле</h2>
            {FieldCreate(field, setField)}
            <div>
                <button ><Link to={`/form/${Number(useParams().idForm)}`}>Отмена</Link></button>
                <button onClick={async () => { await updataField(field); props.history.goBack() }}>Изменить</button>
            </div>
        </div>
    )

}

EditFieldWin.propTypes = {
    history: propTypes.object.isRequired
}

export default EditFieldWin
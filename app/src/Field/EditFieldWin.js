import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import FieldCreate from './FieldCreate'
import { lockMoreParam, lockResp, lockPlaceHold, updataField } from './FinctionField'
import { useParams } from 'react-router-dom'
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
            <div>
                <div>
                    <i className="float-left medium material-icons">edit</i>
                    <h2 className='margin-t text-cursor-off'>Изменение поля</h2>
                </div>
                <hr />
            </div>
            {FieldCreate(field, setField)}
            <div className='margin-top'>
                <button className='left-pad20 waves-effect waves-light btn #009688 teal' onClick={() => { document.location.href = `/form/${formId}` }}>Отмена</button>
                <button className='waves-effect waves-light btn left-pad20 #009688 teal' onClick={async () => { await updataField(field); props.history.goBack() }}>Изменить</button>
            </div>
        </div>
    )

}

EditFieldWin.propTypes = {
    history: propTypes.object.isRequired
}

export default EditFieldWin
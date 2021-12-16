import React from 'react'
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
            <div>
                    <div>
                        <i className="float-left medium material-icons">note_add</i>
                        <h2 className='margin-t text-cursor-off'>Создание поля</h2> 
                    </div>
                    <hr />
                </div>
            {FieldCreate(field, setField)}
            <div className='margin-top'>
                <button className='left-pad20 waves-effect waves-light btn #009688 teal' onClick={() => props.history.goBack()}>Отмена</button>
                <button className='waves-effect waves-light btn left-pad20 #009688 teal' onClick={async () => { await addField(field); props.history.goBack() }}>Подтвердить</button>
            </div>
        </div>
    )
}

AddField.propTypes = {
    history: propTypes.object.isRequired
}

export default AddField
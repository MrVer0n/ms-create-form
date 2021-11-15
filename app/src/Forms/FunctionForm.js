//import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

export function clickAddForm(form) {
    form.id = Math.floor(Date.now() / 10)
    AppState.setFormState(form)
}


export function editForm(form) {
    AppState.editFormState(form)
}
//TODO
editForm.propTypes = {
    form: propTypes.object.isRequired
}


function deleteForm(id) {
    return AppState.delFormState(id)
}
//TODO
deleteForm.propTypes = {
    id: propTypes.object.isRequired
}

export default deleteForm
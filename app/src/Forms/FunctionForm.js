//import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'
import { setAddForm, setUpdateForm, setDeleteForm } from '../Fetch'

export function clickAddForm(form) {
    //form.id = Math.floor(Date.now() / 10)
    setAddForm(form)
    //getAllForm()
    //AppState.setFormState(form)
}


export function editForm(form) {
    setUpdateForm(form)
    //getAllForm()
    //AppState.editFormState(form)
}
//TODO
editForm.propTypes = {
    form: propTypes.object.isRequired
}


function deleteForm(id) {
    setDeleteForm({id})
    //AppState.delFormState(id)
}
//TODO
deleteForm.propTypes = {
    id: propTypes.object.isRequired
}

export default deleteForm
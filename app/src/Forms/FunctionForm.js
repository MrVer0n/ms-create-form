//import React from 'react'
import propTypes from 'prop-types'
import AppState from '../AppState'
import { setAddForm, setUpdateForm, setDeleteForm } from '../Fetch'


export async function addForm(form) {
    const newForm = await setAddForm(form)
    AppState.setFormState(newForm)
}

export async function editForm(form) {
    const updateForm = await setUpdateForm(form)
    AppState.editFormState(updateForm)
}
editForm.propTypes = {
    form: propTypes.object.isRequired
}

async function deleteForm(id) {
    AppState.delFormState(id)
    return await setDeleteForm(id)
}
deleteForm.propTypes = {
    id: propTypes.object.isRequired
}

export default deleteForm
//import React from 'react'
import propTypes from 'prop-types'
import { setAddForm, setUpdateForm, setDeleteForm } from '../Fetch'

export function clickAddForm(form) {
    setAddForm(form)
}


export function editForm(form) {
    setUpdateForm(form)

}
//TODO
editForm.propTypes = {
    form: propTypes.object.isRequired
}


function deleteForm(id) {
    return setDeleteForm({id})
}
//TODO
deleteForm.propTypes = {
    id: propTypes.object.isRequired
}

export default deleteForm
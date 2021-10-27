//import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

export function clickAddForm() {
    const form = [{
        id: AppState.setStetchFormState(),
        name: document.querySelector('.nameForm').value,
        title: document.querySelector('.titleForm').value,
    }]

    AppState.setFormState(form)
}


export function editForm(form) {
    form.name = document.querySelector('.newNameForm').value
    form.title = document.querySelector('.newTitleForm').value

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
//import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'
import { setAddField, setDeleteField, setUpdateField } from '../Fetch'


export function lockResp(inputType) {
    if (inputType === 'textarea' || inputType === 'rating') {
        return true
    } else {
        return false
    }
}

export function lockPlaceHold(inputType) {
    switch (inputType) {
        case 'textarea': {
            return false
        }
        default: {
            return (inputType === 'text' || inputType === 'number' || inputType === 'email' || inputType === 'tel' || inputType === 'url' ? false : true)
        }
    }
}

export function lockMoreParam(inputType) {
    switch (inputType) {
        case 'textarea': {
            return true
        }
        default: {
            return (inputType === 'checkbox' || inputType === 'radio' ? false : true)
        }
    }
}


export async function addField(field) {
    const newField = await setAddField(field);
    AppState.setFieldState(newField);
    SortField();
}

export async function updataField(field) {
    const updateField = await setUpdateField(field) 
    AppState.editFieldState(updateField)
    SortField();  
}

export function SortField() {
    const temp = AppState.getFieldState()

    temp.sort((priv, next) => priv.priority - next.priority)
    AppState.setAllFieldState(temp)

}

export function setIsisActive(e, id) {
    const fields = AppState.getWithIdFieldState(id)
    fields.isActive = e
    AppState.editFieldState(fields)
    setUpdateField(fields)
}
setIsisActive.propTypes = {
    id: propTypes.number
}

export function setisRequire(e,id) {
    const fields = AppState.getWithIdFieldState(id)
    fields.isRequire = e
    AppState.editFieldState(fields)
    setUpdateField(fields)
}
setisRequire.propTypes = {
    id: propTypes.number
}


export function delelElem(id) {
    AppState.delFieldState(id)
    return setDeleteField(id)
}
delelElem.propTypes = {
    id: propTypes.number
}


export default setIsisActive
  
//import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'
import { setDeleteField } from '../Fetch'


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


//TODO
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


export function SortField() {
    const temp = AppState.getFieldState()

    temp.sort((priv, next) => priv.priority - next.priority)
    AppState.setAddFieldState(temp)

}


export function setIsisActive(e, id) {
    const fields = AppState.getWithIdFieldState(id)
    fields.isActive = e
    AppState.editFieldState(fields)
}
//TODO
setIsisActive.propTypes = {
    id: propTypes.number
}


export function setisRequire(e,id) {
    const fields = AppState.getWithIdFieldState(id)
    fields.isRequire = e
    AppState.editFieldState(fields)
}
//TODO
setisRequire.propTypes = {
    id: propTypes.number
}


export function delelElem(id) {
    return setDeleteField(id)
}
//TODO
delelElem.propTypes = {
    id: propTypes.number
}


export default setIsisActive
  
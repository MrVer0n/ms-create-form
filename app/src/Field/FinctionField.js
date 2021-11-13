//import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'


export function lockResp(type) {
    if (type === 'text') {
        return false
    } else {
        return true
    }
}


export function lockPlaceHold(type, typeRes) {
    switch (type) {
        case 'textarea': {
            return false
        }
        case 'text': {
            return (typeRes === 'text' || typeRes === 'number' || typeRes === 'email' || typeRes === 'tel' || typeRes === 'url' ? false : true)
        }
        default: {
            return true
        }
    }
}


//TODO
export function lockMoreParam(type,typeRes) {
    switch (type) {
        case 'textarea': {
            return true
        }
        case 'text': {
            return (typeRes === 'checkbox' || typeRes === 'radio' ? false : true)
        }
        default: {
            return true
        }
    }
}


export function SortField() {
    const temp = AppState.getFieldState()

    temp.sort((priv, next) => priv.priority - next.priority)
    AppState.setAddFieldState(temp)

}


export function setIsActiv(e, id) {
    const fields = AppState.getWithIdFieldState(id)
    fields.activ = e
    AppState.editFieldState(fields)
}
//TODO
setIsActiv.propTypes = {
    id: propTypes.number
}


export function setIsNeed(e,id) {
    const fields = AppState.getWithIdFieldState(id)
    fields.isNeed = e
    AppState.editFieldState(fields)
}
//TODO
setIsNeed.propTypes = {
    id: propTypes.number
}


export function delelElem(id) {
    return AppState.delFieldState(id)
}
//TODO
delelElem.propTypes = {
    id: propTypes.number
}


export default setIsActiv
  
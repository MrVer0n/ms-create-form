//import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'


export function addParam(props) {
    let params = [{
        id: AppState.getIdTempParam(),
        title: '',
        check: false,
    }]
    params = params.concat(props)
    AppState.setTempParam(params)
    return params
}


export function deleteParam(props) {
    let params = []
    params = params.concat(props)
    if(params){
        params.splice(0, 1)
    }
    AppState.setTempParam(params)
    return params
}


export function newField() {
    if (document.querySelector('.needz').checked) {
        const field = [{
            id: AppState.setStetchFieldState(),
            idForm: AppState.getIdForm(),
            activ: true,
            text: document.querySelector('.zagp').value,
            isNeed: true,
            type: document.querySelector('.typeP').value,
            typeRes: document.querySelector('.typeR').value,
            priority: document.querySelector('.priority').value,
            placeholder: document.querySelector('.placehold').value,
            possbleValues: AppState.getTempParam()
        }]

        AppState.setFieldState(field)
        SortField()

    } else {
        const field = [{
            id: AppState.setStetchFieldState(),
            idForm: AppState.getIdForm(),
            activ: true,
            text: document.querySelector('.zagp').value,
            isNeed: false,
            type: document.querySelector('.typeP').value,
            typeRes: document.querySelector('.typeR').value,
            priority: document.querySelector('.priority').value,
            placeholder: document.querySelector('.placehold').value,
            possbleValues: AppState.getTempParam()
        }]

        AppState.setFieldState(field)
        console.log(AppState.getFieldState());
        SortField()
    }
}


export function editField(fields, done) {
    if (document.querySelector('.needz').checked) {
        fields.isNeed = true
    } else {
        fields.isNeed = false
    }
    fields.text = document.querySelector('.zagp').value
    fields.type = document.querySelector('.typeP').value
    fields.typeRes = document.querySelector('.typeR').value
    fields.priority = document.querySelector('.priority').value
    fields.placeholder = document.querySelector('.placehold').value
    fields.possbleValues = AppState.getTempParam()

    if(done){
        SortField()
        AppState.editFieldState(fields)
    }

}
//TODO
editField.propTypes = {
    fields: propTypes.object
}


export function lockPlaceHold() {
    switch (document.querySelector('.typeR').value) {
    case 'text':
    case 'number':
    case 'email':
    case 'tel':
    case 'url': {
        document.querySelector('.placehold').disabled = false
        break
    }
    
    default: {
        if (document.querySelector('.typeP').value === 'textarea') {
            document.querySelector('.placehold').disabled = false
        } else {
            document.querySelector('.placehold').value = ''
            document.querySelector('.placehold').disabled = true
        }
        break
    }
    }
}


export function lockResp() {
    if (document.querySelector('.typeP').value === 'text') {
        document.querySelector('.typeR').disabled = false
    } else {
        document.querySelector('.typeR').value = ''
        document.querySelector('.typeR').disabled = true
    }
}

//TODO
export function lockMoreParam() {
    switch (document.querySelector('.typeR').value) {
        case 'checkbox':
        case 'radio': {
            return true
        }
        
        default: {
           return false
        }
    }
}


export function SortField() {
    const temp = AppState.getFieldState()

    temp.sort((priv, next) => priv.priority - next.priority)
    AppState.setAddFieldState(temp)

}


export function setIsActiv(id) {
    console.log(typeof id);
    const fields = AppState.getWithIdFieldState(id)

    if (document.querySelector(`.af${id}`).checked) {
        fields.activ = true
    } else {
        fields.activ = false
    }

    AppState.editFieldState(fields)
}
//TODO
setIsActiv.propTypes = {
    id: propTypes.number
}


export function setIsNeed(id) {
    const fields = AppState.getWithIdFieldState(id)

    if (document.querySelector(`.nf${id}`).checked) {
        fields.isNeed = true
    } else {
        fields.isNeed = false
    }

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
  
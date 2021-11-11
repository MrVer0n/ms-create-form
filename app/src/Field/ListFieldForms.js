import React from 'react'
import AppState from '../AppState'

import { useParams } from 'react-router-dom'
import { setIsActiv, setIsNeed, delelElem } from './FinctionField'
import { Link } from 'react-router-dom'

function ViewField() {
    AppState.setIdForm(Number(useParams().idForm))
    const [field, setField] = React.useState(AppState.getWhithIdFormFiledState(AppState.getIdForm()))

    React.useEffect(() => {

        field.map((field) => {
            if (field.isNeed) {
                document.querySelector(`.nf${field.id}`).checked = true
            } else {
                document.querySelector(`.nf${field.id}`).checked = false
            }
            if (field.activ) {
                document.querySelector(`.af${field.id}`).checked = true
            } else {
                document.querySelector(`.af${field.id}`).checked = false
            }
            return null
        })
    })

    return (
        <div>
            <h2>Настройка полей формы</h2>
            <div>
                <button><Link to={'/'}>К списку форм</Link></button>
                <button><Link to={`/form/${Number(useParams().idForm)}/addfield`}>Добавит поля в форму</Link></button>
                <button><Link to={`/form/${Number(useParams().idForm)}/view`}>Перейти к форме</Link></button>

            </div>
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Активность</th>
                                <th>Тип элемента формы</th>
                                <th>Обязательно для заполнения</th>
                            </tr>
                            {field.map((field) => {
                                return (
                                    <tr key={`tr${field.id}`}>
                                        <th><input onClick={() => { setIsActiv(field.id) }} type="checkbox" className={`af${field.id}`} id={`idaf${field.id}`}></input></th>
                                        <th>{`${field.text} (Тип: ${field.type}, приоритет: ${field.priority})`}</th>
                                        <th><input onClick={() => { setIsNeed(field.id) }} type="checkbox" className={`nf${field.id}`} id={`idnf${field.id}`}></input></th>
                                        <th><button><Link to={`/form/${AppState.getIdForm()}/editfield/${field.id}`}>Изменить</Link></button></th>
                                        <th><button onClick={() => { setField(delelElem(field.id))}}><Link to={`/form/${AppState.getIdForm()}`}>Удалить</Link></button></th>
                                        {/**Пока что ЧЕРЕЗ LINK */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


function ListFieldForms() {
    return ViewField()
}

export default ListFieldForms



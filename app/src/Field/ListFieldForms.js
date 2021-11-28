import React from 'react'
import AppState from '../AppState'

import { useParams } from 'react-router-dom'
import { setIsisActive, setisRequire, delelElem } from './FinctionField'
import { Link } from 'react-router-dom'
import { getFieldForm } from '../Fetch'

function ViewField() {
    const idForm = Number(useParams().idForm)
    AppState.setIdForm(idForm)
    const [field, setField] = React.useState(AppState.getFieldState())
    React.useEffect(() => {
        if (AppState.getFieldState().length === 0) {
            async function getDataField() {
                const data = await getFieldForm(AppState.getIdForm())
                AppState.setAllFieldState(data); setField(AppState.getFieldState())
            }
            getDataField()
        }
    }, [])
    function delFild(id) {
        if (window.confirm("Вы уверены?")) {
            delelElem(id)
            setField(AppState.getFieldState())
        }
    }
    function activFild(e, id, idForm) {
        setIsisActive(e, id)
        setField(AppState.getNewFiledState())
    }
    function racuireFild(e, id, idForm) {
        setisRequire(e, id)
        setField(AppState.getNewFiledState())
    }
    return (
        <div>
            <h2>Настройка полей формы</h2>
            <div>
                <button><Link to={'/'}>К списку форм</Link></button>
                <button><Link to={`/form/${Number(useParams().idForm)}/addfield`}>Добавит поля в форму</Link></button>
                <button><Link to={`/form/${Number(useParams().idForm)}/view`}>Перейти к форме</Link></button>
                <button><Link to={`/form/${Number(useParams().idForm)}/response`}>Перейти к ответам</Link></button>

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
                                        <th><input
                                            type="checkbox"
                                            checked={field.isActive}
                                            className={`af${field.id}`}
                                            id={`idaf${field.id}`}
                                            onChange={(e) => { activFild(e.target.checked, field.id, idForm) }} /></th>

                                        <th>{`${field.title} (Тип: ${field.inputType}, приоритет: ${field.priority})`}</th>

                                        <th><input
                                            type="checkbox"
                                            checked={field.isRequire}
                                            className={`nf${field.id}`}
                                            id={`idnf${field.id}`}
                                            onChange={(e) => { racuireFild(e.target.checked, field.id, idForm) }} /></th>

                                        <th><button><Link to={`/form/${AppState.getIdForm()}/editfield/${field.id}`}>Изменить</Link></button></th>
                                        <th><button onClick={() => { delFild(field.id) }}><Link to={`/form/${AppState.getIdForm()}`}>Удалить</Link></button></th>
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



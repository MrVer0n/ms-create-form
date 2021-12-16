import React from 'react'
import AppState from '../AppState'

import { useParams } from 'react-router-dom'
import { setIsisActive, setisRequire, delelElem } from './FinctionField'
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
            <div>
                <div>
                    <div className='box-head'>
                        <i className="float-left medium material-icons">description</i>
                        <a href={`/form/${Number(useParams().idForm)}/addfield`} className="btn-floating btn-medium waves-effect waves-light teal float-button"><i className="material-icons float-button">add</i></a>
                        <h2 className='margin-t text-cursor-off'>Поля формы</h2>
                    </div>
                    <hr />
                </div>
                <div className='card-panel add-field nav-bord'>
                    <nav className='nav-bord'>
                        <div className="nav-wrapper">
                            <div className="col s12 #009688 teal nav-bord">
                                <a href="#!" className="breadcrumb white-text text-pad">Поля</a>
                                <a href={`/form/${Number(useParams().idForm)}/view`} className="breadcrumb teal-text text-lighten-4">Предпросмотр</a>
                                <a href={`/form/${Number(useParams().idForm)}/response`} className="breadcrumb #26a69a   teal-text text-lighten-4">Ответы</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div>

                {/*<button><Link to={'/'}>К списку форм</Link></button>*/}
                {/*<button><Link to={`/form/${Number(useParams().idForm)}/addfield`}>Добавит поля в форму</Link></button>*/}
                {/*<button><Link to={`/form/${Number(useParams().idForm)}/view`}>Перейти к форме</Link></button>*/}
                {/*<button><Link to={`/form/${Number(useParams().idForm)}/response`}>Перейти к ответам</Link></button>*/}

            </div>
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th><span className='center'>Активность</span></th>
                                <th><span className='center'>Тип элемента формы</span></th>
                                <th><span className='center'>Обязательно для заполнения</span></th>
                            </tr>
                            {field.map((field) => {
                                return (
                                    <tr key={`tr${field.id}`}>
                                        <th>
                                            <label className='center'>
                                                <input
                                                    type="checkbox"
                                                    checked={field.isActive}
                                                    className={`filled-in af${field.id}`}
                                                    id={`idaf${field.id}`}
                                                    onChange={(e) => { activFild(e.target.checked, field.id, idForm) }} />
                                                <span></span>
                                            </label>
                                        </th>
                                        <th>
                                            <span className='center'>
                                                {`${field.title} (Тип: ${field.inputType}, приоритет: ${field.priority})`}
                                            </span>
                                        </th>

                                        <th>
                                            <label className='center'>
                                                <input
                                                    type="checkbox"
                                                    checked={field.isRequire}
                                                    className={`nf${field.id} filled-in`}
                                                    id={`idnf${field.id}`}
                                                    onChange={(e) => { racuireFild(e.target.checked, field.id, idForm) }} />
                                                <span></span>
                                            </label>
                                        </th>

                                        <th>
                                            <div className='center'>
                                            <button className='waves-effect waves-light btn #009688 teal' onClick={()=>{document.location.href=`/form/${AppState.getIdForm()}/editfield/${field.id}`}}>Изменить</button>
                                        <button className='waves-effect waves-light left-pad20 btn #009688 teal' onClick={() => { delFild(field.id);document.location.href=`/form/${AppState.getIdForm()}` }}>Удалить</button>
                                            </div>
                                           </th>
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



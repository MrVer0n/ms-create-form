import React from 'react'
import AppState from '../AppState'

import  deleteForm  from './FunctionForm'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function ViewForm() {
    const [form, setForm] = React.useState(AppState.getFormState())

    return (
        <div>
            <h2>Формы</h2>
            <button><Link to={'/addform'}>Добавит новую форму</Link></button>
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Название</th>
                            </tr>
                            {form.map(form => {
                                return <tr key={`tr_${form.id}`}>
                                    <th><Link to={`/form/${form.id}`}>{form.name} : {form.title}</Link></th>
                                    <th><button ><Link to={`/editform/${form.id}`}>Изменить</Link></button></th>
                                    <th><button onClick={() => {setForm(deleteForm(form.id)) }}><Link to={'/'}>Удалить</Link></button></th>
                                    {/**Пока что ЧЕРЕЗ LINK */}
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


function ListForm() {
    return ViewForm()
}

export default ListForm
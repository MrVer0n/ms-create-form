import React from 'react'
import AppState from '../AppState'

import deleteForm from './FunctionForm'
import getAllForm from '../Fetch'
import { Link } from 'react-router-dom'


function ViewForm() {
    const [form, setForm] = React.useState(AppState.getFormState())
    React.useEffect(()=>{
       async function getDataForm() {
           if(AppState.getFormState().length === 0){
            const data = await getAllForm()
            AppState.setAllFromState(data)
            setForm(AppState.getFormState())
           } 
       }
       getDataForm()
    },[])

    function delForm(id) {
        if(window.confirm("Вы уверены?")) {
            deleteForm(id)
            setForm(AppState.getFormState())
        }
    }
    
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
                            {form !== undefined? form.map(form => {
                                return <tr key={`tr_${form.id}`}>
                                    <th><Link onClick={AppState.setAllFieldState([])} to={`/form/${form.id}`}>{form.name} : {form.title}</Link></th>
                                    <th><button ><Link to={`/editform/${form.id}`}>Изменить</Link></button></th>
                                    <th><button onClick={() => { delForm(form.id) }}><Link to={'/'}>Удалить</Link></button></th>
                                    {/**Пока что ЧЕРЕЗ LINK */}
                                </tr>
                            }): null}
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
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
            <div>
                <div>
                    <i className="float-left medium material-icons">featured_play_list</i>
                    <h2 className='margin-t text-cursor-off'>Формы</h2>
                    <hr/>
                </div>
                <div onClick={()=>{document.location.href='/addform'}} className='linkblock card-panel hoverable add-form'>
                
                    <div className="col s12 m6 ">
                        <div className="card #009688 teal">
                            <div className="card-content white-text">
                                <span className="card-title text-cursor-off">Добавит новую форму</span>
                            </div>
                        </div> 
                </div>
            </div>
            </div>
                <div>
                    {form !== undefined ? form.map(form => {
                        return (
                            <div key={`tr_${form.id}`} className="card-panel hoverable add-form">
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text linkblock"  onClick={()=>{AppState.setAllFieldState([]);document.location.href=`/form/${form.id}`}}>
                                            <span className="card-title">{form.name}</span>
                                            <p>{form.title}</p>
                                        </div>
                                        <div className="card-action right-button">
                                            <Link to={`/editform/${form.id}`}>Изменить</Link>
                                            <Link onClick={() => { delForm(form.id) }} to={'/'}>Удалить</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null}

                </div>
        </div>
    )
}


function ListForm() {
    return ViewForm()
}

export default ListForm
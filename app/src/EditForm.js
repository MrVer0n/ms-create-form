import React from "react";
import AppState from "./AppState";
import { editForm } from "./function/function";
import { renderListForm } from "./function/Render";

function EditForm(props) {
const form = AppState.getWithIdFormState(props.idForm)

React.useEffect(()=>{
    document.querySelector('.newNameForm').value = form.name
    document.querySelector('.newTitleForm').value = form.title
  })

    return (
        <div>
            <h2>Изменить форму</h2>
            <label id="newNameForm">Название формы:
                <br/>
                <input className="newNameForm" id="newNameForm" type="text"/>
            </label>
            <br/>
            <label id="newNameForm">Название формы:
                <br/>
                <input className="newTitleForm" id="newTitleForm" type="text"/>
            </label>
            <br/>
            <button onClick={()=> renderListForm()}>Отмена</button>
            <button onClick={()=> editForm(form)}>Изменить</button>
        </div>
    )
}

export default EditForm;
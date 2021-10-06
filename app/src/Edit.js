import React from "react";

import AppState from "./AppState";
import {lockResp, WinEdit, editField} from './function/function'


function Edit(prop) {
const field = AppState.getWithIdFieldState(prop.idfield)

React.useEffect(()=>{
  document.querySelector('.zagp').value = field.text
  document.querySelector('.typeP').value = field.type
  document.querySelector('.typeR').value = field.typeRes
  document.querySelector('.priority').value = field.priority
  if(field.isNeed){
    document.querySelector('.needz').checked = true
  }else{
    document.querySelector('.needz').checked = false
  }
  lockResp()
})

return (
  <div>
    <h2>Изменить поле</h2>
    {WinEdit()}
    <div>
      <button onClick={() => editField(false,field)}>Отмена</button>
      <button onClick={() => editField(true,field)} >Подтвердить</button>
    </div>
  </div>
  );  

}

  export default Edit;
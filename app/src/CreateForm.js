import React from "react";
import ReactDOM from 'react-dom';

import CreateForm from "./CreateForm"
import AppState from "./AppState";
import Add from "./Add";
import Edit from "./Edit"

function Create() {
  React.useEffect(()=>{
    const field = AppState.getfieldState()
    field.map((field) =>{
    if(field.isNeed){
      document.querySelector(`.nf${field.id}`).checked = true
    }else{
      document.querySelector(`.nf${field.id}`).checked = false
    }
    if(field.activ){
      document.querySelector(`.af${field.id}`).checked = true
    }else{
      document.querySelector(`.af${field.id}`).checked = false
    }
    return null
  })
  })
  const field = AppState.getfieldState()
  let lis = field.map((field) =>
  {
      return <tr key={`tr${field.id}`}>
      <th><input onClick={()=> {setIsActiv(field.id)}} type="checkbox"  className={`af${field.id}`} id={`idaf${field.id}`}></input></th> 
      <th>{field.text}</th> 
      <th><input onClick={()=> {setIsNeed(field.id)}} type="checkbox"  className={`nf${field.id}`} id={`idnf${field.id}`}></input></th>
      <th><button onClick={()=> {editwin(field.id)}}>Изменить</button></th>
      <th><button onClick={()=> {delelem(field.id)}}>Удалить</button></th>
      </tr> 
  
  }
      )
    return (
      <div>
        <h2>Настройка полей формы</h2>
        <div>
         <button onClick={addwin}>Добавит поля в форму</button>
        </div>
        <div>
          <div>
            <table>
              <tbody>
                {lis}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

function setIsActiv(id) {
  const fields = AppState.getwithidfieldState(id)
  console.log(fields);
  if(document.querySelector(`.af${id}`).checked){
    fields.activ=true
  }else{
    fields.activ=false
  }
  AppState.editfieldState(fields)

}

function setIsNeed(id) {
  const fields = AppState.getwithidfieldState(id)
  console.log(fields);
  if(document.querySelector(`.nf${id}`).checked){
    fields.isNeed=true
  }else{
    fields.isNeed=false
  }
  AppState.editfieldState(fields)

}

function delelem(x){
  AppState.delfieldState(x)
  ReactDOM.render(
    <React.StrictMode>
     <CreateForm />
   </React.StrictMode>,
    document.getElementById('root')
  );
}

  function addwin (){
    ReactDOM.render(
      <React.StrictMode>
        <Add  />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  function editwin (x){
    ReactDOM.render(
      <React.StrictMode>
        <Edit idfield={x} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  export default Create;
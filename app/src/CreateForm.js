import React from "react";
import ReactDOM from 'react-dom';

import CreateForm from "./CreateForm"
import AppState from "./AppState";
import Add from "./Add";
import Edit from "./Edit"

function Create() {
  const field = AppState.getfieldState()
  React.useEffect(()=>{})
  let lis = field.map((field) =>
  {
    if(field.need){
      
      //document.querySelector('.nf-1').checked = true
    }else{
     // document.querySelector('.nf-1').checked = false
    }
      return <tr>
      <th><input  type="checkbox"  className="nf-1" id="nf-1"></input></th> 
      <th>{field.text}</th> 
      <th><input type="checkbox"  className="nf-1" id="nf-1"></input></th>
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
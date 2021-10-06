import React from "react";
import ReactDOM from 'react-dom';

import CreateForm from "./CreateForm"
import AppState from "./AppState";
import Add from "./Add";
import Edit from "./Edit"
import FormView from "./FormView"


function ListForm() {
const field = AppState.getfieldState()
      return (
        <div>
          <h2>Формы</h2>
          <div>
           <button>Добавит новую форму</button>
          </div>
          <div>
            <div>
              <table>
                <tbody>
                <tr>
                  <th>Название</th> 
                </tr> 
                {
                    field.map((field) =>{
                        return (
                            <tr key={`tr${field.id}`}>
                            <th> <a href="/#">{`Отзывы`}</a></th> 
                            <th><button onClick={()=> {editwin(field.id)}}>Изменить</button></th>
                            <th><button onClick={()=> {delelem(field.id)}}>Удалить</button></th>
                            </tr> 
                        )
                    })
                }
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
  
  function formView (){
    ReactDOM.render(
      <React.StrictMode>
        <FormView  />
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
  
export default ListForm;
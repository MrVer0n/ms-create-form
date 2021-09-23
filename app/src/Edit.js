import React from "react";
import ReactDOM from 'react-dom';

import AppState from "./AppState";
import CreateForm from "./CreateForm"

function Edit(prop) {

const field = AppState.getwithidfieldState(prop.idfield)
React.useEffect(()=>{
  document.querySelector('.zagp').value = field.text
  if(field.need){
    document.querySelector('.needz').checked = true
  }else{
    document.querySelector('.needz').checked = false
  }
  
})
    return (
      <div>
        <h2>Изменить поле</h2>
        <div>
        <h4>Информация о поле</h4>
        <label>Заголовок поля:</label>
        <br/>
         <input type="text" className="zagp"></input>
         <script defer src=""></script>
         <br/>
         <input type="checkbox" className="needz"></input>
         <label>Поле обязательное для заполнения</label>
         <br/>
         <label>Тип поля:</label>
         <br/>
         <select>
             <option>Тип поля 1</option>
             <option>Тип поля 2</option>
             <option>Тип поля 3</option>
         </select>
         <br/>
         <label>Тип ответа:</label>
         <br/>
         <select>
             <option>Тип ответа 1</option>
             <option>Тип ответа 2</option>
             <option>Тип ответа 3</option>
         </select>
         <br/>
         <label>Приоритет:</label>
         <br/>
         <input type="text"></input>
        </div>
        <div>
        <button onClick={() => newfield(false,field)}>Отмена</button>
        <button onClick={() => newfield(true,field)} >Подтвердить</button>
        </div>
      </div>
    );
  }
  function newfield (offon,fields){
    if (offon){
      if(document.querySelector('.needz').checked){
        fields.need=true
      }else{
        fields.need=false
      }
   fields.text=document.querySelector('.zagp').value

AppState.editfieldState(fields)
console.log(AppState.getfieldState());

ReactDOM.render(
    <React.StrictMode>
      <CreateForm />
    </React.StrictMode>,
    document.getElementById('root')
  );
}else{
  ReactDOM.render(
    <React.StrictMode>
      <CreateForm />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
  }
  export default Edit;
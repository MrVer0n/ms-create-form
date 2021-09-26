import React from "react";
import ReactDOM from 'react-dom';

import AppState from "./AppState";
import CreateForm from "./CreateForm"

function Edit(prop) {
const field = AppState.getwithidfieldState(prop.idfield)
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
  
})
//return Ren(field)
return (
  <div>
  <h2>Изменить поле</h2>
  <div>
  <h4>Информация о поле</h4>
  <label>Заголовок поля:</label>
  <br/>
   <input type="text" className="zagp"></input>
   <br/>
   <input type="checkbox" className="needz"></input>
   <label>Поле обязательное для заполнения</label>
   <br/>
   <label>Тип поля:</label>
   <br/>
   <select className="typeP">
       <option value="checkbox">Рейтинг</option>
       <option value="text">Текст однострочный</option>
       <option value="textarea">Текст многострочный</option>
   </select>
   <br/>
   <label>Тип ответа:</label>
   <br/>
   <select className="typeR">
       <option value="string">Строка</option>
       <option value="text">Текст</option>
       <option value="number">Число</option>
       <option value="email">E-mail</option>
       <option value="tel">Телефон</option>
   </select>
   <br/>
   <label>Приоритет:</label>
   <br/>
   <input type="number" className="priority"></input>
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
        fields.isNeed=true
      }else{
        fields.isNeed=false
      }
   fields.text=document.querySelector('.zagp').value
   fields.type = document.querySelector('.typeP').value
   fields.typeRes = document.querySelector('.typeR').value
   fields.priority = document.querySelector('.priority').value
   
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
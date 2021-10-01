import React from "react";
import ReactDOM from 'react-dom';

import AppState from "./AppState";
import CreateForm from "./CreateForm"

function Add() {
  React.useEffect(()=>{locResp()})
  return (
    <div>
      <h2>Изменить поле</h2>
      <div>
      <h4>Информация о поле</h4>
      <label id="zagp">Заголовок поля:</label>
      <br/>
       <input type="text" id="zagp" className="zagp"></input>
       <br/>
       <input type="checkbox" id="needz" className="needz"></input>
       <label id="needz">Поле обязательное для заполнения</label>
       <br/>
       <label id="typeP">Тип поля:</label>
       <br/>
       <select onClick={() => locResp()} id="typeP" className="typeP">
           <option value="rating">Рейтинг</option>
           <option value="text">Текст однострочный</option>
           <option value="textarea">Текст многострочный</option>
       </select>
       <br/>
       <label id="typeR">Тип ответа:</label>
       <br/>
       <select id="typeR" className="typeR">
           <option value="string">Строка</option>
           <option value="text">Текст</option>
           <option value="number">Число</option>
           <option value="email">E-mail</option>
           <option value="tel">Телефон</option>
       </select>
       <br/>
       <label id="priority">Приоритет:</label>
       <br/>
       <input type="number" id="priority" className="priority"></input>
      </div>
      <div>
      <button onClick={() => newfield(false)}>Отмена</button>
      <button onClick={() => newfield(true)} >Подтвердить</button>
      </div>
    </div>
  ); 
  }

  function locResp() {
    if(document.querySelector('.typeP').value === 'text'){
      document.querySelector('.typeR').disabled = false
    }else{
      document.querySelector('.typeR').value = ''
      document.querySelector('.typeR').disabled = true
    }
  }

  function newfield (x){
    if (x){
      if(document.querySelector('.needz').checked){
    const field = [{
            id: AppState.getstetchState(),
            activ: true,
            text: document.querySelector('.zagp').value,
            isNeed: true,
            type: document.querySelector('.typeP').value,
            typeRes: document.querySelector('.typeR').value,
            priority: document.querySelector('.priority').value,
        },
    ];
    AppState.setfieldState(field)
    AppState.setSortFieldState() 
    }else{
      const field = [{
        id: AppState.getstetchState(),
        activ: true,
        text: document.querySelector('.zagp').value,
        isNeed: false,
        type: document.querySelector('.typeP').value,
        typeRes: document.querySelector('.typeR').value,
        priority: document.querySelector('.priority').value,
    },
];
AppState.setfieldState(field)
AppState.setSortFieldState() 
}
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
  export default Add;
import React from "react";
import ReactDOM from 'react-dom';

import AppState from "./AppState";
import CreateForm from "./CreateForm"

function Add() {
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
      <button onClick={() => newfield(false)}>Отмена</button>
      <button onClick={() => newfield(true)} >Подтвердить</button>
      </div>
    </div>
  ); 
  }
  function newfield (x){
    if (x){
      if(document.querySelector('.needz').checked){
    const field = [{
            id: AppState.getstetchState(),
            activ: false,
            text: document.querySelector('.zagp').value,
            isNeed: true,
            type: document.querySelector('.typeP').value,
            typeRes: document.querySelector('.typeR').value,
            priority: document.querySelector('.priority').value,
        },
    ];
    AppState.setfieldState(field)
    }else{
      const field = [{
        id: AppState.getstetchState(),
        activ: false,
        text: document.querySelector('.zagp').value,
        isNeed: false,
        type: document.querySelector('.typeP').value,
        typeRes: document.querySelector('.typeR').value,
        priority: document.querySelector('.priority').value,
    },
];
AppState.setfieldState(field)
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
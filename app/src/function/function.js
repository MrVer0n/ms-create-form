import AppState from '../AppState';
import {renderCreateForm, renderListForm} from "./Render"
import React from 'react';

//##########-OTHER-##########
export function SortField(){
const temp = AppState.getFieldState()

    temp.sort((priv, next) => priv.priority - next.priority)
    AppState.setAddFieldState(temp)

}

export function setIsActiv(id) {
const fields = AppState.getWithIdFieldState(id)

    if(document.querySelector(`.af${id}`).checked){
      fields.activ=true
    }else{
      fields.activ=false
    }

    AppState.editFieldState(fields)

}
 
export function setIsNeed(id) {
const fields = AppState.getWithIdFieldState(id)

    if(document.querySelector(`.nf${id}`).checked){
      fields.isNeed=true
    }else{
      fields.isNeed=false
    }

    AppState.editFieldState(fields)

}

export function lockResp() {
    if(document.querySelector('.typeP').value === 'text'){
      document.querySelector('.typeR').disabled = false
    }else{
      document.querySelector('.typeR').value = ''
      document.querySelector('.typeR').disabled = true
    }
}

export function lockPlaceHold() {
  switch(document.querySelector('.typeR').value) {
    case 'text':
    case 'number':
    case 'email':
    case 'tel':
    case 'url': {
      document.querySelector('.placehold').disabled = false
      break;
    }
    default: {

      if(document.querySelector('.typeP').value === 'textarea'){
        document.querySelector('.placehold').disabled = false
      }else{
        document.querySelector('.placehold').value = ''
        document.querySelector('.placehold').disabled = true
      }

      break;
    }

  }
}

export function typeParams() {
  switch(document.querySelector('.typeR').value) {
    case 'checkbox':
    case 'radio':{
    document.querySelector('.addParam').disabled = false
    document.querySelector('.delParam').disabled = false
    document.querySelector('.upParam').disabled = false
      break;
    }
    default: {
      document.querySelector('.addParam').disabled = true
      document.querySelector('.delParam').disabled = true
      document.querySelector('.upParam').disabled = true
      break;
    }

  }
}

export function WinEdit(status,id) {
  
  React.useEffect(()=>{
    document.querySelector('.addParam').disabled = true;
    document.querySelector('.delParam').disabled = true;
    document.querySelector('.upParam').disabled = true
    updata()
  },[])


  let [typeParam, setTypeParam] = React.useState([])
  const [, forceUpdate] = React.useState();
  
  function updata() {
    if(status === 'edit'){
      const x = AppState.getWithIdFieldState(id).possbleValues
      typeParam = (x)
      setTypeParam(typeParam)

      for (let index = 0; index < typeParam.length; ++index) {
        if(document.querySelector(`.Radio${index}`) !== null){
           document.querySelector(`.Radio${index}`).value = typeParam[index].title 
        }

      }
      setTypeParam(typeParam)
      AppState.setPossbleValues(typeParam)
     }
  }

  function addParam() {
    const x = [{
      id: `Radio${typeParam.length}`,
      title: ''
    }]
    typeParam = typeParam.concat(x)
    setTypeParam(typeParam)
    //typeParam =  typeParam.concat(`Radio${typeParam.length}`)
  }

  function clear() {
    setTypeParam([])
  }

  function savePar() {
     for (let index = 0; index < typeParam.length; ++index) {
       if(document.querySelector(`.Radio${index}`) !== null){
          typeParam[index].title =  document.querySelector(`.Radio${index}`).value
       }
       else {
        typeParam[index].title = ''
       }
     }
     setTypeParam(typeParam)
     AppState.setPossbleValues(typeParam)
//  typeParam[typeParam.indexOf(param)] = document.querySelector(`.${param}`).value
  }

  function delParam() {

    forceUpdate(typeParam.splice(typeParam.length-1, 1))
    setTypeParam(typeParam)
   
    }

    return(
    <div>
    <h4>Информация о поле</h4>
    <label id="zagp">Заголовок поля:
    <br/>
    <input type="text" id="zagp" className="zagp"/>
    </label>
    <br/>

    <label id="needz">
    <input type="checkbox" id="needz" className="needz"/>
    Поле обязательное для заполнения
    </label>
    <br/>

    <label id="typeP">Тип поля:</label>
    <br/>
    <select onClick={() => {lockResp();lockPlaceHold()}} id="typeP" className="typeP">
      <option value="text">Текст однострочный</option>
      <option value="textarea">Текст многострочный</option>
      <option value="rating">Рейтинг</option>
    </select>
    <br/>

    <label id="typeR">Тип ответа:
    <br/>
    <select onChange={() => clear()} onClick={() => {lockPlaceHold(); typeParams()}} id="typeR" className="typeR">
        <option value="text">Текст</option>
        <option value="number">Число</option>
        <option value="email">E-mail</option>
        <option value="tel">Телефон</option>
        <option value="url">Веб-адрес</option>

        <option value="date">Дата</option>
        <option value="time">Время</option>
        <option value="month">Месяц</option>
        <option value="week">Неделя</option>
        <option value="datetime-local">Дата и время</option>

        <option value="radio">Переключатели</option>
        <option value="checkbox">Флаг</option>
        <option value="range">Диапазон</option>
        
        <option value="color">Цвет</option>

        <option value="file">Файл</option>
        <option value="image">Изображение</option>

    </select>
    
    </label>
    <br/>
    <button id="addParam" className='addParam' onClick={() => addParam()}>Добавить параметр</button>
    <button id="delParam" className='delParam' onClick={() => delParam()}>Удалить параметр</button>
    <button id="upParam" className='upParam' onClick={() => savePar()}>Сохранить параметры</button>
    <br/>
    {typeParam.map((param)=>{
    return(
      <div key={`key${param.id}`} id={`key${param.id}`}>
        <input placeholder={param.id} type="text" id={`${param.id}`} className={`${param.id}`}/>
      </div>
    )
    })} 
    <input id="typeParams" className="typeParams" type="hidden" value={typeParam}></input>
    <br/>
    <label id="zagp">Плейсхолдер:
    <br/>
    <input type="text" id="placehold" className="placehold"/>
    </label>
    <br/>

    <label id="priority">Приоритет:
    <br/>
    <input type="number" id="priority" className="priority"/>
    </label>

  </div>
    )
}


//##########-FIELD-##########
export function newField (x){
  if (x){
    if(document.querySelector('.needz').checked){
          const field = [{
              id: AppState.setStetchFieldState(),
              idForm: AppState.getIdForm(),
              activ: true,
              text: document.querySelector('.zagp').value,
              isNeed: true,
              type: document.querySelector('.typeP').value,
              typeRes: document.querySelector('.typeR').value,
              priority: document.querySelector('.priority').value,
              placeholder: document.querySelector('.placehold').value,
              possbleValues: AppState.getPossbleValues()
              }];
          AppState.setFieldState(field)
          SortField()
      }else{
          const field = [{
              id: AppState.setStetchFieldState(),
              idForm: AppState.getIdForm(),
              activ: true,
              text: document.querySelector('.zagp').value,
              isNeed: false,
              type: document.querySelector('.typeP').value,
              typeRes: document.querySelector('.typeR').value,
              priority: document.querySelector('.priority').value,
              placeholder: document.querySelector('.placehold').value,
              possbleValues: AppState.getPossbleValues()
              }];
          AppState.setFieldState(field)
          SortField()
      }
  renderCreateForm()
  }
  else{renderCreateForm()}
}

export function editField (offon,fields){
    if (offon){
      if(document.querySelector('.needz').checked){
        fields.isNeed=true
      }else{
        fields.isNeed=false
      }
   fields.text = document.querySelector('.zagp').value
   fields.type = document.querySelector('.typeP').value
   fields.typeRes = document.querySelector('.typeR').value
   fields.priority = document.querySelector('.priority').value
   fields.placeholder = document.querySelector('.placehold').value
   fields.possbleValues = AppState.getPossbleValues()

    SortField()  
    AppState.editFieldState(fields)
    renderCreateForm()
    }
    else{renderCreateForm()}
}

export function delelElem(id) {

  AppState.delFieldState(id)
  renderCreateForm()

}


//##########-FORM-##########
export function clickAddForm() {
    const form = [{
      id: AppState.setStetchFormState(),
      name: document.querySelector('.nameForm').value,
      title: document.querySelector('.titleForm').value,
    }]

  AppState.setFormState(form)
    renderListForm()
}

export function editForm(form) {
  form.name = document.querySelector('.newNameForm').value
  form.title = document.querySelector('.newTitleForm').value
  AppState.editFormState(form)
  renderListForm()
  
}

export function deleteForm(id) {

  AppState.delFormState(id)
  renderListForm()

}


export default SortField;

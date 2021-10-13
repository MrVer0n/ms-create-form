import React from "react";
import AppState from "./AppState";
import {renderFormView, renderAdd, renderEditWithProps, renderListForm} from "./function/Render"
import {setIsActiv, setIsNeed, delelElem} from "./function/function"


function Create(param) {
AppState.setIdForm(param.idForm)
const field = AppState.getWhithIdFormFiledState(AppState.getIdForm())

  React.useEffect(()=>{
    const field = AppState.getWhithIdFormFiledState(AppState.getIdForm())
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

  return (
    <div>
      <h2>Настройка полей формы</h2>
      <div>
       <button onClick={() => renderAdd()}>Добавит поля в форму</button>
       <br/>
       <button onClick={renderFormView}>Перейти к форме</button>
       <button onClick={renderListForm}>Список форм</button>
      </div>
      <div>
        <div>
          <table>
            <tbody>
            <tr>
              <th>Активность</th> 
              <th>Тип элемента формы</th> 
              <th>Обязательно для заполнения</th>
            </tr> 
              {
                field.map((field) =>{
                  return (
                    <tr key={`tr${field.id}`}>
                    <th><input onClick={()=> {setIsActiv(field.id)}} type="checkbox"  className={`af${field.id}`} id={`idaf${field.id}`}></input></th> 
                    <th>{`${field.text} (Тип: ${field.type}, приоритет: ${field.priority})`}</th> 
                    <th><input onClick={()=> {setIsNeed(field.id)}} type="checkbox"  className={`nf${field.id}`} id={`idnf${field.id}`}></input></th>
                    <th><button onClick={()=> {renderEditWithProps(field.id)}}>Изменить</button></th>
                    <th><button onClick={()=> {delelElem(field.id)}}>Удалить</button></th>
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

  export default Create;
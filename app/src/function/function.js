import AppState from '../AppState';
import {createForm} from "./Render"


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


export function delelElem(x) {

    AppState.delFieldState(x)
    createForm()
  
}


export function lockResp() {
    if(document.querySelector('.typeP').value === 'text'){
      document.querySelector('.typeR').disabled = false
    }else{
      document.querySelector('.typeR').value = ''
      document.querySelector('.typeR').disabled = true
    }
}


export function newField (x){
    if (x){
      if(document.querySelector('.needz').checked){
            const field = [{
                id: AppState.getStetchState(),
                activ: true,
                text: document.querySelector('.zagp').value,
                isNeed: true,
                type: document.querySelector('.typeP').value,
                typeRes: document.querySelector('.typeR').value,
                priority: document.querySelector('.priority').value,
                }];
            AppState.setFieldState(field)
            SortField()
        }else{
            const field = [{
                id: AppState.getStetchState(),
                activ: true,
                text: document.querySelector('.zagp').value,
                isNeed: false,
                type: document.querySelector('.typeP').value,
                typeRes: document.querySelector('.typeR').value,
                priority: document.querySelector('.priority').value,
                }];
            AppState.setFieldState(field)
            SortField()
        }
    createForm()
    }
    else{createForm()}
}


export function WinEdit() {
    return(
    <div>
    <h4>Информация о поле</h4>

    <label id="zagp">Заголовок поля:
    <br/>
    <input type="text" id="zagp" className="zagp"/>
    </label>
    <br/>

    <input type="checkbox" id="needz" className="needz"/>

    <label id="needz">Поле обязательное для заполнения
    <br/>
    <label id="typeP">Тип поля:</label>
    </label>
    <br/>

    <select onClick={() => lockResp()} id="typeP" className="typeP">
       <option value="rating">Рейтинг</option>
       <option value="text">Текст однострочный</option>
       <option value="textarea">Текст многострочный</option>
    </select>
    <br/>

    <label id="typeR">Тип ответа:
    <br/>
    <select id="typeR" className="typeR">
        <option value="string">Строка</option>
        <option value="text">Текст</option>
        <option value="number">Число</option>
        <option value="email">E-mail</option>
        <option value="tel">Телефон</option>
    </select>
    </label>
    <br/>

    <label id="priority">Приоритет:
    <br/>
    <input type="number" id="priority" className="priority"/>
    </label>
  </div>
    )
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

    SortField()  
    AppState.editFieldState(fields)
    createForm()
    }
    else{createForm()}
}


export default SortField;

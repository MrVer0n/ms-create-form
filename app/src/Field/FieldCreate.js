import React from 'react'
import AppState from '../AppState';

import {  SortField ,editField, lockMoreParam, lockPlaceHold, lockResp } from './FinctionField'
import MoreParams from './MoreParams';


export function FieldCreate(props,id) {
    //const fieldCop = AppState.getWithIdFieldState(props)
    //const [additionalParams, setAdditionalParams] = React.useState(AppState.getTempParam())
    const [field, setField] = React.useState(id !== undefined ? AppState.getWithIdFieldState(id) :  { id:  Math.floor(Date.now() / 100), idForm: AppState.getIdForm(), activ: false, text: '', isNeed: false, type: 'text', typeRes: 'checkbox', priority: '', placeholder: '', possbleValues:[]})
    const inputText = (value) => {
        const result = { ...field, text: value }
        return result
    }
    const inputIsNeed = (value) => {
        const result = { ...field, isNeed: value }
        return result
    }
    const inputType = (value) => {
        const result = { ...field, type: value }
        return result
    }
    const inputTypeR = (value) => {
        const result = { ...field, typeRes: value }
        return result
    }
    const inputPlacehold = (value) => {
        const result = { ...field, placeholder: value }
        return result
    }
    const inputPriority = (value) => {
        const result = { ...field, priority: value }
        return result
    }
    const inputHandler = (value, id) => {
        const result = { ...field, possbleValues: field.possbleValues.map((item) => item.id === id ? { ...item, title: value } : item) }
        return result

    }
    const deleteHandler = (id) => {
        const result = { ...field, possbleValues:  field.possbleValues.filter((item) => item.id !== id)}
        return result
    }

    const addHandler = () => {
        const result = { ...field, possbleValues: field.possbleValues.concat({ id: Math.floor(Date.now() / 100), title: '' })}
        return result
    }
    return (
        <div>
            <h4>Информация о поле</h4>

            <label id="zagp">Заголовок поля:
                <br />
                <input 
                type="text" 
                id="zagp" 
                className="zagp" 
                value={field.text}
                onChange={e => setField(inputText(e.target.value))}/>

            </label>
            <br />

            <label id="needz">
                <input 
                type="checkbox" 
                id="needz" 
                className="needz" 
                value={field.isNeed}
                onClick={e => setField(inputIsNeed(e.target.checked))}/>

                Поле обязательное для заполнения
            </label>
            <br />

            <label id="typeP">Тип поля:</label>
            <br />
            <select 
            id="typeP" 
            className="typeP"
            value={field.type}
            onClick={() => { lockResp(); lockPlaceHold() }} 
            onChange={e => setField(inputType(e.target.value))}>

                <option value="text">Текст однострочный</option>
                <option value="textarea">Текст многострочный</option>
                <option value="rating">Рейтинг</option>
            </select>
            <br />

            <label id="typeR">Тип ответа:
                <br />
                {//Не работает setisActiv(lockMoreParam())
                }
                <select 
                id="typeR" 
                className="typeR"
                value={field.typeRes}
                onClick={() => { lockPlaceHold(); lockMoreParam()}}
                onChange={e => setField(inputTypeR(e.target.value))}>

                    <option value="checkbox">Флаг</option>
                    <option value="radio">Переключатели</option>
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

                    <option value="range">Диапазон</option>
                    <option value="color">Цвет</option>
                    {/** На дальнейшее будущее
                    <option value="image">Изображение</option>
                    <option value="file">Файл</option>
                     */}      

                </select>
            </label>
            <br />
            <div className='MoreParams'>
            Колличество и заголовок:
            <br />
            {field.possbleValues.map(({ id, title }) => {
                return (
                    <div key={id}>
                        <input
                            type='text'
                            id={`param${id}`}
                            className={`paramClass${id}`}
                            value={title}
                            onChange={e => setField(inputHandler(e.target.value, id))}
                        />
                        <button onClick={() => { setField(deleteHandler(id)) }}>-</button>
                        <br />
                    </div>
                )
            })}
            <button className="addParam" onClick={() => {setField(addHandler())}}>+</button>
            <br />
        </div>

            <label id="zagp">Плейсхолдер:
                <br />
                <input 
                type="text" 
                id="placehold" 
                className="placehold" 
                value={field.placeholder}
                onChange={e => setField(inputPlacehold(e.target.value))}/>
            </label>
            <br />

            <label id="priority">Приоритет:
                <br />
                <input 
                type="number" 
                id="priority" 
                className="priority"
                value={field.priority}
                onChange={e => setField(inputPriority(e.target.value))}/>
            </label>
            <br />
            <button onClick={() => props.history.goBack()}>Отмена</button>
            <button onClick={() => {AppState.setFieldState(field); SortField(); props.history.goBack()}}>Подтвердить</button>
            <button onClick={() => {AppState.editFieldState(field); SortField(); props.history.goBack()}}>Изменить</button>
        </div>
    )
}

export default FieldCreate
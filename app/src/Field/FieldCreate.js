import React from 'react'
import AppState from '../AppState';

import { editField, lockMoreParam, lockPlaceHold, lockResp } from './FinctionField'
import MoreParams from './MoreParams';


export function FieldCreate(props,id) {
    //const fieldCop = AppState.getWithIdFieldState(props)
    //const [additionalParams, setAdditionalParams] = React.useState(AppState.getTempParam())
    const [isActiv, setisActiv] = React.useState(true)
    AppState.resetTempParam()

    return (
        <div>
            <h4>Информация о поле</h4>

            <label id="zagp">Заголовок поля:
                <br />
                <input type="text" id="zagp" className="zagp" />
            </label>
            <br />

            <label id="needz">
                <input type="checkbox" id="needz" className="needz" />
                Поле обязательное для заполнения
            </label>
            <br />

            <label id="typeP">Тип поля:</label>
            <br />
            <select onClick={() => { lockResp(); lockPlaceHold() }} id="typeP" className="typeP">
                <option value="text">Текст однострочный</option>
                <option value="textarea">Текст многострочный</option>
                <option value="rating">Рейтинг</option>
            </select>
            <br />

            <label id="typeR">Тип ответа:
                <br />
                <select onClick={() => { lockPlaceHold(); lockMoreParam()}} id="typeR" className="typeR">
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

                    <option value="checkbox">Флаг</option>
                    <option value="radio">Переключатели</option>
                    <option value="range">Диапазон</option>

                    <option value="color">Цвет</option>
                    {/** На дальнейшее будущее
                    <option value="image">Изображение</option>
                    <option value="file">Файл</option>
                     */}      

                </select>
            </label>
            <br />
            {isActiv? MoreParams(props,id) : null}

            <label id="zagp">Плейсхолдер:
                <br />
                <input type="text" id="placehold" className="placehold" />
            </label>
            <br />

            <label id="priority">Приоритет:
                <br />
                <input type="number" id="priority" className="priority" />
            </label>
        </div>
    )
}

export default FieldCreate
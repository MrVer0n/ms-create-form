import React from 'react'

import { lockMoreParam, lockPlaceHold, lockResp } from './FinctionField'


export function FieldCreate(field, setField) {

    const inputText = (value) => {
        const result = { ...field, text: value }
        return result
    }
    const inputIsNeed = (value) => {
        const result = { ...field, isNeed: value }
        return result
    }
    const inputType = (value) => {
        let result = null

        if (value === 'text') {
            result = { ...field, type: value, }
        } else {
            result = { ...field, type: value, typeRes: 'text', placeholder: '', possbleValues: []  }
        }
        return result
    }
    const inputTypeR = (value) => {
        let result = null
        switch (value) {
            case 'checkbox':
            case 'radio':
                result = { ...field, typeRes: value, placeholder: '' }
                break;

            case 'text':
            case 'number':
            case 'email':
            case 'tel':
            case 'url':
                result = { ...field, typeRes: value, possbleValues: [] }
                break;

            default:
                result = { ...field, typeRes: value, placeholder: '', possbleValues: [], }
                break;
        }
       
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
        const result = { ...field, possbleValues: field.possbleValues.filter((item) => item.id !== id) }
        return result
    }
    const addHandler = () => {
        const result = { ...field, possbleValues: field.possbleValues.concat({ id: Math.floor(Date.now() / 100), title: '' }) }
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
                    onChange={e => setField(inputText(e.target.value))} />

            </label>
            <br />

            <label id="needz">
                <input
                    type="checkbox"
                    id="needz"
                    className="needz"
                    checked={field.isNeed}
                    onChange={e => setField(inputIsNeed(e.target.checked))} />

                Поле обязательное для заполнения
            </label>
            <br />

            <label id="typeP">Тип поля:</label>
            <br />
            <select
                id="typeP"
                className="typeP"
                value={field.type}
                onChange={e => { setField(inputType(e.target.value)) }}>

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
                    disabled={lockResp(field.type)}
                    onChange={e => { setField(inputTypeR(e.target.value)) }}>

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
                <button
                    className="addParam"
                    disabled={lockMoreParam(field.type, field.typeRes)}
                    onClick={() => { setField(addHandler()) }}>
                    +
                </button>
                <br />
            </div>

            <label id="zagp">Плейсхолдер:
                <br />
                <input
                    type="text"
                    id="placehold"
                    className="placehold"
                    value={field.placeholder}
                    disabled={lockPlaceHold(field.type, field.typeRes)}
                    onChange={e => setField(inputPlacehold(e.target.value))} />
            </label>
            <br />

            <label id="priority">Приоритет:
                <br />
                <input
                    type="number"
                    id="priority"
                    className="priority"
                    value={field.priority}
                    onChange={e => setField(inputPriority(e.target.value))} />
            </label>
            <br />
        </div>
    )
}

export default FieldCreate
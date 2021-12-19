import React from 'react'
import '../Css/App.css'
import { lockMoreParam, lockPlaceHold, lockResp } from './FinctionField'


export function FieldCreate(field, setField) {

    const inputTitle = (value) => {
        const result = { ...field, title: value }
        return result
    }
    const inputisRequire = (value) => {
        const result = { ...field, isRequire: value }
        return result
    }
    const inputType = (value) => {
        let result = null

        if (value === 'text') {
            result = { ...field, inputType: value, }
        } else {
            result = { ...field, inputType: value, placeHolder: '', possbleValues: []  }
        }
        return result
    }
    const inputTypeR = (value) => {
        let result = null
        switch (value) {
            case 'checkbox':
            case 'radio':
                result = { ...field, inputType: value, placeHolder: '' }
                break;

            case 'text':
            case 'number':
            case 'email':
            case 'tel':
            case 'url':
                result = { ...field, inputType: value, possbleValues: [] }
                break;

            default:
                result = { ...field, inputType: value, placeHolder: '', possbleValues: [], }
                break;
        }
       
        return result
    }
    const inputPlacehold = (value) => {
        const result = { ...field, placeHolder: value }
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
        <div className='field-text input-field border'>
            <h4 className='zagp'>Информация о поле</h4>

            <div className='zagp'>
                <label id="zagp">Заголовок поля:
                    <br />
                    <input
                        type="text"
                        id="zagp"
                        className="zagp"
                        value={field.title}
                        onChange={e => setField(inputTitle(e.target.value))} />
                </label>
                <br />
            </div>

            <div className='needz'>
                <label id="needz">
                    <input
                        type="checkbox"
                        id="needz"
                        className="needz"
                        checked={field.isRequire}
                        onChange={e => setField(inputisRequire(e.target.checked))} />
                    <span>Поле обязательное для заполнения</span>
                </label>
                <br />
            </div>

            <div className='margin-top'>
                <div className='tb'>

                    <div className='th-not-padding'>
                        <label className='typeP' id="typeP">Тип поля:</label>
                        <br />
                        <select
                            id="typeP"
                            className="typeP browser-default"
                            value={field.inputType}
                            onChange={e => { setField(inputType(e.target.value)) }}>

                            <option value="text">Текст однострочный</option>
                            <option value="textarea">Текст многострочный</option>
                            <option value="rating">Рейтинг</option>
                        </select>
                        <br />
                    </div>

                    <div className='th-not-padding'>
                        <label className='typeR' id="typeR">Тип ответа:
                            <br />
                            {//Не работает setisisActive(lockMoreParam())
                            }
                            <select
                                id="typeR"
                                className="typeR browser-default"
                                value={field.inputType}
                                disabled={lockResp(field.inputType)}
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

                                <option value="radio">Переключатель</option>
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
                    </div>
                </div>
            </div>
            <div className='margin-top'>
                <div className='tb'>
                            <div className='th-not-padding'>
                                <label id="zagp">Подсказка для поля (плейсхолдер):
                                    <br />
                                    <input
                                        type="text"
                                        id="placehold"
                                        className="placehold"
                                        value={field.placeHolder}
                                        disabled={lockPlaceHold(field.inputType)}
                                        onChange={e => setField(inputPlacehold(e.target.value))} />
                                </label>
                                <br />
                            </div>

                            <div className='th-not-padding'>
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
                        </div>
                        <div>
                            <div className='th-not-padding'>
                                <div className='MoreParams'>
                                    <label>Колличество и заголовок (для флага/переключателя)
                                        <button
                                            className="addParam btn-floating btn-small waves-effect waves-light tael"
                                            disabled={lockMoreParam(field.inputType)}
                                            onClick={() => { setField(addHandler()) }}>
                                            <i className="material-icons">add</i>
                                        </button>
                                    </label>

                                    <br />
                                    {field.possbleValues.map(({ id, title }) => {
                                        return (
                                            <div key={id}>
                                                <input
                                                    type='text'
                                                    id={`param${id}`}
                                                    className={`paramClass${id} dls-param`}
                                                    value={title}
                                                    onChange={e => setField(inputHandler(e.target.value, id))}
                                                />
                                                <button className='flex float-button btn-floating btn-small waves-effect waves-light tael' onClick={() => { setField(deleteHandler(id)) }}><i className="material-icons">close</i></button>
                                                <br />
                                            </div>
                                        )
                                    })}
                                    <br />
                                </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FieldCreate
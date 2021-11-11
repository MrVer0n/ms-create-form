import React from 'react'
import AppState from '../AppState';

import { deleteParam, addParam } from './FinctionField'


function MoreParams(props, id) {
    const [companyName, setCompanyName] = React.useState(id !== undefined ? AppState.getWithIdFieldState(id).possbleValues : []);

    const inputHandler = (value, id) => {
        const result = companyName.map((item) =>
            item.id === id ? { ...item, title: value } : item
        )
        AppState.setTempParam(result)
        return result
    }

    const deleteHandler = (id) => {
        const result = companyName.filter((item) => item.id !== id)
        AppState.setTempParam(result)
        return result
    }

    const addHandler = () => {
        const result = companyName.concat({ id: Math.floor(Date.now() / 100), title: '' })
        AppState.setTempParam(result)
        return result
    }


    return (
        <div className='MoreParams'>
            Колличество и заголовок:
            <br />
            {companyName.map(({ id, title }) => {
                return (
                    <div key={id}>
                        <input
                            type='text'
                            id={`param${id}`}
                            className={`paramClass${id}`}
                            value={title}
                            onChange={e => setCompanyName(inputHandler(e.target.value, id))}
                        />
                        <button onClick={() => { setCompanyName(deleteHandler(id)) }}>-</button>
                        <br />
                    </div>
                )
            })}
            <button className="addParam" onClick={() => { setCompanyName(addHandler()) }}>+</button>
            <br />
        </div>
    )
}
export default MoreParams
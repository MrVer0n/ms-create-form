import React from 'react';
import {newField, lockResp, WinEdit} from './function/function'

function Add() {
React.useEffect(()=>{lockResp()})

  return (
    <div>
      <h2>Добавить поле</h2>
      {WinEdit()}
      <div>
        <button onClick={() => newField(false)}>Отмена</button>
        <button onClick={() => newField(true)} >Подтвердить</button>
      </div>
    </div>
  ); 
}

  export default Add;
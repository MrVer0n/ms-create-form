import React from "react";

import AppState from "./AppState";
import { deleteForm } from "./function/function";
import { renderCreateFormPar, rendrAddForm, rendrEditForm } from "./function/Render";


function ListForm() {
const form = AppState.getFormState()
      return (
        <div>
          <h2>Формы</h2>
          <div>
            <button onClick={rendrAddForm}>Добавит новую форму</button>
          </div>
          <div>
            <div>
              <table>
                <tbody>
                <tr>
                  <th>Название</th>
                </tr> 
                {
                  form.map((form) =>{
                      return (
                        <tr key={`tr${form.id}`}>
                        <th><a href="#/" onClick={() => renderCreateFormPar(form.id)}>{form.name}</a></th> 
                        <th><button onClick={() => rendrEditForm(form.id)}>Изменить</button></th>
                        <th><button onClick={() => deleteForm(form.id)}>Удалить</button></th>
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

export default ListForm;
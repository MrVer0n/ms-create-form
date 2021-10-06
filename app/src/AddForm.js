import { clickAddForm } from "./function/function";
import { renderListForm } from "./function/Render";

function AddForm() {
    return (
        <div>
            <h2>Создание формы</h2>
            <label id="nameForm">Название формы:
                <br/>
                <input className="nameForm" id="nameForm" type="text"/>
            </label>
            <br/>
            <button onClick={()=> renderListForm()}>Отмена</button>
            <button onClick={()=> clickAddForm()}>Добавить форму</button>
        </div>
    )
}

export default AddForm;
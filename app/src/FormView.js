import React from "react";
import ReactDOM from 'react-dom';

import AppState from "./AppState";
import CreateForm from "./CreateForm"

function FormView(){
const form = AppState.getfieldState()
let lis = form.map((field) => {
    if(field.activ){

        if(field.isNeed){
            
            if(field.type === 'text'){
                return(
                    <div key={field.id} >
                        <label id={field.id}>{field.text}</label>
                        <br/>
                        <input required id={field.id} type={field.typeRes}></input>
                    </div>
                )

            }else{

                if(field.type === 'textarea'){
                    return(
                        <div key={field.id} >
                            <label id={field.id}>{field.text}</label>
                            <br/>
                            <textarea required id={field.id}></textarea>
                        </div>
                    )

                }else{
                    return (
                        <div key={field.id} className="star-rating">
                        <div className="star-rating__wrap">
                          <input className="star-rating__input" id={`id5-${field.id}`} type="radio" name={field.id} value="5"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id5-${field.id}`} title="5 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id4-${field.id}`} type="radio" name={field.id} value="4"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id4-${field.id}`} title="4 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id3-${field.id}`} type="radio" name={field.id} value="3"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id3-${field.id}`} title="3 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id2-${field.id}`} type="radio" name={field.id} value="2"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id2-${field.id}`} title="2 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id1-${field.id}`} type="radio" name={field.id} value="1"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id1-${field.id}`} title="1 out of 5 stars"></label>
                        </div>
                      </div>
                    )
                }
            }

        }else{

            if(field.type === 'text'){
                return(
                    <div key={field.id} >
                        <label id={field.id}>{field.text}</label>
                        <br/>
                        <input id={field.id} type={field.typeRes}></input>
                    </div>
                )

            }else{

                if(field.type === 'textarea'){
                    return(
                        <div key={field.id} >
                            <label id={field.id}>{field.text}</label>
                            <br/>
                            <textarea id={field.id}></textarea>
                        </div>
                    )

                }else{
                    return (
                        <div key={field.id} className="star-rating">
                        <div className="star-rating__wrap">
                          <input className="star-rating__input" id={`id5-${field.id}`} type="radio" name={field.id} value="5"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id5-${field.id}`} title="5 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id4-${field.id}`} type="radio" name={field.id} value="4"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id4-${field.id}`} title="4 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id3-${field.id}`} type="radio" name={field.id} value="3"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id3-${field.id}`} title="3 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id2-${field.id}`} type="radio" name={field.id} value="2"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id2-${field.id}`} title="2 out of 5 stars"></label>
                          <input className="star-rating__input" id={`id1-${field.id}`} type="radio" name={field.id} value="1"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`id1-${field.id}`} title="1 out of 5 stars"></label>
                        </div>
                      </div>
                    )
                }
            }
        }

    }else{return 'Нет активных полей'}
})

React.useEffect(()=>{
    document.querySelector('form').addEventListener('submit', (event) =>{
        event.preventDefault();
        const form = document.querySelector('form')
        console.dir(form);
    })
},[])

return (
    <div>
        <h2>Оставить отзыв</h2>
        <button onClick={() => goBack()}>Вернуться к редактирования</button>
        <form>
            {lis}
            <br/>
            <button type="submit">Отправить</button>
        </form>
    </div>
)
}




  

function goBack(x){
    ReactDOM.render(
      <React.StrictMode>
       <CreateForm />
     </React.StrictMode>,
      document.getElementById('root')
    );
  }

export default FormView;
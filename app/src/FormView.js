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
                        <div key={field.id}>
                         <label id={field.id}>{field.text}</label>    
                        <div key={field.id} className="star-rating">
                        <div className="star-rating__wrap">
                          <input required className="star-rating__input" id={`${field.id}-star-rating-5`} type="radio" name={`rating-${field.id}`} value="5"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-5`} title="5 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-4`} type="radio"  name={`rating-${field.id}`} value="4"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-4`} title="4 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-3`} type="radio"  name={`rating-${field.id}`} value="3"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-3`} title="3 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-2`} type="radio"  name={`rating-${field.id}`} value="2"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-2`} title="2 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-1`} type="radio"  name={`rating-${field.id}`} value="1"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-1`} title="1 out of 5 stars"></label>
                        </div>
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
                    <div key={field.id}>
                         <label id={field.id}>{field.text}</label>
                        <div key={field.id} className="star-rating">
                        <div className="star-rating__wrap">
                          <input className="star-rating__input" id={`${field.id}-star-rating-5`} type="radio" name={`rating-${field.id}`} value="5"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-5`} title="5 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-4`} type="radio"  name={`rating-${field.id}`} value="4"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-4`} title="4 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-3`} type="radio"  name={`rating-${field.id}`} value="3"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-3`} title="3 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-2`} type="radio"  name={`rating-${field.id}`} value="2"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-2`} title="2 out of 5 stars"></label>
                          <input className="star-rating__input" id={`${field.id}-star-rating-1`} type="radio"  name={`rating-${field.id}`} value="1"></input>
                          <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-1`} title="1 out of 5 stars"></label>
                        </div>
                        <br/>
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
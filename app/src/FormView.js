import React from "react";

import AppState from "./AppState";
import {renderCreateForm} from "./function/Render"

function FormView(){
const form = AppState.getFieldState()

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
            <button onClick={() => renderCreateForm()}>Вернуться к редактирования</button>
            <form>
                {
                    form.map((field) => {
                        if(field.activ){
                        
                            if(field.isNeed){
                                
                                if(field.type === 'text'){
                                    
                                    return(
                                        <div key={field.id} >
                                            <label id={field.id}>{field.text}
                                            <br/>
                                            <input required id={field.id} type={field.typeRes}/>
                                            </label>
                                        </div>
                                    )
                                    
                                }else{
                                
                                    if(field.type === 'textarea'){
                                    
                                        return(
                                            <div key={field.id} >
                                                <label id={field.id}>{field.text}
                                                <br/>
                                                <textarea required id={field.id}/>
                                                </label>
                                            </div>
                                        )
                                        
                                    }else{
                                    
                                        return (
                                            <div key={field.id}>
                                             <label id={field.id}>{field.text}</label>  
                                            <div key={field.id} className="star-rating">
                                            <div className="star-rating__wrap">
                                              <input required className="star-rating__input" id={`${field.id}-star-rating-5`} type="radio" name={`rating-${field.id}`} value="5"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-5`} title="5 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-4`} type="radio"  name={`rating-${field.id}`} value="4"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-4`} title="4 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-3`} type="radio"  name={`rating-${field.id}`} value="3"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-3`} title="3 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-2`} type="radio"  name={`rating-${field.id}`} value="2"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-2`} title="2 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-1`} type="radio"  name={`rating-${field.id}`} value="1"/>
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
                                            <label id={field.id}>{field.text}
                                            <br/>
                                            <input id={field.id} type={field.typeRes}/>
                                            </label>
                                        </div>
                                    )
                                    
                                }else{
                                
                                    if(field.type === 'textarea'){
                                    
                                        return(
                                            <div key={field.id}>
                                                <label id={field.id}>{field.text}
                                                <br/>
                                                <textarea id={field.id}/>
                                                </label>
                                            </div>
                                        )
                                        
                                    }else{
                                    
                                        return (
                                        <div key={field.id}>
                                            <label id={field.id}>{field.text}</label>
                                            <div key={field.id} className="star-rating">
                                            <div className="star-rating__wrap">
                                              <input className="star-rating__input" id={`${field.id}-star-rating-5`} type="radio" name={`rating-${field.id}`} value="5"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-5`} title="5 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-4`} type="radio"  name={`rating-${field.id}`} value="4"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-4`} title="4 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-3`} type="radio"  name={`rating-${field.id}`} value="3"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-3`} title="3 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-2`} type="radio"  name={`rating-${field.id}`} value="2"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-2`} title="2 out of 5 stars"></label>
                                              <input className="star-rating__input" id={`${field.id}-star-rating-1`} type="radio"  name={`rating-${field.id}`} value="1"/>
                                              <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-1`} title="1 out of 5 stars"></label>
                                            </div>
                                          </div>
                                        </div>
                                        )
                                    }
                                }
                            }
                        
                        }else{return 'Нет активных полей'}
                    })
                }
                <br/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )

}

export default FormView;
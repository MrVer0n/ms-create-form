import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'
import '../Css/App.css'
import { useParams } from 'react-router-dom'

function Rating(props) {
    return <div>
        <label id={props.field.id}>{props.field.text}</label>
        <div key={props.field.id} className="star-rating">
            <div className="star-rating__wrap">
                <input required={props.field.isNeed} className="star-rating__input" id={`${props.field.id}-star-rating-5`} type="radio" name={`rating-${props.field.id}`} value="5" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${props.field.id}-star-rating-5`} title="5 out of 5 stars"></label>
                <input className="star-rating__input" id={`${props.field.id}-star-rating-4`} type="radio" name={`rating-${props.field.id}`} value="4" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${props.field.id}-star-rating-4`} title="4 out of 5 stars"></label>
                <input className="star-rating__input" id={`${props.field.id}-star-rating-3`} type="radio" name={`rating-${props.field.id}`} value="3" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${props.field.id}-star-rating-3`} title="3 out of 5 stars"></label>
                <input className="star-rating__input" id={`${props.field.id}-star-rating-2`} type="radio" name={`rating-${props.field.id}`} value="2" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${props.field.id}-star-rating-2`} title="2 out of 5 stars"></label>
                <input className="star-rating__input" id={`${props.field.id}-star-rating-1`} type="radio" name={`rating-${props.field.id}`} value="1" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${props.field.id}-star-rating-1`} title="1 out of 5 stars"></label>
            </div>
        </div>
    </div>
}

Rating.propTypes = {
    field: propTypes.object.isRequired
}


function FormView(props) {
    const [form, setForm] = React.useState(AppState.getWhithIdFormFiledState(Number(useParams().idForm)))
    
    React.useEffect(() => {
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault()
            const form = document.querySelector('form')
            console.dir(form)
        })
    }, [])

    return (
        <div>
            <h2>Предпросмотр формы</h2>
            <button onClick={() => props.history.goBack()}>Вернуться к редактирования</button>
            <form>
                {form.map((field) => {
                    if (field.activ) {

                        switch (field.type) {

                        case 'text':
                            switch (field.typeRes) {
                                case 'checkbox':
                                case 'radio':
                                    return (
                                        <div key={field.id} >
                                            {field.text}
                                            <br/>
                                            {field.possbleValues.map((textValue)=>{
                                                return(
                                                    <label id={field.id}>
                                                        <input name={`${field.typeRes}${field.id}`} required={field.isNeed} id={field.id} type={field.typeRes} />
                                                        {textValue.title}
                                                    </label>
                                                )
                                            })}
                                        </div>
                                    )
                            
                                default:
                                    return (
                                        <div key={field.id} >
                                            <label id={field.id}>{field.text}
                                                <br />
                                                <input placeholder={field.placeholder} required={field.isNeed} id={field.id} type={field.typeRes} />
                                            </label>
                                        </div>
                                    )
                            }

                        case 'textarea':
                            return (
                                <div key={field.id} >
                                    <label id={field.id}>{field.text}
                                        <br />
                                        <textarea placeholder={field.placeholder} required={field.isNeed} id={field.id} />
                                    </label>
                                </div>
                            )

                        case 'rating':
                            return (
                                <Rating key={field.id} field={field}></Rating>
                            )

                        default:
                            break
                        }
                    } else { return null }
                })}
                <br />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

FormView.propTypes = {
    history: propTypes.object.isRequired
}

export default FormView
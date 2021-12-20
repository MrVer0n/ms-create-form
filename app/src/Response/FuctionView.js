import propTypes from 'prop-types'
import AppState from '../AppState'
import { setDeleteResponse } from '../Fetch'

export async function delelResponse(id) {
    AppState.delDataState(id)
    return await setDeleteResponse(id)
}
delelResponse.propTypes = {
    id: propTypes.number
}
let i = 0
function check(field, titleValue) {
    let check = false
    field.responseBody.map((value) => {
        if (value.value === titleValue.title) { check = true }
        return null
    })
    return check
}

export function MoreParams(field, response = false, id) {
    let idN = 0
    i = 1000
    return <div key={field.id} className='margin-top16 box #004d40 #e0f2f1 teal lighten-5 col s12 m2 z-depth-2'>
        <div className='content'>
            <span>{field.title}</span>
            <br />
            {field.possbleValues.map((titleValue) => {
                if (field.inputType === 'checkbox' && response === false) {
                    idN = field.id + i;
                    i=i+1000;
                }
                return (
                    <label className='text-pad black-text' key={titleValue.id} id={response === true ? `${field.id}${id}` : idN}>
                        <input defaultChecked={response === true ? check(field, titleValue) : false} disabled={response} name={response === true ? `${field.id}${id}` : idN} required={field.isRequire} id={response === true ? `${field.id}${id}` : idN} type={field.inputType} value={titleValue.title} />
                        <span>{titleValue.title}</span>
                    </label>
                )
            })
            }
        </div>
    </div>
}

export function defParams(field, response = false) {
    let valueThis = undefined
    if(response){
        valueThis = field.responseBody[0].value
    }
    return <div key={field.id} className='margin-top16 box #004d40 #e0f2f1 teal lighten-5 col s12 m2 z-depth-2'>
        <div className='content'>
        <label className='black-text' id={field.id}>{field.title}
            <br />
            <input value={valueThis} disabled={response} name={`${field.id}`} placeholder={field.placeHolder} required={field.isRequire} id={field.id} type={field.inputType} />
        </label>
        </div>
    </div>
}

export function TextArea(field, response = false) {
    let valueThis = undefined
    if(response){
     valueThis = field.responseBody[0].value
    }
    const resize ={
        height: '22px',
        outline: 'none',
        border: "0px solid rgb(1, 1, 1)", 
        borderBottom: "1px solid rgb(158,158,158)", 
        resize: 'none'
    }
    return <div key={field.id} className='margin-top16 box #004d40 #e0f2f1 teal lighten-5 col s12 m2 z-depth-2'>
        <div className='content'>
        <label className='black-text' id={field.id}><span>{field.title}</span>
            <br />
            <textarea className='marg-top12' style={resize} value={valueThis} disabled={response} name={`${field.id}`} placeholder={field.placeHolder} required={field.isRequire} id={field.id} />
        </label>
        </div>
    </div>
}

export function Rating(field, response = false, id) {
    const value = Number(field.responseBody.value)
    return <div key={field.id} className='margin-top16 box #004d40 #e0f2f1 teal lighten-5 col s12 m2 z-depth-2'>
          <div className='content'>
        <label className='black-text' id={field.id}>{field.title}</label>
        <div className="star-rating">
            <div className="star-rating__wrap">
                <input name={response === true? `${field.id}${id}`:field.id} defaultChecked={value === 5 ? true: false} disabled={response} required={field.isRequire} className="star-rating__input" id={`${id}${field.id}-star-rating-5`} type="radio"  value="5" />
                <label   className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${id}${field.id}-star-rating-5`} title="5 out of 5 stars"></label>
                <input name={response === true? `${field.id}${id}`:field.id} defaultChecked={value === 4 ? true: false} disabled={response} className="star-rating__input" id={`${id}${field.id}-star-rating-4`} type="radio"  value="4" />
                <label  className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${id}${field.id}-star-rating-4`} title="4 out of 5 stars"></label>
                <input name={response === true? `${field.id}${id}`:field.id} defaultChecked={value === 3 ? true: false} disabled={response} className="star-rating__input" id={`${id}${field.id}-star-rating-3`} type="radio"  value="3" />
                <label  className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${id}${field.id}-star-rating-3`} title="3 out of 5 stars"></label>
                <input name={response === true? `${field.id}${id}`:field.id} defaultChecked={value === 2 ? true: false} disabled={response} className="star-rating__input" id={`${id}${field.id}-star-rating-2`} type="radio"  value="2" />
                <label  className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${id}${field.id}-star-rating-2`} title="2 out of 5 stars"></label>
                <input name={response === true? `${field.id}${id}`:field.id} defaultChecked={value === 1 ? true: false} disabled={response} className="star-rating__input" id={`${id}${field.id}-star-rating-1`} type="radio"  value="1" />
                <label  className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${id}${field.id}-star-rating-1`} title="1 out of 5 stars"></label>
            </div>
        </div>
        </div>
    </div>
}
Rating.propTypes = {
    field: propTypes.object.isRequired
}
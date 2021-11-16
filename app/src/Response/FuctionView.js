import propTypes from 'prop-types'

export function MoreParams(field) {
    return <div key={field.id}>
        {field.title}
        <br />
        {field.possbleValues.map((titleValue) => {
            return (
                <label key={titleValue.id} id={field.id}>
                    <input name={`${field.id}`} required={field.isRequire} id={field.id} type={field.inputType} value={titleValue.title}/>
                    {titleValue.title}
                </label>
            )
        })}
    </div>
}

export function defParams(field) {
    return <div key={field.id}>
        <label id={field.id}>{field.title}
            <br />
            <input name={`${field.id}`} placeholder={field.placeHolder} required={field.isRequire} id={field.id} type={field.inputType} />
        </label>
    </div>
}

export function TextArea(field) {
    return <div key={field.id}>
        <label id={field.id}>{field.title}
            <br />
            <textarea name={`${field.id}`} placeholder={field.placeHolder} required={field.isRequire} id={field.id} />
        </label>
    </div>
}

export function Rating(field) {
    return <div key={field.id}>
        <label id={field.id}>{field.title}</label>
        <div className="star-rating">
            <div className="star-rating__wrap">
                <input required={field.isRequire} className="star-rating__input" id={`${field.id}-star-rating-5`} type="radio" name={`${field.id}`} value="5" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-5`} title="5 out of 5 stars"></label>
                <input className="star-rating__input" id={`${field.id}-star-rating-4`} type="radio" name={`${field.id}`} value="4" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-4`} title="4 out of 5 stars"></label>
                <input className="star-rating__input" id={`${field.id}-star-rating-3`} type="radio" name={`${field.id}`} value="3" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-3`} title="3 out of 5 stars"></label>
                <input className="star-rating__input" id={`${field.id}-star-rating-2`} type="radio" name={`${field.id}`} value="2" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-2`} title="2 out of 5 stars"></label>
                <input className="star-rating__input" id={`${field.id}-star-rating-1`} type="radio" name={`${field.id}`} value="1" />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor={`${field.id}-star-rating-1`} title="1 out of 5 stars"></label>
            </div>
        </div>
    </div>
}
Rating.propTypes = {
    field: propTypes.object.isRequired
}
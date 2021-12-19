import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import '../Css/App.css'
import { delelResponse, MoreParams, defParams, TextArea, Rating } from './FuctionView'
import { getAllResponse } from '../Fetch'
import { useParams } from 'react-router-dom'

function ResponseView(props) {
    const formId = Number(useParams().idForm)
    const [response, setResponse] = React.useState(AppState.getData())
    React.useEffect(() => {
            async function getDataData() {
                const data = await getAllResponse(formId)
                AppState.setData(data); setResponse(AppState.getData())
            }
            getDataData()
    }, [])
    const resp = true
    function delResponse(id) {
        if (window.confirm("Вы уверены?")) {
            delelResponse(id)
            setResponse(AppState.getData())
        }
    }
    return (
        <div>
            <div>
                <i className="float-left medium material-icons">assessment</i>
                <h2 className='margin-t text-cursor-off'>Ответы</h2>
                <hr />
                <div className='linkblock card-panel add-field nav-bord '>
                    <nav className='nav-bord'>
                        <div className="nav-wrapper">
                            <div className="col s12 #009688 teal nav-bord text-pad">
                                <a href={`/form/${Number(useParams().idForm)}`} className="breadcrumb teal-text text-lighten-4">Поля</a>
                                <a href={`/form/${Number(useParams().idForm)}/view`} className="breadcrumb teal-text text-lighten-4">Предпросмотр</a>
                                <a href={`/form/${Number(useParams().idForm)}/response`} className="breadcrumb #26a69a white-text">Ответы</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/*<button onClick={() => props.history.goBack()}>Вернуться к редактирования</button>*/}
            <form>
                {response.map((responseB) => {
                    return (
                        <div key={responseB.id}>
                            <br/>
                            <div className='box-head5'>
                                <button className='btn-floating btn-medium waves-effect waves-light teal float-button' onClick={() => { delResponse(responseB.id);document.location.href=`/form/${AppState.getIdForm()}/response` }}><i className="small material-icons white-text">delete</i></button>
                                <h4>Ответ от {responseB.responseBody[0].responseBody[0].data !==undefined?responseB.responseBody[0].responseBody[0].data:'Unknown'}</h4>
                            </div>
                            <div>
                    <hr />
                </div>
                            {responseB.responseBody.map((responseBody) => {
                                switch (responseBody.inputType) {
                                    case 'checkbox':
                                    case 'radio':
                                        return MoreParams(responseBody, resp,responseB.id)
                        {responseB.responseBody.map((responseBody) => {

                                    case 'textarea':
                                        return TextArea(responseBody, resp)

                                    case 'rating':
                                        return (
                                            Rating(responseBody, resp,responseB.id)
                                        )
                                    default:
                                        return defParams(responseBody, resp)

                                }
                            })}
                        </div>
                        </div>
                    )
                })}
                <br />
            </form>
        </div>
    )
}

ResponseView.propTypes = {
    history: propTypes.object.isRequired
}

export default ResponseView
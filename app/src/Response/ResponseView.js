import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import '../Css/App.css'
import { delelResponse, MoreParams, defParams, TextArea, Rating } from './FuctionView'
import { getAllResponse } from '../Fetch'
import { useParams } from 'react-router-dom'

function ResponseView(props) {
    const [log, setLog] = React.useState(AppState.getLog())
    const formId = Number(useParams().idForm)
    const [response, setResponse] = React.useState(AppState.getData())
    React.useEffect(() => {
        async function getDataData() {
            const data = await getAllResponse(formId)
            AppState.setData(data); setResponse(AppState.getData())
            AppState.setLog()
            setLog(true)
        }
        getDataData()
    }, [])
    const resp = true
    async function delResponse(id) {
        if (window.confirm("Вы уверены?")) {
            await delelResponse(id)
            setResponse(AppState.getData())
            document.location.href = `/form/${formId}/response`
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
            {response.map((responseB) => {
                return (
                    <div key={responseB.id}>
                        <br />
                        <div className='box-head5'>
                            <button className='btn-floating btn-medium waves-effect waves-light teal float-button' onClick={() => { delResponse(responseB.id) }}><i className="small material-icons white-text">delete</i></button>
                            <h4>Ответ от {responseB.responseBody[0].responseBody[0].data !== undefined ? responseB.responseBody[0].responseBody[0].data : 'Unknown'}</h4>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className='resp-text'>
                            {responseB.responseBody.map((responseBody) => {
                                if (responseBody.isActive) {
                                    switch (responseBody.inputType) {
                                        case 'checkbox':
                                        case 'radio':
                                            return MoreParams(responseBody, resp, responseB.id)

                                        case 'textarea':
                                            return TextArea(responseBody, resp)

                                        case 'rating':
                                            return (
                                                Rating(responseBody, resp, responseB.id)
                                            )
                                        default:
                                            return defParams(responseBody, resp)

                                    }
                                }
                                return undefined
                            })}
                        </div>
                    </div>
                )
            })}
            <br />
            {log === false ? <div className='center'>
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-green-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div></div> : response.length === 0 ? <h4 className='center'> Ответов не найдено.</h4>: undefined}
        </div>
    )
}

ResponseView.propTypes = {
    history: propTypes.object.isRequired
}

export default ResponseView
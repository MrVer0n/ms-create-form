import React from 'react'
import AppState from '../AppState'
import propTypes from 'prop-types'

import '../Css/App.css'
import { delelResponse, MoreParams, defParams, TextArea, Rating } from './FuctionView'
import { Link } from 'react-router-dom'
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
            <h2>Ответы на форму</h2>
            <button onClick={() => props.history.goBack()}>Вернуться к редактирования</button>
            <form>
                {response.map((responseB) => {
                    return (
                        <div key={responseB.id}>
                            <br/>
                            <div>
                                <h4>Ответ от {responseB.responseBody[0].responseBody.data}</h4>
                                <button onClick={() => { delResponse(responseB.id) }}><Link to={`/form/${AppState.getIdForm()}/response`}>Удалить</Link></button>
                            </div>

                            {responseB.responseBody.map((responseBody) => {
                                switch (responseBody.inputType) {
                                    case 'checkbox':
                                    case 'radio':
                                        return MoreParams(responseBody, resp,responseB.id)

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
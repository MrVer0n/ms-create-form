import React from 'react'
import './Css/App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import ListForm from './Forms/ListForm'
import AddForm from './Forms/AddForm'
import EditForm from './Forms/EditForm'
import ListFieldForms from './Field/ListFieldForms'
import AddField from './Field/AddField'
import EditFieldWin from './Field/EditFieldWin'
import FormView from './Response/FormView'

function App() {
    return (
        <Router>   
            <Switch>
                <Route exact path={'/'} component={ListForm} />
                <Route exact path={'/addform'} component={AddForm} />
                <Route exact path={'/editform/:idForm'} component={EditForm} /> 
                <Route exact path={'/form/:idForm/addfield'} component={AddField} />  
                <Route exact path={'/form/:idForm/editfield/:idField'} component={EditFieldWin} />   
                <Route exact path={'/form/:idForm/view'} component={FormView} />  
                <Route path={'/form/:idForm'} component={ListFieldForms} />  
            </Switch>
        </Router>
    )
}

export default App

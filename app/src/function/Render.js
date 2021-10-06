import React from 'react';
import ReactDOM from 'react-dom';

import Add from "../Add";
import CreateForm from "../CreateForm";
import FormView from "../FormView"
import Edit from "../Edit"
import ListForm from '../ListForm';
import AddForm from '../AddForm';
import EditForm from '../EditForm'

export function renderCreateForm(){
    ReactDOM.render(
      <React.StrictMode>
       <CreateForm />
     </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
export function renderFormView (){
    ReactDOM.render(
      <React.StrictMode>
        <FormView  />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
export function renderAdd (){
      ReactDOM.render(
        <React.StrictMode>
          <Add  />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
  
export function renderEditWithProps (x){
      ReactDOM.render(
        <React.StrictMode>
          <Edit idfield={x} />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
export function renderListForm (){
      ReactDOM.render(
        <React.StrictMode>
          <ListForm />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
export function rendrAddForm (){
      ReactDOM.render(
        <React.StrictMode>
          <AddForm />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    export function rendrEditForm (x){
      ReactDOM.render(
        <React.StrictMode>
          <EditForm idForm={x} />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
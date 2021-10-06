import React from 'react';
import ReactDOM from 'react-dom';

import Add from "../Add";
import CreateForm from "../CreateForm";
import FormView from "../FormView"
import Edit from "../Edit"

export function createForm(){
    ReactDOM.render(
      <React.StrictMode>
       <CreateForm />
     </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
export function formView (){
    ReactDOM.render(
      <React.StrictMode>
        <FormView  />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
export function addWin (){
      ReactDOM.render(
        <React.StrictMode>
          <Add  />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
  
export function editWin (x){
      ReactDOM.render(
        <React.StrictMode>
          <Edit idfield={x} />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
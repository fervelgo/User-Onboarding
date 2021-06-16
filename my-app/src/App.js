import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import logo from './logo.svg';
import './App.css';
import UserForm from './userForm User-Onboarding'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false

}

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}
const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)


const postUser = newUser => {
  axios.post(`https://reqres.in/api/users`, newUser)
  .then(res =>{
    setNewUser([res.data, ...users])
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  .finally() //buscarlo en el video de la clase. 

  const validate = (name,value) =>{ //buscarlo en el video de la clase.
    yup.reach(schema,name)
    .validate(value).then(()=>)
  }


  return (
    <div className="App">
      <UserForm
        value={formValues}
        disabled={disabled}
        errors={formErrors}
        submit={formSubmit}
        change={inputChange}
        />
    </div>
  );
}

export default App;

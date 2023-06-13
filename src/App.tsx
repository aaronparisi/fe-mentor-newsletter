import React, {ChangeEvent, FocusEvent, FormEvent, useState} from 'react';
import './reset.css';
import './App.css';

import emailjs, { init } from '@emailjs/browser'

import SubscriptionForm from './SubscriptionForm';
import SuccessModal from './SuccessModal';

import {isEmailValid} from './utils';

export enum FormStatus {
  PENDING,
  ERROR,
  READY,
  SUBMITTED
}

init("user_GjyD0j0dNrlKS9KVIfHed")

const App = (): JSX.Element => {
  const [formStatus, setFormStatus] = useState(FormStatus.PENDING)
  const [email, setEmail] = useState("")

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
    if (isEmailValid(e.target.value)) setFormStatus(FormStatus.READY) 
    else setFormStatus(FormStatus.PENDING)
  }
  const handleEmailBlur = (e: FocusEvent<HTMLInputElement>): void => {
    if (!isEmailValid(e.target.value)) setFormStatus(FormStatus.ERROR)
  }
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const templateId = "template_2vdi82m"
    const vars = {
      to_email: email
    }
    emailjs.send('service_jfp0y1e', templateId, vars)
      .then(() => {
        setFormStatus(FormStatus.SUBMITTED)
      })
      .catch(err => {
        alert('Something went wrong, try agian later!')
      })

  }
  const handleDismiss = () => {
    setEmail("")
    setFormStatus(FormStatus.PENDING)
  }

  return (
    <div className="App">
      {
        formStatus === FormStatus.SUBMITTED ? 
          <SuccessModal handleDismiss={handleDismiss} email={email} /> :
          <SubscriptionForm status={formStatus} email={email} handleSubmit={handleFormSubmit} handleEmailChange={handleEmailChange} handleEmailBlur={handleEmailBlur} />
      }
    </div>
  );
}

export default App;

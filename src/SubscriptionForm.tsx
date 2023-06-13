import React, { FormEvent, ChangeEvent, FocusEvent } from 'react'
import {FormStatus} from './App'

interface SubscriptionFormProps {
  status: FormStatus;
  email: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

// TODO ditch the usage of ids - makes it so the component can't be reused on the same page?
const SubscriptionForm = ({ status, email, handleSubmit, handleEmailChange, handleEmailBlur }: SubscriptionFormProps): JSX.Element => {
  return (
    <div className="subscription-form">
      <section className="subscription-form-lhs">
        <section className="subscription-form-info">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </section>
        <form className="subscription-form-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input name="email" type="email" value={email} placeholder="email@company.com" onChange={handleEmailChange} onBlur={handleEmailBlur} />
          <input type="submit" value="Subscribe to monthly newsletter" disabled={status !== FormStatus.READY} />
        </form>
      </section>
      <img className="subscription-form-rhs" alt="" aria-hidden="true" src={'./images/illustration-sign-up-desktop.svg'} />
    </div>
  )
}

export default SubscriptionForm

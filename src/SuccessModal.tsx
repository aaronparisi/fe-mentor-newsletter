import React from 'react'

interface SuccessModalProps {
  handleDismiss: () => void;
  email: string
}

const SuccessModal = ({ handleDismiss, email }: SuccessModalProps): JSX.Element => {
  return (
    <div className="success-modal">
      <img src={'./images/icon-success.svg'} />
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <strong>{email}</strong>.  Please open it and click the button inside to confirm your subscription.</p>
      <button onClick={handleDismiss}>Dismiss Message</button>
    </div>
  )
}

export default SuccessModal

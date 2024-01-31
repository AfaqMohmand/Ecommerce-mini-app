import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
     <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <form>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact
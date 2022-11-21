import { useState } from "react";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div>
      <h2>Contact Us</h2>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <button onClick={() => setIsSubmitted(true)}>Submit</button>
      {isSubmitted && isSuccess && (
        <p>Thanks for your details, we'll be in touch!</p>
      )}
      {isSubmitted && !isSuccess && (
        <p>Oops, something went wrong! Please try again!</p>
      )}
    </div>
  );
}

export default ContactForm;

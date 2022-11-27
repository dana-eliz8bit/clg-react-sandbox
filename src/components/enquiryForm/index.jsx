import React, { useState } from "react";
import FormMessaging from "./formMessaging";
import styles from "./formMessaging.module.css";

const options = [
  "Design & Branding",
  "Web and App Development",
  "Cloud and API Consultancy",
  "Brand Strategy",
  "Just want to say Hi!",
  "Marketing and Ads",
];

function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  function validateForm() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex) || email.length < 3 || name.length < 1)
      setIsValid(false);
    else {
      setIsValid(true);
    }
  }

  return (
    <div>
      <h2>Let's keep in touch!</h2>
      <form>
        <div>
          <label>
            Name
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <label>What would you like to chat about?</label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option disabled={true} value="">
            --Choose an option--
          </option>
          {options.map((option, id) => (
            <option value={option} key={`${id}-${option}`}>
              {option}
            </option>
          ))}
        </select>
        <label>Message</label>
        <textarea
          name="Message"
          cols="40"
          rows="5"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="button"
          onClick={() => {
            validateForm();
            setIsSubmitted(true);
            console.log({ name, email, selectedService, message });
          }}
        >
          Submit
        </button>
        {isSubmitted && isValid && (
          <FormMessaging
            isError={false}
            content="Thanks for your details, we'll be in touch!"
          />
        )}
        {isSubmitted && (
          <FormMessaging
            isError
            content="Oops, something went wrong, please try again later."
          />
        )}
        {!isSubmitted && !isValid && (
          <FormMessaging isError content="Please fill in the form" />
        )}
      </form>
    </div>
  );
}

export default EnquiryForm;

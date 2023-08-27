import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  // Scroll to top of page on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize useForm hook with formspree
  const [state, handleSubmit] = useForm("mwkdlood");
  // Initialize state for message and error
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Update message and error state based on form submission status
  useEffect(() => {
    if (state?.errors?.length > 0) {
      // Set error message and error state if there are any errors
      setMessage(
        "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
      );
      setIsError(true);
    } else if (state?.succeeded) {
      // Set success message and reset error state if form submission is successful
      setMessage(
        "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais."
      );
      setIsError(false);
    }
  }, [state]);

  // Render form with email and message inputs
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center py-12 pt-28">
      <div className="w-full max-w-lg bg-white p-8 rounded shadow-md">
        <h1 className="font-display text-3xl mb-8 text-center">
          Contactez-moi
        </h1>
        {message && (
          <div
            className={
              isError
                ? "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                : "bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-5"
            }
            role="alert"
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block font-display text-sm mb-2" htmlFor="email">
              Adresse e-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-6">
            <label
              className="block font-display text-sm mb-2"
              htmlFor="message"
            >
              Votre message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 h-32 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="font-display bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={state.submitting}
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
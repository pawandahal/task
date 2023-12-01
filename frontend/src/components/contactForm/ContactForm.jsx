import React from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = ({
  email,
  phone,
  messages,
  setEmail,
  setPhone,
  setMessages,
  handleSubmit,
  handleKeyDown,
  handleKeyPressAndDown,
  setFocusedInput,
}) => {
  return (
    <div className='w-full flex justify-center '>
      <div className='w-[30vw] shadow-md p-5 rounded-md'>
      <Formik
      initialValues={{ email, phone, messages }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-md">
          <div>
            <label className='font-semibold text-base tracking-wider font-poppins'>Email</label>
            <Field
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border border-gray-400 p-2 mb-4 w-full"
              onKeyDown={(e) => {
                handleKeyDown(e);
                setFocusedInput("email");
              }}
              onFocus={() => setFocusedInput("email")}
            />
          </div>
          <div>
            <label className='font-semibold text-base tracking-wider font-poppins'>Number</label>
            <Field
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="border border-gray-400 p-2 mb-4 w-full"
              onKeyDown={(e) => {
                handleKeyDown(e);
                setFocusedInput("number");
              }}
              onFocus={() => setFocusedInput("number")}
            />
          </div>
          <div>
            <label className='font-semibold text-base tracking-wider font-poppins'>Message</label>
            <Field
              type="text"
              name="messages"
              value={messages}
              onChange={(e) => {
                setMessages(e.target.value);
              }}
              className="border border-gray-400 p-2 mb-4 w-full"
              onKeyDown={(e) => {
                handleKeyPressAndDown(e);
                setFocusedInput("message");
              }}
              onFocus={() => setFocusedInput("messages")}
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
      </div>
    
    </div>
  
  );
};

export default ContactForm;

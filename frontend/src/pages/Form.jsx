import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Number from "../components/Numbers";
import Alphabet from "../components/Alphabets";
import SpecialCharacter from "../components/SpecialCharacters";
import ContactForm from "../components/contactForm/ContactForm";
const Form = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState("");

  // To track the focused input
  const [focusedInput, setFocusedInput] = useState("");

  //email
  const handleEmailKeyPress = (keyValue) => {
    if (keyValue === "Backspace") {
      setEmail((prevValue) => prevValue.slice(0, -1));
    } else {
      setEmail((prevValue) => prevValue + keyValue);
    }
  };


   //for phone number as well as making validation if there isnot any text it show the error notification Check if the entered value is a number
  const handleNumberKeyPress = (keyValue) => {
   
    if (!isNaN(keyValue) || keyValue === "Backspace") {
      if (keyValue === "Backspace") {
        setPhone((prevValue) => prevValue.slice(0, -1));
      } else {
        setPhone((prevValue) => prevValue + keyValue);
      }
    } else {
    toast.error("Please enter only numbers for the phone field.");
    }
  };

  //messages
  const handlemessagesKeyPress = (keyValue) => {
    if (keyValue === "Backspace") {
      setMessages((prevValue) => prevValue.slice(0, -1));
    } else {
      setMessages((prevValue) => prevValue + keyValue);
    }
  };

  // Check the focused input state and update the corresponding value
  const handleKeyPress = (keyValue) => {
    if (focusedInput === "email") {
      handleEmailKeyPress(keyValue);
    } else if (focusedInput === "number") {
      handleNumberKeyPress(keyValue);
    } else if (focusedInput === "messages") {
      handlemessagesKeyPress(keyValue);
    }
  };

  // Clears the input field on backspace key press
  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      if (focusedInput === "email") {
        setEmail("");
      } else if (focusedInput === "number") {
        setPhone("");
      } else if (focusedInput === "messages") {
        setMessages("");
      }
    }
  };

//contain both event handleKeyDwn and handleKeyPress
  const handleKeyPressAndDown = (event) => {
    if (event.type === "keydown") {
      handleKeyDown(event);
    } else if (event.type === "keypress") {
      handleKeyPress(event.key);
    }
  };

  //For form submit and there must be all the field value so it will be sumbit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email || !phone || !messages) {
        toast.error("All fields are required");
      } else {
        const formData = { email, phone, messages };
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}contact`,
          formData
        );
        setEmail("");
        setPhone("");
        setMessages("");
        toast.success("Contact Form is Add");
        setTimeout(() => {
          window.location.href = "";
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting phone form:", error);
    }
  };

  return (
    <div className="m-4 flex flex-col items-center gap-4">
      {/*second section & contact form and passing the data as props to contact form*/}
      <ContactForm
        email={email}
        phone={phone}
        messages={messages}
        setEmail={setEmail}
        setPhone={setPhone}
        setMessages={setMessages}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        handleKeyPressAndDown={handleKeyPressAndDown}
        setFocusedInput={setFocusedInput}
      />

      {/* third section */}

      <div className="flex justify-center gap-4">
        <div className="grid grid-cols-1 gap-4 shadow-md p-5 rounded-md">
          <Number handleKeyPress={handleKeyPress} />
          <Alphabet handleKeyPress={handleKeyPress} />
          <SpecialCharacter handleKeyPress={handleKeyPress} />
        </div>
        {/* using toastContainer for message notification */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default Form;

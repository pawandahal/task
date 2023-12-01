import React, { useState } from 'react';
import axios from 'axios'
import Number from '../Numbers';
import Alphabet from '../Alphabets'
import SpecialCharacter from '../SpecialCharacters'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';
import key from  '../../assets/key.jpg'
import ContactForm from '../contactForm/ContactForm';
const Home= () => {

  return (
    <>
        {/* Navbar section and first section */}
        <div className="xl:h-[120px] hidden xl:block xl:w-full ">
        <div className=" bg-gradient-to-r from-[#F49AAF]  to-[#A3FCFC] bg-cover bg-no-repeat h-[40px] fixed left-0  z-50 top-0 w-full ">
          <Navbar />
        </div>
      </div>
      {/*second section & contact form and passing the data as props to contact form*/}
    <img src={key} alt='' className='relative -top-10 object-cover w-full h-auto' />
  </>
);
};

export default Home;

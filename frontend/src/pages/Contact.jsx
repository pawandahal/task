import React, { useEffect } from "react";
import { getContacts } from "../redux/action/ContactAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
const Contact = () => {
  const dispatch = useDispatch();
  const { loading, contacts, error } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      {/* first section for making button section */}
      <div className="flex justify-end p-5">
        <Link
          to="/"
          className=" w-[100px] flex justify-center p-2 rounded-md text-white items-center gap-2 bg-blue-500 "
        >
          <IoMdArrowBack /> <p>Back</p>
        </Link>
      </div>
       {/* getting the value of contact form */}
      <div className="flex relative mt-5 mb-5 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts &&
            contacts.contacts &&
            contacts.contacts.map((contact, index) => (
              <div
                key={index}
                className="shadow-md p-4 rounded-md bg-white w-full md:w-auto"
              >
                <div>
                  <p>Email: {contact.email}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Messages: {contact.messages}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

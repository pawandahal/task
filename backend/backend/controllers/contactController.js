const ErrorHandler = require("../utils.js/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const contact = require("../models/contactModel")


//Contact
const addContact = catchAsyncErrors(async (req, res, next) => {
  const {
    email,phone,messages
  } = req.body;

  const contacts = await contact.create({
   email,
   phone,
   messages
  });

  res.status(200).json({
    message: "Contact added successfully",
    contacts,
  });
});
// Get contact
const getAllContact = catchAsyncErrors(async (req, res, next) => {
  const contacts = await contact.find().sort({
    createdAt: -1,
  });

  res.status(200).json({
    message: "All contacts displayed successfully",
    contacts, 
  });
});


module.exports = {
  addContact,
  getAllContact
};

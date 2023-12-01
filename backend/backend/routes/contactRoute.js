const express = require("express");

// controller functions

const upload = require("../utils.js/multer");
const { addContact, getAllContact } = require("../controllers/contactController");

const router = express.Router();




//Contact
router.route("/contact").post(addContact);
router.route("/contacts").get(getAllContact);
module.exports = router;

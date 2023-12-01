const multer = require("multer")
const path = require('path')

const filestorage = multer.diskStorage({
    destination:(req, file, cb)=>{
      cb(null, path.join( "backend","images"))
    },
    filename: (req, file, cb) =>{
      cb(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname)
    }
  })


  const fileFilter = (req, file, cb)=>{
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "application/pdf" ||
      file.mimetype === "image/gif" ||
      file.mimetype === "image/webp" ||
      file.mimetype === "image/svg+xml" ||
      file.mimetype === "image/bmp" ||
      file.mimetype === "image/tiff" ||
      file.mimetype === "image/x-icon" ||
      file.mimetype === "image/avif" ||
      file.mimetype === "image/jxr" ||
      file.mimetype === "mage/heic"
    ) {
    
      cb(null,true)
    } else {
      cb(null, false)
    }
  }

  const upload = multer({storage: filestorage, fileFilter:fileFilter});

module.exports = upload
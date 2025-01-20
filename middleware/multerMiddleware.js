// import multer
const multer = require('multer');

// diskStorage method in multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`;
        callback(null, filename)
    }
})

// File Filter
const fileFilter = (req, file, callback) => {
    if( file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        callback(null, true)
    } else {
        // callback(null, false)
        callback(new Error('only png, jpg or jpeg files are allowed!'), false)
    }
}

// multer configuration
const multerConfig = multer({ storage, fileFilter })

module.exports = multerConfig
const path = require("path")
const multer = require("multer")
// const createError = require("http-errors")

function uploader( fileTypes, maxFileSize) {
    // file upload folder
    const UPLOAD_FOLDER = `public/uploads/`

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOAD_FOLDER)
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname)
            const fileName = file.originalname
                .replace(fileExt, "")
                .toLowerCase()
                .split(" ")
                .join("-") + "-" + Date.now();
            cb(null, fileName + fileExt)
        }
    })

    // preapre the final multer upload object
    const upload = multer({
        storage,
        limits: {
            fileSize: maxFileSize
        },
        fileFilter: (req, file, cb) => {
            if (fileTypes.includes(file.mimetype)) {
                cb(null, true)
            } else {
                cb(new Error("Image upload failed"))
            }
        }
    })

    return upload
}

module.exports = uploader
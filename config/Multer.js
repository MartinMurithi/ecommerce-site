const multer = require("multer");
const maxFileSize = 1024 * 1024 * 2;

// The disk storage specifies the storage location  and the naming convention of the files.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const file1 = `${Date.now()}-${file.originalname}`;
    const fileName = file1.replace(/\s/g, "");
    cb(null, fileName);
  },
});

const fileTypeFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/webp" ||
    file.mimetype === "image/avif"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Inavlid file type, only jpg, jpeg, png, avif and webp are supported."
      ),
      false
    );
  }
};


const upload = multer({
    storage : storage,
    limits:{
        fieldNameSize: 300,
        fileSize: maxFileSize
    },
    fileFilter: fileTypeFilter
});

module.exports = upload;
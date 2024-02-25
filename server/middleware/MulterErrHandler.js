const multer = require("multer");

const multerErrHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(500).json({ Error: err });
  } else if (err) {
    return res.status(500).json({ Error: err , err: err.message});
  }
  next(err);
};

module.exports = multerErrHandler;

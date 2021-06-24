const express = require('express');
const path = require('path')
const multer = require('multer');
const router = express.Router();

const storageSettings = multer.diskStorage({

    destination: (req, res, cb) => {
        cb(null, "./public")
    },

    filename: (req, file, cb) => {
        cb(null, req.body.textFieldForId)
    }
})

const upload = multer({
    storage: storageSettings
});

router.post('/', upload.single('testfield'), (req, res) => {
    console.log(req.body)
    console.log(req.file);
    res.json({status: 'ok'})
})
    

module.exports = router;
  
const express = require('express');
const router = express.Router();

const about_video = require('../controllers/about-video.controller.js')

router.get('/seeAll', about_video.seeAll);

router.post('/searchVideo', about_video.searchVideo);

router.post('/searchById', about_video.searchById);

router.post('/searchByTitle', about_video.searchByTitle);

router.post('/searchByCreatedDate', about_video.searchByCreatedDate);

router.post('/searchByUpdatedDate', about_video.searchByUpdatedDate);

router.post('/uploadVideo', about_video.uploadVideo);

router.post('/deleteVideo', about_video.deleteVideo);



module.exports = router;


//!ยังไม่ต้องใช้
// const Role = require('../mock/role');
// const authorize = require('../middleware/authorize');
// const abook_Book = require('../controllers/abook-book.controller');

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, __basedir + "/uploads/epub");
//     },
//     // By default, multer removes file extensions so let's add them back
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
//     },
// });
// var upload = multer({ storage: storage });
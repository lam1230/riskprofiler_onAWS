var express = require('express')
var controller = require('../controllers/survey.server.controller')
var router = express.Router();
const upload = require("../middleware/upload");
const multer = require("multer");
const upload1 = multer({ dest: 'uploads/' })
const {uploadFile} = require('../../s3')



router.get('/', controller.showForm);
router.post('/survey', controller.showResult);


router.get('/survey', controller.showForm);

router.get('/uploadPage', function(req, res){
  res.render('uploadPage.ejs');
});


// router.post('/showDiagram', controller.showDiagram);
// router.post('/calculate', controller.calculate);



// router.post('/upload', controller.upload);
router.post('/upload', upload1.single('multi-files'), async function(req, res){
    const result = await uploadFile(req.file)
        console.log(result);
  // const file = req.file;
    // console.log(file);
    upload(req, res),
    res.redirect('/');
  });

module.exports = router;


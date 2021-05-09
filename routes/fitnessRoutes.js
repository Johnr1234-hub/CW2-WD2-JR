const express = require('express');
const router = express.Router();
const controller = require('../controllers/fitnessControllers');

router.get("/", controller.landing_page);

router.get('/exercises', controller.entries_list);

router.get('/new_exercises', controller.show_new_exercise);

router.post('/new_exercises', controller.post_new_exercise);

router.get('/delete/:id', controller.delete_exercise); 



router.use(function(req, res){
    res.status(404);
    res.type('text/plain');
    res.send('404 Not Found');
})

router.use(function(err, req, res, next){
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})

module.exports = router;

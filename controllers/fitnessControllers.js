const fitnessDAO = require('../models/fitnessModel');
const db = new fitnessDAO();


exports.landing_page = function(req, res){
    res.render('home', {
        'title': 'Home Page',
        'message': 'Hello, welcome to the Fitness page. here you will be able to create a training plan that consists of the exercises to be done and how much should be done and also for when it should be done.'
        
    })
    db.init();
    
}

exports.entries_list = function(req, res){
    
    db.getAllEntries().then((list) => {
        res.render('exercises', {
        'title': 'Training Plan',
        'entries': list
        });
        console.log('promise resolved');
        }).catch((err) => {
        console.log('promise rejected', err);
        })}

        exports.delete_exercise = function(req, res){
            console.log('id in delete_exercise', req.params.id);
            db.deleteExercise(req.params.id);
            res.redirect('/exercises')
        }

exports.show_new_exercise = function(req, res) {
    res.render('new_exercises', {
    })
}

exports.post_new_exercise = function(req, res) {
    console.log('processing post-new_exercise controller');
    db.addExercise(req.body.exercise, req.body.requirement, req.body.FinishDate, req.body.author);
    res.redirect('/exercises');
}

exports.server_error = function(err, req, res, next){
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
}
const Datastore = require('nedb');
const nedb = require('nedb'); 

class Fitness {

    constructor (dbFilePath)
    {
        if(dbFilePath)
            {
                this.db = new Datastore({filename:dbFilePath, autoload:true});

            } 
        else
            {
                this.db = new Datastore();
            }
    }

     init() {

        this.db.insert({
            exercise : 'Run',
            requirement : '2 miles',
            FinishDate : '2021-04-11',
            author : 'John',
            published : new Date().toISOString().split('T') [0]
        });

        this.db.insert({
            exercise : 'lift weights',
            requirement : '3 sets, 12 reps',
            FinishDate : '2021-04-11',
            author : 'John',
            published : new Date().toISOString().split('T') [0]
        });

        this.db.insert({
            exercise : 'squats',
            requirement : '3 sets, 30 reps',
            FinishDate : '2021-04-11',
            author : 'John',
            published : new Date().toISOString().split('T') [0]
        });


        console.log('db entry inserted');

     }   

     getAllEntries(){
         return new Promise((resolve, reject) => {
            this.db.find({}, function(err, docs) {
                if(err) {
                    reject(err);
                    console.log('getAllEntries promise rejected');
                } else {
                    resolve(docs);
                    console.log('getAllEntries promise resolved, returned', docs);
                }
            })
         })
     }

     addExercise(exercise, requirement, FinishDate, author){
        var entry = {
            exercise: exercise,
            requirement: requirement,
            FinishDate: FinishDate,
            author: author,
            published: new Date().toISOString().split('T') [0]
        }
        console.log('Exercise created', entry);

        this.db.insert(entry, function(err, doc ){
            if (err) {
                console.log('Error creating exercise');
            }else {
                console.log('Exercise inserted into the database', doc);
            }
        })
    } 

    deleteExercise(id){
        this.db.remove({_id: id}, {}, function(err, rem) {
            if(err) {
                console.log('Could not remove exercise', err);
            }else {
                console.log(rem, 'exercises deleted');
            }
        })
    }
}


module.exports = Fitness;
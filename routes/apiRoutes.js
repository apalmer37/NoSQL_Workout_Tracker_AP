const db = require("../models");
require("mongoose");

module.exports = function(app){

    // use app.get to find all workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).sort({ id: -1 })
        .then(workoutData =>{
        res.json(workoutData);
        })
            .catch(err => {
            res.status(400).json(err);
          });
      });
    


    // use app.get to find the last workout added
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workoutData =>{
        res.json(workoutData);
        })
            .catch(err => {
            res.status(400).json(err);
          });
      });



    // use app.post to create a workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
          .then(workoutData => {
            res.json(workoutData);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });



    // use app.put to add an exercise and update a workout
    // app.put("/markunread/:id", ({ params }, res) => {
    //     db.books.update(
    //       {
    //         _id: mongojs.ObjectId(params.id)
    //       },
    //       {
    //         $set: {
    //           read: false
    //         }
    //       },
      
    //       (error, edited) => {
    //         if (error) {
    //           console.log(error);
    //           res.send(error);
    //         } else {
    //           console.log(edited);
    //           res.send(edited);
    //         }
    //       }
    //     );
    //   });


    

}
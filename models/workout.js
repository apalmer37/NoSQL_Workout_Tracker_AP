const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// WorkoutSchema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
    type: {
        type: String,
        trim: true,
        required: "Exercise is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    duration: {
        type: Number,
        toJSON:{virtuals: true},
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
      }]

    });

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
// ========================================================================
// DEPENDENCIES
// Require mongoose to define the required schema for mongoose and MongoDB 
// ========================================================================
const mongoose = require("mongoose");

// =========================================================================================
// SCHEMA
// Necessary Schema model for mongoose, seeding, and use in CRUD operations against MongoDB 
// =========================================================================================

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Exercise type is required."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Exercise name is required."
                },
                duration: {
                    type: Number,
                    required: "Duration of exercise is required."
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
            }
        ]
    },
    {
        // -----------------------------------------------------------------
        // Because JSON.stringify() calls toJSON() inherently, which cause 
        // mongoose to not include virtuals by default, we must explicitly 
        // set virtuals to true to include the virtual for totalDuration 
        // set below. Refer to https://mongoosejs.com/docs/guide.html#virtuals 
        // for more information on this
        // -----------------------------------------------------------------
        toJSON: {
            virtuals: true
        }
    }
);


// ----------------------------------------------------------------------------------------
// Create a virtual property for the schema to tally duration of exercises.
// Refer to https://mongoosejs.com/docs/guide.html#virtuals for more information on virtuals
// ----------------------------------------------------------------------------------------

// Create virtual called totalDuration based on variable matching in /public/workout.js
WorkoutSchema.virtual("totalDuration").get(function () {
    // set a var called "total"; set initially to "0"
    let total = 0;
    // loop through the exercises in the item and store the tally of durations in the "total" variable
    for (let i = 0; i < this.exercises.length; i++) {
        total += this.exercises[i].duration;
    };
    // then return the "total" to be stored in the virtual property "totalDuration"
    return total;
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

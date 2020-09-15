// ============================================================================
// DEPENDENCIES
// Requiring express, mongoose, and the schema/model to set up the API routes 
// ============================================================================
const express = require("express");
const mongoose = require("mongoose");
const router = require("express").Router();
const Workout = require("../models/workout.js");

// ================================================================================================
// API ROUTES
// Used in the Public AJAX calls to query and deliver MongoDB documents in the workouts collection 
// ================================================================================================

// -------------------------------------------------
// used in /public/api.js function getLastWorkout()
// -------------------------------------------------
router.get("/api/workouts", (req, res) => {
    // find all workouts in the MongoDB collection...
    Workout.find({})
        .then(dbWorkout => {
            // then return the results
            res.json(dbWorkout);
        })
        .catch(err => {
            // and catch the error, returning a status of 400 and providing the error
            res.status(400).json(err);
        });
});

// -----------------------------------------------------
// used in /public/api.js function getWorkoutsInRange()
// -----------------------------------------------------
router.get("/api/workouts/range", (req, res) => {
    // find all workouts in the MongoDB collection...
    Workout.find({})
        .then(dbWorkout => {
            // then return the result
            res.json(dbWorkout);
        })
        .catch(err => {
            // and catch the error, returning a status of 400 and providing the error
            res.status(400).json(err);
        });
});

// ----------------------------------------------
// used in /public/api.js function addExercise()
// ----------------------------------------------
router.put("/api/workouts/:id", (req, res) => {
    // Update the one document in the collection...
    Workout.update(
        // ...when the default Mongo id parameter matches the current workout...
        { "_id": req.params.id },
        // ...by pushing all the exercises in the request body to to the exercises array key...
        { $push: { exercises: [req.body] } }
    )
        .then(dbExercise => {
            // then return the result
            res.json(dbExercise);
        })
        .catch(err => {
            // and catch the error, returning a status of 400 and providing the error
            res.status(400).json(err);
        });
});

// ------------------------------------------------
// used in /public/api.js function createWorkout()
// ------------------------------------------------
router.post("/api/workouts/", (req, res) => {
    // Create a new document in the workouts collection with the entire request body
    Workout.create(req.body)
        .then(dbWorkout => {
            // then return the result
            res.json(dbWorkout);
        })
        .catch(err => {
            // and catch the error, returning a status of 400 and providing the error
            res.status(400).json(err);
        });
});



module.exports = router;
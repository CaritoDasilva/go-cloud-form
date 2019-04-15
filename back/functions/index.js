const functions = require('firebase-functions');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const Students = require('./students');

const { username, password } = functions.config().mongo;
const mongouri = `mongodb+srv://${username}:${password}@cluster0-yfii8.mongodb.net/test?retryWrites=true`

const mongooseConfig = { useNewUrlParser: true };
mongoose.connect(mongouri, mongooseConfig)

const createServer = () => {
    app.use(cors({ origin: true }))

    app.get('/students', async (req, res) => {
        const result = await Students.find({}).exec()

        res.send(result)
    })

    app.post('/students', async (req, res) => {
        const { body } = req
        const student = new Students(JSON.parse(body));
        await student.save()
        res.send(student._id)
    })

    app.get('/students/:id/daralta', async (req, res) => {
        const { id } = req.params
        await Students.deleteOne({ _id: id }).exec()
        res.send(204)
    })

    return app
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.api = functions.https.onRequest((createServer()));

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    studentId: String,
    teacherId: String,
    time: Number,
    feedback: {
      rating: Number,
      comment: String,
    },
});

module.exports = mongoose.model('Session', sessionSchema);

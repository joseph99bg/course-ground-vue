var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId } = Schema.Types;

var courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  author: {
    type: ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  users: [{ type: ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Course', courseSchema)
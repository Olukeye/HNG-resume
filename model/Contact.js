const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String,
    required: true,
    unique: true
  },

  message: {
    type: String
  }
},

{timestamps: true});

Contact =  mongoose.model('contact', ContactSchema);
module.exports = Contact;
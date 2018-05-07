const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
<<<<<<< HEAD
<<<<<<< HEAD
    laguage: { type: String, required: true },
=======
    language: { type: String, required: true },
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
=======
    language: { type: String, required: true },
>>>>>>> ab6dd8eb3a392a169cc7d6e4f8ac1fd9dc000cf4
    code: { type: String, required: true }
});

const Language = mongoose.model("Language", languageSchema);

module.exports = Language;
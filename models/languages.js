const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
<<<<<<< HEAD
    laguage: { type: String, required: true },
=======
    language: { type: String, required: true },
>>>>>>> d5b3c3cf6a21ebe211c58fe6eca84ffdc7e7ffde
    code: { type: String, required: true }
});

const Language = mongoose.model("Language", languageSchema);

module.exports = Language;
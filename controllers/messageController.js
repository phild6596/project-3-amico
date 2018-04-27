const firebaseAdmin = require("../utils/firebaseAdmin.js");
const moment = require("moment");
const momentTimezone = require("moment-timezone");
const Translator = require("../utils/translate.js");

const MessageController = {
    createNewMessage: function (data) {
        const Message = {messageText: data};
        return Message;
    },
    translateMessage(message, nativeLanguage, studiedlanguage, callback) {
    Translator(message, nativeLanguage, studiedlanguage, callback);
}
}



module.exports = MessageController;
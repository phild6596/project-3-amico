const translate = require("google-translate-api");
var db = require("../models");

let languages = [];

function getLanguages() {
  db.amico_languages.findAll({}).then(function(dbamico_languages) {
    console.log(dbamico_languages);
  });
};
getLanguages();


const amicosTranslate = function (message, languageOne, languageTwo, callback) {

translate(message, { from: languageOne, to: languageTwo })
  .then(res => {
    // console.log(res.from.text.value);
    // console.log(res.from.text.autoCorrected);
    // console.log(res.text);
    // console.log(res.from.text.didYouMean);
    const translated = {
        originalMessage: message,
        autoCorrectedMessage: res.from.text.value,
        correctedMessage: res.from.text.autoCorrected,
        dymMessage: res.from.text.didYouMean,
        translatedMessage: res.text,
    }
    for (finalMessage in translated) {
      // console.log("for in loop: ",translated[finalMessage]);
    }
    // console.log("The console says: ", translated);
    callback(translated);
    
  })
  .catch(err => {
    console.error(err);
  });
}



module.exports = amicosTranslate;
import translate from "google-translate-api";
import axios from "axios";
import MessageController from "./topicController";

const amicosTranslate = (topic, nativeLanguage, studiedLanguage, callback) => {
    axios.post("/topic", (req, res) => {
        const topicText = MessageController.createNewMessage(req.body.topicText)
        const translatedMessage = MessageController.translateMessage(topicText.messageText, "en", "es", (data) => {
            res.send(data);
        })
    });
    // translate(topic, { from: nativeLanguage, to: studiedLanguage})
    // .then(res => {
    //     const translated = {
    //         originalTopic: topic,
    //         autoCorrection: res.from.text.value,
    //         correctedMessage: res.from.text.autoCorrected,
    //         didYouMean: res.from.text.didYouMean,
    //         translation: res.text
    //     }
    //     callback(translated)
    // })
    // .catch(err => {
    //     console.log("topicTranslate error, ", err);
    // })
}

export default amicosTranslate;


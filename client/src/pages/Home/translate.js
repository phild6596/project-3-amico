
import translate from 'google-translate-api';

const amicosTranslate = (topic, nativeLanguage, studiedLanguage, callback) => {
    translate (topic, { from: nativeLanguage, to: studiedLanguage })
    .then(res => {
        const translated = {
            originalTopic: topic,
            autoCorrection: res.from.text.value,
            correctedMessage: res.from.text.autoCorrected,
            didYouMean: res.from.text.didYouMean,
            translation: res.text
        }
        callback(translated)
    })
    .catch(err => {
        console.log("topicTranslate error, ", err);
    })
}
export default translate;
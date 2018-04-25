

// Routes
// =============================================================


  
  
// const languageOne = Object.keys(languages);
// //console.log(languageOne);

for (languageTwo in languages) {
    //console.log(languages[languageTwo]);
    nativeLanguage = '<option>' + languageTwo + '</option>';
    studiedLanguage = '<option>' + languages[languageTwo] + '</option>';
    $(nativeLanguage).html("#native-language");
   $("#native-language").appendTo(nativeLanguage);
    console.log(nativeLanguage);
    console.log(studiedLanguage);
}


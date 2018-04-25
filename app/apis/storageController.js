const GCS = require('./storageAdmin.js');

const bucket = GCS.bucket('project-amico.appspot.com');

const StorageController = {

	uploadAvatar : function(filepath,callback){
		const fileName = 'avatar.jpg';
		bucket.upload(filepath,{destination:'users/'+fileName}, function(err,file){
			if(!err){
				console.log('SUCCESS UPLOAD');

				callback(true);
			}
			else{
				console.log('FAIL GCS');
				console.log(err.stack);
				callback('ERROR: ' + err);
			}


		})
	},
}


module.exports = StorageController;
/*
var fileName = 'photo.jpg';
var localFilename = './photo.jpg';
bucket.upload(localFilename,{destination : 'users/' + fileName}, function(err, file) {
  if (!err) {
    console.log(localFilename + ' has been uploaded');
  } else {
    console.log('Error uploading file: ' + err);
  }
});
*/
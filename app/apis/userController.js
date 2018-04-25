const firebaseAdmin = require('./firebaseAdmin.js');
const UserController = {

	//Use when returning data from a query
	createUser : function(data){
		const placeholderUrl = 'https://c1.staticflickr.com/6/5002/5281086000_a1b124db59_z.jpg'
		const User = {
			uid : data.uid,
			displayName : data.displayName,
			//email : data.email,
			bio : data.bio,
			avatarUrl : data.avatarUrl != null && data.avatarUrl != undefined ? data.avatarUrl : placeholderUrl,
			createdAt : data.createdAt,
		}

		return User;
	},
	//Use when inserting a new user into FB
	createNewUser : function(uid,data){
		const User = {
			uid : uid,
			displayName : data.displayName,
			//email : data.email,
			bio : data.bio,
			avatarUrl : data.photoURL,

		}
		return User;
	},

	getGoogleUser : function(uid, success){
		firebaseAdmin.auth().getUser(uid)
		 .then(function(userRecord) {
		    // See the UserRecord reference doc for the contents of userRecord.
		    //console.log("Successfully fetched user data:", userRecord);
		    if(success != null && success != undefined){
		    	success(userRecord);
		    }
		    
		})
		.catch(function(error) {
			console.log("Error fetching user data:", error);
			return false;
		});
	},



	
	insertUser: function(User, callback){
		

		const UserController = this;
		const placeholderUrl = 'https://c1.staticflickr.com/6/5002/5281086000_a1b124db59_z.jpg'
			firebaseAdmin.database().ref('users/' + User.uid).set({
				uid : User.uid,
				//email : User.email,
				displayName : User.displayName,
				avatarUrl : User.avatarUrl != undefined && User.avatarUrl != null? User.avatarUrl : placeholderUrl,
				createdAt : firebaseAdmin.database.ServerValue.TIMESTAMP
			}).then(function(){

				callback(UserController.getGoogleUser(User.uid));

			});


		
	},
	//just testing
	getUser : function(uid,callback){
			const UserController = this;
				const db = firebaseAdmin.database();
				const ref = db.ref("users/" + uid);
				ref.once("value", function(snapshot) {
				  //console.log(snapshot.val());
				  if(!snapshot.val())
				  {
				  	UserController.getGoogleUser(uid,function(user){
						const newUser = UserController.createNewUser(uid,user);
					  	UserController.insertUser(newUser,callback);
					  });
				  }
				  else{
				  	callback(snapshot.val());
				  }
				  

				});	
	},
	getRecentUsers : function(callback){
		const UserController = this;
		const db = firebaseAdmin.database();
		const ref = db.ref("users/").orderByChild('createdAt').limitToFirst(5);
			ref.once("value", function(snapshot) {
				 
				 const userSnapshot = snapshot.val();
				 const Users = [];
				 for(user in userSnapshot){
				 	Users.push(UserController.createUser(userSnapshot[user]));		
				 }
				 console.log(Users);
				callback(Users);
			});
				  

	},

	setAvatarUrl : function(uid,url){
		const UserController = this;

		UserController.getUser(uid,function(data){
			const user = data;

			user.avatarUrl = ''
			//console.log(user);
			const userRef = firebaseAdmin.database().ref('/users/'+uid);
			userRef.update()
		})
	},
	//success is a callback that performs whatever action for the logged in user
	validateIdToken : function(idToken,success){
		try{

			firebaseAdmin.auth().verifyIdToken(idToken)
	  		.then(function(decodedToken) {
	    		const uid = decodedToken.uid;
	    		console.log('Validated Token for UID: ' + uid);
	    		success(uid);
	    		return true;
	  		}).catch(function(error) {
	     		console.log('ERROR DURING VALIDATION');
	     		console.log(error.message);
	     		return false;
	     	});
		}
	
		catch(error){
			console.log(new Error('Error during token validation'));
			console.log(error.message);
			return error.message;
		}

	},

	//setProfilePhoto()

}

module.exports = UserController;


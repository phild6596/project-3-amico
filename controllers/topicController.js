	const firebaseAdmin = require('../utils/firebaseAdmin.js');

	const moment = require('moment');
	const momentTimezone = require('moment-timezone');

	const TopicController = {

		 createTopic:function(data){
			const Topic = {
				topicId : data.topicId,
				text : data.text,
				authorName : data.authorName,
				authorId : data.authorId,
				authorAvatarUrl : data.authorAvatarUrl,
				timestamp : data.timestamp,
				comments : data.comments,
			}
			return Topic;
		},
		createNewTopic:function(uid,text,callback){

			if(!text){
				return;
			}
			const  userRef = firebaseAdmin.database().ref("users/" + uid);
				userRef.once("value").then(function(snapshot) {
					
					const User = snapshot.val();
			
					const Topic = {
						text : text,
						authorName : User.displayName,
						authorId : User.uid,
						authorAvatarUrl : User.avatarUrl,
					}
					callback(Topic);
				})

			
			
		},
		insertTopic : (topic)=>{
			console.log('TOPIC V2: ' + topic);
			const topicRef = firebaseAdmin.database().ref('topics/');
			//revisit this
			//we want the node ID to be the topic ID before insert
			const pushRef = topicRef.push();
			   topicRef.push({
			   authorName : topic.authorName,
			   authorId : topic.authorId,
			   text : topic.text,
			   authorAvatarUrl : topic.authorAvatarUrl,
			   timestamp : firebaseAdmin.database.ServerValue.TIMESTAMP,
			   
		   });

		},
		
		getTopics : function(desiredLanguage, callback){
			const TopicController = this;

	      	const queryTopicOwners = firebaseAdmin.database().ref("topics").orderByChild('timestamp');
	      	queryTopicOwners.once("value", function(snapshot) {
				const topics = [];
				snapshot.forEach(function(child) {
					//console.log(child.key+': '+child.val());
					topics.unshift(TopicController.createTopic(child.val()));
				});

				callback(topics);
			});
			

	        	/*.then(function(snapshot) {
					const topicSnapshots = snapshot.val();
					let topics = [];
					topicSnaphots.forEach((topic)=>{
						console.log(topic);
						//topics.push(TopicController.createNewTopic(topic));
					})
					/*for(key in topicSnapshots){
						const topic = topicSnapshots[key];
						topics.push(TopicController.createTopic(topic));
					}
					
					callback(topics)
				}).catch((error)=>{
					callback(error);
				});*/
	      		
	    },
		
	}


module.exports = TopicController;
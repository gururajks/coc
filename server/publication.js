if(Meteor.isServer) {
	Meteor.publish('users' , function() {
		return Meteor.users.find({});
	});
	
	Meteor.publish('war' , function() {
		return War.find({});
	});
}

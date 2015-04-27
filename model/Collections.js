Members = new Mongo.Collection("members");

Meteor.methods({
	insertProfile : function(email) {
		Members.insert(
			{
				email : email
			}
		);
	},
	updateProfile : function(member) {
		
	}
});

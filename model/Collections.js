Members = new Mongo.Collection("members");


Meteor.methods({
	insertProfile : function(email) {
		Members.insert(
			{
				email : email
			}
		);
	},
	updateProfile : function(email, phone) {
		var userId = Meteor.userId();
		return Meteor.users().update({_id: userId}, {$set : {phone : phone}});
	}
});

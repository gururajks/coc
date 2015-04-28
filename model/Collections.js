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
		var writeResults = Meteor.users().update({_id: userId}, 
			{$set : 
				{
					profile : {						
						phone : phone
						}
				}
			});
		if(writeResults["nMatched"] == 1 && writeResults["nModified"] == 1 )
		{
			toastr.success("Profile updated");
		}
		else
		{
			toastr.error("Profile failed to update");
		}
	}
});

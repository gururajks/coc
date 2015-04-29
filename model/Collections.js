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
		var userId = Meteor.userId();
		var writeResults = Meteor.users.update({_id: userId}, 
			{$set : 
				{
					profile : {					
								memberName	: member.memberName,
								clanName 	: member.clanName,									
								phone 		: member.phone,
								xp			: member.xp,
								trophyCount	: member.trophyCount
							  }
				}
			});
		return writeResults;
	}
});

War = new Mongo.Collection("war");

Meteor.methods({
	insertProfile : function(email) {
		
		
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
								trophyCount	: member.trophyCount,
								troopLvl 	: member.troopLvl
							  }
				}
			});
		return writeResults;
	},
	updateWarData : function(warData) {
		var writeResults = War.insert({
			warData   : warData,
			createdAt : new Date()
		});
		return writeResults;
	}
});

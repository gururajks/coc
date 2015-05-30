War = new Mongo.Collection("war");

Booking = new Mongo.Collection("booking");

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
	},
	updateBookingData : function(clanName, opponentBaseName, opponentBaseNo, opponentName) {		
		var writeResults = Booking.insert({
			clanName 				: clanName, 
			opponentBaseName		: opponentBaseName,
			opponentBaseNo			: opponentBaseNo,
			opponentName			: opponentName,
			createdAt				: new Date()
		});
		
		return writeResults;
	},
	getBookingsCount : function() {
		var clanName = Meteor.user().profile.clanName;
		var bookings = Booking.find({clanName : clanName});
		return bookings.count();
	}
});

if(Meteor.isClient) {
	Meteor.subscribe("war");
	Meteor.subscribe("booking");
	Template.war.helpers({
		wars : function() {
			return War.find({}, {warData : 1 , _id : 0} , { sort : {createdAt: -1}});
		},
		won : function(ourScore , opponentScore) {			
			if(ourScore > opponentScore) {
				return true;
			} 
			else {
				return false;
			}
		},
		bookings : function() {
			return Booking.find({}, {_id : 0}, {sort : {createdAt : -1 }});
		},
		remove : function(clanName) {
			var cu_clanName = Meteor.user().profile.clanName;
			if(cu_clanName == clanName) {
				return true;
			}	
			else 
				false;
		}		
	});
	
	Template.war.events({
		"submit .warForm" : function(e,t) {
			e.preventDefault();
			var opponentName = t.find("#opponentName").value;
			var opponentScore = t.find("#opponentScore").value;
			var ourScore = t.find("#ourScore").value;
			var warData = {
				opponentName  : opponentName,
				opponentScore : opponentScore,
				ourScore	  : ourScore 
			};
			
			Meteor.call("updateWarData", warData, function(err, writeResults) {
				if(writeResults == 0)
				{
					toastr.error("War Data failed to update", "Error");
				}		
			});
		},
		"click .logout" : function(){
			Meteor.logout(function() {
				toastr.success("Logged Out");
			});
		},
		"submit .bookingForm" : function(e, t) {
			e.preventDefault();
			var opponentBaseName = t.find("#opponentBaseName").value;
			var opponentBaseNo = t.find("#opponentBaseNo").value;
			var clanName = Meteor.user().profile.clanName;
			var opponentName = "";
			Meteor.call("updateBookingData", clanName, opponentBaseName, opponentBaseNo, opponentName, function(err, writeResults) {				
				if(writeResults == 0)
				{
					toastr.error("Booking Data failed to update", "Error");
				}		
			});
		},
		"click .delete" : function() {
			Booking.remove({_id : this._id});
		}
	});
	
	
}

if(Meteor.isClient) {
	Meteor.subscribe("war");
	Template.war.helpers({
		wars : function() {
			return War.find({}, {warData : 1 , _id : 0} , { sort : {createdAt: -1}});
		},
		won : function(ourScore , opponentScore) {			
			if(ourScore > opponentScore) {
				console.log(ourScore);
				console.log(opponentScore);
				return true;
			} 
			else {
				console.log("false:" + ourScore); 
				console.log(opponentScore);
				return false;
			}
		}
		
	});
	
	Template.war.events({
		"submit" : function(e,t) {
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
		}
	});
	
	
}

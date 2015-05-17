if(Meteor.isClient) {
	Meteor.subscribe("war");
	Template.war.helpers({
		wars : function() {
			/*var war = War.find({}, {warData : 1 } , { sort : {createdAt: -1}});
			
			war.forEach(function(warData) {
				console.log(waData.opponentName);
			});*/
			return War.find({}, {warData : 1 , _id : 0} , { sort : {createdAt: -1}});
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

if(Meteor.isClient) {
	Template.dashboard.helpers({
		username:function(){			
			return Meteor.user().emails[0].address;
		}
	});
	
	Template.dashboard.events({
		"click .logout" : function(){
			Meteor.logout(function() {
				toastr.success("Logged Out");
			});
		}
	});
}



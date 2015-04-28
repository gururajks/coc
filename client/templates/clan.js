if(Meteor.isClient) {
	Meteor.subscribe("users");
	
	Template.clan.helpers({
		emails : function() {
			var users = Meteor.users.find({}, {emails : 1});
			var email = [];
			users.forEach(function(user){			
				email.push({address : user.emails[0].address});				
			});
			return email;
		}
	});
	
}

if(Meteor.isClient) {
	
	Template.clan.helpers({
		emails : function() {
			var users = Meteor.users.find({}, {emails : 1});
			var email = [];
			users.forEach(function(user){				
				for(var x in user.emails)
				{
					var obj = user.emails[x];
					email.push({address : obj.address});
				}
			});
		
			return email;
		}
	});
	
}

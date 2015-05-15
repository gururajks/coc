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
		},
		
		name : function() {
			console.log(Session.get('clickedItem'));
			var user = Meteor.users.find({ emails : { $elemMatch : { address : Session.get('clickedItem')}}});
			return user.email;
		}
	});	
	
	Template.clan.events({
		"click" : function(e, t) {
			e.preventDefault();
			Session.set('clickedItem', e.currentTarget.id);
		}
	});
}

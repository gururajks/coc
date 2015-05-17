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
		
		cEmail : function() {
			return Session.get('clickedItem');	
		},
		
		name : function() {
			var user = Meteor.users.findOne({ 'emails.address' : Session.get('clickedItem')});
			if(user && user.profile)
				return (user.profile.memberName);
			else 
				return (Meteor.user().profile.memberName);
		},
		
		trophyCount : function() {
			var user = Meteor.users.findOne({ 'emails.address' : Session.get('clickedItem')});
			if(user && user.profile)
				return (user.profile.trophyCount);
			else 
				return (Meteor.user().profile.trophyCount);
		},
		
		xp : function() {
			var user = Meteor.users.findOne({ 'emails.address' : Session.get('clickedItem')});
			if(user && user.profile)
				return (user.profile.xp);
			else 
				return (Meteor.user().profile.xp);
		},
		
		phone : function() {
			var user = Meteor.users.findOne({ 'emails.address' : Session.get('clickedItem')});
			if(user && user.profile)
				return (user.profile.phone);
			else 
				return (Meteor.user().profile.phone);
		},
		
		cName : function() {
			var user = Meteor.users.findOne({ 'emails.address' : Session.get('clickedItem')});
			if(user && user.profile)
				return (user.profile.clanName);
			else 
				return (Meteor.user().profile.clanName);
		}
	});
		
	Template.clan.events({
		"click .logout" : function(){
			Meteor.logout(function() {
				toastr.success("Logged Out");
			});
		},
		"click .memberButton" : function(e, t) {
			e.preventDefault();
			Session.set('clickedItem', e.currentTarget.id);
		}
	});
}

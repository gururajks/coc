if(Meteor.isClient) {
	
	Template.clan.helpers({
		members : function() {
			return Members.find({});
		}
	});
	
}

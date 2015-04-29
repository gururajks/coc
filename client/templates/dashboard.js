if(Meteor.isClient) {
	Template.dashboard.helpers({
		username:function(){			
			return Meteor.user().emails[0].address;
		},
		phone : function() {
			return Meteor.user().profile.phone;
		}, 
		memberName : function() {
			return Meteor.user().profile.memberName;
		},
		clanName : function() {
			return Meteor.user().profile.clanName;
		},
		trophyCount : function(range) {
			if( Meteor.user().profile.trophyCount == range) {
				return "selected";
			} 
		},
		xp : function(range) {
			if( Meteor.user().profile.xp == range) {
				return "selected";
			} 
		},
		xpRange : [
			{range : "40-59"},
			{range : "60-79"},
			{range : "80-99"},
			{range : "100-119"},
			{range : "120-139"}
		],
		trophyCountRange : [
			{range : "1000-1199"},
			{range : "1200-1399"},
			{range : "1400-1599"},
			{range : "1600-1799"},
			{range : "1800-1999"},
			{range : "2000-2199"},
			{range : "2200-2399"}
		],
		troops : {
			units : [
				{unit : "Archers"}, 
				{unit : "Barbarians"},
				{unit : "Giants"},
				{unit : "Pekka"},
				{unit : "Wizards"},
				{unit : "Goblin"},
				{unit : "Dragon"},
				{unit : "Ballons"}, 
				{unit : "Wall Breakers"} 				
			],
			darkUnits : [
				{unit : "Minion"}, 
				{unit : "Hogs"},
				{unit : "Valkyrie"},
				{unit : "Golem"},
				{unit : "Witch"},
				{unit : "Lava Hound"}	
			],
			spells : [
				{unit : "Lightning"}, 
				{unit : "Healing"},
				{unit : "Rage"},  
				{unit : "Jump"},
				{unit : "Freeze"} 
			],
			indices : [
				{index : 1},
				{index : 2},
				{index : 3},
				{index : 4},
				{index : 5},
				{index : 6},
				{index : 7}
			]
		}
		
	});
	
	Template.dashboard.events({
		"click .logout" : function(){
			Meteor.logout(function() {
				toastr.success("Logged Out");
			});
		},
		"submit form" : function(e,t) {
			e.preventDefault();
			var phone = t.find("#phone").value;
			var email = t.find("#email").value;
			var memberName = t.find("#memberName").value;
			var clanName = t.find("#clanName").value;
			var xp = t.find("#xp option:selected").text;
			var trophyCount = t.find("#trophyCount option:selected").text;
			var member = {
				memberName 	 : 	memberName,
				clanName 	 : 	clanName,
				email 	 	 : 	email,
				phone 	 	 : 	phone,
				xp		 	 :  xp,	
				trophyCount  :  trophyCount			
			};
			Meteor.call("updateProfile", member, function(err, writeResults) {
					if(writeResults == 1)
					{
						toastr.success("Profile updated", "Success");
					}
					else
					{
						toastr.error("Profile failed to update", "Error");
					}		
			});
		}
		
	});
}



if(Meteor.isClient) {
	Template.dashboard.helpers({
		username:function(){			
			return Meteor.user().emails[0].address;
		},
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
		"submit #profilesubmit" : function(e,t) {
			
		}
		
	});
}



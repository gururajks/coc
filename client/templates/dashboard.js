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
		}
	});
}



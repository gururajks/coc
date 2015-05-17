//Router code


Router.map( function () {
	this.route('main' , {
		path: "/"
	});
	this.route('login', {
		path: "/login"
	});
  	this.route('forgotpassword', {
  		path : "/forgotpassword"  
	});
	this.route('dashboard', {
  		path : "/dashboard"  
	});
	this.route('signup', {
  		path : "/signup"  
	});
	this.route('warPage', {
  		path : "/war"  
	});
	this.route('clanPage', {
  		path : "/clanPage"  
	});
	
});	
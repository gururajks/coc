//Router code


Router.map( function () {
	this.route('main' , {
		path: "/"
	});
	this.route('login', {
		path: "/login.html"
	});
  	this.route('forgotpassword', {
  		path : "/forgotpassword.html"  
	});
	this.route('dashboard', {
  		path : "/dashboard.html"  
	});
	this.route('signup', {
  		path : "/signup.html"  
	});
	
});	
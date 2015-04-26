if(Meteor.isClient) {
	Template.signup.events({
		'submit' : function(e, t){
			e.preventDefault();
			var email = t.find("#inputEmail3").value;
			var password = t.find("#inputPassword3").value;
			
			//check if both password is confirmed
			var confirmPassword = t.find("#inputPassword4").value;
			
			if(password != confirmPassword)
			{
	      		toastr.error('Password does not match', "ERRNO!");
				return false;
			}
			else 
			{
				Accounts.createUser({
					email: email,
					password: password
				}, function(err) {
					if(err)
					{
						toastr.error('Account not created', "Failed");
					}
					else
					{
						toastr.success('Account created', "Success");
						Router.go('/');
					}
				});
			}
			
			return false;
			
		}
	});
	
  	

}

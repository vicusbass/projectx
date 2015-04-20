Template.login.events({
	'submit form': function (event, template) {
		event.preventDefault();
		var email=template.find('#email').value;
		var password=template.find('#password').value;
		Meteor.loginWithPassword(email,password,function(Error){
			if (!Error){
				console.log("I just logged in");
				if (Roles.userIsInRole(Meteor.user(),["superadmin"])){
					Router.go("/dashboard")
				} else{

				}
			}
			else {
				console.log("Some shit happened");	
			}
		});
	}
});

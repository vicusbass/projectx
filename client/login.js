Template.login.events({
	'submit form': function (event, template) {
		event.preventDefault();
		var email=template.find('#email').value;
		var password=template.find('#password').value;
		Meteor.loginWithPassword(email,password,function(Error){
			if (!Error){
				console.log("I just logged in");
				Router.go("/dashboard");
			}
			else {
				console.log("Some shit happened");	
			}
		});
	}
});

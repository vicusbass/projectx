Template.login.events({
	'submit form': function(event, template) {
		event.preventDefault();
		var email = template.find('#email').value;
		var password = template.find('#password').value;
		Meteor.loginWithPassword(email, password, function(Error) {
			if (!Error) {
				console.log("I just logged in");
				if (Roles.userIsInRole(Meteor.user(), ["superadmin"])) {
					console.log("Got a superadmin here");
					Router.go("/admin")
				} else {
					//TODO route to corresponding page
				}
			} else {
				console.log(Error);
			}
		});
	}
});
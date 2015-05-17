Template.login.events({
	'submit form': function(event, template) {
		event.preventDefault();
		var email = template.find('#email').value;
		var password = template.find('#password').value;
		Meteor.loginWithPassword(email, password, function(Error) {
			if (!Error) {
				if (Roles.userIsInRole(Meteor.user(), [SUPERADMIN])) {
					Router.go("AdminClients")
				} else {
					//TODO route to corresponding page
				}
			} else {
				console.log(Error.error);
			}
		});
	}
});

Template.adminmenu.events({
	'click a': function(event, template) {
		event.preventDefault();
		if (!Roles.userIsInRole(Meteor.user(), ["superadmin"])) {
			throw new Meteor.Error(403, "Access denied")
		} else {
			//TODO throw auth error
		}
	}
});

Template.adminmenu.events({
	'click a#clients': function(event, template) {
		event.preventDefault();
		if (Roles.userIsInRole(Meteor.user(), ["superadmin"])) {
			Router.go("/admin/clients")
		} else {
			//TODO throw auth error
		}
	}
});

Template.adminmenu.events({
	'click a#users': function(event, template) {
		event.preventDefault();
		if (Roles.userIsInRole(Meteor.user(), ["superadmin"])) {
			Router.go("/admin/users")
		} else {
			//TODO throw auth error
		}
	}
});

Template.applayout.events({
	'click .logout': function (event) {
		event.preventDefault();
		Meteor.logout();
	}
});
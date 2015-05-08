//helper method for permissions on operations
isSuperadmin = function() {
	return Meteor.user() && Roles.userIsInRole(Meteor.user(), [SUPERADMIN]);
}
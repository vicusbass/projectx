//helper method for permissions on operations
isSuperadmin = function(userId) {
	var user = Users.findOne({
		_id: this.userId
	});
	return userId && Roles.userIsInRole(user, [SUPERADMIN]);
}
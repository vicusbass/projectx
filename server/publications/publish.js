//publish roles
Meteor.publish(null, function() {
	return Meteor.roles.find({})
});

//publish users
Meteor.publish('AdminUsers', function() {
	if (this.userId) {
		var user = Users.findOne({
			_id: this.userId
		});

		if (Roles.userIsInRole(user, [SUPERADMIN])) {
			return Users.find({}, {
				fields: {
					emails: 1,
					profile: 1,
					roles: 1
				}
			});
		}
	} else {
		this.ready();
	}
});

//publish single user by _id
Meteor.publish('SingleUser', function publishFunction(id) {
	check(id, String);
	return Meteor.users.find({
		_id: id
	});
});
//publish roles
Meteor.publish(null, function() {
	return Meteor.roles.find({})
});

//publish users
Meteor.publish('AdminUsers', function() {
		if (Roles.userIsInRole(this.userId, [SUPERADMIN])) {
			return Users.find({}, {
				fields: {
					emails: 1,
					profile: 1,
					roles: 1
				}
			});
		}
	 else {
		this.ready();
	}
});

//publish single user by _id
Meteor.publish('SingleUser', function publishFunction(id) {
	check(id, String);
  if (Roles.userIsInRole(this.userId, [SUPERADMIN, ADMIN])) {
	return Meteor.users.find({
		_id: id
	},{
				fields: {
					emails: 1,
					profile: 1,
					roles: 1
				}
			});
}
});
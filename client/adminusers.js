Template.adminusers.helpers({
	usersCol: function() {
		return Meteor.users;
	},
	settings: function() {
		return {
			rowsPerPage: 10,
			showFilter: true,
			fields: [{
				key: 'profile.lastname',
				label: 'Last name'
			}, {
				key: 'profile.firstname',
				label: 'First name'
			}, {
				key: 'roles',
				label: 'Role'
			}, {
				key: 'emails.0.address',
				label: 'Email'
			}, {
				key: 'edit',
				label: '',
				sortable: false,
				fn: function() {
					var html = '<button class="btn btn-info btn-xs" data-toggle="modal" data-target="#editUser" type="button"><i class="fa fa-paste"></i> Edit</button>'
					return new Spacebars.SafeString(html);
				}
			}]

		};
	}
});
//aci deschidem un modal pentru editat userul
Template.adminusers.events({
	'click tr': function(e) {
		if ($(e.target).hasClass('btn')) {
			var cust = this;
			e.preventDefault();
			console.log('Customer ID: ' + cust._id);
		}
	}
});
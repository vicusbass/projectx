Template.adminusers.helpers({
	usersCol: function() {
		return Meteor.users;
	},
	settings: function() {
		//var buttons = '<button class="btn btn-info btn-xs" data-toggle="modal" data-target="#editUser" type="button"><i class="fa fa-paste"></i> Edit</button><button class="btn btn-xs btn-danger" type="button"><i class="fa fa-trash-o"></i> <span class="bold">Delete</span></button>';
		var buttons = '<button class="btn btn-info btn-xs" data-toggle="modal" type="button"><i class="fa fa-paste"></i> Edit</button><button class="btn btn-xs btn-danger" type="button"><i class="fa fa-trash-o"></i> <span class="bold">Delete</span></button>';
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
					var html = buttons;
					return new Spacebars.SafeString(html);
				}
			}]

		};
	}
});
//aci deschidem un modal pentru editat userul
//TODO add event for Close button to cleanup Session variable selectedUserId
Template.adminusers.events({
	'click tr': function(e) {
		if ($(e.target).hasClass('btn')) {
			var user = this;
			e.preventDefault();
			Session.set('selectedUserId', user._id);
			$("#editUser").modal("show");
		}
	}
});
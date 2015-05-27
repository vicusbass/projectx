var getEditedUser = function() {
	var userId = Session.get('selectedUserId'),
		user = Meteor.users.findOne({
			_id: userId
		})
	return user;
};

Template.ModalEditUser.helpers({
	user: getEditedUser
});

Template.ModalEditUser.events({
	'click #saveEditUser': function(event, template) {
		event.preventDefault();
		var user = getEditedUser();
		var firstname = template.find('#firstname').value;
		var lastname = template.find('#lastname').value;
		firstname = (firstname) ? firstname : user.profile.firstname;
		lastname = (lastname) ? lastname : user.profile.lastname;
		swal({
				title: "Are you sure?",
				text: "This will update user's details!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, update it!"
			},
			function() {
				var userId = Session.get('selectedUserId')
        Meteor.call('updateUser', userId, {profile:{firstname:firstname,lastname:lastname}},function(err, result) {
					if (err) console.log(err)
				});
				$("#editUserForm")[0].reset();
				$("#editUser").modal("hide");
			});
		toastr.success('User updated succesfully');
	},
	'click #cancelEditUser': function(event, template) {
		event.preventDefault();
		$("#editUserForm")[0].reset();
	}
});

Template.ModalEditUser.onCreated(function () {
  console.log("Created modal template");
});

Template.ModalEditUser.onDestroyed(function () {
  console.log("Destroyed modal template");
});


// Template.ModalEditClient.rendered = function() {
// 	var userId = Session.get('selectedUserId');
// 	if (!userId) return;
// 	console.log("USer id " + userId);
// 	var user = Meteor.users.findOne({
// 		"_id": userId
// 	});
// 	if (!user) return;
// 	console.log("USer id " + user);
// };
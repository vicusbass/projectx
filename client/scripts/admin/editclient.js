var getEditedUser = function() {
	var userId = Session.get('selectedUserId'),
		user = Meteor.users.findOne({
			_id: userId
		})
	return user;
};

Template.ModalEditClient.helpers({
	user: getEditedUser
});

Template.ModalEditClient.events({
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
				Meteor.call('updateUser', userId, firstname, lastname, function(err, result) {
					if (err) console.log(err)
				});
				$("#editUser").modal("hide");
			});
	}
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
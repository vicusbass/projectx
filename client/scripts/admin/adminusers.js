//aci deschidem un modal pentru editat userul
//TODO add event for Close button to cleanup Session variable selectedUserId
Template.AdminUsers.events({
	'click tr': function(e) {
		if ($(e.target).hasClass('btn')) {
			var user = this;
			e.preventDefault();
			Session.set('selectedUserId', user._id);
      Modal.show('ModalEditUser');
// 			$("#editUser").modal("show");
		}
	}
});
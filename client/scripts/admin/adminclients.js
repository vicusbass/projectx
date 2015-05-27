Template.ClientActionsRow.events({
    'click .delete-client': function(e) {
        e.preventDefault();
        if (confirm("Delete this client?")) {
            var currentClientId = this._id;
            Clients.remove(currentClientId);
            // Router.go('AdminClients');
            toastr.success('Client deleted succesfully');
        }
    },
    'click .edit-client': function(e) {
        e.preventDefault();
        Modal.show('ModalEditClient', this);
    }
});

Template.AdminClients.events({
    'click #addClientBtn': function(e) {
        e.preventDefault();
        Modal.show('ModalAddClient');
    }
});

//close addClient modal if success
AutoForm.hooks({
    addClientForm: {
        onSuccess: function() {
            Modal.hide('ModalAddClient');
            toastr.success('Client added succesfully');
        }
    },
    editClientForm: {
        onSuccess: function() {
            Modal.hide('ModalEditClient');
            toastr.success('Client updated succesfully');
        }
    }
});

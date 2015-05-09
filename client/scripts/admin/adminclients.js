Template.ClientActionsRow.events({
    'click .delete-client': function(e) {
        e.preventDefault();
        if (confirm("Delete this client?")) {
            var currentClientId = this._id;
            console.log("Deleting client with id: " + currentClientId);
            Clients.remove(currentClientId);
            // Router.go('AdminClients');
        }
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
        }
    }
});
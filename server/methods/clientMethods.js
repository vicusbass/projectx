Meteor.methods({
    addClient: function(doc) {
        check(doc, ClientSchema);
        if (Roles.userIsInRole(Meteor.user(), [SUPERADMIN])) {
            Clients.insert(doc);
        } else throw new Meteor.Error(403, "Not authorized to create new clients");
    }
});
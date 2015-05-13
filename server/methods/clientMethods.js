Meteor.methods({
    addClient: function(doc) {
        check(doc, Schemas.Client);
        if (Roles.userIsInRole(Meteor.user(), [SUPERADMIN])) {
            Clients.insert(doc);
        } else throw new Meteor.Error(403, "Not authorized to create new clients");
    }
});
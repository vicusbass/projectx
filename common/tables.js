TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Clients = new Tabular.Table({
    name: "ClientsList",
    collection: Clients,
    order: [
        [1, "asc"]
    ],
    allow: function(userId) {
        // check for admin role with alanning:roles package
        return Roles.userIsInRole(userId, [SUPERADMIN]);
    },
    columns: [{
        tmpl: Meteor.isClient && Template.ClientCheckbox
    }, {
        data: "name",
        title: "Name"
    }, {
        data: "country",
        title: "Country"
    }, {
        data: "city",
        title: "City"
    }, {
        title: "Actions",
        width: "20%",
        tmpl: Meteor.isClient && Template.ClientActionsRow
    }]
});

TabularTables.Users = new Tabular.Table({
    name: "UsersList",
    collection: Meteor.users,
    order: [
        [1, "asc"]
    ],
    allow: function(userId) {
        // check for admin role with alanning:roles package
        return Roles.userIsInRole(userId, [SUPERADMIN]);
    },
    columns: [{
        data: "profile.firstname",
        title: "First name"
    }, {
        data: "profile.lastname",
        title: "Last name"
    }, {
        data: "emails.0.address",
        title: "Email"
    },{
        title: "Actions",
        width: "20%",
        tmpl: Meteor.isClient && Template.ClientActionsRow
    }]
});

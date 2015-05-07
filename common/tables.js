TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Clients = new Tabular.Table({
    name: "ClientsList",
    collection: Clients,
    columns: [{
        data: "country",
        title: "Country"
    }, {
        data: "name",
        title: "Name"
    }, {
        data: "city",
        title: "City"
    }]
});
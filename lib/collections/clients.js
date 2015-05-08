Clients = new Mongo.Collection('clients');

Clients.allow({
  remove: function(clientId){
    return clientId && isSuperadmin;
  }
});

var Schemas = {};

Schemas.Client = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    createdAt: {
        type: Date,
        optional: true
    },
    country: {
        type: String,
        label: "Country",
    },
    city: {
        type: String,
        label: "Country"
    }
});

Clients.attachSchema(Schemas.Client);
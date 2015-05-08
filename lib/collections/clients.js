Clients = new Mongo.Collection('clients');

Clients.allow({
    remove: function(clientId) {
        return clientId && isSuperadmin;
    }
});

var Schemas = {};

//sort a list of countries, because I am lazy
var countries = _.sortBy(['USA', 'Romania', 'China'], function(name) {
    return name
});

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
        allowedValues: countries,
        label: "Country",
        // autoform: {
        //     type: "select",
        //     options: function() {
        //         return [{
        //             value: 2013
        //         }, {
        //             value: 2014
        //         }, {
        //             value: 2015
        //         }];
        //     }
        // }
    },
    city: {
        type: String,
        label: "City"
    }
});

Clients.attachSchema(Schemas.Client);
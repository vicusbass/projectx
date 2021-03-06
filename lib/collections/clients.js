Clients = new Mongo.Collection('clients');

Clients.allow({
    remove: function(clientId) {
        return clientId && isSuperadmin;
    },
    update: function(clientId) {
        return clientId && isSuperadmin;
    }
});

//sort a list of countries, because I am lazy
var countries = _.sortBy(['USA', 'Romania', 'China'], function(name) {
    return name
});

//adjust countries for autoform
var countriesOptions = _.map(countries, function(country) {
    return {
        value: country,
        label: country
    };
});
//Client schema
ClientSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    createdAt: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
                };
            } else {
                this.unset();
            }
        }
    },
    country: {
        type: String,
        allowedValues: countries,
        label: "Country",
        autoform: {
            type: "select",
            options: function() {
                return countriesOptions;
            }
        }
    },
    city: {
        type: String,
        label: "City"
    }
});

Clients.attachSchema(ClientSchema);

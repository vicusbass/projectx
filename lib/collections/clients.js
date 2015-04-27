Clients = new Mongo.Collection('clients');

Clients.allow({
	insert: function(userId) {
		return isSuperadmin(userId);
	},
	update: function(userId) {
		return isSuperadmin(userId);
	},
	remove: function(userId) {
		return isSuperadmin(userId);
	},
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
		label: "Date client was created",
	}
});

Clients.attachSchema(Schemas.Book);
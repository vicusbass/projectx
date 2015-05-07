Meteor.startup(function() {
    console.log("Just started the server");

    //setup initial roles - dirty, if we have 3 roles, won't do anything
    var countRoles = Roles.getAllRoles().count();
    if (countRoles !== 3) {
        Roles.createRole(SUPERADMIN);
        Roles.createRole(ADMIN);
        Roles.createRole(USER);
    }

    if (Meteor.users.find({}).count() === 0) {
        var userid1 = Accounts.createUser({
            username: "vasile.pop@gmail.com",
            email: "vasile.pop@gmail.com",
            password: "vodafone",
            profile: {
                firstname: "Vasile",
                lastname: "Pop",
                img: "/images/no-profile-image.jpg"
            }
        });
        var userid2 = Accounts.createUser({
            username: "mishi_z@yahoo.co.uk",
            email: "mishi_z@yahoo.co.uk",
            password: "mishinel",
            profile: {
                firstname: "Mihaela",
                lastname: "Pop",
                img: "/images/no-profile-image.jpg"
            }
        });
        Roles.addUsersToRoles(userid1, [SUPERADMIN]);
        Roles.addUsersToRoles(userid2, [SUPERADMIN]);
        for (var i = 0; i < 10; i++) {
            Accounts.createUser({
                username: Fake.word() + i,
                email: Fake.word() + i + '@' + Fake.word() + '.com',
                password: Fake.word(),
                profile: {
                    firstname: Fake.word(),
                    lastname: Fake.word(),
                    img: Fake.word()
                }
            });
        }
    }

    //push some fake clients
    if (Clients.find().count() === 0) {
        [{
            name: "Project X",
            country: "Romania",
            city: "Cluj-Napoca"
        }, {
            name: "Hora",
            country: "Romania",
            city: "Reghin"
        }].forEach(function(doc) {
            Clients.insert(doc,
                function(err, res) {
                    if (err) console.log("Error inserting client");
                })
        });

        for (var i = 0; i < 500; i++) {
            var doc = {
                name: i.toString(),
                country: "Romania",
                city: "Cluj-Napoca"
            };
            Clients.insert(doc,
                function(err, res) {
                    if (err) console.log("Error inserting client " + doc.name);
                })
        }
    }
});
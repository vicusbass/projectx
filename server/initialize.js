Meteor.startup(function() {
  console.log("Just started the server");
  
  //setup initial roles - dirty, if we have 3 roles, won't do anything
  var countRoles = Roles.getAllRoles().count();
  console.log(countRoles);
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
  }
});
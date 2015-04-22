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
    var userid = Accounts.createUser({
      username: "vasile.pop@gmail.com",
      email: "vasile.pop@gmail.com",
      password: "vodafone",
      profile: {
        name: "Vasile Pop",
        img: "/images/no-profile-image.jpg"
      }
    });
    Roles.addUsersToRoles(userid, [SUPERADMIN]);
  }
});
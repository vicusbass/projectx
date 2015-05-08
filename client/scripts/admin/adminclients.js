Template.ClientActionsRow.events({
  'click .delete-client': function (e) {
    e.preventDefault();
    if (confirm("Delete this client?")){
    var currentClientId=this._id;
      console.log("Deleting client with id: "+currentClientId);
    Clients.remove(currentClientId);
    Router.go('/admin/clients');
  }
  }
});
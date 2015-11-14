Template.admin.helpers({
    loggedIn: function() {
        return (Meteor.user());
    }
});

Template.admin.events({
    'click #blog-admin': function() {
        Router.go("/admin/blog")
    }
})


Template.essayIndex.events({

    'click .essay-title': function(event) {
        var id = $(event.currentTarget).prop('name');
        Router.go("/essays/" + id);
    }
})
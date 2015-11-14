Router.route('/', function () {
  this.render('home');
});

Router.route('/admin', function() {
    this.render('admin');
});

Router.route('/blogTest', function() {
    this.render('blogTest');
});

Router.route('/essays', function() {
    this.render('essayIndex');
});


Router.route('/essays/:_id', function() {
    var essay = Essays.findOne({_id: this.params._id});
    this.render('essayIndex');
})

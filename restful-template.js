Records = new Meteor.Collection('records');


Router.route('/api/get/all', { where: 'server'})
    .get(function() {
        this.response.end(Records.find().fetch() + "\n");
    });


Router.route('/api/get/single', { where: 'server'})
    .get(function() {
        this.response.end(Records.find(this.request.body._id).fetch() + "\n");
    });

Router.route('/api/get/creator', { where: 'server'})
    .get(function() {
        this.response.end(Records.find({creator: this.request.body.creator}).fetch() + "\n");
    });


Router.route('/api/post/', { where: 'server'})
    .post(function() {
        var result = Records.insert(this.request.body);
        this.response.end(result + "\n");
    });

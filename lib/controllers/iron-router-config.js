Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.onBeforeAction(function() {
    if (! Meteor.userId()) {
        this.render('home');
    } else {
        this.next();
    }
});

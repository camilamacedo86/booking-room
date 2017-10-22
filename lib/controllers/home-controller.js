Router.route('/',{
    name: 'home',
    onAfterAction: function() {
        SEO.set({
            title: TAPi18n.__("homeTitle"),
            meta: {
                'description': TAPi18n.__("homeDescription")
            }
        });
    }
});


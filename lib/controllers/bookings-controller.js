Pages = new Meteor.Pagination(bookings, {
    router: "iron-router",
    homeRoute: "/bookings",
    route: "/bookings/",
    routerTemplate: "bookings",
    itemTemplate: "bookingsItem",
    routerLayout: "layout",
    sort: {
        bookingDate: 1
    },
    perPage: 20,
    onReloadPage1: true,
    availableSettings: {filters: true, sort:true}
});

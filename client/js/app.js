var app = angular.module('meetupApp', ['ngResource','ngRoute']);

/**
 * Main AngularJS Web Application
 */

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    //practice pages
    .when("/meetups", {templateUrl: "partials/meetups.html", controller: "MeetupCtrl"})
    .when("/practice", {templateUrl: "partials/practice.html", controller: "PracticeCtrl"})

    //table display
    .when("/tablex", {templateUrl: "partials/tablex.html", controller: "TablexCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

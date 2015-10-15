app.controller('MeetupCtrl', ['$scope', '$resource', function ($scope, $resource){

	var Meetup = $resource('/api/meetups');
	
	Meetup.query(function (results){
		$scope.meetups = results;
	});
	$scope.meetups = []

	$scope.createMeetup = function () {
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function (result){
		$scope.meetups.push(result);
		$scope.meetupName = '';
		});
	}

}]);
/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

/**
* Practice controllers
*/

app.controller('PracticeCtrl', function ($scope) {
  $scope.saveData = function(){
    var name = $scope.name;
    var email = $scope.email;
    var phone = $scope.phone;
    var message = $scope.message;
  }
});

app.controller('TablexCtrl', function ($scope){
  var rowCollection = [];
  $scope.rowCollection = [
  {"firstName":"bhaskar", "lastName":"Newase", "birthDate":"June", "balance":5000, "email":"bhaskar@timelesslearntech.com" },
  {"firstName":"anand", "lastName":"Newase", "birthDate":"June", "balance":5000, "email":"bhaskar@timelesslearntech.com" },
  {"firstName":"rohit", "lastName":"Newase", "birthDate":"June", "balance":5000, "email":"bhaskar@timelesslearntech.com" },
  {"firstName":"satish", "lastName":"Newase", "birthDate":"June", "balance":5000, "email":"bhaskar@timelesslearntech.com" },
  {"firstName":"prasad", "lastName":"Newase", "birthDate":"June", "balance":5000, "email":"bhaskar@timelesslearntech.com" },
  {"firstName":"yuvraj", "lastName":"Newase", "birthDate":"June", "balance":5000, "email":"bhaskar@timelesslearntech.com" }
  ]

});
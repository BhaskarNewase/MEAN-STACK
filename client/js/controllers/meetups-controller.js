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
* Practice controllers - content form to save data in the database.
*/

app.controller('PracticeCtrl', ['$scope','$resource',function ($scope, $resource) {
  
  var User = $resource('/api/users');

  $scope.saveData = function(){
    var user = new User();
    user.name = $scope.name;
    user.email = $scope.email;
    user.phone = $scope.phone;
    user.message = $scope.message;
    user.$save(function(result){
      $scope.name = $scope.email = $scope.phone = $scope.message = '';
      alert('user save successfully.');
    });
  }
}]);

app.controller('TablexCtrl', ['$scope','$resource',function ($scope, $resource) {
  
  var rowCollection = [];
  var User = $resource('/api/users');
  
  User.query(function (results){
    $scope.rowCollection = results;
  });
  //$scope.meetups = []

  $scope.editrow = function (id) {
    User.query(function (id, results) {
      //alert(results);
      $scope.data = results;

    });
  }

  $scope.deleterow = function (id) {
    var user = new User();
    user.id = id;
    user.$delete(function(results){
      alert('record deleted');
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

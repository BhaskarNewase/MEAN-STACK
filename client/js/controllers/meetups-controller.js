app.controller('MeetupCtrl', ['$scope', '$resource', function ($scope, $resource){

	var Meetup = $resource('/api/meetups');
	
	Meetup.query(function (results){
		$scope.meetups = results;
	});
	$scope.meetups = []

	$scope.createMeetup = function () {
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
    if ($scope.meetupName=='') { return false; };
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

app.controller('TablexCtrl', ['$scope','$resource', '$http',function ($scope, $resource, $http) {
  
  var rowCollection = [];
  var User = $resource('/api/users');
  
  User.query(function (results){
    $scope.rowCollection = results;
  });
  //$scope.meetups = []

  $scope.editrow = function (id) {
    var formData = {
      'key' : id,
    };
    $http.post('/api/users/editrow', formData).
        success(function(data) {
          //console.log(data);
          $scope.id = data._id;
          $scope.name = data.name;
          $scope.email = data.email;
          $scope.phone = data.phone;
          $scope.message = data.message;
          $('#myModal').modal('show');
      }).error(function(data) {
          alert('Opps their is something.')
    });
  }

  $scope.deleterow = function (id) {
      var formData = {
      'key' : id,
    };
      $http.post('/api/users/delete', formData).
        success(function(data) {
            alert('Row Deleted Successfully.')
            //console.log(data);
        }).error(function(data) {
            alert('Opps their is something wrong.')
        });

    // var user = new User();
    // user.id = id;
    // user.$delete(function(results){
    //   alert('record deleted');
    // });
  }

  var User1 = $resource('/api/users');

  $scope.saveData = function(){ 
    var user = new User1();
    user.name = $scope.name;
    user.email = $scope.email;
    user.phone = $scope.phone;
    user.message = $scope.message;
    user.$save(function(result){
      $scope.name = $scope.email = $scope.phone = $scope.message = '';
      alert('user save successfully.');
    });
  }

  //var User1 = $resource('/api/users');

  $scope.updateData = function(){ 
    var User2 = $resource('/api/users/updateData');
    var user = new User2();
    user.id = $scope.id;
    user.name = $scope.name;
    user.email = $scope.email;
    user.phone = $scope.phone;
    user.message = $scope.message;
    user.$save(function(result){
      $scope.name = $scope.email = $scope.phone = $scope.message = '';
      alert('user information updated successfully.');
      $('#myModal').modal('hide');
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

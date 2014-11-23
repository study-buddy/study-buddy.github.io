angular.module('sbuddy.controllers', [])

.controller('TopicCtrl', function($scope, $rootScope, $state, Topics) {

	$scope.topics = Topics.all();

})

.controller('PersonMapCtrl', function($scope, $stateParams, $state, $ionicPopup, $timeout, Topics, $http, Friends) {

 $scope.topic = Topics.get($stateParams.topicId)

 $http.get('http://api.randomuser.me/?results=20').success(function(data) {
     $scope.people = data.results;
     
   }).error(function(data, status) {
     alert('get data error!');
  });

 $scope.randomDistance = function()
 {
    return (Math.random() * (1.120 - 0.200) + 0.500).toFixed(2);

 }

 $scope.addFriend = function(person) 
 {

       var confirmPopup = $ionicPopup.confirm({
         title: 'Make a SBuddy Request',
         template: 'Do you you want to request '+person.user.name.first+' as a SBuddy?'
       });
       confirmPopup.then(function(res) {
         if(res) {
            $timeout(function() {
                $scope.friendAddSuccess(person);
            }, 2000);
         } else {
           console.log('You are not sure');
         }
       });
    
 }

 $scope.friendAddSuccess = function(person)
 {

   Friends.add(person); 
   var alertPopup = $ionicPopup.alert({
     title: 'You\'ve made a new SBuddy!',
     template: person.user.name.first+' has confirmed your request to be SBuddies! Send them a message to arrange to meetup and lets get learning!'     
   });
   alertPopup.then(function(res) {
    $state.transitionTo('tab.friends');
   });

 }
})

.controller('MessageCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.directive('backCover', function(){
    return function(scope, element, attrs){
        attrs.$observe('backCover', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover',
                'background-repeat': 'none',
                'background-position': 'center'
            });
        });
    };
})

.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});
angular.module('sbuddy.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
   
  ];

  return {
    add: function(person) {
      friends.push(person);
    },
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Topics', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var topics = [ 
    { id: 1, title: "HTML/CSS", image: "http://www.design3edge.com/design3edge/wp-content/uploads/2010/11/5-best-and-free-html-600x250.jpg"},
    { id: 2, title: "Swift", image: "img/swift-cover.jpg"},
    { id: 3, title: "Product Management", image: "http://chrislemacom.c.presscdn.com/wp-content/uploads/tips-product-management-600x405.png"},
    { id: 4, title: "Ruby on Rails", image: "http://robdvr.com/wp-content/uploads/2013/11/ruby-on-rails.jpg"},
    { id: 5, title: "PHP/MySQL", image: "http://creativealive.com/wp-content/uploads/2013/10/PHP-MySQL.jpg"},
    { id: 6, title: "Python", image: "http://blogs.umass.edu/gwis/files/2014/09/python1.png"}
  ];


  return {
    all: function() {
      return topics;
    },
    get: function(topicId) {
      // Simple index lookup
      return topics[topicId];
    }
  }
})


.factory('People', function($http) {
  // Might use a resource here that returns a JSON array

  $http.get('http://api.randomuser.me/?results=20').success(function(data) {
      var everyone = data.results;
      
    }).error(function(data, status) {
      alert('get data error!');
   });

  return {
    all: function() {
      return everyone;
    },
    get: function(topicId) {
      // Simple index lookup
      return topics[topicId];
    }
  }
});


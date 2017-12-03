console.log('in client.js');

var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$http', function ($http){
    console.log('app controller');
    var self = this;
    self.message = 'Zip zap partner!';

}]);
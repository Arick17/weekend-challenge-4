console.log('in client.js');

var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$http', function ($http) {
    console.log('app controller');
    var self = this;
    self.message = 'Zip zap partner!';
    self.proArray = [
        {
            name: 'MC',
            winnings: '$506,645.42'
        },
        {
            name: 'sOs',
            winnings: '498,519.27'
        },
        {
            name: 'TY',
            winnings: '483,094.52'
        },
        {
            name: 'Life',
            winnings: '475,900.67'
        },
        {
            name: 'INnoVation',
            winnings: '474,200.69'
        },
        {
            name: 'Polt',
            winnings: '451,599.10'
        }
    ];

    self.showInfo = function(info) {
        $http({
            method: 'POST',
            url: '/pros',
            data: info
        }).then(function(response) {
            console.log('response', response);
            self.info = proArray.winnings[i]
        });
    }

}]);
app.service('authService', ['$resource', '$rootScope', function ($resource, $rootScope) {

    var auth = $resource('http://127.0.0.1:8888/api/auth/:action', {}, {
        signin: {params: {action: 'signin'}, method: 'POST'},
        logout: {params: {action: 'logout'}, method: 'POST'},
        signup: {params: {action: 'signup'}, method: 'POST'}
    });

    var service = {
        signin: function (data, cb) {
            auth.signin(data, function (resp) {
                cb(null, resp);
            }, function (error) {
                cb(error);
            });
        },
        logout: function (data, cb) {
            auth.logout(data, function (resp) {
                cb(null, resp);
            }, function (error) {
                cb(error);
            });
        },
        signup: function (data, cb) {
            auth.logout(data, function (resp) {
                cb(null, resp);
            }, function (error) {
                cb(error);
            });
        }
    };

    return service;
}]);

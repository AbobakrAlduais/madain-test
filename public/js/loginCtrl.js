
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http) => {

    $scope.login= () =>
    {   
        $http.post('/api/login', {email:$scope.email , password:$scope.password,gender:$scope.gender, username:$scope.username}).then(r => {
            $scope.user = r.data;
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    },
    // add change I assume we have data base so i Send user Id  in the put pody
    $scope.change= () =>
    {
        $http.put('/api/change', {newPassword:$scope.newPassword})
    }
}]);

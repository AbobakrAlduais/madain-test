
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http) => {

    $scope.login= () =>
    {   
        $http.post('/api/login', {email:$scope.email , password:$scope.password,gender:$scope.gender, username:$scope.username}).then(r => {
            $scope.user = r.data;
            console.log(r.data.name)
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    }
}]);

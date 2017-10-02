// using $http service to display Json object
app.controller("ctrl1", function($scope, $http){
    //provide path name for the JSON file since ours is in the same folder we just write the name of it or else whole path
    $http.get("guitardata.json").then(function(response){ //.get takes two parameter as callback function
        $scope.user = response.data;
    },
    //function number 2
    function(reason){
        $scope.error = reason;
    }
)

});
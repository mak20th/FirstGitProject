var app = angular.module("myApp");
// this is one way data binding we create a controller in html usinf ng-controller and reference it here
app.controller("mainController", function($rootScope){ // we write rootScope becasue its contains ng-App directive
    $rootScope.color = "Red from mainController";
});

app.controller("mainController1", function($scope){
    $scope.firstName = "First Name = Aamir";
    $scope.color = "Blue from maincontroller1";
});

app.controller("mainController2", function($scope){
    $scope.lastName = "Last Name = Khan";
    $scope.color = "Green from mainController2";
});

app.controller("mainController3", function($scope){
    $scope.occupation = "Occupation = Student";
});

//learning two way data binding from now on. whatever we change in the model the view gets updated and vice versa
//$scope acts as 'this'

app.controller("ctrl4", function($scope){
    $scope.x = "Welcome To Protek";
    //this function show will change the value from "Welcome to protek" to "Header changed in the click of the button"
    $scope.show1= function(){       
        $scope.x = "Header  Changed";
    }     
    // adding fields that we type in the input box, inside of an array to store them
        //initialize an arraybl
        $scope.y ="Hello";
        $scope.arr = [1,2,3];
        //writing a function called show2 which on click will add the values from the input to the array
       $scope.show2 = function(input){
           //add the value to the array
           $scope.arr.push(input);
           //ouput the array
           console.log($scope.arr);
       }
})

//learning ng-show
    app.controller("ctrl5",function($scope){
        $scope.check= 'true';
        $scope.change = function(){
            $scope.check = !$scope.check;
        }
    })

//learning ng-href
app.controller("ctrl6",function($scope){
    $scope.siteName = "Google";    
    $scope.url = "http://www.google.com";
    $scope.change2 = function(){
        $scope.url = "https://www.yahoo.com";
        $scope.siteName = "Yahoo";
    }
})

//learning ng-repeat
app.controller("ctrl7", function($scope){
    $scope.arr = [1,2,3,4,5,6,7];
})

// learning  different Filters
app.controller("ctrl8", function($scope){
    $scope.arr2 = ["abc", "def", "ghi"]

    $scope.arr3 = [
        {name:"A",country:"Jamaica"},
        {name:"B",country:"Mexico"},
        {name:"C",country:"Indonesia"},
        {name:"D",country:"America"},
    ]

    $scope.arr4 = ["Jamaica","Mexico", "India", "America", "Pakistan"]
})
var myApp = angular.module('myApp', ['firebase']);

myApp.controller('LineCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {

 var myLine = new Firebase ('https://scorching-heat-7145.firebaseio.com//Lineshop');

 $scope.lineshop = $firebaseArray(myLine);

 $scope.showForm=function(){
    $scope.addFormShow=true;
    $scope.editFormShow=false;
    clearForm();
 }

$scope.hideForm=function(){
    $scope.addFormShow=false;
}

function clearForm(){
    $scope.linePhoto="";
    $scope.lineName="";
    $scope.lineSize="";
    $scope.lineHeight = "";
    $scope.lineWeight = "";
    $scope.linePrice = "";
}

$scope.addFormSubmit=function(){
    $scope.lineshop.$add({
        lineSize:$scope.lineSize,
        lineName:$scope.lineName,
        linePhoto:$scope.linePhoto,
        lineHeight:$scope.lineHeight,
        lineWeight:$scope.lineWeight,
        linePrice:$scope.linePrice
    });
    clearForm();
}

$scope.showLine=function(line){
    $scope.editFormShow=true;
    $scope.addFormShow=false;
    $scope.linePhoto=line.linePhoto;
    $scope.lineName=line.lineName;
    $scope.lineSize=line.lineSize;
    $scope.lineHeight=line.lineHeight;
    $scope.lineWeight=line.lineWeight;
    $scope.linePrice=line.linePrice;
    $scope.id=line.$id;
}

$scope.editFormSubmit=function(){
    var id = $scope.id;
    var record = $scope.lineshop.$getRecord(id);
    record.linePhoto=$scope.linePhoto;
    record.lineName=$scope.lineName;
    record.lineSize=$scope.lineSize;
    record.lineHeight=$scope.lineHeight;
    record.lineWeight=$scope.lineWeight;
    record.linePrice=$scope.linePrice;

    $scope.lineshop.$save(record);
}

$scope.deleteLine=function(line){
    $scope.lineshop.$remove(line);
}

}]);


myApp.controller('CornerCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {

 var myCorner = new Firebase ('https://scorching-heat-7145.firebaseio.com//Cornershop');

 $scope.cornershop = $firebaseArray(myCorner);

 $scope.showForm=function(){
    $scope.addFormShow=true;
    $scope.editFormShow=false;
    clearForm();
 }

$scope.hideForm=function(){
    $scope.addFormShow=false;
}

function clearForm(){
    $scope.cornerPhoto="";
    $scope.cornerName="";
    $scope.cornerSize="";
    $scope.cornerHeight = "";
    $scope.cornerWeight = "";
    $scope.cornerPrice = "";
}

$scope.addFormSubmit=function(){
    $scope.cornershop.$add({
        cornerSize:$scope.cornerSize,
        cornerName:$scope.cornerName,
        cornerPhoto:$scope.cornerPhoto,
        cornerHeight:$scope.cornerHeight,
        cornerWeight:$scope.cornerWeight,
        cornerPrice:$scope.cornerPrice
    });
    clearForm();
}

$scope.showCorner=function(corner){
    $scope.editFormShow=true;
    $scope.addFormShow=false;
    $scope.cornerPhoto=corner.cornerPhoto;
    $scope.cornerName=corner.cornerName;
    $scope.cornerSize=corner.cornerSize;
    $scope.cornerHeight=corner.cornerHeight;
    $scope.cornerWeight=corner.cornerWeight;
    $scope.cornerPrice=corner.cornerPrice;
    $scope.id=corner.$id;
}

$scope.editFormSubmit=function(){
    var id = $scope.id;
    var record = $scope.cornershop.$getRecord(id);
    record.cornerPhoto=$scope.cornerPhoto;
    record.cornerName=$scope.cornerName;
    record.cornerSize=$scope.cornerSize;
    record.cornerHeight=$scope.cornerHeight;
    record.cornerWeight=$scope.cornerWeight;
    record.cornerPrice=$scope.cornerPrice;

    $scope.cornershop.$save(record);
}

$scope.deleteCorner=function(corner){
    $scope.cornershop.$remove(corner);
}

}]);



myApp.controller('SofaCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {

 var mySofa = new Firebase ('https://scorching-heat-7145.firebaseio.com//Sofashop');

 $scope.sofashop = $firebaseArray(mySofa);

 $scope.showForm=function(){
    $scope.addFormShow=true;
    $scope.editFormShow=false;
    clearForm();
 }

$scope.hideForm=function(){
    $scope.addFormShow=false;
}

function clearForm(){
    $scope.sofaPhoto="";
    $scope.sofaName="";
    $scope.sofaSize="";
    $scope.sofaHeight = "";
    $scope.sofaWeight = "";
    $scope.sofaPrice = "";
}

$scope.addFormSubmit=function(){
    $scope.sofashop.$add({
        sofaSize:$scope.sofaSize,
        sofaName:$scope.sofaName,
        sofaPhoto:$scope.sofaPhoto,
        sofaHeight:$scope.sofaHeight,
        sofaWeight:$scope.sofaWeight,
        sofaPrice:$scope.sofaPrice
    });
    clearForm();
}

$scope.showSofa=function(sofa){
    $scope.editFormShow=true;
    $scope.addFormShow=false;
    $scope.sofaPhoto=sofa.sofaPhoto;
    $scope.sofaName=sofa.sofaName;
    $scope.sofaSize=sofa.sofaSize;
    $scope.sofaHeight=sofa.sofaHeight;
    $scope.sofaWeight=sofa.sofaWeight;
    $scope.sofaPrice=sofa.sofaPrice;
    $scope.id=sofa.$id;
}

$scope.editFormSubmit=function(){
    var id = $scope.id;
    var record = $scope.sofashop.$getRecord(id);
    record.sofaPhoto=$scope.sofaPhoto;
    record.sofaName=$scope.sofaName;
    record.sofaSize=$scope.sofaSize;
    record.sofaHeight=$scope.sofaHeight;
    record.sofaWeight=$scope.sofaWeight;
    record.sofaPrice=$scope.sofaPrice;

    $scope.sofashop.$save(record);
}

$scope.deleteSofa=function(sofa){
    $scope.sofashop.$remove(sofa);
}

}]);
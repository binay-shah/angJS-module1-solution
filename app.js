
(function(){
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.food_items ="";
    $scope.displayMessage = function(){
      var food_arr = $scope.food_items.split(',');
      
      if (food_arr[0]  == "" )
        $scope.message = "Please enter data first"
      else if (food_arr.length  >= 1 && food_arr.length  <= 3)
        $scope.message = "Enjoy!"
      else {
          $scope.message = "Too much!"
      }
    }


  }
})();

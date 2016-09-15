(function(){
  angular.module('LunchCheck', [])

  .controller('n', function ($scope) {
    $scope.food_items ="";
    $scope.displayMessage = function(){
      var food_arr = $scope.food_items.split(',');
      console.log(food_arr.length)
      if (food_arr.length  <= 3)
        $scope.message = "Enjoy!"
      else {
          $scope.message = "Too much!"
      }
    }


  });
})();

app.controller(
  "orgCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "URLL";

    $scope.listorg = function (req, res) {
      $http
        .get(baseurl)

        .success(function (res) {
          if (res.status == "false") {
          } else {
          }
        })
        .error(function () {});
    };
  }
);

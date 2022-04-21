app.controller(
  "orgCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "https://api.superadmin.shop/api/";

    $scope.givealert = function (req, res) {
      alert("I am alert");
    };

    $scope.listorg = function (req, res) {
      $http
        .get(baseurl + "org/")

        .success(function (res) {
          console.log(res)
          if (res.status == "false") {
          } else {
            $scope.organisations = res.data;
            console.log("org: ", $scope.organisations);
          }
        })
        .error(function () {});
    };

    $scope.redirect = function () {
      //console.log("redirect");
      location.href = "index.html";
    };

    //***************************************************************************************
    //Save Mango

    $scope.orgadd = function () {
      $scope.formvalidate = "true";
      console.log("New Cars");
      console.log($scope.data);

      $http
        .post(baseurl + "org/", $scope.data)
        .success(function (res) {
          $scope.response = res;
          console.log(res);
          if (res.status == "false") {
            alert(res.message);
          } else {
            alert("org save Successfully");
            $window.location = "org.html";
          }
        })
        .error(function () {
          var msg = res;
          console.log(res);
          alert(res);
        });
    };

    //orderCtrl ends
    $scope.orgedit = function (id) {
      console.log(id);
      $scope.formvalidate = "true";
      console.log("New Cars");
      console.log($scope.data);

      var Id = 1;

      $http.patch(baseurl + "org/" + id, $scope.data).success(function (res) {
        $scope.response = res;
        console.log(res);
        if (res.status == "false") {
          alert(res.message);
        } else {
          alert("org save Successfully");
          $window.location = "org.html";
        }
        // }).error(function() {
        //         // alert("Please check your internet connection or data source..");
      });
    };

    $scope.orgdelete = function (id) {
      console.log(id);
      $scope.formvalidate = "true";
      console.log("New delete");
      console.log($scope.data);

      var Id = 1;

      $http.delete(baseurl + "org/" + id, $scope.data).success(function (res) {
        $scope.response = res;
        console.log(res);
        if (res.status == "false") {
          alert(res.message);
        } else {
          alert("org save Successfully deleted");
          location.reload();
          //   $window.location = "org.html";
        }
      });
    };
  }
);

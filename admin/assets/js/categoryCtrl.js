app.controller(
  "categoryCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "https://api.superadmin.shop/api/";

    $scope.givealert = function (req, res) {
      alert("I am alert");
    };

    $scope.listcategories = function (req, res) {
      $http
        .get(baseurl + "category/")

        .success(function (res) {
          if (res.status == "false") {
          } else {
            $scope.categories = res.data;
            console.log("categories: ", $scope.categories);
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

    $scope.categoryadd = function () {
      $scope.formvalidate = "true";
      //console.log("New Cars");
      console.log($scope.data);

      $http.post(baseurl + "category/", $scope.data).success(function (res) {
        $scope.response = res;
        // console.log(res);
        if (res.status == "false") {
          alert(res);
        } else {
          alert("Category save Successfully");
          $window.location = "category.html";
        }
        // }).error(function() {
        //         // alert("Please check your internet connection or data source..");
      });
    };

    //orderCtrl ends

    $scope.categoryedit = function (id) {
      console.log(id);
      $scope.formvalidate = "true";
      console.log("New Cars");
      console.log($scope.data);

      var Id = 1;

      $http
        .patch(baseurl + "category/" + id, $scope.data)
        .success(function (res) {
          $scope.response = res;
          console.log(res);
          if (res.status == "false") {
            alert(res.message);
          } else {
            alert("category save Successfully");
            $window.location = "category.html";
          }
          // }).error(function() {
          //         // alert("Please check your internet connection or data source..");
        });
    };

    $scope.categorydelete = function (id) {
      console.log(id);
      $scope.formvalidate = "true";
      console.log("New delete");
      console.log($scope.data);

      // var Id = 1;

      $http
        .delete(baseurl + "category/" + id, $scope.data)
        .success(function (res) {
          $scope.response = res;
          console.log(res);
          if (res.status == "false") {
            alert(res.message);
          } else {
            alert("category save Successfully deleted");
            location.reload();
            //   $window.location = "category.html";
          }
        });
    };
  }
);

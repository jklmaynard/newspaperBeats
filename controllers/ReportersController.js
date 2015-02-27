newspaperBeats.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({
        name: $scope.reporterName,
        id: $scope.beat.reporters.length +1,
        title: $scope.reporterTitle,
        tenure: $scope.reporterTenure,
        awards: $scope.reporterAwards,
        });
    $scope.reporterName = null;
    $scope.reporterTitle = null;
    $scope.reporterTenure = null;
    $scope.reporterAwards = null;

    console.log($scope.beat.reporters)

  };
});

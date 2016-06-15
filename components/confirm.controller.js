export default class ConfirmController {

  constructor ($scope, $mdDialog) {
    this.show = (ev) => {
      let confirm = $mdDialog.confirm()
        .title($scope.title)
        .textContent($scope.textContent)
        .ariaLabel($scope.ariaLabel | 'Lucky day')
        .targetEvent(ev)
        .ok($scope.ok)
        .cancel($scope.cancel);

      $mdDialog.show(confirm).then(() => {
        $scope.action();
      }, () => {
        console.log('Nothing');
      });
    };
  }
}

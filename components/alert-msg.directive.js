let directive = ($mdDialog) => {
  return {
    link: (scope, elem, attr) => {
      elem.on('mousedown', (ev) => {
        let confirm = $mdDialog.confirm()
          .title(scope.title)
          .textContent(scope.textContent)
          .ariaLabel('Alert msg directive')
          .targetEvent(ev)
          .ok(scope.ok)
          .cancel(scope.cancel);
        $mdDialog.show(confirm).then(
          () => {
            scope.action();
          },
          () => {
            console.log('Cancel delete');
          }
        );
      });
    },
    scope: {
      label: '@',
      title: '@',
      textContent: '@',
      ok: '@',
      cancel: '@',
      action: '&'
    },
    restrict: 'A'
  };
};

export default directive;


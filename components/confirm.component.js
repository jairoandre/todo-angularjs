import template from './confirm.html';
import controller from './confirm.controller';

let confirmComponent = () => {
  return {
    template,
    restrict: 'E',
    scope: {
      label: '@',
      title: '@',
      textContent: '@',
      ariaLabel: '@',
      ok: '@',
      cancel: '@',
      action: '&'
    },
    controller,
    controllerAs: 'confirmCtrl'
  };
};

export default confirmComponent;

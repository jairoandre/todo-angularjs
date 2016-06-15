import template from './todo.html';
import controller from './todo.controller';

let todoComponent = () => {
  return {
    template,
    restrict: 'E',
    controller,
    controllerAs: 'todoCtrl'
  };
};

export default todoComponent;

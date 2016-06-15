import angular from 'angular';
import TodoComponent from '../components/todo.component.js';
import ConfirmComponent from '../components/confirm.component.js';
require('angular-material');

angular.module('todoApp', ['ngMaterial'])
  .directive('todo', TodoComponent)
  .directive('confirm', ConfirmComponent);

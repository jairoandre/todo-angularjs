import angular from 'angular';
import TodoComponent from '../components/todo.component.js';
import AlertMsgDirective from '../components/alert-msg.directive.js';
require('angular-material');

angular.module('todoApp', ['ngMaterial'])
  .directive('todo', TodoComponent)
  .directive('alertmsg', ['$mdDialog', AlertMsgDirective]);

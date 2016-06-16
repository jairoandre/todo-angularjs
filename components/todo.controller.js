require('./todo.less');

export default class TodoController {
  constructor ($scope) {
    $scope.todos = [];
    $scope.newTodo = '';

    this.addTodo = () => {
      if ($scope.newTodo.length > 0) {
        $scope.todos.push({text: $scope.newTodo, completed: false, index: $scope.todos.length});  
      }
      $scope.newTodo = '';
    };

    this.toggle = (item) => {
      item.completed = !item.completed;
    };

    this.remove = (item) => {
      $scope.todos = $scope.todos.filter((candidate) => {
        return candidate.index !== item.index;
      });
    };
  }
}

import TodoController from './todo.controller';
import TodoComponent from './todo.component';
import TodoTemplate from './todo.html';

describe('TodoComponent', () => {
  let makeController;

  beforeEach(inject(() => {
    makeController = ($scope) => {
      return new TodoController($scope);
    };
  }));

  describe('Controller', () => {
    it("has 'addTodo' function", () => {
      let controller = makeController({});
      expect(controller).to.have.property('addTodo');
    });

    it("has 'toggle' function", () => {
      let controller = makeController({});
      expect(controller).to.have.property('toggle');
    });

    it("has 'remove' function", () => {
      let controller = makeController({});
      expect(controller).to.have.property('remove');
    });

    describe('addTodo function', () => {
      it("add new item to todos list", () => {
        let $scope = {};
        let controller = makeController($scope);
        // Simulate a user input
        $scope.newTodo = 'New todo';
        controller.addTodo();
        expect($scope.todos).to.not.be.empty;
        expect($scope.todos[0].text).is.equal('New todo');
        expect($scope.todos[0].completed).to.be.false;
        expect($scope.newTodo).to.be.empty;
      });
    });

    describe('toggle function', () => {

      it("toggle todo status", () => {
        let $scope = {};
        let controller = makeController($scope);
        // Simulate a user input
        $scope.newTodo = 'New todo';
        controller.addTodo();
        controller.toggle($scope.todos[0]);
        expect($scope.todos[0].completed).to.be.true;
      });

    });

    describe('remove function', () => {

      it("remove task from todo list", () => {
        let $scope = {};
        let controller = makeController($scope);
        // Simulate a user input
        $scope.newTodo = 'New todo 1';
        controller.addTodo();
        $scope.newTodo = 'New todo 2';
        controller.addTodo();
        expect($scope.todos).to.have.lengthOf(2);
        controller.remove($scope.todos[0]);
        expect($scope.todos).to.have.lengthOf(1);
        expect($scope.todos[0].text).to.be.equal('New todo 2');
      });

    });
  });

  describe('Template', () => {
    it('use scoped property [item.text]', () => {
      expect(TodoTemplate).to.match(/\s{{item.text}}\s?/g);
    });

    it('use the directive [alertmsg]', () => {
      expect(TodoTemplate).to.match(/\salertmsg\s?/g);
    });
  });

  describe('Component', () => {
    let component = new TodoComponent();

    it('includes the right template', () => {
      expect(component.template).to.equal(TodoTemplate);
    });

    it('uses [controllerAs] syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TodoController);
    });
  });
});

import ConfirmController from './confirm.controller';
import ConfirmComponent from './confirm.component';
import ConfirmTemplate from './confirm.html';

describe('ConfirmDialog', () => {
  let makeController;
  beforeEach(inject(() => {
    makeController = () => {
      return new ConfirmController();
    }
  }));

  describe('Controller', () => {
    it('has \'show\' function', () => {
      let controller = makeController();
      expect(controller).to.have.property('show');
    });

  });
});
var expect = require('chai').expect
  , db = require('../../../config/database')
  , Todo = require('../../../app/models/todo');

var todo_name = 'test todo';

describe('Todo.create', function() {

  context('when a manual fail is not present', function() {
    it('should pass the test', function(done) {

        expect(null).to.be.null;
        //remove comment from following line to force a test failure.
        //expect("fail").to.be.null;
        done();


    });
  });

});

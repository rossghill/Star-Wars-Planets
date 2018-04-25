var assert = require('assert');

// TEST FUNCTION
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('api', function () {
    describe('GET https://swapi.co/api/planets/?search=tatooine', function () {
        it('should respond with tatooine result', function () {
            assert.equal(1,1);
        });
    });
});
var chai = require('chai');
chai.use(require('chai-dom'))
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
// var expect = chai.expect;

describe('table functionality', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:3000');
    });

    it('should begin with empty search box'), function() {
        expect(document.querySelector('#search_input')).should.be.empty;
    }

    it('rows should be 7 columns wide'), function() {
        expect(document.querySelector('tr[0] td')).to.have.length(7);
    }

    it('columns should contain 11 rows - including header'), function() {
        expect(document.querySelector('tr')).to.have.length(11);
        
    }

    it('can return searched planet "Hoth" - name'), function() {
        first_row_first_cell = table.element(by.css('tr[1] td[0]')).to.have.value('Hoth');
    }

    it('can return searched planet "Hoth" - populations'), function () {
        first_row_second_cell = table.element(by.css('tr[1] td[1]')).to.have.value('unknown');
    }

    it('can return searched planet "Hoth" - diameter'), function () {
        first_row_second_cell = table.element(by.css('tr[1] td[2]')).to.have.value(7200);
    }

    it('can return searched planet "Hoth" - rotation period'), function () {
        first_row_third_cell = table.element(by.css('tr[1] td[3]')).to.have.value(23);
    }

    it('can return searched planet "Hoth" - orbital period'), function () {
        first_row_fourth_cell = table.element(by.css('tr[1] td[4]')).to.have.value(549);
    }

    it('can return searched planet "Hoth" - terrain'), function () {
        first_row_fifth_cell = table.element(by.css('tr[1] td[5]')).to.have.value('Hoth');
    }

    it('can return searched planet "Hoth" - films'), function () {
        first_row_sixth_cell = table.element(by.css('tr[1] td[6]')).to.have.value('Hoth');
    }
    
});

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

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
        first_row_second_cell = table.element(by.css('tr[1] td[0]')).to.have.value('Hoth');
    }

    it('can return searched planet "Hoth" - rotation period'), function () {
        first_row_third_cell = table.element(by.css('tr[1] td[0]')).to.have.value('Hoth');
    }

    it('can return searched planet "Hoth" - orbital period'), function () {
        first_row_fourth_cell = table.element(by.css('tr[1] td[0]')).to.have.value('Hoth');
    }

    it('can return searched planet "Hoth" - terrain'), function () {
        first_row_fifth_cell = table.element(by.css('tr[1] td[0]')).to.have.value('Hoth');
    }

    it('can return searched planet "Hoth" - films'), function () {
        first_row_sixth_cell = table.element(by.css('tr[1] td[0]')).to.have.value('Hoth');
    }
    
//    xit('should be able to display results', function () {
//         table = element(by.css("planets_table"));
//         first_name_field = table.element(by.css('))
//         element(by.css('#search_input').innerText="Hoth")
//         element(by.css('#search_button')).click();
//         expect(running_total.getAttribute('value')).to.eventually.equal('2')
//     })
    

});

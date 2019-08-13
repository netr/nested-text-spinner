'use strict'

const expect = require('chai').expect
const spinner = require('./')

describe('spins', () => {
    it('should return paris or elizabeth', () => {
        let spun = spinner('{paris|elizabeth}')

        expect(spun).to.be.oneOf(['paris', 'elizabeth']);
    })

    it('should return \'hello {paris|elizabeth}\' properly', () => {
        let spun = spinner('hello {paris|elizabeth}')

        expect(spun).to.be.oneOf(['hello paris', 'hello elizabeth']);
    })

    it('should return \'{hi|hello} {paris|elizabeth}\' properly', () => {
        let spun = spinner('{hi|hello} {paris|elizabeth}')

        expect(spun).to.be.oneOf(['hello paris', 'hi paris', 'hello elizabeth', 'hi elizabeth']);
    })

    it('should return \'{{hi|hello} {paris|elizabeth}|{whats up|sup}}\' properly', () => {
        let spun = spinner('{{hi|hello} {paris|elizabeth}|whats up}')

        expect(spun).to.be.oneOf(['hello paris', 'hi paris', 'hello elizabeth', 'hi elizabeth', 'whats up', 'sup']);
    })

   it('should return \'{{cluster|fk}|{fkk|{fkkk|fkkkk}}}\' properly', () => {
        let spun = spinner('{{cluster|fk}|{fkk|{fkkk|fkkkk}}}')

        expect(spun).to.be.oneOf(['cluster', 'fk', 'fkk', 'fkkk', 'fkkkkk']);
    })

});
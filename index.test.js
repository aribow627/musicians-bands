const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name: 'Maroon 5', genre: 'Pop'})
        expect (testBand.name).toBe('Maroon 5');
        expect (testBand.genre).toBe('Pop');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: 'Adam Levine', instrument: 'vocals'})
        expect(testMusician.name).toBe('Adam Levine');
        expect(testMusician.instrument).toBe('vocals')
    })
})
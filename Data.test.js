const Data = require('./Data');

describe('Data', () => {
  it('Deveria retornar uma data', () => {
    expect(new Data('15/12/1992')).toEqual(new Date('1992-12-15'));
    expect(new Data('07/12/2023')).toEqual(new Date('2023-12-07'));
    expect(new Data('06/05/2022')).toEqual(new Date('2022-05-06'));
  });
});

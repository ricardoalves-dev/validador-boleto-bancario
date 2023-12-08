class Data extends Date {
  constructor(value) {
    if (typeof value === 'string') {
      const arrayData = value.split('/');
      value = `${arrayData[2]}-${arrayData[1]}-${arrayData[0]}`;
      console.log(value);
    }
    super(value);
  }
}

module.exports = Data;

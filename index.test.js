const calcualteBMI = require('./index.js');
const data = require('./testData')

describe('calculateBMI tests', () => {
  const input = data.calculateBMI.input1;
  const output = data.calculateBMI.output1;
  it("should return proper BMI when valid height and weight are passed",  () => {
      const result =  calcualteBMI(input.weight,input.height);
      expect(result).toEqual(output)
  });
  it("should return NaN when invalid height and weight are passed",  () => {
    const result =  calcualteBMI("a","b");
    expect(result).toEqual("NaN")
});
});
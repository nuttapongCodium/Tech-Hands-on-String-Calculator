import {decimalToRoman, addRoman} from './main'
import {expect} from 'chai';
import 'mocha';

describe('Roman to Number', () => {
  it('should return Roman numerals (I)', () => {
    // given
    const number = 1;

    // when
    const roman = decimalToRoman(number);

    // then
    expect(roman).equal('I');
  });

  it('should return Roman numerals (VI)', () => {
    // given
    const number = 6;

    // when
    const roman = decimalToRoman(number);

    // then
    expect(roman).equal('VI');
  });

  it('should return Roman numerals (CM)', () => {
    // given
    const number = 900;

    // when
    const roman = decimalToRoman(number);

    // then
    expect(roman).equal('CM');
  });

  it('should return Roman numerals (VIII)', () => {
    // given
    const number = 9;

    // when
    const roman = decimalToRoman(number);

    // then
    expect(roman).equal('IX');
  });

});

describe('Calculation', () => {
  it('I + I should be II', () => {
    // given
    const romanNumber = decimalToRoman(1);
    const romanNumber2 = decimalToRoman(1);

    // when
    const roman = addRoman(romanNumber, romanNumber2);

    // then
    expect(roman).equal('II');
  });

  it('IV + IV should be VIII', () => {
    // given
    const romanNumber = decimalToRoman(4);
    const romanNumber2 = decimalToRoman(4);

    // when
    const roman = addRoman(romanNumber, romanNumber2);

    // then
    expect(roman).equal('VIII');
  });
});

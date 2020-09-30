import {expect} from 'chai';
import 'mocha';
import { Add } from './main';


describe('Add with empty string', () => {
  it('should return 0', () => {
    // given
    const stringNumber = "";

    // when
    const result = Add(stringNumber);

    // then
    expect(result).equal(0);
  });
});

describe('Add with 1 digit number string', () => {
  it('should return 1', () => {
    // given
    const stringNumber = "1";

    // when
    const result = Add(stringNumber);

    // then
    expect(result).equal(1);
  });

  it('should return 5', () => {
    // given
    const stringNumber = "5";

    // when
    const result = Add(stringNumber);

    // then
    expect(result).equal(5);
  });
});

describe('Add with 2 digit number string', () => {
  it('1,2 should return 3', () => {
    // given
    const stringNumber = "1,2";

    // when
    const result = Add(stringNumber);

    // then
    expect(result).equal(3);
  });
});

describe('Add with unknown digit number string', () => {
  it('1,2,5,7 should return 15', () => {
    // given
    const stringNumber = "1,2,5,7";

    // when
    const result = Add(stringNumber);

    // then
    expect(result).equal(15);
  });
});

describe('Handle new lines between numbers', () => {
  it('1\\n2,3 should return 6', () => {
    // given
    const stringNumber = "1\n2,3";

    // when
    const result = Add(stringNumber);

    // then
    expect(result).equal(6);
  });
});
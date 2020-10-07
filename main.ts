import { parseJsonSourceFileConfigFileContent } from "typescript";

export function Add(stringNumber: string): number { 
  let result = 0;
  let delimiter = ',';
  if (stringNumber[0] == '/') {
    delimiter = stringNumber[2];
    stringNumber = stringNumber.split('\n')[1]
  }
  if (stringNumber.length == 1) {
      result = +stringNumber;
  }
  else {
    const stringNumberSplitted = stringNumber.replace('\n', delimiter).split(delimiter);
    result = stringNumberSplitted.reduce((sum, number) => {
      return sum + (+number);
    }, 0);
  }
  return result;
}
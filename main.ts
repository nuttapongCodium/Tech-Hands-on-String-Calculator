import { parseJsonSourceFileConfigFileContent } from "typescript";

export function Add(stringNumber: string): number { 
  let result = 0;
  if (stringNumber.length == 1) {
      result = +stringNumber;
  }
  else {
    const stringNumberSplitted = stringNumber.replace('\n', ',').split(',');
    result = stringNumberSplitted.reduce((sum, number) => {
      return sum + (+number);
    }, 0);
  }
  return result;
}
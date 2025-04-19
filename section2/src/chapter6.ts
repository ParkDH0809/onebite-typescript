// any
// 특정 변수 타입을 확실히 모를 때
let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// 
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => { };

// num = unknownVar  모든 값을 저장할 수는 있지만 그 반대는 안됨
// 타입 명시를 해야 함
if (typeof unknownVar === 'number') {
  num = unknownVar;
}
/**
 * unknown 타입
 */
function unknownExcm() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅 - 컴파일에러
  // let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * never 타입
 */
function neverEnum() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅 - 컴파일 에러 발생 X
  let num: number = neverFunc();
  let str: string = neverFunc();

  // 업캐스팅 - 컴파일에러 발생 O
  // let never1: never = 10;
  // let never2: never = 'string';
}

/**
 * void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hi');
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운캐스팅이지만 컴파일 에러 발생 X
  // 일반적인 경우가 아니기에 any type의 사용을 지양해야 한다.
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 다운캐스팅이지만 커파일 에러 방생 O
  // neverVar = anyVar;
}
/**
 * unknown 타입
 */
function unknownExcm() {
    let a = 1;
    let b = 'hello';
    let c = true;
    let d = null;
    let e = undefined;
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
    function neverFunc() {
        while (true) { }
    }
    // 업캐스팅 - 컴파일 에러 발생 X
    let num = neverFunc();
    let str = neverFunc();
    // 업캐스팅 - 컴파일에러 발생 O
    // let never1: never = 10;
    // let never2: never = 'string';
}
/**
 * void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log('hi');
        return undefined;
    }
    let voidVar = undefined;
}
/**
 * any 타입
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    // 다운캐스팅이지만 컴파일 에러 발생 X
    // 일반적인 경우가 아니기에 any type의 사용을 지양해야 한다.
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // 다운캐스팅이지만 커파일 에러 방생 O
    // neverVar = anyVar;
}
export {};

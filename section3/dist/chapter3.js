let animal = {
    name: '기린',
    color: 'yellow',
};
let dog = {
    name: '돌돌이',
    color: 'borwn',
    breed: '진도',
};
animal = dog;
let book;
let programmingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};
book = programmingBook;
// programmingBook = book;
/**
 * 초과 프로퍼티 검사
 */
let book2 = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    //   skill: "reactjs",
};
let book3 = programmingBook;
function func(book) { }
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
});
func(programmingBook);
export {};

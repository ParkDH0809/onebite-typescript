// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: "Typescript",
  role: Role.ADMIN,
}

const user2 = {
  name: "Javascript",
  role: Role.USER,
}
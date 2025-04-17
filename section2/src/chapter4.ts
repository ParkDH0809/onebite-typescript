// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    location: string;
}

let user1: User = {
    id: 1,
    name: "Typescript",
    nickname: "TS",
    birth: "1990.01.01",
    location: "seoul",
}

let user2: User = {
    id: 2,
    name: "Javascript",
    nickname: "JS",
    birth: "1990.10.10",
    location: "jeju",
}


// 인덱스 시그니처
type CountryCodes = {
    [key : string]: string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
}
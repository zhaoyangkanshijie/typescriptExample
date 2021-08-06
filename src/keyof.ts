interface Person {
    name: string
    age: number
}

type PersonKey = keyof Person // "name" | "age"
//1
let value1: unknown
value1 = 'Text value'
const s = (value1 as string).toUpperCase()


//2
interface UserData {
  name: string
  age: number
}

const user: UserData = {} as UserData
// const user: UserData = <UserData>{}

user.name = 'Petr'
user.age = 25


//3
const person = {
  name: 'Alex',
  surname: 'Moren'
}

const keys = Object.keys(person) as Array<keyof typeof person>

keys.forEach(key => {
  person[key]
})


//4
const el = document.querySelector('#name') as HTMLInputElement;
const { value } = el


//5
type ErrorMessage = string | string[] | Error
const apiError: ErrorMessage = JSON.parse(JSON.stringify('[]'))

const errors = (apiError as string[]).map(er => er.toUpperCase())

//6
//const test = <const>{...}
const test = {
  name: 'User',
  age: 22
} as const

type U = typeof test

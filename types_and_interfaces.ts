//1
type SumType = (a: number, b: number) => number

interface ISum {
  (a: number, b: number): number
}

//prefer type
const sum: SumType = (a, b) => a + b

//2 Alias of primitive
type UniqId = string

interface User {
  id: UniqId
}


//3
type NamesA = string[]

interface NamesB {
  [key: number]: string
}


//ONLY TYPES
//tuple (cortege)

type State = [number, (a: string) => void]

const state1: State = [45, (a) => {}]

//Union (particially)

type A = {
  name: string
}

type B = {
  age: number
}

type C = A | B

const user1: C = {
  name: 'Petr',
}

const user2: C = {
  age: 22
}

const user3: C = {
  name: 'Oleg',
  age: 25
}

//ONLY INTERFACES
//can be expanded

interface IA {
  name: string
}

interface IA {
  age: number
}

interface IUser {
  name: string,
  age: number
}

type Nullable<T> = T | null | undefined

const user: Nullable<IUser> = null
const user55: IUser = null
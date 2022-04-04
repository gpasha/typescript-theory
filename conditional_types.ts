type Test<T> = T extends string ? true : false

type Test1 = Test<'hi'>
type Test2 = Test<5>

interface User {
  id: string
}

interface Message {
  id: number
}

function getId<T extends { id: any }>(obj: T): T extends { id: string } ? string : number{
  return obj.id
}

const r1 = getId({} as User)
const r2 = getId({} as Message)


/////////////////////////
//never

type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T

let z: NotFalsy<string>

z = "Some text"
// z = 0

///////////////////////////////

type Filter<T, U> = T extends U ? never : T
type RF = Filter<'a' | 'b' | 'c' | 'd', 'a'>

type RF2 = Exclude<'a' | 'b' | 'c' | 'd', 'a'> // internall Function (built-in)

//////////////////////////////////

type GetStatus<T> = T extends object
  ?  T extends { status: string }
    ? T['status']
    : null
  : null

type Status = GetStatus<{status: 'SomeStatus'}>


type GetStatus2<T> = T extends infer U
  ? U extends { status: any }
    ? U['status']
    : null
  : null

type Status2 = GetStatus2<{status: ['a', 'b', 'c']}>











function test() {
  return {
    name: 'John'
  }
}

type R = typeof test
type R2 = ReturnType<typeof test>
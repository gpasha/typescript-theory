interface User {
  name: string
  age: number
}

interface Message {
  id: string
  text: string
}

// interface UserState {
//   isLoading: boolean
//   error: Error | null
//   name: string
//   age: number
// }

// interface MessageState {
//   isLoading: boolean
//   error: Error | null
//   id: string
//   text: number
// }

interface State<T> {
  isLoading: boolean
  error: Error | null
  data: T
}

type UserState = State<User>
type MessageState = State<Message>

const userState: State<User> = {
  isLoading: false,
  error: null,
  data: {
    name: 'Pavel',
    age: 25
  }
}

const userState2: UserState = {
  isLoading: false,
  error: null,
  data: {
    name: 'Pavel2',
    age: 26
  }
}

const messageState: State<Message> = {
  isLoading: false,
  error: null,
  data: {
    id: 'Pavel',
    text: 'some text...'
  }
}

function identity<T>(arg: T):T {
  return arg
}

const a = identity(5)
const b = identity('Hello!')

////////
function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

const res1 = getRandomElement([1, 2, 3, 4])
const res2 = getRandomElement([1, '2', '3', 4, ])
const res3 = getRandomElement([1, '2', '3', 4, undefined, 6, null, 8, 9])

////////

function merge<T, V>(ob1: T, ob2: V) {
  return {
    ...ob1,
    ...ob2
  }
}

const mergeRes1 = merge({a: 'hi'}, {b: 2})
const mergeRes2 = merge({a: 'hi', c: 5}, {b: 2})


////
async function fakeRequest() {
  return 2
}

const fakeRequestRes: Promise<number> = fakeRequest()


////
type Names = string[]
type Names2 = Array<string>

type Obj1 = {
  [key: string]: number
}

type Obj2 = Record<string, number>



//////

function len<T extends { length: number }>(collection: T) {
  return collection.length
}

const lenRes1 = len([1,2,3,4,5,7,8])
const lenRes2 = len('Hello')
// const lenRes3 = len(5) //


//////////
class DataCollection<T extends { id: string }> {
  constructor(public data: T[]) { }
  searchId(id: string): T | null {
    return this.data.find(el => el.id === id)
  }
}

type User2 = {
  id: string
  name: string
}

type Message2 = {
  id: string
  text: string
}

const users: Array<User2> = [
  {
    id: '123',
    name: 'TestName'
  },
  {
    id: '123',
    name: 'Pavel'
  }
]

const messages: Message2[]  = [
  {
    id: '12345',
    text: 'test text...'
  }
]

const usersCol = new DataCollection(users)
const resByUserId = usersCol.searchId('123')

const messagesCol = new DataCollection(messages)
const resByMessageId = messagesCol.searchId('12345')

////////////////////////////////////////////////

function getObjValue<T extends object, V extends keyof T>(obj: T, prop: V) {
  return obj[prop]
}

const resObjValue1 = getObjValue({
  name: 'Hi',
  age: 25
}, 'name')

const resObjValue2 = getObjValue({
  name: 'Hello',
  age: 23
}, 'age')

// const resObjValue3 = getObjValue({
//   name: 'Hello',
//   age: 23
// }, 'some')


/////////////////////////////////////////////////////////////

function getObjKey<T extends object, V extends keyof T>(obj: T, value: T[V]): V | null {
  const key = (Object.keys(obj) as Array<V>).find(key => obj[key] === value) 
  return key || null
}

const resObjKey1 = getObjKey({
  name: 'Hello',
  age: 23
}, 'Hello')


////////////////////////////////////////////

function patchField<
  T extends object,
  U extends keyof T,
  V extends T[U]
>(obj: T, fields: U, value: V) {
  //...
}

patchField({f: 7}, 'f', 5)
patchField({f: '7'}, 'f', 'some string')
patchField({f: () => {}}, 'f', () => 5)
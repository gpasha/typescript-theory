// keyof
type Users = 'Admin' | 'Moderator' | 'User'

const currentRole: Users = 'Admin'

///

interface User {
  name: string
  age: number
}

type UserKeys = keyof User

let prop: UserKeys;

prop = 'name'

//////

class Person {
  static version = 'v1'

  name: string = ''
  private age: number = 0
}

let personField: keyof Person = 'name'


/////////////////////////////////////////////////////
//typeof

const message = {
  id: 123,
  text: 'Hi!'
}

const t = typeof message

type MessageType = typeof message

const userMessage: MessageType = {
  id: 654654,
  text: 'My name is...'
}

//////

enum Colors {
  black = '#000',
  white = '#fff'
}

type availableColors = keyof typeof Colors

const themeColor: availableColors = 'black'

////////


const formData = {
  lastName: 'John',
  firstName: 'Doe',
  age: 30,
  id: 123,
  uuid: '4165166'
}

// interface ValidationRequest {
//   lastName: boolean,
//   firstName: boolean,
//   age: boolean
// }

type ValidationRequest = {
  [key in keyof typeof formData]: boolean
}

declare function validate<T>(data: T): {[key in keyof T]: boolean}

const r = validate<typeof formData>(formData)
const r2 = validate({age: 25, id:'16561651'})